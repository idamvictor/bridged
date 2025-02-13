import SocialPost from "@/components/social-post";

const socialPosts = [
  {
    id: 1,
    author: "Paul Apelah-Adel",
    content:
      "Healthcare workers are overworked❌...the government really needs to provide more support, otherwise, they will STOP smiling.. 😎",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075756/cld-sample-3.jpg",
    timestamp: "2 hours ago",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 2,
    author: "Adjoa Mills",
    content:
      "I just started my NEW JOB at Smith Teaching Hospital 🏥 Very excited about this new opportunity. 🤗",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075756/cld-sample-2.jpg",
    timestamp: "3 hours ago",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 3,
    author: "Francesca Aponte",
    content:
      "We are offering a 5% discount on your next Thai massage😊 Visit my store below ⬇️ https://bridged.fellag.com/marketplace",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075756/cld-sample-4.jpg",
    timestamp: "4 hours ago",
    avatar: "https://github.com/shadcn.png",
    sponsored: false,
  },
];

export default function SocialFeed() {
  return (
    <section className="space-y-6">
      {socialPosts.map((post) => (
        <SocialPost
          key={post.id}
          author={post.author}
          content={post.content}
          image={post.image}
          timestamp={post.timestamp}
          avatar={post.avatar}
          sponsored={post.sponsored}
        />
      ))}
    </section>
  );
}
