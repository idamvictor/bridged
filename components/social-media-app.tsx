"use client";

import { useState, useEffect } from "react";
import { CreatePost } from "./create-post";
import { SocialFeed } from "./social-feed";
import { getPosts, type Post } from "@/lib/data/posts";
import { getUsers, type User } from "@/lib/data/users";
import SponsoredAd from "./sponsored-ad";

export function SocialMediaApp() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [fetchedPosts, fetchedUsers] = await Promise.all([
        getPosts(),
        getUsers(),
      ]);
      setPosts(fetchedPosts);
      setUsers(fetchedUsers);
      if (fetchedUsers.length > 0) {
        setCurrentUser(fetchedUsers[0]); // Assuming the first user is the current user
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handlePostCreated = (newPost: Post) => {
    setPosts([newPost, ...posts]);
  };

  const handlePostDeleted = (postId: string) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    return <div>No users found</div>;
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <CreatePost onPostCreated={handlePostCreated} currentUser={currentUser} />
      <SponsoredAd />
      <SocialFeed
        posts={posts}
        users={users}
        currentUser={currentUser}
        onPostDeleted={handlePostDeleted}
      />
    </div>
  );
}
