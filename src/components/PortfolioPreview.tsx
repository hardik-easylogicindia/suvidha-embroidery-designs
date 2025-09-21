import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const PortfolioPreview = () => {
  // Mock portfolio data - in real app this would come from your data source
  const portfolioItems = [
    {
      id: 1,
      title: "Bridal Net Collection",
      category: "Luxury Nets",
      image: "/api/placeholder/400/300",
      description: "Intricate Schiffli work on premium net fabric",
      featured: true
    },
    {
      id: 2,
      title: "Cotton Embroidery",
      category: "Cotton Fabrics",
      image: "/api/placeholder/400/300",
      description: "Traditional patterns on fine cotton"
    },
    {
      id: 3,
      title: "Designer Motifs",
      category: "Custom Designs",
      image: "/api/placeholder/400/300",
      description: "Contemporary geometric patterns"
    },
    {
      id: 4,
      title: "Floral Elegance",
      category: "Classic Patterns",
      image: "/api/placeholder/400/300",
      description: "Delicate floral embroidered designs"
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
            Showcase of Our Finest
            <span className="text-accent block">Embroidery Work</span>
          </h2>
          <p className="text-elegant max-w-3xl mx-auto">
            Discover our extensive library of original designs, from traditional motifs to contemporary patterns. 
            Each piece represents the perfect blend of traditional craftsmanship and modern design sensibilities.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="group hover-lift border-border/50 overflow-hidden">
              <div className="relative overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-callout/20 to-accent/20 flex items-center justify-center">
                  {/* Placeholder for portfolio images */}
                  <div className="text-center">
                    <Eye className="h-12 w-12 text-accent/50 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Portfolio Image</p>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                  <Button variant="secondary" size="sm" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>

                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-3 right-3 bg-accent px-2 py-1 rounded-full">
                    <span className="text-xs font-semibold text-white">Featured</span>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-medium text-accent uppercase tracking-wide">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-smooth">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
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