"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal } from "lucide-react";

const ads = [
  {
    id: 1,
    company: "Bridged Connect",
    avatar: "https://github.com/shadcn.png",
    avatarFallback: "UI",
    description:
      "We drive impactful healthcare research globally, addressing critical health challenges to improve patient care and public health outcomes.",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1740479686/WhatsApp_Image_2025-02-20_at_05.21.54_e1ae7d36_cydern.jpg",
    title: "BRIDGED CENTER FOR IMPACT",
    content:
      "Join us on a journey where innovation meets purpose, and together, we create a future defined by positive and lasting interconnected healthcare",
    buttonText: "Learn More",
    buttonColor: "#d42ca7",
    buttonHoverColor: "#a5147e",
    url: "http://www.bridgedimpact.com",
  },
  {
    id: 2,
    company: "Bridged Connect",
    avatar: "https://github.com/fitlife.png",
    avatarFallback: "FL",
    description:
      "Skills development, behaviour change and policy implementation · Impact training and organisational culture change · International Research Training",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1740479702/WhatsApp_Image_2025-02-20_at_05.31.57_7b047e3d_pdshor.jpg",
    title: "LEARN: BRIDGED CENTER FOR IMPACT",
    content:
      "Embark on a Journey of Knowledge and Skill-Building. Explore Our Diverse Range of Courses Tailored for Your Success.",
    buttonText: "Find a Course",
    buttonColor: "#4CAF50",
    buttonHoverColor: "#45a049",
    url: "http://www.bridgedimpact.com",
  },
];

export default function SponsoredAd() {
  const [currentAd, setCurrentAd] = useState(ads[0]);

  useEffect(() => {
    const randomAd = ads[Math.floor(Math.random() * ads.length)];
    setCurrentAd(randomAd);
  }, []);

  return (
    <div className="bg-white rounded-lg border overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={currentAd.avatar} />
              <AvatarFallback>{currentAd.avatarFallback}</AvatarFallback>
            </Avatar>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm">
                  {currentAd.company}
                </span>
                <span className="text-xs text-gray-500">Sponsored</span>
              </div>
            </div>
          </div>
          <button className="text-gray-500">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
        <p className="text-sm mb-3">{currentAd.description}</p>
      </div>
      <div className="relative aspect-[2/1]">
        <Image
          src={currentAd.image || "/placeholder.svg"}
          alt={currentAd.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 bg-yellow-50">
        <h3 className="font-bold text-lg mb-2">{currentAd.title}</h3>
        <p className="text-sm mb-3">{currentAd.content}</p>
        <button
          className={`bg-[${currentAd.buttonColor}] hover:bg-[${currentAd.buttonHoverColor}] text-white text-sm font-semibold px-4 py-2 rounded`}
          style={{ backgroundColor: currentAd.buttonColor }}
        >
          <a href={currentAd.url}>{currentAd.buttonText}</a>
        </button>
      </div>
    </div>
  );
}
