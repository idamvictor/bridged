// "use client";

// import { useState, useEffect } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Search, MapPin, History } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// export default function SearchBar() {
//   const [query, setQuery] = useState("");
//   const [suggestions, setSuggestions] = useState<string[]>([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [recentSearches, setRecentSearches] = useState<string[]>([]);
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [userLocation, setUserLocation] = useState<{
//     latitude: number;
//     longitude: number;
//   } | null>(null);

//   const API_KEY = "AlzaSyMySEr8nzz3xQ2eTnf-mtFRj2Fh6mqf83r"; // Replace with your actual API key

//   // Load recent searches from localStorage on component mount
//   useEffect(() => {
//     const savedSearches = localStorage.getItem("recentSearches");
//     if (savedSearches) {
//       setRecentSearches(JSON.parse(savedSearches));
//     }
//   }, []);

//   // Fetch suggestions from the API
//   useEffect(() => {
//     if (query.length > 2) {
//       fetchSuggestions(query);
//     } else {
//       setSuggestions([]);
//     }
//   }, [query]);

//   const fetchSuggestions = async (input: string) => {
//     try {
//       const response = await fetch(
//         `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${input}&key=${API_KEY}&types=health|doctor|hospital&keyword=hospital|clinic|medical`
//       );
//       const data = await response.json();
//       if (data.predictions) {
//         setSuggestions(
//           // eslint-disable-next-line @typescript-eslint/no-explicit-any
//           data.predictions.map((prediction: any) => prediction.description)
//         );
//       }
//     } catch (error) {
//       console.error("Error fetching suggestions:", error);
//     }
//   };

//   // Handle search submission
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     performSearch(query);
//   };

//   // Perform search and update recent searches
//   const performSearch = (searchQuery: string) => {
//     if (searchQuery.trim() !== "") {
//       // Perform the search logic here
//       console.log("Searching for:", searchQuery); // Replace this with your actual search logic

//       // Add the search query to recent searches
//       const updatedSearches = [
//         searchQuery,
//         ...recentSearches.filter(
//           (search) => search.toLowerCase() !== searchQuery.toLowerCase()
//         ),
//       ].slice(0, 5); // Limit to 5 items and remove duplicates
//       setRecentSearches(updatedSearches);
//       localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));

//       console.log("Recent Searches Updated:", updatedSearches); // Debugging
//     }
//     setShowSuggestions(false);
//   };

//   // Handle "Use my location" button click
//   const handleUseLocation = () => {
//     console.log("Requesting user location...");

//     if (!navigator.geolocation) {
//       console.error("Geolocation is not supported by this browser.");
//       return;
//     }

//     console.log("Requesting user location...");

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         setUserLocation({ latitude, longitude });
//         console.log("User location:", { latitude, longitude }); // Log location to console

//         // Optionally, you can perform a search based on the user's location
//         performSearch(
//           `Nearby healthcare facilities at ${latitude}, ${longitude}`
//         );
//       },
//       (error) => {
//         switch (error.code) {
//           case error.PERMISSION_DENIED:
//             console.error("User denied the request for Geolocation.");
//             break;
//           case error.POSITION_UNAVAILABLE:
//             console.error("Location information is unavailable.");
//             break;
//           case error.TIMEOUT:
//             console.error("The request to get user location timed out.");
//             break;
//           default:
//             console.error("An unknown error occurred.");
//             break;
//         }
//       },
//       {
//         enableHighAccuracy: true, // Request high accuracy (optional)
//         timeout: 5000, // Timeout after 5 seconds
//         maximumAge: 0, // Do not use a cached position
//       }
//     );
//   };

//   return (
//     <div className="relative w-full max-w-2xl mx-auto">
//       <form onSubmit={handleSubmit} className="relative flex items-center">
//         <div className="relative flex-1">
//           <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//             <Search className="h-4 w-4 text-muted-foreground" />
//           </div>
//           <Input
//             type="text"
//             className="pl-10 pr-20 h-12 text-lg rounded-full border-2 border-primary/20 focus-visible:ring-primary"
//             placeholder="Search for health care facilities"
//             value={query}
//             onChange={(e) => {
//               setQuery(e.target.value);
//               setShowSuggestions(true);
//             }}
//             onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
//           />
//           {showSuggestions && suggestions.length > 0 && (
//             <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
//               {suggestions.map((suggestion, index) => (
//                 <div
//                   key={index}
//                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                   onClick={() => {
//                     setQuery(suggestion);
//                     performSearch(suggestion); // Call performSearch directly
//                   }}
//                 >
//                   {suggestion}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//         <Button
//           type="submit"
//           className="absolute right-2 rounded-full"
//           size="sm"
//         >
//           Search
//         </Button>
//       </form>
//       <div className="absolute -bottom-10 left-3 flex items-center space-x-4">
//         <Button
//           variant="ghost"
//           size="sm"
//           className="text-sm text-muted-foreground"
//           onClick={handleUseLocation} // Add onClick handler for "Use my location"
//         >
//           <MapPin className="h-4 w-4 mr-1" />
//           Use my location
//         </Button>

//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button
//               variant="ghost"
//               size="sm"
//               className="text-sm text-muted-foreground"
//             >
//               <History className="h-4 w-4 mr-1" />
//               Recent searches
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="start" className="w-[200px]">
//             {recentSearches.length > 0 ? (
//               recentSearches.map((search, index) => (
//                 <DropdownMenuItem
//                   key={index}
//                   onClick={() => {
//                     setQuery(search);
//                     performSearch(search); // Call performSearch directly
//                   }}
//                 >
//                   {search}
//                 </DropdownMenuItem>
//               ))
//             ) : (
//               <DropdownMenuItem disabled>No recent searches</DropdownMenuItem>
//             )}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function page() {
  return <div>page</div>;
}
