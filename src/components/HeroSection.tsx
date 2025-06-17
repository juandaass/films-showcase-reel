
import { Button } from "@/components/ui/button";
import { Play, Award, Camera, Film } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain vignette">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-cinema-blood-red/20 via-black to-cinema-fire-red/10"></div>
        <div className="absolute inset-0 lens-flare"></div>
      </div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cinema-gold rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-cinema-fire-red rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cinema-warm-gold rounded-full animate-float opacity-50" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-cinema-sunset-orange rounded-full animate-float opacity-30" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-7xl mx-auto">
        <div className="animate-fade-in-cinematic">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cinema-gold/20 to-cinema-warm-gold/20 backdrop-blur-sm border border-cinema-gold/30 rounded-full px-6 py-2 mb-8">
            <Award className="w-4 h-4 text-cinema-gold" />
            <span className="text-cinema-gold font-semibold text-sm tracking-wider">PREMIO INTERNACIONAL DE CINEMATOGRAFÍA</span>
          </div>

          {/* Main Title with Typewriter Effect */}
          <div className="relative mb-8">
            <h1 className="text-7xl md:text-9xl font-bold font-cinzel mb-4 leading-none">
              <span className="block gradient-text-red glitch" data-text="DONDE LA VISIÓN">
                DONDE LA VISIÓN
              </span>
              <span className="block gradient-text-gold glitch" data-text="SE CONVIERTE EN" style={{animationDelay: '1s'}}>
                SE CONVIERTE EN
              </span>
              <span className="block text-white text-8xl md:text-[12rem] font-black tracking-wider glitch" data-text="LEYENDA" style={{animationDelay: '2s'}}>
                LEYENDA
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-3xl mb-12 text-gray-300 max-w-5xl mx-auto font-light leading-relaxed">
            Creamos narrativas visuales que trascienden pantallas, conquistan festivales internacionales 
            y se graban para siempre en la memoria colectiva del cine contemporáneo
          </p>
          
          {/* Premium CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="btn-cinematic text-xl px-12 py-6 font-bold tracking-wide hover-cinematic group"
            >
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              DESCUBRE LA MAGIA
            </Button>
            <Button 
              size="lg"
              className="btn-gold text-xl px-12 py-6 font-bold tracking-wide hover-cinematic group"
            >
              <Film className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              VIVE LA EXPERIENCIA
            </Button>
          </div>

          {/* Premium Stats with Animation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { label: "Festivales Internacionales", count: "25+", icon: Award },
              { label: "Producciones Premium", count: "200+", icon: Camera },
              { label: "Premios Obtenidos", count: "35+", icon: Award },
              { label: "Años de Excelencia", count: "8+", icon: Film }
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center group hover-cinematic animate-count-up bg-gradient-to-b from-cinema-deep-black/50 to-black/50 backdrop-blur-sm border border-cinema-gold/20 rounded-2xl p-6" 
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-cinema-gold group-hover:scale-125 transition-transform duration-300" />
                </div>
                <div className="text-4xl md:text-5xl font-bold gradient-text-gold font-cinzel mb-2 group-hover:animate-glow-pulse">
                  {stat.count}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Signature Element */}
          <div className="mt-16 opacity-60">
            <p className="text-cinema-gold font-cinzel text-lg tracking-[0.3em]">
              ✦ 720 FILMS ✦
            </p>
            <p className="text-gray-500 text-sm mt-2 tracking-wider">
              PRODUCTORA AUDIOVISUAL DE ÉLITE
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
