import Image from "next/image";
import Link from "next/link";

export default function NewsSidebar() {
  const news = [
    {
      title: "Fitness for All: How to Exercise Effectively for Your Body Type",
      date: "2min",
    },
    {
      title:
        "Aging Well: Tips for Staying Healthy and Active in Your Golden Years",
      date: "15min",
    },
    {
      title:
        "Navigating Health Insurance: What You Need to Know to Make Informed Choices",
      date: "25min",
    },
    {
      title:
        "Managing Chronic Illness: Strategies for Living Well with a Health Condition",
      date: "45min",
    },
  ];

  return (
    <div className="bg-white rounded-lg border p-4">
      <h3 className="font-semibold mb-4">Latest News</h3>
      <div className="space-y-4">
        {news.map((item, i) => (
          <div key={i}>
            <Link href="/article/womens-health-matters" className="flex gap-3">
              <Image
                src={
                  "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075755/samples/chair.png"
                }
                alt="Post image"
                width={12}
                height={12}
                className="w-12 h-12 bg-gray-200 rounded-lg "
              />

              <div>
                <p className="text-sm">{item.title}</p>
                <p className="text-xs text-gray-500 mt-1">{item.date}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <button className="text-blue-500 text-sm mt-4">
        View all latest news
      </button>
    </div>
  );
}
