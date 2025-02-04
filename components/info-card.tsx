import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Hospital, Clock, MapPin, Phone } from "lucide-react";

export function InfoCard() {
  return (
    <Card className="bg-primary/5 border-none">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Hospital className="h-6 w-6 text-primary" />
          <div>
            <CardTitle className="text-2xl">Health Care Finder</CardTitle>
            <CardDescription>
              Find the care you need, when you need it
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4">
          <div className="flex items-start space-x-3">
            <MapPin className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-semibold">Nearby Facilities</h3>
              <p className="text-sm text-muted-foreground">
                Find hospitals, clinics, and urgent care centers in your area
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Clock className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-semibold">Real-time Availability</h3>
              <p className="text-sm text-muted-foreground">
                See which facilities are open now and their current wait times
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Phone className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-semibold">Direct Contact</h3>
              <p className="text-sm text-muted-foreground">
                Get instant access to facility contact information and
                directions
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
