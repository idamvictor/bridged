import { MapPinCheck, Newspaper, RadioTower } from "lucide-react";

import Link from "next/link";
import React from "react";
import ThreeColLine from "./three-col-line";

export default function HeaderNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white z-10 md:static">
      <div className="md:hidden">
        <ThreeColLine />
      </div>
      <div className="flex items-center justify-around  h-16 space-x-8">
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
          <RadioTower size={20} />
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
