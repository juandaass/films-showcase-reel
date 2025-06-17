
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Award, ExternalLink, Camera } from "lucide-react";

const categories = ["Todos", "Videos Musicales", "Cortometrajes", "Documentales", "Comerciales"];

const portfolioItems = [
  {
    id: 1,
    title: "ECLIPSE MUSICAL",
    subtitle: "Video Musical Épico",
    category: "Videos Musicales",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    description: "Narrativa visual cinematográfica con efectos especiales de última generación",
    awards: "Mejor Video Musical - Festival Internacional 2024",
    duration: "4:32"
  },
  {
    id: 2,
    title: "SOMBRAS URBANAS",
    subtitle: "Cortometraje Narrativo",
    category: "Cortometrajes",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=600&fit=crop",
    description: "Drama contemporáneo con cinematografía de autor y dirección artística excepcional",
    awards: "Palma de Oro - Festival de Cannes 2024",
    duration: "18:45"
  },
  {
    id: 3,
    title: "RAÍCES DEL TIEMPO",
    subtitle: "Documental Cultural",
    category: "Documentales",
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&h=600&fit=crop",
    description: "Exploración íntima de tradiciones ancestrales con técnicas de filmación innovadoras",
    awards: "Premio del Público - Sundance 2024",
    duration: "52:15"
  },
  {
    id: 4,
    title: "REVOLUCIÓN DIGITAL",
    subtitle: "Comercial Premium",
    category: "Comerciales",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    description: "Campaña publicitaria de lujo con producción de nivel cinematográfico",
    awards: "León de Oro - Cannes Lions 2024",
    duration: "1:30"
  },
  {
    id: 5,
    title: "SINFONÍA NOCTURNA",
    subtitle: "Video Musical Artístico",
    category: "Videos Musicales",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
    description: "Fusión perfecta entre música clásica y cinematografía contemporánea",
    awards: "Mejor Dirección Artística - MTV VMAs 2024",
    duration: "5:21"
  },
  {
    id: 6,
    title: "FUTURO PRESENTE",
    subtitle: "Comercial Tecnológico",
    category: "Comerciales",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
    description: "Spot visionario con animaciones 3D hiperrealistas y efectos holográficos",
    awards: "Gran Premio - Festival Creativity 2024",
    duration: "2:15"
  }
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredItems = activeCategory === "Todos" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-6 bg-gradient-to-b from-black to-cinema-deep-black film-grain">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-cinematic">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cinema-fire-red/20 to-cinema-sunset-orange/20 backdrop-blur-sm border border-cinema-fire-red/30 rounded-full px-6 py-2 mb-8">
            <Camera className="w-4 h-4 text-cinema-fire-red" />
            <span className="text-cinema-fire-red font-semibold text-sm tracking-wider">OBRA MAESTRA CINEMATOGRÁFICA</span>
          </div>

          <h2 className="text-5xl md:text-8xl font-bold font-cinzel mb-8 gradient-text-red leading-none">
            PORTFOLIO
          </h2>
          <h3 className="text-3xl md:text-5xl font-light gradient-text-gold mb-8">
            DE ÉLITE
          </h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Una cuidadosa selección de nuestras obras más laureadas que han redefinido 
            los estándares de la industria audiovisual internacional
          </p>
        </div>

        {/* Premium Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`
                rounded-full px-8 py-3 font-semibold tracking-wide transition-all duration-300 border-2
                ${activeCategory === category 
                  ? 'bg-gradient-to-r from-cinema-fire-red to-cinema-sunset-orange text-white border-cinema-gold shadow-lg shadow-cinema-fire-red/30' 
                  : 'bg-transparent text-cinema-gold border-cinema-gold/50 hover:border-cinema-gold hover:bg-cinema-gold/10'
                }
              `}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Premium Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group hover-cinematic overflow-hidden border-0 bg-gradient-to-b from-cinema-deep-black/80 to-black/80 backdrop-blur-sm border border-cinema-gold/20 animate-fade-in-cinematic" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Premium Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-cinema-fire-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 bg-cinema-blood-red/10"></div>
                  </div>

                  {/* Awards Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-cinema-gold to-cinema-warm-gold text-black px-3 py-1 rounded-full text-xs font-bold">
                    <Award className="w-3 h-3 inline mr-1" />
                    PREMIADO
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-cinema-gold px-3 py-1 rounded-full text-xs font-medium">
                    {item.duration}
                  </div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button 
                      size="lg" 
                      className="bg-cinema-fire-red/90 hover:bg-cinema-fire-red text-white border-2 border-cinema-gold rounded-full p-6"
                    >
                      <Play className="w-8 h-8" />
                    </Button>
                  </div>

                  {/* Bottom Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-xl mb-1 text-white">{item.title}</h3>
                    <p className="text-cinema-gold text-sm font-medium mb-2">{item.subtitle}</p>
                    <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-b from-cinema-deep-black to-black">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-cinema-fire-red/20 to-cinema-sunset-orange/20 text-cinema-fire-red text-sm rounded-full mb-4 border border-cinema-fire-red/30">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-xl mb-2 text-white">{item.title}</h3>
                  <p className="text-cinema-gold text-sm font-medium mb-3">{item.subtitle}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>
                  
                  {/* Awards */}
                  <div className="flex items-center gap-2 text-xs text-cinema-gold">
                    <Award className="w-4 h-4" />
                    <span>{item.awards}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="btn-cinematic text-xl px-12 py-6 hover-cinematic group">
            <ExternalLink className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
            EXPLORA PORTFOLIO COMPLETO
          </Button>
        </div>
      </div>
    </section>
  );
}
