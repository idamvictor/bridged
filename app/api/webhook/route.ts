import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.WEBHOOK_SECRET; // Changed from NEXT_PUBLIC_SIGNING_SECRET

  if (!SIGNING_SECRET) {
    throw new Error(
      "Error: Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET);

  // Get headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error: Missing Svix headers", {
      status: 400,
    });
  }

  // Get body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt: WebhookEvent;

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error: Could not verify webhook:", err);
    return new Response("Error: Verification error", {
      status: 400,
    });
  }

  // Handle the webhook
  const { id } = evt.data;
  const eventType = evt.type;
  console.log(`Received webhook with ID ${id} and event type of ${eventType}`);

  if (eventType === "user.created") {
    // Log the full user data
    // console.log("New user data:", evt.data);

    // TODO: Add WordPress user creation logic here
    const user = await currentUser();

    const username = (
      evt.data.username ||
      user?.username ||
      evt.data.email_addresses?.[0]?.email_address ||
      ""
    )
      .replace(/\s+/g, "")
      .toLowerCase();
    const email = evt.data.email_addresses?.[0]?.email_address || "";
    const password = evt.data.email_addresses?.[0]?.id || evt.data.id;

    try {
      // Add your WordPress user creation code here
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/wordpress`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Registration failed");
      }

      console.log("Creating WordPress user for:", evt.data.id);
    } catch (error) {
      console.error("Error creating WordPress user:", error);
      return new Response("Error creating WordPress user", { status: 500 });
    }
  }

  return new Response("Webhook received", { status: 200 });
}
