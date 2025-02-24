/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, Navigation2 } from "lucide-react";
import { useEffect, useState } from "react";

const API_KEY = "AlzaSyMySEr8nzz3xQ2eTnf-mtFRj2Fh6mqf83r"; // Replace with your key
const LOCATION = "40.712776,-74.005974"; // New York City coordinates
const RADIUS = 5000; // 5km radius

interface Result {
  id: string;
  name: string;
  address: string;
  rating?: number;
  openNow?: boolean;
}

export function ResultsList() {
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(5); // Show 5 hospitals initially

  useEffect(() => {
    async function fetchHospitals() {
      try {
        const response = await fetch(
          `https://maps.gomaps.pro/maps/api/place/nearbysearch/json?location=${LOCATION}&radius=${RADIUS}&type=hospital&key=${API_KEY}`
        );
        const data = await response.json();

        if (data.results) {
          const hospitals = data.results.map((place: any) => ({
            id: place.place_id,
            name: place.name,
            address: place.vicinity,
            rating: place.rating || "N/A",
            openNow: place.opening_hours?.open_now,
          }));
          setResults(hospitals);
        }
      } catch (error) {
        console.error("Error fetching hospitals:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchHospitals();
  }, []);

  return (
    <div className="space-y-4">
      {loading ? (
        <p>Loading hospitals...</p>
      ) : (
        <>
          {results.slice(0, visibleCount).map((result) => (
            <Card
              key={result.id}
              className="hover:shadow-lg transition-shadow group"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {result.name}
                    </CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-1 text-primary" />
                      {result.address}
                    </CardDescription>
                  </div>
                  <div className="flex items-center bg-primary/10 px-2 py-1 rounded-full">
                    <Star className="h-4 w-4 text-primary mr-1 fill-primary" />
                    <span className="font-medium">{result.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  {result.openNow !== undefined && (
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <Badge variant={result.openNow ? "default" : "secondary"}>
                        {result.openNow ? "Open Now" : "Closed"}
                      </Badge>
                    </div>
                  )}
                  <Button variant="outline" size="sm">
                    <Navigation2 className="h-4 w-4 mr-2" />
                    Get directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {visibleCount < results.length && (
            <div className="text-center mt-4">
              <Button
                onClick={() => setVisibleCount(visibleCount + 5)}
                className="bg-[#d42ca7] hover:bg-[#a5147e]"
              >
                Show More
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
