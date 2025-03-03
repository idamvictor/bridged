import { MapPinCheck, Newspaper } from "lucide-react";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import ThreeColLine from "./three-col-line";

export default function HeaderNav() {
  return (
    <div className=" space-x-8 fixed bottom-0 left-0 right-0 bg-[#e8f3f1] md:bg-white z-10 md:static">
      <ThreeColLine />
      <div className="flex items-center justify-around  h-16">
        <Link
          href="/news"
          className="text-sm font-medium flex flex-col items-center"
        >
          <Newspaper size={20} /> News
        </Link>
        <Link
          href="/groups"
          className="text-sm font-medium flex flex-col items-center"
        >
          <Image
            src="/Interconnectivity.svg"
            width={23}
            height={23}
            alt="Groups"
          />
          Interconnectivity
        </Link>
        <Link
          href="/map"
          className="text-sm font-medium flex flex-col items-center"
        >
          <MapPinCheck size={20} />
          Map
        </Link>
      </div>
    </div>
  );
}
