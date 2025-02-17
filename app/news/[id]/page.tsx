"use client";

import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/utils/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sidebar } from "@/components/sidebar";
import { Comments } from "@/components/comments";
import { NewsItem } from "@/data/news";
import { useQuery } from "@tanstack/react-query";

async function fetchNewsBrief(id: string) {
  const { data, error } = await supabase
    .from("news_brief")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    throw new Error("News brief not found");
  }

  return data;
}

async function fetchNewsDetails(id: string) {
  const { data, error } = await supabase
    .from("news_details")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    throw new Error("News details not found");
  }

  return data;
}

export default function NewsPage() {
  const params = useParams(); // Use the `useParams` hook to get the `id`
  const id = params.id as string; // Extract the `id` from the params

  // Fetch brief data using React Query
  const {
    data: briefData,
    error: briefError,
    isLoading: isBriefLoading,
  } = useQuery({
    queryKey: ["newsBrief", id],
    queryFn: () => fetchNewsBrief(id),
  });

  // Fetch details data using React Query
  const {
    data: detailsData,
    error: detailsError,
    isLoading: isDetailsLoading,
  } = useQuery({
    queryKey: ["newsDetails", id],
    queryFn: () => fetchNewsDetails(id),
  });

  // Handle loading state
  if (isBriefLoading || isDetailsLoading) {
    return <div>Loading...</div>;
  }

  // Handle errors or missing data
  if (briefError || detailsError || !briefData || !detailsData) {
    notFound();
  }

  // Combine the brief and detailed data
  const news: NewsItem = { ...briefData, ...detailsData };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        <article className="lg:col-span-2 space-y-8">
          <div className="relative aspect-video">
            <Image
              src={news.image || "/placeholder.svg"}
              alt={news.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <Badge variant="default">{news.category}</Badge>
            <h1 className="text-4xl font-bold">{news.title}</h1>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={news.author_avatar} alt={news.author_name} />
                <AvatarFallback>{news.author_name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{news.author_name}</p>
                <div className="text-sm text-muted-foreground">
                  <time dateTime={news.date}>{news.date}</time>
                  {news.readTime && <> · {news.readTime} read</>}
                </div>
              </div>
            </div>
          </div>
          <div className="prose prose-gray max-w-none dark:prose-invert">
            {news.content.split("\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <Comments newsId={news.id} />
        </article>
        <Sidebar />
      </div>
    </div>
  );
}
