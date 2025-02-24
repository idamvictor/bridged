"use client";
import { useState, useEffect } from "react";
import { MapPlaceholder } from "@/components/map-placeholder";
import { ResultsList } from "@/components/results-list";
import { InfoCard } from "@/components/info-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/search-bar";

export default function Page() {
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  useEffect(() => {
    if (selectedLocation) {
      console.log("Selected location:", selectedLocation);
    }
  }, [selectedLocation]);

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
          <SearchBar
            setUserLocation={setUserLocation}
            setSelectedLocation={setSelectedLocation}
          />
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
                  <ResultsList />
                  <Button className="bg-[#d42ca7] hover:bg-[#a5147e]">
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
