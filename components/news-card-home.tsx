import Image from "next/image";
import Link from "next/link";
import { Lock } from "lucide-react";

interface NewsCardHomeProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
}

export default function NewsCardHome({
  title,
  excerpt,
  image,
  date,
  readTime,
}: NewsCardHomeProps) {
  return (
    <div className="bg-white rounded-lg border overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2 text-sm text-gray-500">
          <span>{date}</span>
          <span>{readTime} read</span>
        </div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{excerpt}</p>
        <Link
          href="/register"
          className="inline-flex items-center gap-2 text-sm text-purple-600 hover:text-gray-700"
        >
          <Lock className="w-4 h-4" />
          Sign in to read more
        </Link>
      </div>
    </div>
  );
}
