// "use client";

// import { useState } from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Textarea } from "@/components/ui/textarea";
// import { FileIcon, Users, MapPin, MoreHorizontal } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// interface Post {
//   author: string;
//   content: string;
//   image?: string;
//   sponsored?: boolean;
//   timestamp?: string;
//   avatar?: string;
// }

// export default function SocialFeed() {
//   const [postContent, setPostContent] = useState("");
//   const [posts, setPosts] = useState<Post[]>([]);

//   const handlePostSubmit = () => {
//     if (postContent.trim()) {
//       const newPost: Post = {
//         author: "John Doe",
//         content: postContent,
//         avatar: "https://github.com/shadcn.png",
//         timestamp: new Date().toLocaleString(),
//         image:
//           "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075755/cld-sample.jpg", // Using the same image URL for demonstration
//       };
//       setPosts([newPost, ...posts]);
//       setPostContent("");
//     }
//   };

//   return (
//     <div className="w-full max-w-2xl mx-auto space-y-6">
//       <Card className="w-full">
//         <CardContent className="p-4 space-y-4">
//           <div className="flex gap-3">
//             <Avatar>
//               <AvatarImage src="https://github.com/shadcn.png" />
//               <AvatarFallback>JD</AvatarFallback>
//             </Avatar>
//             <div className="flex-1">
//               <Textarea
//                 placeholder="Share your thoughts..."
//                 className="min-h-[100px] resize-none border-0 focus-visible:ring-0 p-0 shadow-none"
//                 value={postContent}
//                 onChange={(e) => setPostContent(e.target.value)}
//               />
//             </div>
//           </div>
//         </CardContent>
//         <CardFooter className="px-4 py-3 border-t flex justify-between items-center">
//           <div className="flex gap-2">
//             <Button
//               variant="ghost"
//               size="icon"
//               className="h-9 w-9 rounded-full hover:bg-slate-100"
//             >
//               <FileIcon className="h-5 w-5 text-slate-600" />
//               <span className="sr-only">Attach file</span>
//             </Button>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="h-9 w-9 rounded-full hover:bg-slate-100"
//             >
//               <Users className="h-5 w-5 text-slate-600" />
//               <span className="sr-only">Mention people</span>
//             </Button>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="h-9 w-9 rounded-full hover:bg-slate-100"
//             >
//               <MapPin className="h-5 w-5 text-slate-600" />
//               <span className="sr-only">Add location</span>
//             </Button>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="h-9 w-9 rounded-full hover:bg-slate-100"
//             >
//               <MoreHorizontal className="h-5 w-5 text-slate-600" />
//               <span className="sr-only">More options</span>
//             </Button>
//           </div>
//           <Button
//             className="px-6 bg-[#d42ca7] hover:bg-[#a5147e]"
//             onClick={handlePostSubmit}
//           >
//             Publish
//           </Button>
//         </CardFooter>
//       </Card>

//       {posts.map((post, index) => (
//         <div key={index} className="bg-white rounded-lg border">
//           <Link href="news/womens-health-matters">
//             <div className="p-4">
//               <div className="flex items-center justify-between mb-2">
//                 <div className="flex items-center gap-2">
//                   <Avatar className="w-8 h-8">
//                     <AvatarImage src={post.avatar} />
//                     <AvatarFallback>
//                       {post.author.substring(0, 2).toUpperCase()}
//                     </AvatarFallback>
//                   </Avatar>
//                   <div>
//                     <div className="flex items-center gap-2">
//                       <span className="font-semibold text-sm">
//                         {post.author}
//                       </span>
//                       {post.sponsored && (
//                         <span className="text-xs text-gray-500">Sponsored</span>
//                       )}
//                     </div>
//                     {post.timestamp && (
//                       <span className="text-xs text-gray-500">
//                         {post.timestamp}
//                       </span>
//                     )}
//                   </div>
//                 </div>
//                 <button className="text-gray-500">
//                   <MoreHorizontal className="w-5 h-5" />
//                 </button>
//               </div>

//               <p className="text-sm mb-3">{post.content}</p>

//               {post.image && (
//                 <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
//                   <Image
//                     src={post.image || "/placeholder.svg"}
//                     alt="Post image"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               )}
//             </div>

//             <div className="flex items-center gap-4 px-4 py-2 border-t text-sm">
//               <button className="text-gray-500 hover:text-gray-700">
//                 Like (0)
//               </button>
//               <button className="text-gray-500 hover:text-gray-700">
//                 Comment (0)
//               </button>
//               <button className="text-gray-500 hover:text-gray-700">
//                 Share
//               </button>
//             </div>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { FileIcon, Users, MapPin, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Post {
  author: string;
  content: string;
  image?: string;
  sponsored?: boolean;
  timestamp?: string;
  avatar?: string;
}

export default function SocialFeed() {
  const [postContent, setPostContent] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const savedPosts = localStorage.getItem("posts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }

    const savedPostContent = localStorage.getItem("postContent");
    if (savedPostContent) {
      setPostContent(savedPostContent);
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
    localStorage.setItem("postContent", postContent);
  }, [posts, postContent]);

  const handlePostSubmit = () => {
    if (postContent.trim()) {
      const newPost: Post = {
        author: "John Doe",
        content: postContent,
        avatar: "https://github.com/shadcn.png",
        timestamp: new Date().toLocaleString(),
        image:
          "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075755/cld-sample.jpg",
      };
      setPosts([newPost, ...posts]);
      setPostContent("");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card className="w-full">
        <CardContent className="p-4 space-y-4">
          <div className="flex gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="Share your thoughts..."
                className="min-h-[100px] resize-none border-0 focus-visible:ring-0 p-0 shadow-none"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-4 py-3 border-t flex justify-between items-center">
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full hover:bg-slate-100"
            >
              <FileIcon className="h-5 w-5 text-slate-600" />
              <span className="sr-only">Attach file</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full hover:bg-slate-100"
            >
              <Users className="h-5 w-5 text-slate-600" />
              <span className="sr-only">Mention people</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full hover:bg-slate-100"
            >
              <MapPin className="h-5 w-5 text-slate-600" />
              <span className="sr-only">Add location</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full hover:bg-slate-100"
            >
              <MoreHorizontal className="h-5 w-5 text-slate-600" />
              <span className="sr-only">More options</span>
            </Button>
          </div>
          <Button
            className="px-6 bg-[#d42ca7] hover:bg-[#a5147e]"
            onClick={handlePostSubmit}
          >
            Publish
          </Button>
        </CardFooter>
      </Card>

      {posts.map((post, index) => (
        <div key={index} className="bg-white rounded-lg border">
          <Link href="news/womens-health-matters">
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={post.avatar} />
                    <AvatarFallback>
                      {post.author.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">
                        {post.author}
                      </span>
                      {post.sponsored && (
                        <span className="text-xs text-gray-500">Sponsored</span>
                      )}
                    </div>
                    {post.timestamp && (
                      <span className="text-xs text-gray-500">
                        {post.timestamp}
                      </span>
                    )}
                  </div>
                </div>
                <button className="text-gray-500">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm mb-3">{post.content}</p>

              {post.image && (
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt="Post image"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 px-4 py-2 border-t text-sm">
              <button className="text-gray-500 hover:text-gray-700">
                Like (0)
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                Comment (0)
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                Share
              </button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

