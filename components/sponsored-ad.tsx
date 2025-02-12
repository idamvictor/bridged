// import Image from "next/image";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

// export default function SponsoredAd() {
//   return (
//     <div className="bg-white rounded-lg border overflow-hidden">
//       <div className="p-4">
//         <div className="flex items-center justify-between mb-2">
//           <div className="flex items-center gap-2">
//             <Avatar>
//               <AvatarImage src="https://github.com/shadcn.png" />
//               <AvatarFallback>CN</AvatarFallback>
//             </Avatar>

//             <div>
//               <div className="flex items-center gap-2">
//                 <span className="font-semibold text-sm">
//                   University of IOWA Healthcare
//                 </span>
//                 <span className="text-xs text-gray-500">Sponsored</span>
//               </div>
//             </div>
//           </div>
//           <button className="text-gray-500">
//             <svg
//               className="w-5 h-5"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <circle cx="12" cy="12" r="1" />
//               <circle cx="19" cy="12" r="1" />
//               <circle cx="5" cy="12" r="1" />
//             </svg>
//           </button>
//         </div>
//         <p className="text-sm mb-3">
//           Healthy Ads is a Health Advertising platform for Fitness, Medical,
//           Wellness, Pharmaceutical & Health brands.
//         </p>
//       </div>
//       <div className="relative aspect-[2/1]">
//         <Image
//           src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075756/cld-sample-3.jpg"
//           alt="Take control of your health"
//           fill
//           className="object-cover"
//         />
//       </div>
//       <div className="p-4 bg-yellow-50">
//         <h3 className="font-bold text-lg mb-2">TAKE CONTROL OF YOUR HEALTH.</h3>
//         <p className="text-sm mb-3">
//           We are healthcare, wellness, and medical professionals - we are here
//           for you.
//         </p>
//         <button className="bg-[#d42ca7] hover:bg-[#a5147e] text-white text-sm font-semibold px-4 py-2 rounded">
//           Learn More
//         </button>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal } from "lucide-react";

