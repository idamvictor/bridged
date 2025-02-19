// // import SocialPost from "@/components/social-post";

// // const socialPosts = [
// //   {
// //     id: 1,
// //     author: "Paul Apelah-Adel",
// //     content:
// //       "Healthcare workers are overworked❌...the government really needs to provide more support, otherwise, they will STOP smiling.. 😎",
// //     image:
// //       "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075756/cld-sample-3.jpg",
// //     timestamp: "2 hours ago",
// //     avatar: "https://github.com/shadcn.png",
// //   },
// //   {
// //     id: 2,
// //     author: "Adjoa Mills",
// //     content:
// //       "I just started my NEW JOB at Smith Teaching Hospital 🏥 Very excited about this new opportunity. 🤗",
// //     image:
// //       "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075756/cld-sample-2.jpg",
// //     timestamp: "3 hours ago",
// //     avatar: "https://github.com/shadcn.png",
// //   },
// //   {
// //     id: 3,
// //     author: "Francesca Aponte",
// //     content:
// //       "We are offering a 5% discount on your next Thai massage😊 Visit my store below ⬇️ https://bridged.fellag.com/marketplace",
// //     image:
// //       "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075756/cld-sample-4.jpg",
// //     timestamp: "4 hours ago",
// //     avatar: "https://github.com/shadcn.png",
// //     sponsored: false,
// //   },
// // ];

// // export default function SocialFeed() {
// //   return (
// //     <section className="space-y-6">
// //       {socialPosts.map((post) => (
// //         <SocialPost
// //           key={post.id}
// //           author={post.author}
// //           content={post.content}
// //           image={post.image}
// //           timestamp={post.timestamp}
// //           avatar={post.avatar}
// //           sponsored={post.sponsored}
// //         />
// //       ))}
// //     </section>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import type { Post } from "./create-post";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import {
//   MoreHorizontal,
//   Heart,
//   MessageCircle,
//   Share2,
//   Send,
// } from "lucide-react";
// import Image from "next/image";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Textarea } from "@/components/ui/textarea";

// interface SocialFeedProps {
//   posts: Post[];
//   onLike: (postId: string) => void;
//   onComment: (postId: string, comment: string) => void;
//   onShare: (postId: string, platform?: string) => void;
//   onDelete: (postId: string) => void;
//   onSave: (postId: string) => void;
// }

// // interface Comment {
// //   author: string;
// //   avatar: string;
// //   content: string;
// //   timestamp: string;
// // }

// export function SocialFeed({
//   posts,
//   onLike,
//   onComment,
//   onShare,
//   onDelete,
//   onSave,
// }: SocialFeedProps) {
//   const [commentingPostId, setCommentingPostId] = useState<string | null>(null);
//   const [newComment, setNewComment] = useState("");

//   const handleCommentSubmit = (postId: string) => {
//     if (newComment.trim()) {
//       onComment(postId, newComment);
//       setNewComment("");
//     }
//   };

//   const toggleComments = (postId: string) => {
//     setCommentingPostId(commentingPostId === postId ? null : postId);
//   };

//   return (
//     <div className="space-y-6">
//       {posts.map((post) => (
//         <div key={post.id} className="bg-white rounded-lg border">
//           <div className="p-4">
//             <div className="flex items-center justify-between mb-2">
//               <div className="flex items-center gap-2">
//                 <Avatar className="w-8 h-8">
//                   <AvatarImage src={post.avatar} />
//                   <AvatarFallback>
//                     {post.author.substring(0, 2).toUpperCase()}
//                   </AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <div className="flex items-center gap-2">
//                     <span className="font-semibold text-sm">{post.author}</span>
//                     {post.sponsored && (
//                       <span className="text-xs text-gray-500">Sponsored</span>
//                     )}
//                   </div>
//                   {post.timestamp && (
//                     <span className="text-xs text-gray-500">
//                       {post.timestamp}
//                     </span>
//                   )}
//                 </div>
//               </div>
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button variant="ghost" size="sm">
//                     <MoreHorizontal className="w-5 h-5" />
//                   </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent align="end">
//                   <DropdownMenuItem onClick={() => onDelete(post.id)}>
//                     Delete post
//                   </DropdownMenuItem>
//                   <DropdownMenuItem onClick={() => onSave(post.id)}>
//                     Save post
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>

//             <p className="text-sm mb-3">{post.content}</p>

//             {post.image && (
//               <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
//                 <Image
//                   src={post.image || "/placeholder.svg"}
//                   alt="Post image"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             )}
//           </div>

