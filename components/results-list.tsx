/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { useEffect, useState } from "react";
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

interface Result {
  id: string;
  name: string;
  address: string;
  rating?: number;
  openNow?: boolean;
}

interface ResultsListProps {
  userLocation: { latitude: number; longitude: number } | null;
}

export function ResultsList({ userLocation }: ResultsListProps) {
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(5);

  useEffect(() => {
    if (!userLocation) return;

    async function fetchHospitals() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://maps.gomaps.pro/maps/api/place/nearbysearch/json?location=${userLocation?.latitude},${userLocation?.longitude}&radius=5000&type=hospital&key=AlzaSyMySEr8nzz3xQ2eTnf-mtFRj2Fh6mqf83r`
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
        } else {
          setError("No hospitals found nearby.");
        }
      } catch (error) {
        setError("Error fetching hospitals. Please try again.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchHospitals();
  }, [userLocation]);

  if (!userLocation) {
    return (
      <div className="text-center text-muted-foreground">
        <p>
          No location provided. Please click on the{" "}
          <strong>&quot;Use My Location&quot;</strong> button above to fetch
          nearby hospitals.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {loading && <p className="text-muted-foreground">Loading hospitals...</p>}
      {error && <p className="text-red-500">{error}</p>}

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
            className="bg-primary hover:bg-primary/80"
          >
            Show More
          </Button>
        </div>
      )}
    </div>
  );
}
