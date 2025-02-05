import UserSidebar from "@/components/user-sidebar";
import NewsSidebar from "@/components/news-sidebar";
import SocialPost from "@/components/social-post";
import SponsoredAd from "@/components/sponsored-ad";
import CreatePost from "@/components/create-post";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto grid-col-1 grid md:grid-cols-[240px_1fr_300px] gap-6 py-6">
        <UserSidebar />

        <div className="space-y-6">
          <div className="bg-white rounded-lg border p-4">
            <CreatePost />
          </div>

          <SponsoredAd />

          <SocialPost
            author="Paul Apelah-Adel"
            content="Healthcare workers are overworked❌...the government really needs to provide more support, otherwise, they will STOP smiling.. 😎"
            image="https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075756/cld-sample-3.jpg"
            timestamp="2 hours ago"
            avatar="https://github.com/shadcn.png"
          />

          <SocialPost
            author="Adjoa Mills"
            content="I just started my NEW JOB at Smith Teaching Hospital 🏥 Very excited about this new opportunity. 🤗"
            image="https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075756/cld-sample-3.jpg"
            timestamp="3 hours ago"
            avatar="https://github.com/shadcn.png"
          />

          <SocialPost
            author="Francesca Aponte"
            content="We are offering a 5% discount on your next Thai massage😊 Visit my store below ⬇️ https://bridged.fellag.com/marketplace"
            image="https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075756/cld-sample-3.jpg"
            timestamp="4 hours ago"
            avatar="https://github.com/shadcn.png"
          />

          <button className="w-full text-center py-4 text-purple-600 bg-white rounded-lg border">
            Load more posts
          </button>
        </div>

        <NewsSidebar />
      </main>
    </div>
  );
}



// import UserSidebar from "@/components/user-sidebar";
// import NewsSidebar from "@/components/news-sidebar";
// import SocialPost from "@/components/social-post";
// import SponsoredAd from "@/components/sponsored-ad";
// import CreatePost from "@/components/create-post";

// export default function Page() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Main Container */}
//       <main className="relative max-w-7xl mx-auto py-6 px-4">
//         {/* Fixed User Sidebar */}
//         <aside className="fixed top-22 left-4 w-[240px] h-[calc(100vh-48px)] overflow-y-auto border rounded-lg bg-white">
//           <UserSidebar />
//         </aside>

//         {/* Main Content Area */}
//         <div
//           className="ml-[260px] mr-[320px] space-y-6"
//           style={{ maxWidth: "calc(100% - 560px)" }}
//         >
//           <div className="bg-white rounded-lg border p-4">
//             <CreatePost />
//           </div>
//           <SponsoredAd />
//           <SocialPost
//             author="Paul Apelah-Adel"
//             content="Healthcare workers are overworked❌...the government really needs to provide more support, otherwise, they will STOP smiling.. 😎"
//             image="https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075756/cld-sample-3.jpg"
//             timestamp="2 hours ago"
//             avatar="https://github.com/shadcn.png"
//           />
//           <SocialPost
//             author="Adjoa Mills"
//             content="I just started my NEW JOB at Smith Teaching Hospital 🏥 Very excited about this new opportunity. 🤗"
//             image="https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075756/cld-sample-3.jpg"
//             timestamp="3 hours ago"
//             avatar="https://github.com/shadcn.png"
//           />
//           <SocialPost
//             author="Francesca Aponte"
//             content="We are offering a 5% discount on your next Thai massage😊 Visit my store below ⬇️ https://bridged.fellag.com/marketplace"
//             image="https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075756/cld-sample-3.jpg"
//             timestamp="4 hours ago"
//             avatar="https://github.com/shadcn.png"
//           />
//           <button className="w-full text-center py-4 text-purple-600 bg-white rounded-lg border">
//             Load more posts
//           </button>
//         </div>

//         {/* Fixed News Sidebar */}
//         <aside className="fixed top-[90px] right-4 w-[300px] h-[calc(100vh-48px)] overflow-y-auto border rounded-lg bg-white">
//           <NewsSidebar />
//         </aside>
//       </main>
//     </div>
//   );
// }