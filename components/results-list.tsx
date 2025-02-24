import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Star, Navigation2 } from "lucide-react";

interface Result {
  id: string;
  name: string;
  address: string;
  rating: number;
  phone?: string;
  openNow?: boolean;
}

const dummyResults: Result[] = [
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
    phone: "+25411051530",
    openNow: true,
  },
];

export function ResultsList() {
  const results = dummyResults;

  return (
    <div className="space-y-4">
      {results.map((result) => (
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
              <div className="flex items-center space-x-4">
                {result.phone && (
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 mr-1" />
                    {result.phone}
                  </div>
                )}
                {result.openNow !== undefined && (
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <Badge variant={result.openNow ? "default" : "secondary"}>
                      {result.openNow ? "Open Now" : "Closed"}
                    </Badge>
                  </div>
                )}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="opacity-1 group-hover:opacity-100 transition-opacity "
              >
                <Navigation2 className="h-4 w-4 mr-2" />
                Get directions
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
