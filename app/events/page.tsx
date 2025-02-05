"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, Mail } from "lucide-react";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-03-01T00:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle the email submission
    console.log("Email submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="text-center text-white p-8 max-w-2xl w-full">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Events Feature Coming Soon!
          </h1>
          <p className="text-xl mb-8">
            We&apos;re working hard to bring you an amazing events experience. Stay
            tuned!
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="text-4xl font-bold">{value}</div>
              <div className="text-sm uppercase">{unit}</div>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-white/20 text-white placeholder-white/70 border-white/30 max-w-xs"
            required
          />
          <Button
            type="submit"
            className="bg-white text-purple-600 hover:bg-white/90"
          >
            Notify Me
          </Button>
        </form>

        <div className="mt-12 flex justify-center space-x-8">
          <Calendar className="w-16 h-16" />
          <Mail className="w-16 h-16" />
        </div>
      </div>
    </div>
  );
}
