import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
// import UserSidebar from "./user-sidebar";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="bg-white rounded-lg border p-6 h-[520px] hidden md:block">
          <div className="flex flex-col items-center text-center">
            <Avatar className="mb-2 w-12 h-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h2 className="font-semibold">Albert Attom</h2>
            <div className="flex gap-4 mt-3 text-sm text-gray-600">
              <div className="flex flex-col items-center">
                <span className="font-semibold">1</span>
                <span>Post</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold">0</span>
                <span>Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold">0</span>
                <span>Following</span>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-2">
            <Link href="/groups">
              <button className="w-full text-left flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-lg">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Groups
              </button>
            </Link>

            <Link href="/groups">
              <button className="w-full text-left flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-lg">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Events
              </button>
            </Link>

            <Link href="/news">
              <button className="w-full text-left flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-lg">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
                News
              </button>
            </Link>

            <Link href="/groups">
              <button className="w-full text-left flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-lg">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Profile
              </button>
            </Link>
          </div>

          <div className="mt-8 space-y-2 text-sm">
            <button className="text-purple-600 hover:underline">
              <Link href="/settings">Account Settings</Link>
            </button>
            <div className="flex gap-2 text-gray-500">
              <button className="hover:underline">About</button>
              <span>•</span>
              <button className="hover:underline">Help</button>
              <span>•</span>
              <button className="hover:underline">Privacy & Terms</button>
            </div>
            <p className="text-gray-400 text-xs">
              ©2023 Bridged Health. All rights reserved
            </p>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
