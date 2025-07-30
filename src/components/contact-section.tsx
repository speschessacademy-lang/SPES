"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll contact you within 24 hours.");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "admissions@spes-chess.com",
      href: "mailto:admissions@spes-chess.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-CHESS",
      href: "tel:+15551232437"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "123 Grandmaster Avenue, Chess District, NY 10001",
      href: "#"
    },
    {
      icon: Clock,
      title: "Hours",
      value: "Mon-Fri: 9AM-8PM, Sat-Sun: 10AM-6PM",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-black mb-2">CONTACT & ENROLLMENT</div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Start Your Chess Journey Today
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to transform your chess skills? Get in touch with our team to discuss 
            your goals and find the perfect program for your chess development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <Card className="shadow-xl border-0">
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900">Enrollment Inquiry</CardTitle>
                <CardDescription className="text-gray-600">
                  Fill out the form below and our team will contact you within 24 hours
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-gray-700">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="program" className="text-gray-700">Interested Program</Label>
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a program</option>
                        <option value="beginner">Beginner Foundation</option>
                        <option value="advanced">Advanced Strategy</option>
                        <option value="elite">Elite Masterclass</option>
                        <option value="not-sure">Not sure - need consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Tell us about your chess experience and goals..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-semibold"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Get in Touch</CardTitle>
                <CardDescription className="text-gray-600">
                  Multiple ways to reach our team
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <info.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-black">Special Offer</CardTitle>
                <CardDescription className="text-gray-700">
                  Limited time for new students
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-black mb-2">Free Assessment</div>
                    <p className="text-gray-700">
                      Get a comprehensive chess skills evaluation with one of our grandmaster coaches. 
                      Valued at $150, now FREE for new students.
                    </p>
                  </div>
                  
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-center">✓ 60-minute one-on-one session</li>
                    <li className="flex items-center">✓ Personalized learning plan</li>
                    <li className="flex items-center">✓ Program recommendation</li>
                    <li className="flex items-center">✓ No obligation to enroll</li>
                  </ul>
                  
                  <div className="pt-4">
                    <div className="text-xs text-gray-500 mb-2">⏰ Limited spots remaining this month
                    </div>
                    <Button className="w-full bg-black hover:bg-gray-800 text-white font-semibold">
                      Book Free Assessment
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}