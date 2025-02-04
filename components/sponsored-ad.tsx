import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function SponsoredAd() {
  return (
    <div className="bg-white rounded-lg border overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm">
                  University of IOWA Healthcare
                </span>
                <span className="text-xs text-gray-500">Sponsored</span>
              </div>
            </div>
          </div>
          <button className="text-gray-500">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </button>
        </div>
        <p className="text-sm mb-3">
          Healthy Ads is a Health Advertising platform for Fitness, Medical,
          Wellness, Pharmaceutical & Health brands.
        </p>
      </div>
      <div className="relative aspect-[2/1]">
        <Image
          src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075756/cld-sample-3.jpg"
          alt="Take control of your health"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 bg-yellow-50">
        <h3 className="font-bold text-lg mb-2">TAKE CONTROL OF YOUR HEALTH.</h3>
        <p className="text-sm mb-3">
          We are healthcare, wellness, and medical professionals - we are here
          for you.
        </p>
        <button className="bg-black text-white text-sm font-semibold px-4 py-2 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
}
