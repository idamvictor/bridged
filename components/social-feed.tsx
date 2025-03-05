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
import { useUser } from "@clerk/nextjs";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  InstapaperShareButton,
} from "react-share";

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
  const user = useUser();
  const username = user && user.user ? user.user.fullName : "";
  const avatar = user && user.user ? user.user.imageUrl : "";

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
        author_name: username || currentUser.name,
        author_avatar: user.user?.imageUrl || currentUser.avatar,
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

  // const handleShare = (postId: string, platform?: string) => {
  //   // Placeholder for share functionality
  //   alert(`Sharing post ${postId} on ${platform}`);
  // };

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
                    <AvatarImage src={post.author_avatar} />
                    <AvatarFallback>
                      {(post.author_name ?? author.name)
                        .substring(0, 2)
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">
                        {post.author_name}
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
                  // onClick={() => handleShare(post.id, "facebook")}
                  >
                    <FacebookShareButton url="https://connect.bridgedimpact.com/">
                      Facebook
                    </FacebookShareButton>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                  // onClick={() => handleShare(post.id, "twitter")}
                  >
                    <TwitterShareButton url="https://connect.bridgedimpact.com/">
                      Twitter
                    </TwitterShareButton>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                  // onClick={() => handleShare(post.id, "linkedin")}
                  >
                    <LinkedinShareButton url="https://connect.bridgedimpact.com/">
                      LinkedIn
                    </LinkedinShareButton>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <WhatsappShareButton url="https://connect.bridgedimpact.com/">
                      Whatsapp
                    </WhatsappShareButton>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <InstapaperShareButton url="https://connect.bridgedimpact.com/">
                      Instagram
                    </InstapaperShareButton>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {commentingPostId === post.id && (
              <div className="px-4 py-2 border-t">
                <div className="flex items-start space-x-2 mb-4">
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src={avatar || postCommentsArray[0]?.author_avatar}
                    />
                    <AvatarFallback>
                      {(
                        postCommentsArray[0]?.author_avatar ||
                        postCommentsArray[0]?.author_name ||
                        avatar
                      )
                        .substring(0, 2)
                        .toUpperCase()}
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
                            <AvatarImage
                              src={
                                comment.author_avatar || commentAuthor.avatar
                              }
                            />
                            <AvatarFallback>
                              {(comment.author_avatar || comment.author_name)
                                .substring(0, 2)
                                .toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-grow bg-gray-100 rounded-lg p-2">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-semibold text-sm">
                                {comment.author_name || commentAuthor.name}
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
