
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Video, ExternalLink } from "lucide-react";

const categories = ["Todos", "Videos Musicales", "Cortometrajes", "Documentales", "Comerciales"];

const portfolioItems = [
  {
    id: 1,
    title: "Video Musical - Artista Emergente",
    category: "Videos Musicales",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    description: "Producción completa de video musical con efectos visuales modernos"
  },
  {
    id: 2,
    title: "Cortometraje - Historias Urbanas",
    category: "Cortometrajes",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=600&fit=crop",
    description: "Narrativa visual contemporánea con cinematografía artística"
  },
  {
    id: 3,
    title: "Documental - Cultura Local",
    category: "Documentales",
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&h=600&fit=crop",
    description: "Exploración profunda de tradiciones y modernidad"
  },
  {
    id: 4,
    title: "Comercial - Marca Juvenil",
    category: "Comerciales",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    description: "Campaña publicitaria para redes sociales con estética fresca"
  },
  {
    id: 5,
    title: "Video Musical - Colaboración Internacional",
    category: "Videos Musicales",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
    description: "Producción de alto presupuesto con locaciones exóticas"
  },
  {
    id: 6,
    title: "Comercial - Producto Tech",
    category: "Comerciales",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
    description: "Spot publicitario con animaciones 3D y efectos especiales"
  }
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredItems = activeCategory === "Todos" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold font-playfair mb-6 gradient-text">
            Nuestro Portafolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Una selección de nuestros trabajos más destacados que demuestran nuestra pasión por la narrativa visual
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full px-6 py-3 transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card key={item.id} className="group hover-lift overflow-hidden border-0 shadow-lg animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-white/90">{item.description}</p>
                    </div>
                    <Button 
                      size="sm" 
                      className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30"
                      variant="outline"
                    >
                      <Video className="w-4 h-4 mr-2" />
                      Ver Proyecto
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="gradient-bg text-white hover:opacity-90 px-8 py-6 rounded-full">
            <ExternalLink className="w-5 h-5 mr-2" />
            Ver Portafolio Completo
          </Button>
        </div>
      </div>
    </section>
  );
}
