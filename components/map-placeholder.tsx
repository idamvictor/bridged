import Image from "next/image";
import { MapPin } from "lucide-react";

export function MapPlaceholder() {
  return (
    <div className="relative w-full h-full bg-muted rounded-xl overflow-hidden">
      <Image
        src="/placeholder.svg?height=400&width=800"
        alt="Map placeholder"
        width={800}
        height={400}
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-lg font-medium text-muted-foreground">
            Map view coming soon
          </p>
        </div>
      </div>
    </div>
  );
}