//           <div className="flex items-center gap-4 px-4 py-2 border-t text-sm">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => onLike(post.id)}
//               className={
//                 post.likes > 0 ? "text-red-500 hover:text-red-600" : ""
//               }
//             >
//               <Heart
//                 className={`w-4 h-4 mr-1 ${
//                   post.likes > 0 ? "fill-current" : ""
//                 }`}
//               />
//               Like ({post.likes})
//             </Button>
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => toggleComments(post.id)}
//             >
//               <MessageCircle className="w-4 h-4 mr-1" />
//               Comment ({post.comments.length})
//             </Button>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" size="sm">
//                   <Share2 className="w-4 h-4 mr-1" />
//                   Share
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent>
//                 <DropdownMenuItem onClick={() => onShare(post.id, "facebook")}>
//                   Facebook
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => onShare(post.id, "twitter")}>
//                   Twitter
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => onShare(post.id, "linkedin")}>
//                   LinkedIn
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => onShare(post.id, "copy")}>
//                   Copy Link
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>

//           {commentingPostId === post.id && (
//             <div className="px-4 py-2 border-t">
//               <div className="flex items-start space-x-2 mb-4">
//                 <Avatar className="w-8 h-8">
//                   <AvatarImage src="https://github.com/shadcn.png" />
//                   <AvatarFallback>JD</AvatarFallback>
//                 </Avatar>
//                 <div className="flex-grow">
//                   <Textarea
//                     value={newComment}
//                     onChange={(e) => setNewComment(e.target.value)}
//                     placeholder="Write a comment..."
//                     className="min-h-[60px] mb-2"
//                   />
//                   <Button
//                     onClick={() => handleCommentSubmit(post.id)}
//                     size="sm"
//                   >
//                     <Send className="w-4 h-4 mr-2" />
//                     Post Comment
//                   </Button>
//                 </div>
//               </div>
//               {post.comments.length > 0 && (
//                 <div className="space-y-4">
//                   {post.comments.map((comment, index) => (
//                     <div key={index} className="flex items-start space-x-2">
//                       <Avatar className="w-8 h-8">
//                         <AvatarImage src="https://github.com/shadcn.png" />
//                         <AvatarFallback>JD</AvatarFallback>
//                       </Avatar>
//                       <div className="flex-grow bg-gray-100 rounded-lg p-2">
//                         <div className="flex items-center justify-between mb-1">
//                           <span className="font-semibold text-sm">
//                             John Doe
//                           </span>
//                           <span className="text-xs text-gray-500">
//                             Just now
//                           </span>
//                         </div>
//                         <p className="text-sm">{comment}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  MoreHorizontal,
  Heart,
  MessageCircle,
  Share2,
  Send,
} from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import type { Post } from "@/lib/data/posts";
import type { User } from "@/lib/data/users";
import type { Comment } from "@/lib/data/comments";
import type { Like } from "@/lib/data/likes";
import { getComments, createComment } from "@/lib/data/comments";
import { getLikes, toggleLike } from "@/lib/data/likes";
import { deletePost } from "@/lib/data/posts";

interface SocialFeedProps {
  posts: Post[];
  users: User[];
  currentUser: User;
  onPostDeleted: (postId: string) => void;
}

