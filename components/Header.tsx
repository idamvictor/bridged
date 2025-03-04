// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Bell, Search } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import HeaderNav from "./header-nav";
// import ClerkOperation from "./ClerkOperation";
// import ThreeColLine from "./three-col-line";

// const notifications = [
//   {
//     id: 1,
//     title: "New message received",
//     description: "You have a new message from John Doe",
//     time: "5 min ago",
//     unread: true,
//   },
//   {
//     id: 2,
//     title: "Appointment confirmed",
//     description: "Your appointment has been confirmed",
//     time: "1 hour ago",
//     unread: true,
//   },
//   {
//     id: 3,
//     title: "System update",
//     description: "System maintenance scheduled for tonight",
//     time: "2 hours ago",
//     unread: false,
//   },
// ];

// export default function Header() {
//   const [showSearch, setShowSearch] = useState(false);
//   const searchRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);
//   const mobileSearchRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       const target = event.target as Node;
//       // Don't close if clicking on the search ref or the mobile search input
//       const isClickInSearchRef =
//         searchRef.current && searchRef.current.contains(target);
//       const isClickInMobileSearch =
//         mobileSearchRef.current && mobileSearchRef.current.contains(target);

//       if (!isClickInSearchRef && !isClickInMobileSearch) {
//         setShowSearch(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const toggleSearch = () => {
//     setShowSearch((prev) => !prev);
//     if (!showSearch) {
//       setTimeout(() => inputRef.current?.focus(), 0);
//     }
//   };

//   return (
//     <>
//       <nav className="flex h-16 items-center justify-between px-4 relative">
//         <HeaderNav />
//         <Link href="/user" className="flex items-center">
//           <Image
//             src="/logo.png"
//             alt="Bridged Logo"
//             width={60}
//             height={40}
//             priority
//           />
//         </Link>
//         <div className="flex items-center space-x-4">
//           <div className="relative" ref={searchRef}>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="h-9 w-9"
//               onClick={toggleSearch}
//             >
//               <Search className="h-4 w-4" />
//             </Button>
//             <div
//               className={`absolute right-0 top-full mt-2 transition-all duration-300 ease-in-out ${
//                 showSearch ? "opacity-100 visible" : "opacity-0 invisible"
//               } md:right-0 md:top-0 md:mt-0`}
//             ></div>
//           </div>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" size="icon" className="h-9 w-9">
//                 <Bell className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end" className="w-80">
//               <div className="flex items-center justify-between p-4">
//                 <p className="text-sm font-medium">Notifications</p>
//                 <p className="text-xs text-muted-foreground">
//                   {notifications.filter((n) => n.unread).length} unread
//                 </p>
//               </div>
//               {notifications.map((notification) => (
//                 <DropdownMenuItem
//                   key={notification.id}
//                   className="flex items-start gap-4 p-4"
//                 >
//                   <div className="flex-1 space-y-1">
//                     <p className="text-sm font-medium leading-none">
//                       {notification.title}
//                     </p>
//                     <p className="text-sm text-muted-foreground">
//                       {notification.description}
//                     </p>
//                     <p className="text-xs text-muted-foreground">
//                       {notification.time}
//                     </p>
//                   </div>
//                   {notification.unread && (
//                     <div
//                       className="h-2 w-2 rounded-full"
//                       style={{ backgroundColor: "#5BA69B" }}
//                     />
//                   )}
//                 </DropdownMenuItem>
//               ))}
//             </DropdownMenuContent>
//           </DropdownMenu>

//           {isClient && <ClerkOperation />}
//         </div>
//       </nav>
//       <div
//         ref={mobileSearchRef}
//         className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
//           showSearch ? "max-h-16" : "max-h-0"
//         }`}
//         style={{ backgroundColor: "#e8f3f1" }}
//       >
//         <div className="px-4 py-2">
//           <Input
//             type="search"
//             placeholder="Search..."
//             className="h-9 rounded-full bg-white w-full"
//           />
//         </div>
//       </div>
//       <ThreeColLine />
//     </>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bell, Search, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import HeaderNav from "./header-nav";
import ClerkOperation from "./ClerkOperation";
import ThreeColLine from "./three-col-line";
import UserSidebar from "./user-sidebar";

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
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      // Don't close if clicking on the search ref or the mobile search input
      const isClickInSearchRef =
        searchRef.current && searchRef.current.contains(target);
      const isClickInMobileSearch =
        mobileSearchRef.current && mobileSearchRef.current.contains(target);

      if (!isClickInSearchRef && !isClickInMobileSearch) {
        setShowSearch(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
    if (!showSearch) {
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  };

  return (
    <>
      <nav className="flex h-16 items-center justify-between px-4 relative">
        <HeaderNav />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden h-9 w-9">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-[300px]">
            <SheetHeader className="sr-only">
              <SheetTitle>Navigation Menu</SheetTitle>
            </SheetHeader>
            <div className="h-full overflow-y-auto">
              <UserSidebar />
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <Link href="/user" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Bridged Logo"
              width={60}
              height={40}
              priority
              className="mt-3 w-[50px] h-[40px] md:w-[60px] md:h-[50px]"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative" ref={searchRef}>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={toggleSearch}
            >
              <Search className="h-4 w-4" />
            </Button>
            <div
              className={`absolute right-0 top-full mt-2 transition-all duration-300 ease-in-out ${
                showSearch ? "opacity-100 visible" : "opacity-0 invisible"
              } md:right-0 md:top-0 md:mt-0`}
            ></div>
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

          {isClient && <ClerkOperation />}
        </div>
      </nav>
      <div
        ref={mobileSearchRef}
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          showSearch ? "max-h-16" : "max-h-0"
        }`}
        style={{ backgroundColor: "#e8f3f1" }}
      >
        <div className="px-4 py-2">
          <Input
            type="search"
            placeholder="Search..."
            className="h-9 rounded-full bg-white w-full"
          />
        </div>
      </div>
      <ThreeColLine />
    </>
  );
}
