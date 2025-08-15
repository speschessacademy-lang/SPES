"use client";

import { Card, CardContent } from "@/components/ui/card";
import site from "@/content/site.json";
import { Award, Users, Target, Trophy } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Strategic Excellence",
      description: "We focus on developing deep strategic thinking and tactical precision in every student.",
    },
    {
      icon: Users,
      title: "Elite Coaching",
      description: "Learn from internationally recognized grandmasters and experienced chess educators.",
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "Our students consistently achieve national and international tournament success.",
    },
    {
      icon: Award,
      title: "Personalized Training",
      description: "Tailored programs designed to maximize each student's unique potential and learning style.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-sm font-semibold text-black mb-2">ABOUT SPES</div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              {site.about.heading}
            </h2>
            {site.about.paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-[#6E5A8E] mb-8 leading-relaxed">{p}</p>
            ))}
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 border border-[#EADFF3] bg-[#F7EEF9] rounded-lg">
                <div className="text-3xl font-bold text-black">{site.about.stats.years}</div>
                <div className="text-sm text-[#6E5A8E]">Years of Excellence</div>
              </div>
              <div className="text-center p-4 border border-[#EADFF3] bg-[#F7EEF9] rounded-lg">
                <div className="text-3xl font-bold text-black">{site.about.stats.coaches}</div>
                <div className="text-sm text-[#6E5A8E]">Coaches</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border border-[#EADFF3] hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#FFE1E0] rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-[#7F55B1]" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">{value.title}</h3>
                  <p className="text-sm text-[#6E5A8E]">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}