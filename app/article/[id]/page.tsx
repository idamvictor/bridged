import { notFound } from "next/navigation";
import Image from "next/image";
import { articles } from "@/data/articles";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sidebar } from "@/components/sidebar";
import { Comments } from "@/components/comments";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // Awaiting the params object
  const article = articles.find((a) => a.id === id); // Finding the article using `id`

  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        <article className="lg:col-span-2 space-y-8">
          <div className="relative aspect-video">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <Badge variant="secondary" className="bg-teal-500 text-white">{article.category}</Badge>
            <h1 className="text-4xl font-bold">{article.title}</h1>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage
                  src={article.author.avatar}
                  alt={article.author.name}
                />
                <AvatarFallback>{article.author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{article.author.name}</p>
                <div className="text-sm text-muted-foreground">
                  <time dateTime={article.date}>{article.date}</time>
                  {article.readTime && <> · {article.readTime} read</>}
                </div>
              </div>
            </div>
          </div>
          <div className="prose prose-gray max-w-none dark:prose-invert">
            {article.content.split("\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <Comments articleId={article.id} />
        </article>
        <Sidebar />
      </div>
    </div>
  );
}
