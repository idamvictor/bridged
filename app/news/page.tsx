"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { NewsCard } from "@/components/news-card";
import { Sidebar } from "@/components/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { supabase } from "@/utils/supabase/client";
import { NewsItem } from "@/data/news";

const categories = ["Top Stories", "Local News", "Latest News"] as const;

// Fetch news items from Supabase
const fetchNewsItems = async (): Promise<NewsItem[]> => {
  const { data, error } = await supabase.from("news_brief").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data as NewsItem[];
};

export default function HomePage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("Top Stories");

  // Use React Query to fetch news items
  const {
    data: newsItems,
    isLoading,
    isError,
  } = useQuery<NewsItem[]>({
    queryKey: ["newsItems"],
    queryFn: fetchNewsItems,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching news items</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <h1 className="text-3xl font-bold mb-8">News</h1>
          <Tabs defaultValue="Top Stories" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid gap-6 grid-cols-2 lg:grid-cols-3">
                  {newsItems
                    ?.filter((item) => item.subcategory === category)
                    .slice(0, 6)
                    .map((item) => (
                      <NewsCard key={item.id} news={item} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          <div className="flex items-center justify-center gap-2 mt-8">
            <Button variant="outline" className="bg-[#d42ca7] text-white">
              1
            </Button>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
