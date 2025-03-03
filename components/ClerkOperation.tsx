import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ClerkOperation() {
  return (
    <div className="flex items-center space-x-4">
      {" "}
      <SignedOut>
        <Link href="/sign-in">
          <Button className="" variant={"ghost"}>
            Sign In
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button className="bg-[#d42ca7] text-white hover:bg-[#a5147e] hidden md:block">
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
