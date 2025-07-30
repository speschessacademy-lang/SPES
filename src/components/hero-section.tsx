"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-black px-4 py-1.5 text-sm font-medium text-black mb-6">
            🏆 Premier Chess Academy Since 2020
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
            Master the
            <span className="text-black">
              Art of Strategy
            </span>
            <br />
            at SPES
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            School for Professional and Elite Strategy - Where grandmasters are made.
            Transform your chess skills with world-class coaching and elite training programs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
              onClick={() => scrollToSection('#contact')}
            >
              Start Your Journey
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg rounded-full"
              onClick={() => scrollToSection('#programs')}
            >
              Explore Programs
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-gray-300">
            <div className="text-center">
              <div className="text-3xl font-bold text-black">500+</div>
              <div className="text-sm text-gray-700">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black">25+</div>
              <div className="text-sm text-gray-700">Grandmasters</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black">50+</div>
              <div className="text-sm text-gray-700">National Champions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={() => scrollToSection('#about')}
        >
          <ChevronDown className="h-6 w-6 text-gray-700" />
        </Button>
      </div>
    </section>
  );
}