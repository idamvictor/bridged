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

const interests = [
  { id: "Healthy living", label: "Healthy living" },
  { id: "Nutrition & Diet", label: "Nutrition & Diet" },
  { id: "Mental Health Awareness", label: "Mental Health Awareness" },
  { id: "Womens Health", label: "Womens Health" },
  { id: "Pediatrics & Parenting", label: "Pediatrics & Parenting" },
  { id: "Alternative Medicine", label: "Alternative Medicine" },
  { id: "Disease Prevention", label: "Disease Prevention" },
  { id: "Fitness & Exercise", label: "Fitness & Exercise" },
  { id: "Public Health Advocacy", label: "Public Health Advocacy" },
  { id: "Mindfulness & Meditation", label: "Mindfulness & Meditation" },
  { id: "Stress Management", label: "Stress Management" },
  { id: "Medical Research", label: "Medical Research" },
  { id: "Weight Loss", label: "Weight Loss" },
  { id: "Mental Resilience", label: "Mental Resilience" },
  { id: "Technology", label: "Technology" },
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
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Select Your Interests</CardTitle>
        <CardDescription>Choose at least one interest</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            {interests.map((interest) => (
              <div className="flex items-center space-x-2" key={interest.id}>
                <Checkbox
                  id={interest.id}
                  checked={selectedInterests.includes(interest.id)}
                  onCheckedChange={() => handleInterestChange(interest.id)}
                />
                <Label htmlFor={interest.id}>{interest.label}</Label>
              </div>
            ))}
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleSubmit}
          disabled={selectedInterests.length === 0}
          className="bg-teal-600 hover:bg-teal-700"
        >
          Continue to Dashboard
        </Button>
      </CardFooter>
    </Card>
  );
}
