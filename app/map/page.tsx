"use client";

import { useState } from "react";
import { MapPlaceholder } from "@/components/map-placeholder";
import { SearchBar } from "@/components/search-bar";
import { ResultsList } from "@/components/results-list";
import { InfoCard } from "@/components/info-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock } from "lucide-react";

interface HealthCareFacility {
  id: string;
  name: string;
  address: string;
  rating: number;
  phone: string;
  openNow: boolean;
}

const dummyResults: HealthCareFacility[] = [
  {
    id: "1",
    name: "City General Hospital",
    address: "123 Main St, New York, NY",
    rating: 4.5,
    phone: "(555) 123-4567",
    openNow: true,
  },
  {
    id: "2",
    name: "Community Health Clinic",
    address: "456 Elm St, New York, NY",
    rating: 4.2,
    phone: "(555) 234-5678",
    openNow: true,
  },
  {
    id: "3",
    name: "Downtown Urgent Care",
    address: "789 Oak St, New York, NY",
    rating: 4.0,
    phone: "(555) 345-6789",
    openNow: false,
  },
];

export default function Page() {
  const [results, setResults] = useState<HealthCareFacility[]>(dummyResults);

  const handleSearch = (query: string) => {
    // In a real application, you would make an API call here
    // For now, we'll just filter the dummy results based on the query
    const filteredResults = dummyResults.filter(
      (facility) =>
        facility.name.toLowerCase().includes(query.toLowerCase()) ||
        facility.address.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto p-8">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 text-transparent bg-clip-text">
              Find Healthcare Facilities
            </h1>
            <p className="text-xl text-muted-foreground">
              Locate nearby hospitals, clinics, and medical facilities in your
              area
            </p>
          </div>

          <SearchBar onSearch={handleSearch} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="h-[400px] rounded-xl overflow-hidden shadow-xl">
                <MapPlaceholder />
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">
                  Nearby Facilities
                </h2>
                <ResultsList results={results} />
              </div>
            </div>

            <div className="space-y-8">
              <InfoCard />
              <Card className="border-2 border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Emergency Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Emergency Hotline</div>
                      <Badge variant="destructive">911</Badge>
                    </div>
                    <Separator />
                    <div className="text-sm text-muted-foreground">
                      For immediate medical emergencies, please dial 911 or
                      visit your nearest emergency room.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
