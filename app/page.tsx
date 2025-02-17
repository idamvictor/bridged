"use client";

import NewsCardHome from "@/components/news-card-home";
import GroupsSidebar from "@/components/groups-sidebar";
import { supabase } from "@/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  read_time: string;
}

async function fetchNewsArticles() {
  const { data, error } = await supabase
    .from("news_brief")
    .select("*")
    .order("date", { ascending: false });

  if (error) {
    throw new Error("Error fetching news articles");
  }

  return data as NewsArticle[];
}

export default function Page() {
  const {
    data: newsArticles,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["newsArticles"],
    queryFn: fetchNewsArticles,
  });

  if (isLoading) {
    return <div>Loading news articles...</div>;
  }

  if (isError) {
    return <div>Error loading news articles.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-6xl mx-auto grid md:grid-cols-[1fr_300px] gap-6 py-6 px-4">
        <div className="space-y-6">
          <div className="bg-white rounded-lg border p-6">
            <h1 className="text-2xl font-bold mb-2">Welcome to Bridged</h1>
            <p className="text-gray-600">
              Join our community of health professionals and enthusiasts. Share
              knowledge, connect with peers, and stay updated with the latest in
              healthcare.
            </p>
          </div>

          <div className="grid gap-6">
            {newsArticles?.map((article) => (
              <NewsCardHome
                key={article.id}
                id={article.id}
                title={article.title}
                excerpt={article.excerpt}
                image={article.image}
                date={article.date}
                readTime={article.read_time}
              />
            ))}
          </div>
        </div>

        <GroupsSidebar />
      </main>
    </div>
  );
}
