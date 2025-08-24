"use client";

import { Phone, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About SPES", href: "#about" },
      { name: "Our Coaches", href: "#coaches" },
      { name: "Achievements", href: "#achievements" },
      { name: "Careers", href: "#careers" },
    ],
    programs: [
      { name: "Beginner Foundation", href: "#programs" },
      { name: "Advanced Strategy", href: "#programs" },
      { name: "Elite Masterclass", href: "#programs" },
      { name: "Corporate Training", href: "#corporate" },
    ],
    support: [
      { name: "Contact Us", href: "#contact" },
      { name: "FAQ", href: "#faq" },
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
    ],
  };

  return (
    <footer className="bg-[#7F55B1] text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-3xl font-bold mb-4">
              SPES
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              School for Professional and Elite Strategy – A Global Hub Where Champions Rise. Train with FIDE-rated coaches, sharpen your tactics, and join the next generation of elite players.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <ExternalLink className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <ExternalLink className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <ExternalLink className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400 text-sm">
                <Phone className="h-4 w-4 mr-2" />
                +91 6235 603556
              </li>
              <li className="flex items-start text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>SPES Chess Academy, Kolani Junction, Temple Road (Kolani Bypass Road), Thodupuzha – 685608, Idukki District, Kerala, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#9B7EBD] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} SPES - School for Professional and Elite Strategy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}