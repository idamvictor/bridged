"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { FileIcon, Users, MapPin, MoreHorizontal } from "lucide-react";

export default function CreatePost() {
  return (
    <Card className="w-full max-w-2xl">
      <CardContent className="p-4 space-y-4">
        <div className="flex gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder="Share your thoughts..."
              className="min-h-[100px] resize-none border-0 focus-visible:ring-0 p-0 shadow-none"
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
        <Button className="px-6 bg-teal-600 hover:bg-teal-700">Publish</Button>
      </CardFooter>
    </Card>
  );
}