const ads = [
  {
    id: 1,
    company: "University of IOWA Healthcare",
    avatar: "https://github.com/shadcn.png",
    avatarFallback: "UI",
    description:
      "Healthy Ads is a Health Advertising platform for Fitness, Medical, Wellness, Pharmaceutical & Health brands.",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075756/cld-sample-3.jpg",
    title: "TAKE CONTROL OF YOUR HEALTH.",
    content:
      "We are healthcare, wellness, and medical professionals - we are here for you.",
    buttonText: "Learn More",
    buttonColor: "#d42ca7",
    buttonHoverColor: "#a5147e",
  },
  {
    id: 2,
    company: "FitLife Gym",
    avatar: "https://github.com/fitlife.png",
    avatarFallback: "FL",
    description:
      "Join the fitness revolution with FitLife Gym. State-of-the-art equipment and expert trainers await you.",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075756/cld-sample-4.jpg",
    title: "TRANSFORM YOUR BODY, TRANSFORM YOUR LIFE",
    content:
      "Get fit, stay healthy, and feel amazing with our personalized workout plans.",
    buttonText: "Start Your Journey",
    buttonColor: "#4CAF50",
    buttonHoverColor: "#45a049",
  },
  {
    id: 3,
    company: "MindfulMed Therapy",
    avatar: "https://github.com/mindfulmed.png",
    avatarFallback: "MM",
    description:
      "Experience the healing power of mindfulness with MindfulMed Therapy. Online and in-person sessions available.",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075756/cld-sample-5.jpg",
    title: "FIND PEACE IN THE PRESENT MOMENT",
    content:
      "Our certified therapists are here to guide you on your journey to mental wellness.",
    buttonText: "Book a Session",
    buttonColor: "#2196F3",
    buttonHoverColor: "#1976D2",
  },
  {
    id: 4,
    company: "NutriLife Supplements",
    avatar: "https://github.com/nutrilife.png",
    avatarFallback: "NL",
    description:
      "Fuel your body with premium, science-backed supplements from NutriLife. Enhance your health naturally.",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075756/cld-sample-6.jpg",
    title: "NOURISH YOUR BODY, ELEVATE YOUR LIFE",
    content:
      "Discover our range of vitamins, minerals, and herbal supplements for optimal health.",
    buttonText: "Shop Now",
    buttonColor: "#FF9800",
    buttonHoverColor: "#F57C00",
  },
  {
    id: 5,
    company: "ZenYoga Studio",
    avatar: "https://github.com/zenyoga.png",
    avatarFallback: "ZY",
    description:
      "Find your inner peace at ZenYoga Studio. Classes for all levels, from beginners to advanced practitioners.",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075756/cld-sample-7.jpg",
    title: "BREATHE, STRETCH, RELAX",
    content:
      "Join our community and experience the transformative power of yoga.",
    buttonText: "View Classes",
    buttonColor: "#9C27B0",
    buttonHoverColor: "#7B1FA2",
  },
  {
    id: 6,
    company: "EcoHealth Foods",
    avatar: "https://github.com/ecohealth.png",
    avatarFallback: "EH",
    description:
      "Organic, sustainable, and delicious. EcoHealth Foods brings nature's best straight to your table.",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075755/cld-sample.jpg",
    title: "EAT WELL, LIVE BETTER",
    content:
      "Discover our range of organic produce, whole grains, and superfoods.",
    buttonText: "Explore Products",
    buttonColor: "#8BC34A",
    buttonHoverColor: "#7CB342",
  },
  {
    id: 7,
    company: "SleepWell Mattresses",
    avatar: "https://github.com/sleepwell.png",
    avatarFallback: "SW",
    description:
      "Experience the difference a good night's sleep can make with SleepWell Mattresses.",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075756/cld-sample-9.jpg",
    title: "DREAM BETTER, LIVE BETTER",
    content:
      "Our ergonomic mattresses are designed to provide optimal support and comfort.",
    buttonText: "Find Your Perfect Mattress",
    buttonColor: "#3F51B5",
    buttonHoverColor: "#303F9F",
  },
  {
    id: 8,
    company: "PureWater Filters",
    avatar: "https://github.com/purewater.png",
    avatarFallback: "PW",
    description:
      "Ensure your family drinks the purest water with PureWater Filters. Advanced filtration for your peace of mind.",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075756/cld-sample-10.jpg",
    title: "PURE WATER, PURE LIFE",
    content:
      "Our filters remove 99.9% of contaminants, giving you crystal clear, great-tasting water.",
    buttonText: "Get Clean Water",
    buttonColor: "#00BCD4",
    buttonHoverColor: "#0097A7",
  },
  {
    id: 9,
    company: "MindBoost Learning",
    avatar: "https://github.com/mindboost.png",
    avatarFallback: "MB",
    description:
      "Unlock your brain's potential with MindBoost Learning. Cognitive enhancement programs for all ages.",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075755/cld-sample.jpg",
    title: "SHARPEN YOUR MIND",
    content:
      "Our scientifically-designed courses help improve memory, focus, and cognitive function.",
    buttonText: "Boost Your Brain",
    buttonColor: "#FF5722",
    buttonHoverColor: "#E64A19",
  },
  {
    id: 10,
    company: "GreenLife Skincare",
    avatar: "https://github.com/greenlife.png",
    avatarFallback: "GL",
    description:
      "Nourish your skin naturally with GreenLife Skincare. Organic, cruelty-free products for radiant skin.",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075756/cld-sample-12.jpg",
    title: "GLOW NATURALLY",
    content:
      "Discover our range of plant-based cleansers, moisturizers, and serums.",
    buttonText: "Reveal Your Glow",
    buttonColor: "#795548",
    buttonHoverColor: "#5D4037",
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
          {currentAd.buttonText}
        </button>
      </div>
    </div>
  );
}

