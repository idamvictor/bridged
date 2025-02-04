"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  date: string;
}

interface CommentsProps {
  articleId: string;
}

export function Comments({ articleId }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: {
        name: "Kwasi Smith",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "Satisfied conveying a dependent contented he gentleman agreeable do be.",
      date: "June 11, 2022 at 6:01 am",
    },
  ]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{comments.length} comments</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <Avatar>
              <AvatarImage
                src={comment.author.avatar}
                alt={comment.author.name}
              />
              <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium">{comment.author.name}</span>
                <span className="text-sm text-muted-foreground">
                  {comment.date}
                </span>
              </div>
              <p>{comment.content}</p>
            </div>
          </div>
        ))}
        <form className="space-y-4">
          <Textarea placeholder="Leave a comment..." />
          <Button>Post comment</Button>
        </form>
      </CardContent>
    </Card>
  );
}
