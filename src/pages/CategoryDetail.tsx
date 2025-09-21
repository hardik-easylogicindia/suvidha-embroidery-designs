import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, ArrowLeft, Filter, Grid, List, Search, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";

const CategoryDetail = () => {
  const { categoryId } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  // Categories data
  const categories = {
    "border": {
      name: "Border",
      description: "Elegant border designs for sarees and garments",
      icon: "🔲", 
      longDescription: "Our border collection features exquisite designs that perfectly frame sarees, dupattas, and traditional garments. From classic paisley borders to contemporary geometric patterns, each design is crafted with precision using advanced Schiffli embroidery techniques."
    },
    "cotton-embroidery": {
      name: "Cotton Embroidery", 
      description: "Traditional and contemporary cotton fabric embroidery",
      icon: "🌿",
      longDescription: "Transform plain cotton fabrics into stunning masterpieces with our cotton embroidery collection. Perfect for casual wear, formal shirts, and ethnic wear, these designs combine comfort with elegance."
    },
    "dry-laces": {
      name: "Dry Laces",
      description: "Intricate dry lace patterns for premium applications", 
      icon: "✨",
      longDescription: "Our dry lace collection represents the pinnacle of delicate craftsmanship. These intricate patterns are perfect for bridal wear, evening gowns, and luxury garments that demand the finest attention to detail."
    },
    "gpo-allover-lace": {
      name: "GPO Allover & Lace",
      description: "All-over patterns and delicate lace work",
      icon: "🎭", 
      longDescription: "Experience the beauty of all-over embroidery with our GPO collection. These comprehensive patterns cover the entire fabric surface, creating stunning visual impact perfect for statement pieces and luxury applications."
    },
    "net-embroidery": {
      name: "Net Embroidery",
      description: "Premium net fabrics with Schiffli embroidery",
      icon: "🕸️",
      longDescription: "Our net embroidery collection showcases the ethereal beauty of embroidered net fabrics. Perfect for bridal wear, party dresses, and formal occasions, these designs add elegance and sophistication to any garment."
    },
    "schiffli-garments": {
      name: "Schiffli Garments", 
      description: "Complete garment embroidery solutions",
      icon: "👗",
      longDescription: "From concept to completion, our Schiffli garment collection offers ready-to-wear embroidered pieces. Each garment is meticulously crafted to showcase the beauty of Schiffli embroidery in finished form."
    }
  };

  const currentCategory = categories[categoryId as keyof typeof categories];

  // Mock portfolio data for the category
  const portfolioItems = [
    {
      id: 1,
      title: `Premium ${currentCategory?.name} Design 1`,
      fabric: "Premium Cotton",
      collection: `${currentCategory?.name} Collection 2024`,
      featured: true,
      tags: [currentCategory?.name.toLowerCase(), "premium", "handcraft"]
    },
    {
      id: 2,
      title: `Classic ${currentCategory?.name} Pattern`,
      fabric: "Fine Net",
      collection: `Traditional ${currentCategory?.name}`,
      tags: [currentCategory?.name.toLowerCase(), "classic", "traditional"]
    },
    {
      id: 3,
      title: `Modern ${currentCategory?.name} Motif`,
      fabric: "Silk Blend",
      collection: `Contemporary ${currentCategory?.name}`,
      tags: [currentCategory?.name.toLowerCase(), "modern", "silk"]
    },
    {
      id: 4,
      title: `Luxury ${currentCategory?.name} Design`,
      fabric: "Swiss Net",
      collection: `Luxury ${currentCategory?.name}`,
      featured: true,
      tags: [currentCategory?.name.toLowerCase(), "luxury", "swiss"]
    },
    {
      id: 5,
      title: `Traditional ${currentCategory?.name} Work`,
      fabric: "Organic Cotton",
      collection: `Heritage ${currentCategory?.name}`,
      tags: [currentCategory?.name.toLowerCase(), "traditional", "organic"]
    },
    {
      id: 6,
      title: `Designer ${currentCategory?.name} Pattern`,
      fabric: "Premium Net",
      collection: `Designer ${currentCategory?.name}`,
      tags: [currentCategory?.name.toLowerCase(), "designer", "premium"]
    },
  ];

  const filteredItems = portfolioItems.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Category Not Found</h1>
          <Link to="/portfolio">
            <Button>Back to Portfolio</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-16 text-white">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 mb-8 text-white/80">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <span>/</span>
            <span className="text-white">{currentCategory.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-5xl">{currentCategory.icon}</div>
                <div className="flex items-center space-x-2 bg-callout/20 px-4 py-2 rounded-full">
                  <Heart className="h-4 w-4 text-callout" />
                  <span className="text-callout font-medium">Specialty Collection</span>
                </div>
              </div>
              
              <h1 className="text-5xl font-bold mb-6">
                {currentCategory.name}
                <span className="text-callout block text-3xl mt-2">Collection</span>
              </h1>
              
              <p className="text-xl leading-relaxed text-white/90 mb-8">
                {currentCategory.longDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white shadow-accent"
                >
                  <Link to="/contact">Get Custom Quote</Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  <Link to="/portfolio">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    All Categories
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="text-9xl text-center text-white/20 font-bold mb-4">
                {currentCategory.icon}
              </div>
              <div className="text-center">
                <Badge variant="outline" className="text-white border-white/30 text-lg px-4 py-2">
                  {filteredItems.length} Unique Designs
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters and Search */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search designs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* View Toggle */}
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-accent" : ""}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-accent" : ""}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredItems.length} designs in {currentCategory.name}
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className={`grid gap-8 ${
            viewMode === "grid" 
              ? "md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1 max-w-4xl mx-auto"
          }`}>
            {filteredItems.map((item) => (
              <Card key={item.id} className="group hover-lift border-border/50 overflow-hidden">
                {/* Image Placeholder */}
                <div className="relative overflow-hidden">
                  <div className={`${
                    viewMode === "grid" ? "aspect-[4/3]" : "aspect-[16/9] md:h-64"
                  } bg-gradient-to-br from-callout/20 to-accent/20 flex items-center justify-center relative`}>
                    <div className="text-center">
                      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                        {currentCategory.icon}
                      </div>
                      <p className="text-accent/60 font-medium">{item.title}</p>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <Button variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>

                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute top-3 right-3 bg-accent px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-white">Featured</span>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-accent border-accent/30">
                      {currentCategory.name}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{item.collection}</span>
                  </div>
                  
                  <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-smooth">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    Premium {item.fabric} with intricate Schiffli embroidery work
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="hover:border-accent hover:text-accent">
              Load More Designs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryDetail;