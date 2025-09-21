import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const PortfolioPreview = () => {
  // Categories data
  const categories = [
    {
      id: "border",
      name: "Border",
      description: "Elegant border designs for sarees and garments",
      icon: "🔲",
      designs: 85,
      image: "/api/placeholder/400/300"
    },
    {
      id: "cotton-embroidery", 
      name: "Cotton Embroidery",
      description: "Traditional and contemporary cotton fabric embroidery",
      icon: "🌿",
      designs: 120,
      image: "/api/placeholder/400/300"
    },
    {
      id: "dry-laces",
      name: "Dry Laces",
      description: "Intricate dry lace patterns for premium applications",
      icon: "✨",
      designs: 65,
      image: "/api/placeholder/400/300"
    },
    {
      id: "gpo-allover-lace",
      name: "GPO Allover & Lace", 
      description: "All-over patterns and delicate lace work",
      icon: "🎭",
      designs: 95,
      image: "/api/placeholder/400/300"
    },
    {
      id: "net-embroidery",
      name: "Net Embroidery",
      description: "Premium net fabrics with Schiffli embroidery",
      icon: "🕸️",
      designs: 110,
      image: "/api/placeholder/400/300"
    },
    {
      id: "schiffli-garments",
      name: "Schiffli Garments",
      description: "Complete garment embroidery solutions",
      icon: "👗",
      designs: 75,
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-callout/20 px-4 py-2 rounded-full mb-6">
            <Heart className="h-4 w-4 text-accent" />
            <span className="text-accent font-medium">Our Masterpieces</span>
          </div>
          <h2 className="text-section-title mb-6">
            Explore Our Exquisite
            <span className="text-accent block">Design Categories</span>
          </h2>
          <p className="text-elegant max-w-3xl mx-auto">
            From elegant borders to intricate all-over patterns, discover our comprehensive range of Schiffli embroidery categories. 
            Each collection showcases our commitment to quality, innovation, and timeless craftsmanship.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category) => (
            <Card key={category.id} className="group hover-lift border-border/50 overflow-hidden cursor-pointer bg-gradient-to-br from-white to-secondary/30">
              <Link to={`/category/${category.id}`} className="block">
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] bg-gradient-to-br from-callout/20 to-accent/20 flex items-center justify-center relative">
                    <div className="text-center">
                      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                        {category.icon}
                      </div>
                      <div className="absolute top-4 right-4 bg-accent/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {category.designs} designs
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                      <Eye className="h-4 w-4 mr-2" />
                      View Collection
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl text-primary mb-3 group-hover:text-accent transition-smooth">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  <div className="mt-4 flex items-center text-accent font-medium text-sm group-hover:translate-x-1 transition-transform">
                    Explore Collection <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-elegant inline-block">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Explore Our Complete Collection
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Browse through hundreds of unique designs across different categories and fabric types.
            </p>
            <Button 
              asChild
              size="lg" 
              className="bg-accent hover:bg-accent/90 shadow-accent group"
            >
              <Link to="/portfolio">
                View Full Portfolio
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;