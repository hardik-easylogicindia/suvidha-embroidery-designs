import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cog, Palette, Shield, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const capabilities = [
    {
      icon: Cog,
      title: "Advanced Schiffli Machinery",
      description: "State-of-the-art Schiffli embroidery machines ensuring precision and consistency in every stitch."
    },
    {
      icon: Palette,
      title: "Extensive Design Library",
      description: "500+ original designs ranging from traditional motifs to contemporary patterns, all exclusively created."
    },
    {
      icon: Shield,
      title: "Premium Quality Control",
      description: "Rigorous quality checks at every stage to ensure each piece meets our exacting standards."
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Efficient production processes that deliver exceptional results within promised timelines."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Cog className="h-4 w-4 text-primary" />
              <span className="text-primary font-medium">About Suvidha Fashion</span>
            </div>
            
            <h2 className="text-section-title mb-6">
              Masters of Schiffli
              <span className="text-accent block">Embroidery Excellence</span>
            </h2>
            
            <div className="space-y-6 text-elegant">
              <p>
                With over 15 years of dedication to the art of textile embroidery, Suvidha Fashion has established 
                itself as a premier destination for exquisite Schiffli embroidery work on nets, cottons, and 
                specialty fabrics.
              </p>
              
              <p>
                Our journey began with a simple vision: to bridge the gap between traditional craftsmanship and 
                modern design sensibilities. Today, we proudly serve fashion designers, boutiques, and textile 
                manufacturers across the region with our unmatched quality and creativity.
              </p>
              
              <p>
                Every piece that emerges from our workshop tells a story of meticulous attention to detail, 
                innovative design thinking, and unwavering commitment to excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-primary/90 shadow-elegant group"
              >
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="border-accent text-accent hover:bg-accent hover:text-white"
              >
                <Link to="/contact">Schedule Visit</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Capabilities Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className="hover-lift border-border/50 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-smooth">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-bold text-primary mb-3 group-hover:text-accent transition-smooth">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-secondary/30 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Numbers That Define Our Excellence
            </h3>
            <p className="text-elegant max-w-2xl mx-auto">
              Our commitment to quality and innovation is reflected in every metric that matters.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-primary font-semibold mb-1">Years Experience</div>
              <div className="text-sm text-muted-foreground">In textile embroidery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-primary font-semibold mb-1">Design Patterns</div>
              <div className="text-sm text-muted-foreground">Original creations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">200+</div>
              <div className="text-primary font-semibold mb-1">Satisfied Clients</div>
              <div className="text-sm text-muted-foreground">Across the region</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">99%</div>
              <div className="text-primary font-semibold mb-1">Quality Rating</div>
              <div className="text-sm text-muted-foreground">Customer satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;