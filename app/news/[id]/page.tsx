// import { notFound } from "next/navigation";
// import Image from "next/image";
// import { newsItems } from "@/data/news";
// import { Badge } from "@/components/ui/badge";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Sidebar } from "@/components/sidebar";
// import { Comments } from "@/components/comments";

// export default async function NewsPage({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   // Await the resolution of the `params` promise to get the `id`
//   const { id } = await params;

//   // Find the news item based on the `id`
//   const news = newsItems.find((item) => item.id === id);

//   // If no news item is found, trigger the `notFound` function
//   if (!news) {
//     notFound();
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid lg:grid-cols-3 gap-8">
//         <article className="lg:col-span-2 space-y-8">
//           <div className="relative aspect-video">
//             <Image
//               src={news.image || "/placeholder.svg"}
//               alt={news.title}
//               fill
//               className="object-cover rounded-lg"
//             />
//           </div>
//           <div className="space-y-4">
//             <Badge variant="default">{news.category}</Badge>
//             <h1 className="text-4xl font-bold">{news.title}</h1>
//             <div className="flex items-center gap-4">
//               <Avatar>
//                 <AvatarImage src={news.author.avatar} alt={news.author.name} />
//                 <AvatarFallback>{news.author.name[0]}</AvatarFallback>
//               </Avatar>
//               <div>
//                 <p className="font-medium">{news.author.name}</p>
//                 <div className="text-sm text-muted-foreground">
//                   <time dateTime={news.date}>{news.date}</time>
//                   {news.readTime && <> · {news.readTime} read</>}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="prose prose-gray max-w-none dark:prose-invert">
//             {news.content.split("\n").map((paragraph, i) => (
//               <p key={i}>{paragraph}</p>
//             ))}
//           </div>
//           <Comments newsId={news.id} />
//         </article>
//         <Sidebar />
//       </div>
//     </div>
//   );
// }

import { notFound } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/utils/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sidebar } from "@/components/sidebar";
import { Comments } from "@/components/comments";
import { NewsItem } from "@/data/news";

interface NewsPageProps {
  params: Promise<{ id: string }>;
}

export default async function NewsPage({ params }: NewsPageProps) {
  // Await the resolution of the `params` promise to get the `id`
  const { id } = await params;

  // Fetch the brief details from `news_brief` table
  const { data: briefData, error: briefError } = await supabase
    .from("news_brief")
    .select("*")
    .eq("id", id)
    .single();

  if (briefError || !briefData) {
    notFound();
  }

  // Fetch the detailed information from `news_details` table
  const { data: detailsData, error: detailsError } = await supabase
    .from("news_details")
    .select("*")
    .eq("id", id)
    .single();

  if (detailsError || !detailsData) {
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
