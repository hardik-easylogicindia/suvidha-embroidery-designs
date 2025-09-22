import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Award, Users, ChevronDown, Eye, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-embroidery.jpg";

const HeroSection = () => {
  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight * 0.8,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative hero-gradient min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Exquisite Schiffli embroidery work" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Sparkles className="h-5 w-5 text-callout animate-pulse" />
                <span className="text-callout font-semibold tracking-wide">Premium Schiffli Embroidery</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Crafting Excellence in
                <span className="text-callout block mt-2 bg-gradient-to-r from-callout to-accent bg-clip-text text-transparent">
                  Textile Artistry
                </span>
              </h1>
              
              <p className="text-xl leading-relaxed text-white/90 max-w-xl">
                Transform your vision into stunning embroidered masterpieces. Suvidha Fashion specializes in 
                precision Schiffli embroidery with our extensive design library.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg" 
                className="bg-callout hover:bg-callout/90 text-white shadow-2xl group h-14 px-8 text-lg font-semibold"
              >
                <Link to="/portfolio">
                  <Eye className="mr-2 h-5 w-5" />
                  Explore Our Portfolio
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="border-2 border-white/40 text-white hover:bg-white hover:text-primary backdrop-blur-sm h-14 px-8 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Link to="/contact">
                  <Phone className="mr-2 h-4 w-4" />
                  Get Custom Quote
                </Link>
              </Button>
            </div>

            {/* Quick Navigation */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-4 text-callout">Explore Our Services</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Border Designs", path: "/category/border" },
                  { name: "Cotton Embroidery", path: "/category/cotton-embroidery" },
                  { name: "Dry Laces", path: "/category/dry-laces" },
                  { name: "Net Embroidery", path: "/category/net-embroidery" }
                ].map((item, index) => (
                  <Link 
                    key={index}
                    to={item.path}
                    className="group flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-sm font-medium">{item.name}</span>
                    <ArrowRight className="h-4 w-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Featured Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src={heroImage} 
                alt="Premium embroidered fabric showcase" 
                className="w-full h-[600px] object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              
              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-xs text-muted-foreground">Years</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-xs text-muted-foreground">Designs</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">200+</div>
                      <div className="text-xs text-muted-foreground">Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Quality Badge */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-callout to-accent rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="text-white">
                  <div className="font-bold">Premium Quality</div>
                  <div className="text-sm opacity-90">Certified Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToNextSection}
          className="group flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-all duration-300"
        >
          <span className="text-sm font-medium">Discover More</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center group-hover:border-callout transition-colors">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 group-hover:bg-callout animate-bounce"></div>
          </div>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </button>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-callout/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
    </section>
  );
};

export default HeroSection;