import React from "react";

export default function ThreeColLine() {
  return (
    <div className="flex">
      <div className="h-1 bg-[#d42ca7] basis-1/3" />
      <div className="h-1 bg-yellow-500 basis-1/3" />
      <div className="h-1 bg-teal-500 basis-1/3" />
    </div>
  );
}
