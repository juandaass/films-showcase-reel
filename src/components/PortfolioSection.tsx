
import { useState } from "react";
import { Play, Award, Eye, Calendar } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "SANGRE Y ORO",
    category: "Video Musical",
    year: "2024",
    awards: "Ganador - Festival Internacional de Cine",
    description: "Un video musical que la gente no para de compartir. Narrativa súper cool con técnicas que nadie más está usando.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop&crop=center",
    featured: true
  },
  {
    id: 2,
    title: "ALMAS DE ACERO",
    category: "Cortometraje",
    year: "2023",
    awards: "Mejor Cortometraje - Festival de Cine Independiente",
    description: "Una historia que te deja pensando. Sobre gente real y situaciones que todos vivimos, pero filmado de una manera única.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop&crop=center",
    featured: false
  },
  {
    id: 3,
    title: "ECOS DEL PASADO",
    category: "Documental",
    year: "2022",
    awards: "Premio del Público - Festival de Documentales",
    description: "Un documental que rescata historias increíbles que casi nadie conocía. Material de archivo que encontramos y restauramos.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop&crop=center",
    featured: false
  },
  {
    id: 4,
    title: "LUXURY RIDE",
    category: "Comercial",
    year: "2024",
    awards: "Mejor Comercial - Advertising Awards",
    description: "Un comercial que no parece comercial. Elegante, con estilo, y que de verdad te da ganas de tener el producto.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop&crop=center",
    featured: true
  },
  {
    id: 5,
    title: "NOCHE ETERNA",
    category: "Video Musical",
    year: "2023",
    awards: "Nominado - Music Video Awards",
    description: "Una experiencia visual súper trip que va perfecto con la música. Efectos que nadie esperaba y que quedaron increíbles.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop&crop=center",
    featured: false
  },
  {
    id: 6,
    title: "SOMBRAS DEL IMPERIO",
    category: "Cortometraje",
    year: "2022",
    awards: "Selección Oficial - Film Festival",
    description: "Un thriller que te mantiene al borde del asiento. Sobre poder, ambición y hasta dónde está dispuesta a llegar la gente.",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&h=600&fit=crop&crop=center",
    featured: false
  }
];

const categories = ["Todos", "Videos Musicales", "Cortometrajes", "Documentales", "Comerciales"];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeCategory === "Todos" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-black to-cinema-deep-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cinema-fire-red/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-cinema-gold/15 to-transparent rounded-full blur-2xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-cinema-gold/10 to-cinema-warm-gold/10 border border-cinema-gold/30 rounded-full px-6 py-2">
            <Award className="w-5 h-5 text-cinema-gold" />
            <span className="text-cinema-gold text-sm font-bold tracking-[0.2em]">LO QUE HEMOS HECHO</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-cinzel font-black mb-6">
            <span className="gradient-text-gold">NUESTROS</span>
            <span className="text-white"> </span> 
            <span className="gradient-text-red">TRABAJOS</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cada proyecto es algo <span className="gradient-text-gold">épico</span> que 
            <span className="gradient-text-red"> la gente ama</span>
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-8 py-3 rounded-full font-medium tracking-wide transition-all duration-300
                ${activeCategory === category
                  ? 'bg-gradient-to-r from-cinema-fire-red to-cinema-sunset-orange text-white border-2 border-cinema-gold/50'
                  : 'border-2 border-cinema-gold/30 text-cinema-gold hover:bg-cinema-gold/10'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-cinema-deep-black to-black border border-cinema-gold/20 hover-cinematic"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image container */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={`Proyecto ${item.title} - ${item.category}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-br from-cinema-fire-red/20 to-cinema-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-16 h-16 bg-cinema-gold/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-6 h-6 text-black ml-1" />
                  </div>
                </div>

                {/* Featured badge */}
                {item.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-cinema-fire-red to-cinema-sunset-orange text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                    TOP
                  </div>
                )}

                {/* View count */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                  <Eye className="w-3 h-3 text-cinema-gold" />
                  <span className="text-cinema-gold text-xs font-medium">2.5M</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-cinema-gold text-sm font-bold tracking-wider">{item.category}</span>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Calendar className="w-3 h-3" />
                    <span>{item.year}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-cinzel font-bold text-white mb-3 group-hover:gradient-text-gold transition-all duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Awards */}
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-cinema-gold" />
                  <span className="text-cinema-gold text-xs font-medium">{item.awards}</span>
                </div>

                {/* Action button */}
                <button className="w-full bg-gradient-to-r from-cinema-fire-red/80 to-cinema-sunset-orange/80 text-white font-bold py-3 rounded-xl hover:from-cinema-fire-red hover:to-cinema-sunset-orange transition-all duration-300 group-hover:scale-105">
                  VER PROYECTO
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-cinema-gold to-cinema-warm-gold text-black font-bold py-4 px-12 rounded-full hover:scale-105 transition-all duration-300">
            VER TODO
          </button>
        </div>
      </div>
    </section>
  );
}
