"use client";

import { Button } from "@/components/ui/button";
import site from "@/content/site.json";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 lg:p-12 mt-20 mb-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            {/* Left Side - Text Content */}
            <div className="text-left animate-in fade-in slide-in-from-left duration-700">
              {/* Logo above heading */}
              <div className="mb-4 animate-in fade-in slide-in-from-bottom duration-700">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.svg" alt="SPES" className="h-14 w-14 md:h-16 md:w-16 drop-shadow" />
              </div>
              {/* Main heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight animate-in fade-in slide-in-from-bottom duration-700 delay-200">
                <span className="text-gradient-primary animate-gradient drop-shadow-sm">
                  {site.hero.title}
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base md:text-lg text-[#6E5A8E] mb-6 max-w-lg leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-300">
                {site.hero.subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 items-start mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-400">
                <Button 
                  size="lg" 
                  className="bg-[#7F55B1] hover:bg-[#6e49a0] text-white px-6 py-4 text-base rounded-full transition-all duration-300 hover:scale-105"
                  onClick={() => scrollToSection('#contact')}
                >
                  {site.hero.ctaPrimary}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-[#7F55B1] text-[#7F55B1] hover:bg-[#7F55B1] hover:text-white px-6 py-4 text-base rounded-full transition-all duration-300 hover:scale-105"
                  onClick={() => scrollToSection('#about')}
                >
                  {site.hero.ctaSecondary}
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-md pt-4 border-t border-[#EADFF3] animate-in fade-in slide-in-from-bottom duration-700 delay-500">
                <div className="text-left">
                  <div className="text-2xl font-bold text-black">{site.hero.stats.students}</div>
                  <div className="text-sm text-[#6E5A8E]">Students</div>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-black">{site.hero.stats.coaches}</div>
                  <div className="text-sm text-[#6E5A8E]">Coaches</div>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-black">{site.hero.stats.champions}</div>
                  <div className="text-sm text-[#6E5A8E]">Champions</div>
                </div>
              </div>
            </div>

            {/* Right Side - Chessboard Art */}
            <div className="relative hidden lg:flex items-center justify-center animate-in fade-in slide-in-from-right duration-700 delay-300">
              <div className="relative w-full max-w-md xl:max-w-lg aspect-square">
                {/* Chessboard */}
                <div className="absolute inset-0 transform rotate-12 scale-90">
                  <div className="grid grid-cols-8 grid-rows-8 w-full h-full shadow-xl rounded-lg overflow-hidden transform transition-transform duration-700 hover:rotate-0 hover:scale-95">
                    {Array.from({ length: 64 }).map((_, index) => {
                      const row = Math.floor(index / 8);
                      const col = index % 8;
                      const isBlack = (row + col) % 2 === 1;
                      return (
                        <div
                          key={index}
                          className={`${isBlack ? 'bg-black' : 'bg-white'} border border-[#EADFF3] transition-all duration-300 hover:scale-110`}
                        />
                      );
                    })}
                  </div>
                </div>
                
                {/* Floating Chess Pieces */}
                <div className="absolute top-1/4 -left-4 w-12 h-12 bg-[#7F55B1] rounded-full animate-bounce opacity-80" />
                <div className="absolute top-1/3 -right-4 w-10 h-10 bg-[#9B7EBD] rounded-sm animate-bounce opacity-80" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-[#F49BAB] rounded-full animate-bounce opacity-80" style={{ animationDelay: '1s' }} />
                
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl -z-10 transform rotate-6 opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-gray-100 transition-colors duration-300"
          onClick={() => scrollToSection('#about')}
        >
          <ChevronDown className="h-6 w-6 text-[#7F55B1]" />
        </Button>
      </div>
    </section>
  );
}