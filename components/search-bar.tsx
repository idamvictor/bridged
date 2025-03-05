// "use client"; // This directive ensures the component runs in a client-side environment.

// import { useState, useEffect } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Search, MapPin, History } from "lucide-react"; // Icons for UI elements
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"; // Dropdown menu components

// // Define props expected by the SearchBar component
// interface SearchBarProps {
//   setUserLocation: (
//     location: { latitude: number; longitude: number } | null
//   ) => void;
//   setSelectedLocation: (location: string | null) => void;
// }

// // SearchBar component
// export default function SearchBar({
//   setUserLocation,
//   setSelectedLocation,
// }: SearchBarProps) {
//   const [query, setQuery] = useState(""); // Stores the user's search input
//   const [suggestions, setSuggestions] = useState<string[]>([]); // Stores autocomplete suggestions
//   const [showSuggestions, setShowSuggestions] = useState(false); // Controls whether suggestions dropdown is visible
//   const [recentSearches, setRecentSearches] = useState<string[]>([]); // Stores recent search history

//   const API_KEY = "AlzaSyufDCg7v8KEmwZ_jDadXH8kxfdt1yDjrcO"; // Replace with your actual API key

//   // Load recent searches from local storage on component mount
//   useEffect(() => {
//     const savedSearches = localStorage.getItem("recentSearches");
//     if (savedSearches) {
//       setRecentSearches(JSON.parse(savedSearches));
//     }
//   }, []);

//   // Fetch autocomplete suggestions when the user types
//   useEffect(() => {
//     if (query.length > 2) {
//       fetchSuggestions(query);
//     } else {
//       setSuggestions([]); // Clear suggestions if query is too short
//     }
//   }, [query]);

//   // Fetch location suggestions from the API
//   const fetchSuggestions = async (input: string) => {
//     try {
//       const response = await fetch(
//         `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${input}&key=${API_KEY}&types=health|doctor|hospital&keyword=hospital|clinic|medical`
//       );
//       const data = await response.json();
//       if (data.predictions) {
//         setSuggestions(
//           data.predictions.map(
//             (prediction: { description: string }) => prediction.description
//           )
//         );
//       }
//     } catch (error) {
//       console.error("Error fetching suggestions:", error);
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     performSearch(query);
//   };

//   // Perform a search and update recent searches
//   const performSearch = (searchQuery: string) => {
//     if (searchQuery.trim() !== "") {
//       console.log("Searching for:", searchQuery);
//       setSelectedLocation(searchQuery); // Updates selected location in parent component

//       // Update and store recent searches
//       const updatedSearches = [
//         searchQuery,
//         ...recentSearches.filter(
//           (search) => search.toLowerCase() !== searchQuery.toLowerCase()
//         ),
//       ].slice(0, 5); // Keep only the last 5 searches
//       setRecentSearches(updatedSearches);
//       localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
//     }
//     setShowSuggestions(false); // Hide suggestions after search
//   };

//   // Handle "Use my location" functionality
//   const handleUseLocation = () => {
//     if (!navigator.geolocation) {
//       console.error("Geolocation is not supported by this browser.");
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         setUserLocation({ latitude, longitude }); // Update user location in parent component

//         // Format a readable location string
//         const locationString = `Nearby healthcare facilities at ${latitude}, ${longitude}`;
//         setSelectedLocation(locationString); // Update selected location in parent component
//         console.log("User location:", locationString);

//         performSearch(locationString);
//       },
//       (error) => {
//         // Handle possible geolocation errors
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
//         enableHighAccuracy: true, // Request high accuracy for better results
//         timeout: 5000, // Maximum time to wait for location response
//         maximumAge: 0, // Prevent using cached location data
//       }
//     );
//   };

//   return (
//     <div className="relative w-full max-w-2xl mx-auto">
//       {/* Search form */}
//       <form onSubmit={handleSubmit} className="relative flex items-center">
//         <div className="relative flex-1">
//           {/* Search icon */}
//           <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//             <Search className="h-4 w-4 text-muted-foreground" />
//           </div>
//           {/* Search input */}
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
//           {/* Suggestions dropdown */}
//           {showSuggestions && suggestions.length > 0 && (
//             <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
//               {suggestions.map((suggestion, index) => (
//                 <div
//                   key={index}
//                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                   onMouseDown={() => {
//                     setQuery(suggestion);
//                     performSearch(suggestion);
//                   }}
//                 >
//                   {suggestion}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//         {/* Search button */}
//         <Button
//           type="submit"
//           className="absolute right-2 rounded-full"
//           size="sm"
//         >
//           Search
//         </Button>
//       </form>

