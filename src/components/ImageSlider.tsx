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
    <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-callout/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNLTEwIDMwaDYwdjJoLTYwek0tMTAgMTBoNjB2MmgtNjB6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent/20 to-primary/20 backdrop-blur-sm px-6 py-3 rounded-full border border-accent/20 mb-6">
            <Sparkles className="h-5 w-5 text-accent animate-pulse" />
            <span className="text-accent font-semibold tracking-wide">Featured Showcase</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Masterpiece Collection
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover our finest embroidery craftsmanship across premium fabrics
          </p>
        </div>

        {/* Enhanced Image Slider */}
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {sliderImages.map((item, index) => (
                <CarouselItem key={item.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="group relative">
                    {/* Main Image Container */}
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                      <div className="aspect-[3/4] overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                        />
                      </div>
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      {/* Content Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <div className="text-white">
                          <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                          <p className="text-white/90 text-sm mb-3 line-clamp-2">{item.description}</p>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                              {item.category}
                            </Badge>
                            <div className="flex items-center space-x-1 text-white/80">
                              <Eye className="h-4 w-4" />
                              <span className="text-sm">View</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Featured Badge */}
                      {item.featured && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-accent to-accent/80 px-3 py-1.5 rounded-full shadow-lg">
                          <span className="text-xs font-bold text-white tracking-wider">FEATURED</span>
                        </div>
                      )}

                      {/* Index Badge */}
                      <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                        <span className="text-xs font-medium text-white">{index + 1}/{sliderImages.length}</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Enhanced Navigation Buttons */}
            <CarouselPrevious className="hidden md:flex -left-16 w-12 h-12 bg-white/90 backdrop-blur-sm shadow-xl border-0 hover:bg-accent hover:text-white hover:scale-110 transition-all duration-300" />
            <CarouselNext className="hidden md:flex -right-16 w-12 h-12 bg-white/90 backdrop-blur-sm shadow-xl border-0 hover:bg-accent hover:text-white hover:scale-110 transition-all duration-300" />
          </Carousel>
        </div>

        {/* Mobile Navigation Hint */}
        <div className="md:hidden text-center mt-8">
          <p className="text-sm text-muted-foreground flex items-center justify-center space-x-2">
            <span>Swipe to explore more designs</span>
            <span className="text-accent">→</span>
          </p>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { number: "500+", label: "Unique Designs", icon: "🎨" },
            { number: "6", label: "Categories", icon: "📂" },
            { number: "15+", label: "Years Experience", icon: "⭐" },
            { number: "200+", label: "Happy Clients", icon: "😊" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;