"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "National Master",
      rating: 5,
      text: "SPES transformed my understanding of chess strategy. The personalized coaching and structured curriculum helped me achieve my National Master title in just 18 months. The instructors are world-class.",
      image: "/placeholder-avatar-1.jpg",
      achievement: "Rating: 2200+"
    },
    {
      name: "Marcus Rodriguez",
      title: "Youth Champion",
      rating: 5,
      text: "My son joined SPES at age 10 with basic knowledge. Within 2 years, he became the U12 National Champion. The academy doesn\'t just teach chess - they build champions with discipline and strategic thinking.",
      image: "/placeholder-avatar-2.jpg",
      achievement: "U12 National Champion 2024"
    },
    {
      name: "Dr. Emily Watson",
      title: "Parent & Chess Enthusiast",
      rating: 5,
      text: "As a parent, I was amazed by the transformation I saw in my daughter. Beyond chess skills, SPES taught her critical thinking, patience, and confidence. The supportive community is exceptional.",
      image: "/placeholder-avatar-3.jpg",
      achievement: "Daughter: 1800+ Rating"
    },
    {
      name: "David Kim",
      title: "Adult Learner",
      rating: 5,
      text: "Starting chess at 35, I thought it was too late. SPES proved me wrong. The structured approach and encouraging coaches made learning enjoyable. I'm now competing in local tournaments with confidence.",
      image: "/placeholder-avatar-4.jpg",
      achievement: "Rating: 1600+ in 1 year"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
    ));
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-blue-600 mb-2">SUCCESS STORIES</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Hear from students and parents who have experienced 
            the SPES difference and achieved remarkable success in their chess journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n=>n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote className="text-gray-700 leading-relaxed mb-4">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-blue-800">{testimonial.achievement}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Join 500+ Success Stories</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Be the next success story. Start your chess mastery journey with SPES today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Start Your Journey
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                View More Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}