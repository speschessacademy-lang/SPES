"use client";

import { useState } from "react";
import site from "@/content/site.json";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Clock, Send } from "lucide-react";

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
      icon: Phone,
      title: "Phone",
      value: "+91 6235 603556",
      href: "tel:+916235603556"
    },
    {
      icon: MapPin,
      title: "Official Address",
      value: "SPES Chess Academy, Kolani Junction, Temple Road (Kolani Bypass Road), Thodupuzha – 685608, Idukki District, Kerala, India",
      href: "https://maps.google.com/?q=SPES+Chess+Academy+Kolani+Junction+Thodupuzha+Kerala+India"
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
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{site.contact.heading}</h2>
          <p className="text-xl text-[#6E5A8E] max-w-3xl mx-auto">{site.contact.lead}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <Card className="shadow-xl border-0">
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900">Enrollment Inquiry</CardTitle>
                <CardDescription className="text-[#6E5A8E]">
                  Fill out the form below and our team will contact you within 24 hours
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-[#6E5A8E]">Full Name *</Label>
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
                      <Label htmlFor="email" className="text-[#6E5A8E]">Email Address *</Label>
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
                      <Label htmlFor="phone" className="text-[#6E5A8E]">Phone Number</Label>
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
                      <Label htmlFor="program" className="text-[#6E5A8E]">Interested Program</Label>
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        className="w-full mt-1 px-3 py-2 border border-[#EADFF3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9B7EBD] focus:border-transparent"
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
                    <Label htmlFor="message" className="text-[#6E5A8E]">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 border border-[#EADFF3] focus:ring-2 focus:ring-[#9B7EBD] focus:border-transparent"
                      placeholder="Tell us about your chess experience and goals..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#7F55B1] hover:bg-[#6e49a0] text-white py-3 rounded-lg font-semibold"
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
                    <div className="w-10 h-10 bg-[#FFE1E0] rounded-lg flex items-center justify-center group-hover:bg-[#F49BAB]/40 transition-colors">
                      <info.icon className={`${info.title === 'Official Address' ? 'h-5 w-10' : 'h-5 w-5'} text-[#7F55B1]`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}