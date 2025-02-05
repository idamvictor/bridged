import NewsCard from "@/components/news-card";
import GroupsSidebar from "@/components/groups-sidebar";

const newsArticles = [
  {
    title: "Understanding the Impact of Regular Exercise on Mental Health",
    excerpt:
      "New research reveals the strong connection between physical activity and psychological well-being...",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075754/samples/breakfast.jpg",
    date: "Dec 4, 2023",
    readTime: "5 min",
  },
  {
    title: "Nutrition Guidelines for Better Heart Health",
    excerpt:
      "Leading cardiologists share the latest recommendations for maintaining a healthy heart through diet...",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075754/samples/breakfast.jpg",
    date: "Dec 3, 2023",
    readTime: "7 min",
  },
  {
    title: "Sleep Patterns and Their Effect on Daily Performance",
    excerpt:
      "Discover how your sleep schedule impacts your productivity and overall health...",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075754/samples/breakfast.jpg",
    date: "Dec 3, 2023",
    readTime: "6 min",
  },
];

export default function Page() {
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
            {newsArticles.map((article, i) => (
              <NewsCard key={i} {...article} />
            ))}
          </div>
        </div>

        <GroupsSidebar />
      </main>
    </div>
  );
}
