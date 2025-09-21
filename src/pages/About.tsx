import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  Cog, 
  Palette, 
  Shield, 
  Clock,
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const milestones = [
    { year: "2008", title: "Company Founded", description: "Started with a vision to create exceptional embroidery" },
    { year: "2012", title: "First Major Contract", description: "Secured partnership with leading fashion houses" },
    { year: "2016", title: "Technology Upgrade", description: "Invested in state-of-the-art Schiffli machinery" },
    { year: "2020", title: "Digital Transformation", description: "Launched online portfolio and digital catalog" },
    { year: "2024", title: "Industry Recognition", description: "Awarded 'Excellence in Textile Craftsmanship'" }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We never compromise on quality and continuously strive for perfection in every piece we create."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building long-term relationships with clients through trust, reliability, and exceptional service."
    },
    {
      icon: Palette,
      title: "Innovation",
      description: "Constantly exploring new design possibilities while honoring traditional craftsmanship techniques."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Honest business practices, transparent communication, and ethical manufacturing processes."
    }
  ];

  const capabilities = [
    "Advanced Schiffli Embroidery Machines",
    "Computer-Aided Design (CAD) Systems", 
    "Quality Control Laboratory",
    "Large-Scale Production Facility",
    "Custom Design Development Studio",
    "Sample Development Center"
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "OEKO-TEX Standard 100 Certified",
    "Global Organic Textile Standard (GOTS)",
    "Textile Excellence Award 2023"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <Award className="h-4 w-4" />
              <span className="font-medium">Our Story</span>
            </div>
            <h1 className="text-hero mb-6">
              Crafting Excellence for
              <span className="text-callout block">Over 15 Years</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              From humble beginnings to industry leadership, Suvidha Fashion has been at the forefront 
              of textile innovation, combining traditional Schiffli embroidery techniques with modern 
              design sensibilities to create truly exceptional pieces.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-section-title mb-6">
                The Journey of
                <span className="text-accent block">Suvidha Fashion</span>
              </h2>
              <div className="space-y-6 text-elegant">
                <p>
                  Founded in 2008 with a passion for textile artistry, Suvidha Fashion began as a small 
                  workshop dedicated to preserving the traditional art of Schiffli embroidery while 
                  embracing modern design innovations.
                </p>
                <p>
                  Our founder, with over two decades of experience in the textile industry, recognized 
                  the growing demand for high-quality, custom embroidered fabrics that could meet the 
                  exacting standards of fashion designers and luxury brands.
                </p>
                <p>
                  Today, we proudly serve over 200 satisfied clients across the region, from boutique 
                  fashion houses to large-scale manufacturers, all while maintaining our commitment to 
                  exceptional craftsmanship and personalized service.
                </p>
              </div>
              <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 group">
                <Link to="/portfolio">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent/30"></div>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start space-x-6">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center relative z-10">
                      <span className="text-white font-bold text-sm">{milestone.year.slice(-2)}</span>
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="bg-white rounded-xl p-6 shadow-elegant border border-border/50">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-primary">{milestone.title}</h3>
                          <Badge variant="outline" className="text-accent border-accent/30">
                            {milestone.year}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">
              Our Core
              <span className="text-accent block">Values</span>
            </h2>
            <p className="text-elegant max-w-3xl mx-auto">
              These principles guide every decision we make and every piece we create, 
              ensuring that our commitment to excellence never wavers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover-lift border-border/50 group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-smooth">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-bold text-xl text-primary mb-4 group-hover:text-accent transition-smooth">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities & Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Capabilities */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Cog className="h-8 w-8 text-accent" />
                <h2 className="text-section-title">
                  Our <span className="text-accent">Capabilities</span>
                </h2>
              </div>
              <p className="text-elegant mb-8">
                State-of-the-art equipment and proven processes that enable us to deliver 
                exceptional results consistently and efficiently.
              </p>
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Shield className="h-8 w-8 text-accent" />
                <h2 className="text-section-title">
                  Quality <span className="text-accent">Certifications</span>
                </h2>
              </div>
              <p className="text-elegant mb-8">
                Our commitment to quality is validated by industry-recognized certifications 
                and continuous compliance with international standards.
              </p>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="border-border/50 hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Star className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary">{cert}</h3>
                          <p className="text-sm text-muted-foreground">Verified & Current</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can bring your vision to life with exceptional 
            embroidery work that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-accent hover:bg-white/90"
            >
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;