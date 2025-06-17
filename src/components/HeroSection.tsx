
import { Button } from "@/components/ui/button";
import { Video, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-90"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold font-playfair mb-6">
            720 FILMS
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto font-light">
            Creamos contenido audiovisual que conecta, emociona y transforma ideas en experiencias visuales únicas
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-film-dark hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2" />
              Ver Portafolio
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-film-dark px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              <Video className="w-5 h-5 mr-2" />
              Nuestros Servicios
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: "Videos Musicales", count: "50+" },
              { label: "Cortometrajes", count: "25+" },
              { label: "Documentales", count: "15+" },
              { label: "Comerciales", count: "100+" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center animate-scale-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="text-3xl md:text-4xl font-bold font-playfair mb-2">{stat.count}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
