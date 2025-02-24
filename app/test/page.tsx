// "use client";

// import React, { useEffect } from "react";

// export default function Page() {
//   const apiKey = "AlzaSyMySEr8nzz3xQ2eTnf-mtFRj2Fh6mqf83r"; // 🔹 Replace with your actual API key

//   useEffect(() => {
//     // Check if Google Maps is already loaded
//     if ((window as any).google) {
//       initMap();
//       return;
//     }

//     // Load Google Maps script dynamically
//     const script = document.createElement("script");
//     script.src = `https://maps.gomaps.pro/maps/api/js?key=${apiKey}&callback=initMap`;
//     script.async = true;
//     script.defer = true;
//     document.head.appendChild(script);

//     // Define the initMap function globally
//     (window as any).initMap = () => {
//       const map = new google.maps.Map(
//         document.getElementById("map") as HTMLElement,
//         {
//           center: { lat: 37.7749, lng: -122.4194 }, // Example: San Francisco
//           zoom: 10,
//         }
//       );

//       new google.maps.Marker({
//         position: { lat: 37.7749, lng: -122.4194 },
//         map,
//         title: "San Francisco",
//       });
//     };

//     return () => {
//       document.head.removeChild(script); // Cleanup on unmount
//     };
//   }, []);

//   // Ensure TypeScript recognizes `google`
//   declare global {
//     interface Window {
//       initMap: () => void;
//     }
//   }

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Google Map</h1>
//       <div id="map" style={{ width: "100%", height: "500px" }}></div>
//     </div>
//   );
// }

import React from "react";

export default function page() {
  return <div>page</div>;
}
