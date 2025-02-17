export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  subcategory: "Top Stories" | "Local News" | "Latest News";
  image: string;
  date: string;
  author_name: string;
  author_role: string;
  author_avatar: string;
  readTime?: string;
}
