"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bell, ChevronDown, Search, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HeaderNav from "./header-nav";

const notifications = [
  {
    id: 1,
    title: "New message received",
    description: "You have a new message from John Doe",
    time: "5 min ago",
    unread: true,
  },
  {
    id: 2,
    title: "Appointment confirmed",
    description: "Your appointment has been confirmed",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    title: "System update",
    description: "System maintenance scheduled for tonight",
    time: "2 hours ago",
    unread: false,
  },
];

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav
      className="flex h-16 items-center justify-between px-4"
      style={{ backgroundColor: "#e8f3f1" }}
    >
      <HeaderNav />

      <Link href="/" className="flex items-center mt-4">
        <Image
          src="/logo.png"
          alt="Bridged Logo"
          width={60}
          height={40}
          priority
        />
      </Link>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={() => setShowSearch(!showSearch)}
          >
            <Search className="h-4 w-4" />
          </Button>
          <div
            className={`absolute right-0 top-0 flex h-9 items-center overflow-hidden transition-all duration-300 ${
              showSearch ? "w-64" : "w-0"
            }`}
          >
            <Input
              className="h-9 rounded-full bg-white"
              placeholder="Search..."
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Bell className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <div className="flex items-center justify-between p-4">
              <p className="text-sm font-medium">Notifications</p>
              <p className="text-xs text-muted-foreground">
                {notifications.filter((n) => n.unread).length} unread
              </p>
            </div>
            {notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className="flex items-start gap-4 p-4"
              >
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {notification.time}
                  </p>
                </div>
                {notification.unread && (
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: "#5BA69B" }}
                  />
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-9 space-x-2">
              <User className="h-4 w-4" />
              <span>Account</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </nav>
  );
}
