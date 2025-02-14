
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }

  try {
    const { username, email, password } = await req.json(); // Parse request body

    // Validate input
    if (!username || !email || !password) {
      return NextResponse.json(
        { message: "Missing required fields: username, email, or password" },
        { status: 400 }
      );
    }

    // WordPress API URL (Ensure this is correctly set in .env)
    const wpEndpoint = `${process.env.WORDPRESS_URL}/wp-json/wp/v2/users`;

    if (
      !process.env.WORDPRESS_URL ||
      !process.env.WP_ADMIN_USERNAME ||
      !process.env.WP_ADMIN_PASSWORD
    ) {
      console.error("❌ Missing environment variables.");
      return NextResponse.json(
        { message: "Internal server error: Missing API credentials" },
        { status: 500 }
      );
    }

    // Send request to WordPress API
    const response = await fetch(wpEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.WP_ADMIN_USERNAME}:${process.env.WP_ADMIN_PASSWORD}`
        ).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        roles: ["subscriber"], // Default role for new users
      }),
    });

    const responseData = await response.json(); // Parse JSON response

    if (!response.ok) {
      console.error("❌ WordPress API Error:", responseData);
      return NextResponse.json(
        {
          message: "WordPress error",
          error: responseData.message || "Unknown error",
        },
        { status: response.status }
      );
    }

    console.log("✅ User created successfully:", responseData);

    return NextResponse.json(
      {
        message: "User registered successfully",
        userId: responseData.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Registration error:", error);

    return NextResponse.json(
      {
        message: "Registration failed",
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 }
    );
  }
}
