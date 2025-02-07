import { authors } from "@/data/authors";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

const categories = [
  "World",
  "Politics",
  "Business",
  "Technology",
  "Science",
  "Health",
  "Sports",
  "Entertainment",
];

export function Sidebar() {
  return (
    <div className="space-y-6 lg:sticky lg:top-4">
      <Card className="shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge key={category} variant="default" className="text-xs">
                {category}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg">Top Contributors</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {authors.map((author) => (
            <div key={author.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={author.avatar} alt={author.name} />
                  <AvatarFallback>{author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{author.name}</p>
                  <p className="text-xs text-muted-foreground">{author.role}</p>
                </div>
              </div>
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
