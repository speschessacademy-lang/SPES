"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Award, Trophy } from "lucide-react";

export default function ProgramsSection() {
  const programs = [
    {
      title: "Beginner Foundation",
      description: "Perfect for new players starting their chess journey",
      price: "$299",
      period: "month",
      features: [
        "Basic rules and piece movement",
        "Opening principles",
        "Tactical patterns",
        "Endgame fundamentals",
        "Weekly group sessions",
        "Progress tracking"
      ],
      icon: Star,
      color: "bg-green-100 text-green-600",
      popular: false
    },
    {
      title: "Advanced Strategy",
      description: "For intermediate players looking to elevate their game",
      price: "$599",
      period: "month",
      features: [
        "Advanced opening theory",
        "Complex middlegame planning",
        "Positional understanding",
        "Tournament preparation",
        "Bi-weekly 1-on-1 coaching",
        "Game analysis sessions"
      ],
      icon: Award,
      color: "bg-blue-100 text-blue-600",
      popular: true
    },
    {
      title: "Elite Masterclass",
      description: "Intensive training for serious tournament players",
      price: "$999",
      period: "month",
      features: [
        "GM-level coaching",
        "Tournament strategy",
        "Psychological preparation",
        "Opening repertoire building",
        "Daily training sessions",
        "Personal mentor assignment",
        "Competition entries"
      ],
      icon: Trophy,
      color: "bg-purple-100 text-purple-600",
      popular: false
    }
  ];

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-black mb-2">PROGRAMS</div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Choose Your Path to Mastery
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From beginner foundations to elite masterclasses, we offer comprehensive programs 
            designed to accelerate your chess development at every level.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card key={index} className={`relative ${program.popular ? 'border-black shadow-xl scale-105' : 'border border-gray-200'}`}>
              {program.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className={`w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <program.icon className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="text-2xl font-bold text-black">{program.title}</CardTitle>
                <CardDescription className="text-gray-700 mt-2">{program.description}</CardDescription>
              </CardHeader>

              <CardContent className="pb-8">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-black">{program.price}</span>
                  <span className="text-gray-700">/{program.period}</span>
                </div>
                <ul className="space-y-3">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-black mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  className={`w-full py-3 ${program.popular ? 'bg-black hover:bg-gray-800' : 'bg-black hover:bg-gray-800'}`}
                  size="lg"
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="border border-gray-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">Not Sure Which Program is Right for You?</h3>
            <p className="text-gray-700 mb-6">
              Schedule a free consultation with our experts to assess your current level and recommend the perfect program.
            </p>
            <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-3">
              Book Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}