//       {/* Additional options: Use my location & recent searches */}
//       <div className="absolute -bottom-10 left-3 flex items-center space-x-4">
//         {/* Use my location button */}
//         <Button
//           variant="ghost"
//           size="sm"
//           className="text-sm text-muted-foreground"
//           onClick={handleUseLocation}
//         >
//           <MapPin className="h-4 w-4 mr-1" />
//           Use my location
//         </Button>

//         {/* Dropdown for recent searches */}
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
//                   onMouseDown={() => {
//                     setQuery(search);
//                     performSearch(search);
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

// interface SearchBarProps {
//   setUserLocation: (
//     location: { latitude: number; longitude: number } | null
//   ) => void;
//   setSelectedLocation: (location: string | null) => void;
//   setSelectedCoords: (
//     coords: { latitude: number; longitude: number } | null
//   ) => void; // NEW PROP
// }

// export default function SearchBar({
//   setUserLocation,
//   setSelectedLocation,
// }: SearchBarProps) {
//   const [query, setQuery] = useState("");
//   const [suggestions, setSuggestions] = useState<
//     { description: string; placeId: string }[]
//   >([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [recentSearches, setRecentSearches] = useState<string[]>([]);
//   const [selectedCoords, setSelectedCoords] = useState<{
//     latitude: number;
//     longitude: number;
//   } | null>(null);

//   const API_KEY = "AlzaSyufDCg7v8KEmwZ_jDadXH8kxfdt1yDjrcO";

//   useEffect(() => {
//     const savedSearches = localStorage.getItem("recentSearches");
//     if (savedSearches) {
//       setRecentSearches(JSON.parse(savedSearches));
//     }
//   }, []);

//   useEffect(() => {
//     if (query.length > 2) {
//       fetchSuggestions(query);
//     } else {
//       setSuggestions([]);
//     }
//   }, [query]);

//   // Fetch medical facilities only
//   const fetchSuggestions = async (input: string) => {
//     try {
//       const response = await fetch(
//         `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${input}&key=${API_KEY}&types=health|doctor|hospital&keyword=hospital|clinic|medical`
//       );
//       const data = await response.json();
//       if (data.predictions) {
//         setSuggestions(
//           data.predictions.map(
//             (prediction: { description: string; place_id: string }) => ({
//               description: prediction.description,
//               placeId: prediction.place_id,
//             })
//           )
//         );
//       }
//     } catch (error) {
//       console.error("Error fetching suggestions:", error);
//     }
//   };

//   // Fetch latitude & longitude of selected place
//   const fetchPlaceDetails = async (placeId: string) => {
//     try {
//       const response = await fetch(
//         `https://maps.gomaps.pro/maps/api/place/details/json?place_id=${placeId}&key=${API_KEY}`
//       );
//       const data = await response.json();

//       if (data.result && data.result.geometry) {
//         const { lat, lng } = data.result.geometry.location;
//         setSelectedCoords({ latitude: lat, longitude: lng });
//         console.log("Selected location coordinates:", lat, lng);
//       }
//     } catch (error) {
//       console.error("Error fetching place details:", error);
//     }
//   };

//   // Perform search and update recent searches
//   const performSearch = (searchQuery: string, placeId?: string) => {
//     if (searchQuery.trim() !== "") {
//       console.log("Searching for:", searchQuery);
//       setSelectedLocation(searchQuery);
//       setQuery(searchQuery); // Ensure query input updates

//       if (placeId) {
//         fetchPlaceDetails(placeId); // Fetch coordinates if available
//       }

//       const updatedSearches = [
//         searchQuery,
//         ...recentSearches.filter(
//           (search) => search.toLowerCase() !== searchQuery.toLowerCase()
//         ),
//       ].slice(0, 5);

//       setRecentSearches(updatedSearches);
//       localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
//     }
//     setShowSuggestions(false);
//   };

//   // Use current location
//   const handleUseLocation = () => {
//     if (!navigator.geolocation) {
//       console.error("Geolocation is not supported by this browser.");
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         setUserLocation({ latitude, longitude });

//         const locationString = `Nearby healthcare facilities at ${latitude}, ${longitude}`;
//         setSelectedLocation(locationString);
//         console.log("User location:", locationString);

//         performSearch(locationString);
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
//         enableHighAccuracy: true,
//         timeout: 5000,
//         maximumAge: 0,
//       }
//     );
//   };

