/* eslint-disable @typescript-eslint/no-explicit-any */
// import Image from "next/image";
// import { MapPin } from "lucide-react";

// export function MapPlaceholder() {
//   return (
//     <div className="relative w-full h-full bg-muted rounded-xl overflow-hidden">
//       <Image
//         src="/placeholder.svg?height=400&width=800"
//         alt="Map placeholder"
//         width={800}
//         height={400}
//         className="object-cover"
//         priority
//       />
//       <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center">
//         <div className="text-center">
//           <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
//           <p className="text-lg font-medium text-muted-foreground">
//             Map view coming soon
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import React, { useEffect } from "react";

// // Ensure TypeScript recognizes Google Maps types
// declare global {
//   interface Window {
//     google?: any; // ✅ Allow dynamic loading (no direct `typeof google`)
//     initMap?: () => void;
//   }
// }

// export function MapPlaceholder() {
//   const apiKey = "AlzaSy9ZftUvE_vnjzYS2Xdp76aT3N8GqIKB3jw"; // 🔹 Replace with your actual API key

//   useEffect(() => {
//     function initMap() {
//       if (!window.google || !window.google.maps) return; // ✅ Ensure Google Maps is loaded

//       const map = new window.google.maps.Map(
//         document.getElementById("map") as HTMLElement,
//         {
//           center: { lat: 37.7749, lng: -122.4194 }, // Example: San Francisco
//           zoom: 10,
//         }
//       );

//       new window.google.maps.Marker({
//         position: { lat: 37.7749, lng: -122.4194 },
//         map,
//         title: "San Francisco",
//       });
//     }

//     // If Google Maps is already loaded, initialize it
//     if (window.google && window.google.maps) {
//       initMap();
//       return;
//     }

//     // Assign initMap to window before loading script
//     window.initMap = initMap;

//     const script = document.createElement("script");
//     script.src = `https://maps.gomaps.pro/maps/api/js?key=${apiKey}&callback=initMap`;
//     script.async = true;
//     script.defer = true;
//     document.head.appendChild(script);

//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="relative w-full h-[400px] bg-muted rounded-xl overflow-hidden">
//       <div id="map" className="absolute inset-0 w-full h-full"></div>
//     </div>
//   );
// }

// "use client";

// import React, { useEffect } from "react";

// declare global {
//   interface Window {
//     google?: any;
//     initMap?: () => void;
//   }
// }

// interface MapPlaceholderProps {
//   selectedCoords: { latitude: number; longitude: number } | null;
// }

// export function MapPlaceholder({ selectedCoords }: MapPlaceholderProps) {
//   const apiKey = "AlzaSy9ZftUvE_vnjzYS2Xdp76aT3N8GqIKB3jw"; // Replace with your actual API key

//   useEffect(() => {
//     function initMap() {
//       if (!window.google || !window.google.maps) return;

//       const map = new window.google.maps.Map(
//         document.getElementById("map") as HTMLElement,
//         {
//           center: selectedCoords
//             ? { lat: selectedCoords.latitude, lng: selectedCoords.longitude }
//             : { lat: 37.7749, lng: -122.4194 }, // Default to San Francisco
//           zoom: 12,
//         }
//       );

//       new window.google.maps.Marker({
//         position: selectedCoords
//           ? { lat: selectedCoords.latitude, lng: selectedCoords.longitude }
//           : { lat: 37.7749, lng: -122.4194 },
//         map,
//         title: "Selected Location",
//       });
//     }

//     if (window.google && window.google.maps) {
//       initMap();
//       return;
//     }

//     window.initMap = initMap;

//     const script = document.createElement("script");
//     script.src = `https://maps.gomaps.pro/maps/api/js?key=${apiKey}&callback=initMap`;
//     script.async = true;
//     script.defer = true;
//     document.head.appendChild(script);

//     return () => {
//       document.head.removeChild(script);
//     };
//   }, [selectedCoords]); // 🔹 Re-run if `selectedCoords` changes

//   return (
//     <div className="relative w-full h-[400px] bg-muted rounded-xl overflow-hidden">
//       <div id="map" className="absolute inset-0 w-full h-full"></div>
//     </div>
//   );
// }

"use client";

import React, { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    google?: any;
    initMap?: () => void;
  }
}

interface MapPlaceholderProps {
  selectedCoords: { latitude: number; longitude: number } | null;
}

export function MapPlaceholder({ selectedCoords }: MapPlaceholderProps) {
  const apiKey = "AlzaSy9ZftUvE_vnjzYS2Xdp76aT3N8GqIKB3jw"; // Replace with your actual API key

  useEffect(() => {
    function initMap() {
      if (!window.google || !window.google.maps) return;

      const map = new window.google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: selectedCoords
            ? { lat: selectedCoords.latitude, lng: selectedCoords.longitude }
            : { lat: 37.7749, lng: -122.4194 }, // Default to San Francisco
          zoom: 12,
        }
      );

      new window.google.maps.Marker({
        position: selectedCoords
          ? { lat: selectedCoords.latitude, lng: selectedCoords.longitude }
          : { lat: 37.7749, lng: -122.4194 },
        map,
        title: "Selected Location",
      });
    }

    if (window.google && window.google.maps) {
      initMap();
      return;
    }

    window.initMap = initMap;
  }, [selectedCoords]); // 🔹 Re-run if `selectedCoords` changes

  return (
    <div className="relative w-full h-[400px] bg-muted rounded-xl overflow-hidden">
      <Script
        src={`https://maps.gomaps.pro/maps/api/js?key=${apiKey}&callback=initMap`}
        strategy="afterInteractive"
      />
      <div id="map" className="absolute inset-0 w-full h-full"></div>
    </div>
  );
}
