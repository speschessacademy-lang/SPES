"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import testimonialsDoc from "@/content/testimonials.json";

type Testimonial = {
  name: string;
  title: string;
  rating: number;
  text: string;
  image?: string;
  achievement?: string;
};

export default function TestimonialsSection() {
  const testimonials = (testimonialsDoc as { items: Testimonial[] }).items as Array<{
    name: string;
    title: string;
    rating: number;
    text: string;
    image?: string;
    achievement?: string;
  }>;

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="h-5 w-5 text-[#F49BAB] fill-current" />
    ));
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-[#7F55B1] mb-2">SUCCESS STORIES</div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-[#6E5A8E] max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Hear from students and parents who have experienced 
            the SPES difference and achieved remarkable success in their chess journey.
          </p>
        </div>

        <div className="testimonial-marquee group">
          <div className="testimonial-track">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="min-w-[320px] max-w-[340px] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      {testimonial.image ? (
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      ) : null}
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
                  <blockquote className="text-[#6E5A8E] leading-relaxed mb-4">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                  {testimonial.achievement ? (
                    <div className="bg-[#F7EEF9] rounded-lg p-3">
                      <p className="text-sm font-medium text-black">{testimonial.achievement}</p>
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[#7F55B1] rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Join 500+ Success Stories</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Be the next success story. Start your chess mastery journey with SPES today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#7F55B1] px-6 py-3 rounded-full font-semibold hover:bg-[#FFE1E0] transition-colors">
                Start Your Journey
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors">
                View More Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}