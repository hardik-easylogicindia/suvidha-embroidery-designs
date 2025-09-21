import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Sparkles, Eye } from "lucide-react";
import sliderImage1 from "@/assets/slider-image-1.jpg";
import sliderImage2 from "@/assets/slider-image-2.jpg";
import sliderImage3 from "@/assets/slider-image-3.jpg";
import sliderImage4 from "@/assets/slider-image-4.jpg";
import sliderImage5 from "@/assets/slider-image-5.jpg";

const ImageSlider = () => {
  const sliderImages = [
    {
      id: 1,
      image: sliderImage1,
      title: "Cotton Floral Embroidery",
      category: "Cotton Collection",
      description: "Intricate floral patterns on premium cotton fabric",
      featured: true
    },
    {
      id: 2,
      image: sliderImage2,
      title: "Premium Net Lace",
      category: "Bridal Collection",
      description: "Delicate lace work on luxury net fabric",
      featured: false
    },
    {
      id: 3,
      image: sliderImage3,
      title: "Traditional Border Design",
      category: "Border Collection",
      description: "Classic paisley patterns with golden threads",
      featured: true
    },
    {
      id: 4,
      image: sliderImage4,
      title: "Schiffli Garment Work",
      category: "Garment Collection",
      description: "Complete all-over embroidered dress",
      featured: false
    },
    {
      id: 5,
      image: sliderImage5,
      title: "Geometric Dry Lace",
      category: "Dry Lace Collection",
      description: "Modern geometric patterns in fine detail",
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-callout/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-accent font-medium">Featured Showcase</span>
          </div>
          <h2 className="text-section-title mb-6">
            Our Latest
            <span className="text-accent block">Masterpiece Collection</span>
          </h2>
          <p className="text-elegant max-w-3xl mx-auto">
            Explore our finest embroidery work across different categories. Each design represents 
            hours of meticulous craftsmanship and attention to detail.
          </p>
        </div>

        {/* Image Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {sliderImages.map((item) => (
                <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover-lift border-border/50 overflow-hidden bg-white shadow-elegant">
                    <div className="relative overflow-hidden">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                        <div className="text-center text-white">
                          <Eye className="h-8 w-8 mx-auto mb-2" />
                          <p className="font-medium">View Details</p>
                        </div>
                      </div>

                      {/* Featured Badge */}
                      {item.featured && (
                        <div className="absolute top-4 right-4 bg-accent px-3 py-1 rounded-full">
                          <span className="text-xs font-semibold text-white">Featured</span>
                        </div>
                      )}

                      {/* Category Badge */}
                      <div className="absolute bottom-4 left-4">
                        <Badge variant="outline" className="bg-white/90 text-primary border-primary/20 backdrop-blur-sm">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-primary mb-2 group-hover:text-accent transition-smooth">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-16 bg-white shadow-elegant border-border/50 hover:bg-accent hover:text-white hover:border-accent" />
            <CarouselNext className="hidden md:flex -right-16 bg-white shadow-elegant border-border/50 hover:bg-accent hover:text-white hover:border-accent" />
          </Carousel>
        </div>

        {/* Mobile Navigation Hint */}
        <div className="md:hidden text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Swipe to explore more designs →
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">Unique Designs</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">6</div>
            <p className="text-muted-foreground">Categories</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">200+</div>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;