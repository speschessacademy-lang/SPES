"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false); // Close the sheet
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Close sheet when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border border-[#EADFF3]"
          : "bg-white/80 backdrop-blur-sm"
      } rounded-full px-4 md:px-8 py-2 md:min-w-[600px] md:max-w-4xl w-auto md:w-auto`}
    >
      <div className="flex items-center justify-center w-full">
        
        {/* Logo removed to keep navbar centered */}

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-sm font-medium text-black hover:text-[#7F55B1] transition-colors link-underline"
            >
              {item.name}
            </a>
          ))}
          <Button 
            variant="outline" 
            size="sm"
            className="border-[#7F55B1] text-[#7F55B1] hover:bg-[#7F55B1] hover:text-white rounded-full px-4 py-1 text-sm btn-shine"
          >
            Enroll
          </Button>
        </div>

        {/* Mobile Navigation - Hamburger only */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-black hover:bg-[#FFE1E0]">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 p-0">
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <SheetDescription className="sr-only">Navigation menu for mobile devices</SheetDescription>
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="p-6 border-b border-[#FFE1E0]">
                  <h2 className="text-xl font-bold text-black">Menu</h2>
                </div>
                
                {/* Navigation Links */}
                <div className="flex-1 py-8">
                  <nav className="flex flex-col space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.href)}
                        className="px-6 py-4 text-lg font-medium text-black hover:bg-[#FFE1E0] transition-colors border-b border-[#FFE1E0] last:border-b-0"
                      >
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
                
                {/* Footer with CTA */}
                <div className="p-6 border-t border-[#FFE1E0]">
                  <Button 
                    variant="outline"
                    className="w-full border-[#7F55B1] text-[#7F55B1] hover:bg-[#7F55B1] hover:text-white rounded-full py-3 text-base btn-shine"
                    onClick={(e) => scrollToSection(e, '#contact')}
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}