import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-embroidery.jpg";

const HeroSection = () => {
  return (
    <section className="relative hero-gradient min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Exquisite Schiffli embroidery work" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="h-6 w-6 text-callout" />
              <span className="text-callout font-medium tracking-wide">Premium Schiffli Embroidery</span>
            </div>
            
            <h1 className="text-hero mb-6">
              Crafting Excellence in
              <span className="text-callout block">Textile Artistry</span>
            </h1>
            
            <p className="text-xl leading-relaxed mb-8 text-white/90 max-w-xl">
              Transform your vision into stunning embroidered masterpieces. Suvidha Fashion specializes in 
              precision Schiffli embroidery on nets, cottons, and luxury fabrics with our extensive design library.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                asChild
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white shadow-accent group"
              >
                <Link to="/portfolio">
                  View Our Portfolio
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm hover:border-callout hover:text-callout transition-all duration-300"
              >
                <Link to="/contact">
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-callout" />
                </div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Sparkles className="h-8 w-8 text-callout" />
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-white/80">Unique Designs</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-callout" />
                </div>
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Column - Featured Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={heroImage} 
                alt="Premium embroidered fabric showcase" 
                className="w-full h-[500px] object-cover hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Quality Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-elegant">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-primary">Premium Quality</div>
                  <div className="text-sm text-muted-foreground">Certified Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-callout/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;