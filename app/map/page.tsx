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
import { Button } from "@/components/ui/button";

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
    name: "Halcyon Hospital",
    address: "Office Suites, 7th Floor, Fifth Ngong Ave., Nairobi, Kenya",
    rating: 4.9,
    phone: "+254794264502",
    openNow: true,
  },
  {
    id: "2",
    name: "The Nairobi Hospital",
    address: "Argwings Kodhek Road, Nairobi, Kenya",
    rating: 3.4,
    phone: "+254202845000",
    openNow: true,
  },
  {
    id: "3",
    name: "MP Shah Hospital",
    address: "Shivaji Road, Nairobi, Kenya",
    rating: 4.3,
    phone: "+254111000600",
    openNow: false,
  },
  {
    id: "4",
    name: "Rayhaan Healthcare",
    address: "Park Medical Centre, 3rd Parklands Ave., Nairobi, Kenya",
    rating: 4.8,
    phone: "+254111051530",
    openNow: true,
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
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background mb-10">
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
                <div className="flex flex-col gap-4">
                  <ResultsList results={results} />

                  <Button
                    className="bg-[#d42ca7] hover:bg-[#a5147e]"
                  >
                    See More Places
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <InfoCard />
              <Card className="border-2 border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Emergency Hotlines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Kenya</div>
                      <Badge variant="destructive">112</Badge>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Ethiopia</div>
                      <Badge variant="destructive">911</Badge>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Ghana</div>
                      <Badge variant="destructive">112</Badge>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Nigeria</div>
                      <Badge variant="destructive">112</Badge>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Tanzania</div>
                      <Badge variant="destructive">114</Badge>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Uganda</div>
                      <Badge variant="destructive">911</Badge>
                    </div>
                    <Separator />
                    <div className="text-sm text-muted-foreground">
                      For immediate medical emergencies, please dial the
                      emergency hotline for your country, or visit the nearest
                      healthcare facility.
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
