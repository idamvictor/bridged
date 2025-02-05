import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/data/articles";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col bg-teal-50/50">
      <Link href={`/article/${article.id}`} className="flex flex-col h-full">
        <div className="relative aspect-[4/3]">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader className="flex-none">
          <Badge variant="secondary" className="w-fit mb-2 bg-teal-500 text-white">
            {article.category}
          </Badge>
          <h2 className="text-lg font-bold line-clamp-2">{article.title}</h2>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <p className="text-muted-foreground text-sm line-clamp-2 flex-1">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
            <time dateTime={article.date}>{article.date}</time>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
