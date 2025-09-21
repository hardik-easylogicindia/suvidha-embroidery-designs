import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Filter, Grid, List, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const categories = [
    { id: "all", name: "All Designs", count: 48 },
    { id: "nets", name: "Luxury Nets", count: 18 },
    { id: "cotton", name: "Cotton Fabrics", count: 15 },
    { id: "specialty", name: "Specialty Fabrics", count: 10 },
    { id: "bridal", name: "Bridal Collection", count: 5 }
  ];

  // Mock portfolio data - in real app this would come from your database
  const portfolioItems = [
    {
      id: 1,
      title: "Elegant Bridal Net",
      category: "bridal",
      fabric: "Premium Net",
      collection: "Bridal Elegance 2024",
      featured: true,
      tags: ["bridal", "luxury", "handcraft"]
    },
    {
      id: 2,
      title: "Classic Floral Motif",
      category: "cotton",
      fabric: "Fine Cotton",
      collection: "Traditional Classics",
      tags: ["floral", "traditional", "cotton"]
    },
    {
      id: 3,
      title: "Geometric Modern",
      category: "specialty",
      fabric: "Silk Blend",
      collection: "Contemporary Lines",
      tags: ["geometric", "modern", "silk"]
    },
    {
      id: 4,
      title: "Delicate Lace Pattern",
      category: "nets",
      fabric: "Swiss Net",
      collection: "Luxury Nets",
      tags: ["lace", "delicate", "swiss"]
    },
    {
      id: 5,
      title: "Traditional Paisley",
      category: "cotton",
      fabric: "Organic Cotton",
      collection: "Heritage Collection",
      tags: ["paisley", "traditional", "organic"]
    },
    {
      id: 6,
      title: "Royal Wedding Design",
      category: "bridal",
      fabric: "Silk Net",
      collection: "Royal Bridal",
      featured: true,
      tags: ["royal", "wedding", "luxury"]
    },
  ];

  const filteredItems = portfolioItems.filter(item => {
    const matchesFilter = activeFilter === "all" || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-hero mb-6">
            Our Design
            <span className="text-callout block">Portfolio</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Explore our extensive collection of original Schiffli embroidery designs, from timeless 
            traditional motifs to cutting-edge contemporary patterns.
          </p>
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

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  onClick={() => setActiveFilter(category.id)}
                  className={`${
                    activeFilter === category.id 
                      ? "bg-accent hover:bg-accent/90" 
                      : "hover:border-accent hover:text-accent"
                  }`}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {category.name}
                  <Badge variant="secondary" className="ml-2">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* Results Summary */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredItems.length} of {portfolioItems.length} designs
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
                  } bg-gradient-to-br from-callout/20 to-accent/20 flex items-center justify-center`}>
                    <div className="text-center">
                      <Eye className="h-16 w-16 text-accent/30 mx-auto mb-3" />
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
                      {categories.find(cat => cat.id === item.category)?.name}
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

export default Portfolio;