import { articles } from "@/data/articles";
import { ArticleCard } from "@/components/article-card";
import { Sidebar } from "@/components/sidebar";
// get this button checked out 
import { Button } from "@/components/button";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <h1 className="text-3xl font-bold mb-8">Latest Articles</h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 mt-8">
            <Button variant="outline">Prev</Button>
            <Button variant="outline">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">...</Button>
            <Button variant="outline">15</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
