"use client";

import { Card, CardContent } from "@/components/ui/card";
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
              Excellence in Chess Education
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Founded with a vision to create world-class chess players, SPES has become the premier destination 
              for serious chess education. Our academy combines traditional chess wisdom with modern training 
              methodologies to develop strategic thinkers and tactical masters.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              From beginners taking their first steps to experienced players aiming for grandmaster titles, 
              we provide the guidance, resources, and competitive environment needed to excel in the royal game.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-3xl font-bold text-black">8</div>
                <div className="text-sm text-gray-700">Years of Excellence</div>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-3xl font-bold text-black">15</div>
                <div className="text-sm text-gray-700">Expert Coaches</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-700">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}