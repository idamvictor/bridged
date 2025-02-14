

import { MapPinCheck, Newspaper } from 'lucide-react';
import { FaConnectdevelop } from "react-icons/fa";

import Link from 'next/link';
import React from 'react'

export default function HeaderNav() {
  return (
    <div className="flex items-center justify-around space-x-8 fixed bottom-0 left-0 right-0 bg-[#e8f3f1] z-10 h-16 px-4 md:static">
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
        
        <FaConnectdevelop size={23} />
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
  );
}
