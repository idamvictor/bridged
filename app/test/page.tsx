// 'use client'
// import { supabase } from "@/utils/supabse/client";
// import React, { useState, useEffect } from "react";

// // Define types for the news items
// interface Author {
//   name: string;
//   role: string;
//   avatar: string;
// }

// interface NewsBrief {
//   id: string;
//   title: string;
//   excerpt: string;
//   category: string;
//   subcategory: "Top Stories" | "Local News" | "Latest News";
//   image: string;
//   date: string;
//   readTime?: string;
// }

// interface NewsDetails extends NewsBrief {
//   content: string;
//   author_name: string;
//   author_role: string;
//   author_avatar: string;
// }

// const fetchNewsBriefs = async (): Promise<NewsBrief[]> => {
//   try {
//     const { data, error } = await supabase.from("news_brief").select("*");
//     if (error) {
//       console.error("Error fetching news briefs:", error);
//       return [];
//     }
//     return data as NewsBrief[];
//   } catch (error) {
//     console.error("Error fetching news briefs:", error);
//     return [];
//   }
// };

// const fetchNewsDetails = async (id: string): Promise<NewsDetails | null> => {
//   try {
//     const { data, error } = await supabase
//       .from("news_details")
//       .select("*")
//       .eq("id", id)
//       .single();
//     if (error) {
//       console.error("Error fetching news details:", error);
//       return null;
//     }
//     return data as NewsDetails;
//   } catch (error) {
//     console.error("Error fetching news details:", error);
//     return null;
//   }
// };

// const NewsList: React.FC = () => {
//   const [newsBriefs, setNewsBriefs] = useState<NewsBrief[]>([]);
//   const [selectedNews, setSelectedNews] = useState<NewsDetails | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const briefs = await fetchNewsBriefs();
//       setNewsBriefs(briefs);
//     };
//     fetchData();
//   }, []);

//   const handleNewsClick = async (news: NewsBrief) => {
//     const details = await fetchNewsDetails(news.id);
//     if (details) {
//       setSelectedNews({ ...news, ...details });
//       console.log("Selected News Details:", selectedNews);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">News Briefs</h1>
//       <div className="grid gap-6 grid-cols-2 lg:grid-cols-3">
//         {newsBriefs.map((news) => (
//           <div
//             key={news.id}
//             className="p-4 border rounded shadow-md cursor-pointer"
//             onClick={() => handleNewsClick(news)}
//           >
//             <h2 className="text-xl font-bold">{news.title}</h2>
//             <p className="text-gray-600">{news.excerpt}</p>
//             <p className="text-gray-500">Category: {news.category}</p>
//             <p className="text-gray-500">Date: {news.date}</p>
//           </div>
//         ))}
//       </div>
//       {selectedNews && (
//         <div className="mt-8 p-4 border rounded shadow-md">
//           <h2 className="text-2xl font-bold mb-4">Selected News Details</h2>
//           <h3 className="text-xl font-bold">{selectedNews.title}</h3>
//           <p className="text-gray-600">{selectedNews.content}</p>
//           <p className="text-gray-500">Author: {selectedNews.author_name}</p>
//           <p className="text-gray-500">Role: {selectedNews.author_role}</p>
//           <p className="text-gray-500">Date: {selectedNews.date}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NewsList;

"use client";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/utils/supabase/client";
import React, { useState } from "react";

interface NewsBrief {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  subcategory: "Top Stories" | "Local News" | "Latest News";
  image: string;
  date: string;
  readTime?: string;
}

interface NewsDetails extends NewsBrief {
  content: string;
  author_name: string;
  author_role: string;
  author_avatar: string;
}

const fetchNewsBriefs = async (): Promise<NewsBrief[]> => {
  const { data, error } = await supabase.from("news_brief").select("*");
  if (error) throw new Error(error.message);
  return data as NewsBrief[];
};

const fetchNewsDetails = async (id: string): Promise<NewsDetails> => {
  const { data, error } = await supabase
    .from("news_details")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data as NewsDetails;
};

const NewsList: React.FC = () => {
  const [selectedNewsId, setSelectedNewsId] = useState<string | null>(null);

  const {
    data: newsBriefs,
    isLoading,
    isError,
  } = useQuery<NewsBrief[], Error>({
    queryKey: ["newsBriefs"],
    queryFn: fetchNewsBriefs,
  });

  const { data: selectedNews } = useQuery<NewsDetails, Error>({
    queryKey: ["newsDetails", selectedNewsId],
    queryFn: () => fetchNewsDetails(selectedNewsId!),
    enabled: !!selectedNewsId, // This query will not run until selectedNewsId is truthy
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching news briefs</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">News Briefs</h1>
      <div className="grid gap-6 grid-cols-2 lg:grid-cols-3">
        {newsBriefs?.map((news) => (
          <div
            key={news.id}
            className="p-4 border rounded shadow-md cursor-pointer"
            onClick={() => setSelectedNewsId(news.id)}
          >
            <h2 className="text-xl font-bold">{news.title}</h2>
            <p className="text-gray-600">{news.excerpt}</p>
            <p className="text-gray-500">Category: {news.category}</p>
            <p className="text-gray-500">Date: {news.date}</p>
          </div>
        ))}
      </div>
      {selectedNews && (
        <div className="mt-8 p-4 border rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Selected News Details</h2>
          <h3 className="text-xl font-bold">{selectedNews.title}</h3>
          <p className="text-gray-600">{selectedNews.content}</p>
          <p className="text-gray-500">Author: {selectedNews.author_name}</p>
          <p className="text-gray-500">Role: {selectedNews.author_role}</p>
          <p className="text-gray-500">Date: {selectedNews.date}</p>
        </div>
      )}
    </div>
  );
};

export default NewsList;
