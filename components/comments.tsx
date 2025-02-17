"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CommentsProps {
  newsId: string;
}

export const Comments = ({ newsId }: CommentsProps) => {
  interface Comment {
    id: string;
    news_id: string;
    author_name: string;
    author_avatar: string;
    content: string;
    date: string;
  }

  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch comments for the news item
  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("news_id", newsId);

      if (error) {
        console.error("Error fetching comments:", error);
      } else {
        setComments(data);
      }

      setLoading(false);
    };

    fetchComments();
  }, [newsId]);

  // Function to add a new comment
  const addComment = async () => {
    if (newComment.trim() === "") return;

    const { data, error } = await supabase.from("comments").insert([
      {
        news_id: newsId,
        author_name: "User", // Replace with actual user authentication
        author_avatar: "/placeholder.svg?height=40&width=40", // Replace with actual user avatar
        content: newComment,
      },
    ]);

    if (error) {
      console.error("Error adding comment:", error);
    } else {
      if (data) {
        setComments([...comments, data[0]]);
      }
      setNewComment("");
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      {loading ? (
        <p>Loading comments...</p>
      ) : (
        <div>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="flex items-start gap-4 mb-4">
                <Avatar>
                  <AvatarImage
                    src={comment.author_avatar}
                    alt={comment.author_name}
                  />
                  <AvatarFallback>{comment.author_name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{comment.author_name}</p>
                  <p className="text-sm text-muted-foreground">
                    <time dateTime={comment.date}>
                      {new Date(comment.date).toLocaleString()}
                    </time>
                  </p>
                  <p>{comment.content}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No comments yet.</p>
          )}
        </div>
      )}

      {/* New Comment Form */}
      <div className="mt-8">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full p-4 border rounded-lg"
          rows={4}
        />
        <button
          onClick={addComment}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Post Comment
        </button>
      </div>
    </div>
  );
};
