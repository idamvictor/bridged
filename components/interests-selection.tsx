"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Heart,
  Brain,
  Baby,
  Leaf,
  Shield,
  Dumbbell,
  Globe,
  Smile,
  Zap,
  Microscope,
  Scale,
  Anchor,
  Cpu,
} from "lucide-react";

const interests = [
  { id: "Healthy living", label: "Healthy living", icon: Heart },
  { id: "Nutrition & Diet", label: "Nutrition & Diet", icon: Leaf },
  {
    id: "Mental Health Awareness",
    label: "Mental Health Awareness",
    icon: Brain,
  },
  { id: "Womens Health", label: "Women's Health", icon: Smile },
  { id: "Pediatrics & Parenting", label: "Pediatrics & Parenting", icon: Baby },
  { id: "Alternative Medicine", label: "Alternative Medicine", icon: Leaf },
  { id: "Disease Prevention", label: "Disease Prevention", icon: Shield },
  { id: "Fitness & Exercise", label: "Fitness & Exercise", icon: Dumbbell },
  {
    id: "Public Health Advocacy",
    label: "Public Health Advocacy",
    icon: Globe,
  },
  {
    id: "Mindfulness & Meditation",
    label: "Mindfulness & Meditation",
    icon: Brain,
  },
  { id: "Stress Management", label: "Stress Management", icon: Zap },
  { id: "Medical Research", label: "Medical Research", icon: Microscope },
  { id: "Weight Loss", label: "Weight Loss", icon: Scale },
  { id: "Mental Resilience", label: "Mental Resilience", icon: Anchor },
  { id: "Technology", label: "Technology", icon: Cpu },
];

export function InterestsSelection() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const router = useRouter();

  const handleInterestChange = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the selected interests to your backend
    // For this example, we'll just move to the dashboard
    router.push("/user");
  };

  return (
    <Card className="w-[400px] max-w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Select Your Interests
        </CardTitle>
        <CardDescription className="text-center">
          Choose the topics that interest you most
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <ScrollArea className="h-[300px] pr-4">
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest) => (
                <div
                  key={interest.id}
                  className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                    selectedInterests.includes(interest.id)
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted"
                  }`}
                >
                  <Checkbox
                    id={interest.id}
                    checked={selectedInterests.includes(interest.id)}
                    onCheckedChange={() => handleInterestChange(interest.id)}
                    className="rounded-full"
                  />
                  <Label
                    htmlFor={interest.id}
                    className="flex items-center cursor-pointer text-sm font-medium"
                  >
                    <interest.icon className="w-4 h-4 mr-2" />
                    {interest.label}
                  </Label>
                </div>
              ))}
            </div>
          </ScrollArea>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          {selectedInterests.length} selected
        </p>
        <Button
          onClick={handleSubmit}
          disabled={selectedInterests.length === 0}
          className="bg-[#d42ca7] hover:bg-[#a5147e] transition-colors"
        >
          Continue to Dashboard
        </Button>
      </CardFooter>
    </Card>
  );
}
