import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface PostProps {
  author: string;
  content: string;
  image?: string;
  sponsored?: boolean;
  timestamp?: string;
  avatar?: string;
}

export default function SocialPost({
  author,
  content,
  image,
  sponsored,
  timestamp,
  avatar,
}: PostProps) {
  return (
    <div className="bg-white rounded-lg border">
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src={avatar} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm">{author}</span>
                {sponsored && (
                  <span className="text-xs text-gray-500">Sponsored</span>
                )}
              </div>
              {timestamp && (
                <span className="text-xs text-gray-500">{timestamp}</span>
              )}
            </div>
          </div>
          <button className="text-gray-500">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm mb-3">{content}</p>

        {image && (
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt="Post image"
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 px-4 py-2 border-t text-sm">
        <button className="text-gray-500 hover:text-gray-700">Like (0)</button>
        <button className="text-gray-500 hover:text-gray-700">
          Comment (0)
        </button>
        <button className="text-gray-500 hover:text-gray-700">Share</button>
      </div>
    </div>
  );
}