export function SocialFeed({
  posts,
  users,
  currentUser,
  onPostDeleted,
}: SocialFeedProps) {
  const [commentingPostId, setCommentingPostId] = useState<string | null>(null);
  const [newComment, setNewComment] = useState("");
  const [postComments, setPostComments] = useState<{
    [postId: string]: Comment[];
  }>({});
  const [postLikes, setPostLikes] = useState<{ [postId: string]: Like[] }>({});

  useEffect(() => {
    const fetchCommentsAndLikes = async () => {
      const commentsPromises = posts.map((post) => getComments(post.id));
      const likesPromises = posts.map((post) => getLikes(post.id));

      const commentsResults = await Promise.all(commentsPromises);
      const likesResults = await Promise.all(likesPromises);

      const newPostComments: { [postId: string]: Comment[] } = {};
      const newPostLikes: { [postId: string]: Like[] } = {};

      posts.forEach((post, index) => {
        newPostComments[post.id] = commentsResults[index];
        newPostLikes[post.id] = likesResults[index];
      });

      setPostComments(newPostComments);
      setPostLikes(newPostLikes);
    };

    fetchCommentsAndLikes();
  }, [posts]);

  const getUser = (userId: string) => users.find((user) => user.id === userId);

  const handleCommentSubmit = async (postId: string) => {
    if (newComment.trim()) {
      const comment = await createComment({
        post_id: postId,
        user_id: currentUser.id,
        content: newComment,
      });

      if (comment) {
        setPostComments((prev) => ({
          ...prev,
          [postId]: [...(prev[postId] || []), comment],
        }));
        setNewComment("");
      }
    }
  };

  const handleLike = async (postId: string) => {
    const success = await toggleLike(postId, currentUser.id);
    if (success) {
      setPostLikes((prev) => {
        const currentLikes = prev[postId] || [];
        const userLikeIndex = currentLikes.findIndex(
          (like) => like.user_id === currentUser.id
        );

        if (userLikeIndex > -1) {
          return {
            ...prev,
            [postId]: currentLikes.filter(
              (_, index) => index !== userLikeIndex
            ),
          };
        } else {
          return {
            ...prev,
            [postId]: [
              ...currentLikes,
              {
                id: Date.now().toString(),
                post_id: postId,
                user_id: currentUser.id,
              },
            ],
          };
        }
      });
    }
  };

  const handleShare = (postId: string, platform?: string) => {
    // Placeholder for share functionality
    alert(`Sharing post ${postId} on ${platform}`);
  };

  const handleDelete = async (postId: string) => {
    const success = await deletePost(postId);
    if (success) {
      onPostDeleted(postId);
    }
  };

  const handleSave = (postId: string) => {
    // Placeholder for save functionality
    alert(`Saving post: ${postId}`);
  };

  const toggleComments = (postId: string) => {
    setCommentingPostId(commentingPostId === postId ? null : postId);
  };

  return (
    <div className="space-y-6">
      {posts.map((post) => {
        const author = getUser(post.user_id);
        if (!author) return null;
        const postCommentsArray = postComments[post.id] || [];
        const postLikesArray = postLikes[post.id] || [];
        const isLikedByCurrentUser = postLikesArray.some(
          (like) => like.user_id === currentUser.id
        );

        return (
          <div key={post.id} className="bg-white rounded-lg border">
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={author.avatar} />
                    <AvatarFallback>
                      {author.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">
                        {author.name}
                      </span>
                      {post.sponsored && (
                        <span className="text-xs text-gray-500">Sponsored</span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">
                      {new Date(post.timestamp).toLocaleString()}
                    </span>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-5 h-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleDelete(post.id)}>
                      Delete post
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleSave(post.id)}>
                      Save post
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <p className="text-sm mb-3">{post.content}</p>

              {post.image_url && (
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={post.image_url || "/placeholder.svg"}
                    alt="Post image"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 px-4 py-2 border-t text-sm">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleLike(post.id)}
                className={
                  isLikedByCurrentUser ? "text-red-500 hover:text-red-600" : ""
                }
              >
                <Heart
                  className={`w-4 h-4 mr-1 ${
                    isLikedByCurrentUser ? "fill-current" : ""
                  }`}
                />
                Like ({postLikesArray.length})
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleComments(post.id)}
              >
                <MessageCircle className="w-4 h-4 mr-1" />
                Comment ({postCommentsArray.length})
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Share2 className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={() => handleShare(post.id, "facebook")}
                  >
                    Facebook
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleShare(post.id, "twitter")}
                  >
                    Twitter
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleShare(post.id, "linkedin")}
                  >
                    LinkedIn
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleShare(post.id, "copy")}
                  >
                    Copy Link
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {commentingPostId === post.id && (
              <div className="px-4 py-2 border-t">
                <div className="flex items-start space-x-2 mb-4">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={currentUser.avatar} />
                    <AvatarFallback>
                      {currentUser.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-grow">
                    <Textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Write a comment..."
                      className="min-h-[60px] mb-2"
                    />
                    <Button
                      onClick={() => handleCommentSubmit(post.id)}
                      size="sm"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Post Comment
                    </Button>
                  </div>
                </div>
                {postCommentsArray.length > 0 && (
                  <div className="space-y-4">
                    {postCommentsArray.map((comment) => {
                      const commentAuthor = getUser(comment.user_id);
                      if (!commentAuthor) return null;
                      return (
                        <div
                          key={comment.id}
                          className="flex items-start space-x-2"
                        >
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={commentAuthor.avatar} />
                            <AvatarFallback>
                              {commentAuthor.name.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-grow bg-gray-100 rounded-lg p-2">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-semibold text-sm">
                                {commentAuthor.name}
                              </span>
                              <span className="text-xs text-gray-500">
                                {new Date(comment.timestamp).toLocaleString()}
                              </span>
                            </div>
                            <p className="text-sm">{comment.content}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
