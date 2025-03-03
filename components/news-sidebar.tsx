"use client";
import { supabase } from "@/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export default function NewsSidebar() {
  // Fetch news data using React Query
  const {
    data: news = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["news"], // Query key as an array
    queryFn: async () => {
      const { data, error } = await supabase
        .from("news_brief")
        .select("*")
        .order("date", { ascending: false }) // Fetch data sorted by date
        .limit(5); // Limit the results to 5 items

      if (error) {
        throw new Error(error.message); // Handle errors
      }
      return data; // Return fetched data
    },
  });

  // Loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Error state
  if (isError) {
    return <div>Error fetching news. Please try again later.</div>;
  }

  return (
    <div className="bg-white rounded-lg border p-4">
      <h3 className="font-semibold mb-4">Your Latest News</h3>
      <div className="space-y-4">
        {news.map((item) => (
          <div key={item.id}>
            <Link href={`/news/${item.id}`} className="flex gap-3">
              <Image
                src={item.image || "/placeholder.svg"} // Fallback image if none is provided
                alt={item.title}
                width={48}
                height={48}
                className="w-12 h-12 bg-gray-200 rounded-lg object-cover"
              />
              <div>
                <p className="text-sm">{item.title}</p>
                <p className="text-xs text-gray-500 mt-1">{item.read_time}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Link href="/news" className="text-purple-600 text-sm mt-4 block">
        View all latest news
      </Link>
    </div>
  );
}
