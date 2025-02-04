"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, History } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const recentSearches = [
    "Hospitals near me",
    "Urgent Care Centers",
    "Pediatric Clinics",
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
          <Input
            type="text"
            className="pl-10 pr-20 h-12 text-lg rounded-full border-2 border-primary/20 focus-visible:ring-primary"
            placeholder="Search for health care facilities"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          className="absolute right-2 rounded-full"
          size="sm"
        >
          Search
        </Button>
      </form>
      <div className="absolute -bottom-10 left-3 flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          className="text-sm text-muted-foreground"
        >
          <MapPin className="h-4 w-4 mr-1" />
          Use my location
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="text-sm text-muted-foreground"
            >
              <History className="h-4 w-4 mr-1" />
              Recent searches
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            {recentSearches.map((search) => (
              <DropdownMenuItem
                key={search}
                onClick={() => {
                  setQuery(search);
                  onSearch(search);
                }}
              >
                {search}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