//   return (
//     <div className="relative w-full max-w-2xl mx-auto">
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           performSearch(query);
//         }}
//         className="relative flex items-center"
//       >
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
//                   onMouseDown={() => {
//                     setQuery(suggestion.description);
//                     performSearch(suggestion.description, suggestion.placeId);
//                   }}
//                 >
//                   {suggestion.description}
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
//           onClick={handleUseLocation}
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
//                   onMouseDown={() => performSearch(search)}
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

"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, History } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SearchBarProps {
  setUserLocation: (
    location: { latitude: number; longitude: number } | null
  ) => void;
  setSelectedLocation: (location: string | null) => void;
  setSelectedCoords: (
    coords: { latitude: number; longitude: number } | null
  ) => void;
}

export default function SearchBar({
  setUserLocation,
  setSelectedLocation,
  setSelectedCoords,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<
    { description: string; placeId: string }[]
  >([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const API_KEY = "AlzaSyufDCg7v8KEmwZ_jDadXH8kxfdt1yDjrcO";

  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches");
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  useEffect(() => {
    if (query.length > 2) {
      fetchSuggestions(query);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  // Fetch only medical facilities
  const fetchSuggestions = async (input: string) => {
    try {
      const response = await fetch(
        `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${input}&key=${API_KEY}&types=health|doctor|hospital&keyword=hospital|clinic|medical`
      );
      const data = await response.json();
      if (data.predictions) {
        setSuggestions(
          data.predictions.map(
            (prediction: { description: string; place_id: string }) => ({
              description: prediction.description,
              placeId: prediction.place_id,
            })
          )
        );
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  // Fetch latitude & longitude of selected place
  const fetchPlaceDetails = async (placeId: string) => {
    try {
      const response = await fetch(
        `https://maps.gomaps.pro/maps/api/place/details/json?place_id=${placeId}&key=${API_KEY}`
      );
      const data = await response.json();

      if (data.result && data.result.geometry) {
        const { lat, lng } = data.result.geometry.location;
        setSelectedCoords({ latitude: lat, longitude: lng });
        console.log("Selected location coordinates:", lat, lng);
      }
    } catch (error) {
      console.error("Error fetching place details:", error);
    }
  };

  // Perform search and update recent searches
  const performSearch = (searchQuery: string, placeId?: string) => {
    if (searchQuery.trim() !== "") {
      console.log("Searching for:", searchQuery);
      setSelectedLocation(searchQuery);
      setQuery(searchQuery);

      if (placeId) {
        fetchPlaceDetails(placeId);
      }

      const updatedSearches = [
        searchQuery,
        ...recentSearches.filter(
          (search) => search.toLowerCase() !== searchQuery.toLowerCase()
        ),
      ].slice(0, 5);

      setRecentSearches(updatedSearches);
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
    }
    setShowSuggestions(false);
  };

  // Use current location
  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });

        const locationString = `Nearby healthcare facilities at ${latitude}, ${longitude}`;
        setSelectedLocation(locationString);
        console.log("User location:", locationString);

        // performSearch(locationString);
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.error("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            console.error("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            console.error("The request to get user location timed out.");
            break;
          default:
            console.error("An unknown error occurred.");
            break;
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          performSearch(query);
        }}
        className="relative flex items-center"
      >
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
          <Input
            type="text"
            className="pl-10 pr-20 h-12 text-lg rounded-full border-2 border-primary/20 focus-visible:ring-primary"
            placeholder="Search for healthcare facilities"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onMouseDown={() => {
                    setQuery(suggestion.description);
                    performSearch(suggestion.description, suggestion.placeId);
                  }}
                >
                  {suggestion.description}
                </div>
              ))}
            </div>
          )}
        </div>
        <Button
          type="submit"
          className="absolute right-2 rounded-full"
          size="sm"
        >
          Search
        </Button>
      </form>

      <div className="absolute -bottom-10 left-3 flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          className="text-sm text-muted-foreground"
          onClick={handleUseLocation}
        >
          <MapPin className="h-4 w-4 mr-1" />
          Use my location
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="text-sm text-muted-foreground"
            >
              <History className="h-4 w-4 mr-1" />
              Recent searches
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            {recentSearches.length > 0 ? (
              recentSearches.map((search, index) => (
                <DropdownMenuItem
                  key={index}
                  onMouseDown={() => performSearch(search)}
                >
                  {search}
                </DropdownMenuItem>
              ))
            ) : (
              <DropdownMenuItem disabled>No recent searches</DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
