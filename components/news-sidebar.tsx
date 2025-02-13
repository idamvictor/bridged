import Image from "next/image";
import Link from "next/link";

export default function NewsSidebar() {
  const news = [
    {
      id: 1,
      title: "Fitness for All: How to Exercise Effectively for Your Body Type",
      date: "2min",
      image:
        "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739222540/DG_20shakes_20with_20HE_0_rnwtwq.jpg",
    },
    {
      id: 2,
      title:
        "Aging Well: Tips for Staying Healthy and Active in Your Golden Years",
      date: "15min",
      image:
        "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739222540/DG_20shakes_20with_20HE_0_rnwtwq.jpg",
    },
    {
      id: 3,
      title:
        "Navigating Health Insurance: What You Need to Know to Make Informed Choices",
      date: "25min",
      image:
        "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739222257/For_20banner_cr9sav.jpg",
    },
    {
      id: 4,
      title:
        "Managing Chronic Illness: Strategies for Living Well with a Health Condition",
      date: "45min",
      image:
        "https://res.cloudinary.com/dyp8gtllq/image/upload/v1739221074/Video_3_de9uyn.jpg",
    },
  ];

  return (
    <div className="bg-white rounded-lg border p-4">
      <h3 className="font-semibold mb-4">Your Latest News</h3>
      <div className="space-y-4">
        {news.map((item) => (
          <div key={item.id}>
            <Link href={`/news/${item.id}`} className="flex gap-3">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={48}
                height={48}
                className="w-12 h-12 bg-gray-200 rounded-lg object-cover"
              />
              <div>
                <p className="text-sm">{item.title}</p>
                <p className="text-xs text-gray-500 mt-1">{item.date}</p>
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
