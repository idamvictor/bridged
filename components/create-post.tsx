"use client";

import type React from "react";
import { useState, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Users, MapPin, ImageIcon, X, Smile } from "lucide-react";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import EmojiPicker from "emoji-picker-react";
import type { Post } from "@/lib/data/posts";
import type { User } from "@/lib/data/users";
import { createPost } from "@/lib/data/posts";
import { supabase } from "@/utils/supabase/client";

interface CreatePostProps {
  onPostCreated: (post: Post) => void;
  currentUser: User;
}

export function CreatePost({ onPostCreated, currentUser }: CreatePostProps) {
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePostSubmit = async () => {
    if (postContent.trim() || postImage) {
      let imageUrl: string | undefined;

      if (postImage) {
        const fileExt = postImage.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const { data, error } = await supabase.storage
          .from("post-images") // Make sure this matches your bucket name
          .upload(fileName, postImage);

        if (error) {
          console.error("Error uploading image:", error);
        } else if (data) {
          const {
            data: { publicUrl },
          } = supabase.storage
            .from("post-images") // Make sure this matches your bucket name
            .getPublicUrl(data.path);
          imageUrl = publicUrl;
        }
      }

      const newPost = await createPost({
        user_id: currentUser.id,
        content: postContent,
        image_url: imageUrl,
      });

      if (newPost) {
        onPostCreated(newPost);
        setPostContent("");
        setPostImage(null);
      }
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPostImage(file);
    }
  };

  const removeImage = () => {
    setPostImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const addEmoji = (emojiObject: { emoji: string }) => {
    setPostContent((prevContent) => prevContent + emojiObject.emoji);
  };

  return (
    <Card className="w-full">
      <CardContent className="p-4 space-y-4">
        <div className="flex gap-3">
          <Avatar>
            <AvatarImage src={currentUser.avatar} />
            <AvatarFallback>
              {currentUser.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder="Share your thoughts..."
              className="min-h-[100px] resize-none border-0 focus-visible:ring-0 p-0 shadow-none"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
            {postImage && (
              <div className="relative mt-2">
                <Image
                  src={URL.createObjectURL(postImage) || "/placeholder.svg"}
                  alt="Uploaded image"
                  width={200}
                  height={200}
                  className="rounded-md"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1 right-1 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full"
                  onClick={removeImage}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-4 py-3 border-t flex justify-between items-center">
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full hover:bg-slate-100"
            onClick={() => fileInputRef.current?.click()}
          >
            <ImageIcon className="h-5 w-5 text-slate-600" />
            <span className="sr-only">Upload image</span>
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
          />
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
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full hover:bg-slate-100"
              >
                <Smile className="h-5 w-5 text-slate-600" />
                <span className="sr-only">Add emoji</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <EmojiPicker onEmojiClick={addEmoji} />
            </PopoverContent>
          </Popover>
        </div>
        <Button
          className="px-6 bg-[#d42ca7] hover:bg-[#a5147e]"
          onClick={handlePostSubmit}
        >
          Publish
        </Button>
      </CardFooter>
    </Card>
  );
}
