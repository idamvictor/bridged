// "use client";

// import { useState } from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// interface Comment {
//   id: string;
//   author: {
//     name: string;
//     avatar: string;
//   };
//   content: string;
//   date: string;
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export function Comments() {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [comments, setComments] = useState<Comment[]>([
//     {
//       id: "1",
//       author: {
//         name: "Kwasi Smith",
//         avatar: "/placeholder.svg?height=40&width=40",
//       },
//       content:
//         "Satisfied conveying a dependent contented he gentleman agreeable do be.",
//       date: "June 11, 2022 at 6:01 am",
//     },
//   ]);

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>{comments.length} comments</CardTitle>
//       </CardHeader>
//       <CardContent className="space-y-8">
//         {comments.map((comment) => (
//           <div key={comment.id} className="flex gap-4">
//             <Avatar>
//               <AvatarImage
//                 src={comment.author.avatar}
//                 alt={comment.author.name}
//               />
//               <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
//             </Avatar>
//             <div className="space-y-2">
//               <div className="flex items-center gap-2">
//                 <span className="font-medium">{comment.author.name}</span>
//                 <span className="text-sm text-muted-foreground">
//                   {comment.date}
//                 </span>
//               </div>
//               <p>{comment.content}</p>
//             </div>
//           </div>
//         ))}
//         <form className="space-y-4">
//           <Textarea placeholder="Leave a comment..." />
//           <Button className="bg-[#d42ca7] hover:bg-[#a5147e]">
//             Post comment
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// }

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
