
import { useState, useEffect } from "react";
import { Play, Award, Film, Star } from "lucide-react";

export function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["VIDEOS", "CONTENIDO", "HISTORIAS", "MAGIA"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain vignette">
      {/* Cinematic background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-cinema-deep-black to-black" />
      <div className="absolute inset-0 bg-gradient-to-t from-cinema-blood-red/20 via-transparent to-cinema-fire-red/10" />
      
      {/* Lens flare effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cinema-fire-red/20 to-transparent rounded-full blur-3xl lens-flare" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-cinema-gold/15 to-transparent rounded-full blur-2xl" />

      {/* Floating particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cinema-gold rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Premium brand header */}
        <div className="mb-8 animate-fade-in-cinematic">
          <div className="inline-flex items-center gap-3 mb-4 bg-gradient-to-r from-cinema-gold/10 to-cinema-warm-gold/10 border border-cinema-gold/30 rounded-full px-6 py-2">
            <Film className="w-6 h-6 text-cinema-gold" />
            <span className="text-cinema-gold font-cinzel text-lg tracking-[0.3em] font-bold">720 FILMS</span>
            <div className="w-px h-4 bg-cinema-gold/40" />
            <span className="text-cinema-fire-red text-sm font-medium tracking-wider">HEY, SOMOS 720</span>
          </div>
        </div>

        {/* Main cinematic title */}
        <h1 className="mb-8 animate-fade-in-cinematic" style={{ animationDelay: '0.3s' }}>
          <div className="text-6xl md:text-8xl lg:text-9xl font-cinzel font-black mb-4">
            <span className="block text-white drop-shadow-2xl">CREAMOS</span>
            <span className="block gradient-text-gold drop-shadow-2xl animate-glow-pulse">
              {words[currentWord]}
            </span>
            <span className="block text-white drop-shadow-2xl">QUE ROMPEN</span>
            <span className="block gradient-text-red drop-shadow-2xl">TODO</span>
          </div>
        </h1>

        {/* Premium subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light animate-fade-in-cinematic" style={{ animationDelay: '0.6s' }}>
          Hacemos <span className="gradient-text-gold font-medium">videos que la gente no para de ver</span> y que 
          <span className="gradient-text-red font-medium"> comparten por todas partes</span>
        </p>

        {/* Awards showcase */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-cinematic" style={{ animationDelay: '0.9s' }}>
          {[
            { count: "120+", label: "PROYECTOS ÉPICOS", icon: Film },
            { count: "45", label: "PREMIOS GANADOS", icon: Award },
            { count: "8", label: "AÑOS HACIENDO ESTO", icon: Star }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center gap-2 mb-2">
                <stat.icon className="w-5 h-5 text-cinema-gold group-hover:scale-110 transition-transform duration-300" />
                <span className="text-3xl md:text-4xl font-bold gradient-text-gold font-cinzel animate-count-up">
                  {stat.count}
                </span>
              </div>
              <p className="text-sm text-gray-400 tracking-[0.2em] font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Premium CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-cinematic" style={{ animationDelay: '1.2s' }}>
          <button className="group relative overflow-hidden bg-gradient-to-r from-cinema-fire-red to-cinema-sunset-orange text-white font-bold py-6 px-12 rounded-full border-2 border-cinema-gold/30 hover-cinematic transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-cinema-gold/20 to-cinema-warm-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-3">
              <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg tracking-wider">MIRA NUESTRO TRABAJO</span>
            </div>
          </button>
          
          <button className="group relative bg-transparent border-2 border-cinema-gold text-cinema-gold font-bold py-6 px-12 rounded-full hover:bg-cinema-gold hover:text-black transition-all duration-500 hover-cinematic">
            <span className="text-lg tracking-wider">CHARLEMOS UN RATO</span>
          </button>
        </div>

        {/* International recognition badge */}
        <div className="mt-16 animate-fade-in-cinematic" style={{ animationDelay: '1.5s' }}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cinema-gold/10 to-cinema-warm-gold/10 border border-cinema-gold/30 rounded-full px-8 py-3">
            <Award className="w-5 h-5 text-cinema-gold animate-pulse" />
            <span className="text-cinema-gold text-sm font-bold tracking-[0.3em]">CON PREMIOS Y TODO</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-cinema-gold fill-current" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cinema-gold/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cinema-gold rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
