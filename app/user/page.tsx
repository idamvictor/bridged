import UserSidebar from "@/components/user-sidebar";
import NewsSidebar from "@/components/news-sidebar";
// import SponsoredAd from "@/components/sponsored-ad";
import { SocialMediaApp } from "@/components/social-media-app";
// import CreatePost from "@/components/create-post";
// import SocialFeed from "@/components/social-feed";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto grid-col-1 grid md:grid-cols-[240px_1fr_300px] gap-6 py-6">
        <UserSidebar />

        <div className="space-y-6">
          {/* <div className="bg-white rounded-lg border p-4">
            <CreatePost />
          </div>

          <SponsoredAd />

          <SocialFeed /> */}

          <SocialMediaApp />

          <button className="w-full text-center py-4 text-purple-600 bg-white rounded-lg border">
            Load more posts
          </button>
        </div>

        <NewsSidebar />
      </main>
    </div>
  );
}
