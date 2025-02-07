import Link from "next/link";
import Image from "next/image";
import type { NewsItem } from "@/data/news";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface NewsCardProps {
  news: NewsItem;
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <Link href={`/news/${news.id}`} className="flex flex-col h-full">
        <div className="relative aspect-[4/3]">
          <Image
            src={news.image || "/placeholder.svg"}
            alt={news.title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader className="flex-none">
          <Badge variant="default" className="w-fit mb-2">
            {news.category}
          </Badge>
          <h2 className="text-lg font-bold line-clamp-2">{news.title}</h2>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <p className="text-muted-foreground text-sm line-clamp-2 flex-1">
            {news.excerpt}
          </p>
          <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
            <time dateTime={news.date}>{news.date}</time>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
