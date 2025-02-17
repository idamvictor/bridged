import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ClerkOperation() {
  return (
    <div>
      {" "}
      <SignedOut>
        <Link href="/sign-in">
          <Button className="bg-[#d42ca7] text-white hover:bg-[#a5147e]">
            Sign In
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button className="bg-[#d42ca7] text-white hover:bg-[#a5147e]">
            Sign Up
          </Button>
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
