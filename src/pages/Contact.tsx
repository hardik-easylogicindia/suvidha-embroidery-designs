import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Calendar,
  FileText,
  CheckCircle,
  Globe,
  User
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    timeline: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your inquiry. Our team will contact you within 24 hours with a detailed response.",
    });
    setFormData({ 
      name: "", 
      email: "", 
      phone: "", 
      company: "", 
      projectType: "", 
      timeline: "", 
      budget: "", 
      message: "" 
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      subtitle: "Speak directly with our team",
      details: ["+91 98765 43210", "+91 87654 32109"],
      action: "Call Now",
      available: "Mon-Sat, 9AM-7PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      subtitle: "Send us a detailed message",
      details: ["info@suvidhafashion.com", "orders@suvidhafashion.com"],
      action: "Send Email",
      available: "24/7 Response"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      subtitle: "Quick chat for immediate queries",
      details: ["+91 98765 43210"],
      action: "Chat Now",
      available: "Real-time Support"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      subtitle: "Book a consultation call",
      details: ["Video Call", "In-Person Visit"],
      action: "Book Now",
      available: "Flexible Timing"
    }
  ];

  const officeInfo = [
    {
      title: "Head Office & Production",
      address: "123 Textile Hub, Fashion District",
      city: "Mumbai 400001, Maharashtra",
      timing: "Mon-Sat: 9:00 AM - 7:00 PM",
      facilities: ["Production Unit", "Design Studio", "Quality Lab", "Sample Room"]
    },
    {
      title: "Sales & Marketing Office", 
      address: "456 Business Center, Textile Plaza",
      city: "Mumbai 400002, Maharashtra", 
      timing: "Mon-Fri: 10:00 AM - 6:00 PM",
      facilities: ["Client Meeting Room", "Display Center", "Design Consultation"]
    }
  ];

  const projectTypes = [
    "Bridal Embroidery",
    "Fashion Designer Collaboration",
    "Bulk Production Orders",
    "Custom Design Development",
    "Sample Creation",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6">
            <MessageCircle className="h-4 w-4" />
            <span className="font-medium">Get In Touch</span>
          </div>
          <h1 className="text-hero mb-6">
            Let's Create Something
            <span className="text-callout block">Beautiful Together</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Ready to transform your ideas into stunning embroidered masterpieces? Our team of experts 
            is here to guide you through every step of your project.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section-title mb-4">
              Multiple Ways to
              <span className="text-accent block">Reach Us</span>
            </h2>
            <p className="text-elegant">Choose the communication method that works best for you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="hover-lift border-border/50 group text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-smooth">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-smooth">
                      {method.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{method.subtitle}</p>
                    <div className="space-y-1 mb-4">
                      {method.details.map((detail, idx) => (
                        <p key={idx} className="text-sm font-medium text-foreground">{detail}</p>
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs text-accent border-accent/30 mb-4">
                      {method.available}
                    </Badge>
                    <Button size="sm" className="w-full bg-accent hover:bg-accent/90">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Enhanced Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-elegant border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <FileText className="h-6 w-6 mr-3 text-accent" />
                    Project Inquiry Form
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out this detailed form to help us understand your requirements better
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-primary font-medium flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="border-border focus:border-accent focus:ring-accent/20"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-primary font-medium">
                          Company/Brand Name
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          className="border-border focus:border-accent focus:ring-accent/20"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-primary font-medium flex items-center">
                          <Mail className="h-4 w-4 mr-2" />
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="border-border focus:border-accent focus:ring-accent/20"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-primary font-medium flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="border-border focus:border-accent focus:ring-accent/20"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-2">
                      <Label htmlFor="projectType" className="text-primary font-medium">
                        Project Type *
                      </Label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-border rounded-md focus:border-accent focus:ring-accent/20 bg-background"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="timeline" className="text-primary font-medium">
                          Expected Timeline
                        </Label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-border rounded-md focus:border-accent focus:ring-accent/20 bg-background"
                        >
                          <option value="">Select timeline</option>
                          <option value="urgent">Urgent (1-2 weeks)</option>
                          <option value="standard">Standard (3-4 weeks)</option>
                          <option value="flexible">Flexible (1-2 months)</option>
                          <option value="planning">Planning Phase</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget" className="text-primary font-medium">
                          Budget Range
                        </Label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-border rounded-md focus:border-accent focus:ring-accent/20 bg-background"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-50k">Under ₹50,000</option>
                          <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                          <option value="1l-5l">₹1,00,000 - ₹5,00,000</option>
                          <option value="above-5l">Above ₹5,00,000</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-primary font-medium">
                        Project Details *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="border-border focus:border-accent focus:ring-accent/20 resize-none"
                        placeholder="Please describe your project in detail including:
• Type of fabric you prefer
• Design style or inspiration
• Quantity requirements
• Any specific color preferences
• Special requirements or deadlines"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-accent hover:bg-accent/90 shadow-accent group"
                    >
                      Submit Project Inquiry
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Information */}
            <div className="space-y-6">
              {officeInfo.map((office, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-primary mb-2">{office.title}</h3>
                        <div className="space-y-2 text-sm text-muted-foreground mb-4">
                          <p>{office.address}</p>
                          <p>{office.city}</p>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <span>{office.timing}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-primary">Facilities:</p>
                          <div className="flex flex-wrap gap-2">
                            {office.facilities.map((facility, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {facility}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Response Promise */}
              <Card className="bg-accent text-white shadow-accent">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-3">24-Hour Response Guarantee</h3>
                  <p className="text-white/90 mb-4 text-sm">
                    We promise to respond to all inquiries within 24 hours with a detailed proposal 
                    and next steps for your project.
                  </p>
                  <Badge className="bg-white/20 text-white border-white/30">
                    Guaranteed Response
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;