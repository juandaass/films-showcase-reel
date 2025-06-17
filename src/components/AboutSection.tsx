
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Target, Lightbulb, Crown, Zap } from "lucide-react";

const values = [
  {
    icon: Crown,
    title: "Excelencia Absoluta",
    description: "Cada frame es una obra de arte meticulosamente crafted para la eternidad cinematográfica"
  },
  {
    icon: Zap,
    title: "Innovación Disruptiva",
    description: "Pioneros en técnicas revolucionarias que redefinen los límites del arte audiovisual"
  },
  {
    icon: Users,
    title: "Colaboración Élite",
    description: "Partnerships estratégicos con visionarios que comparten nuestra pasión por la perfección"
  },
  {
    icon: Award,
    title: "Legado Internacional",
    description: "Creadores de obras que trascienden fronteras y se consagran en la historia del cine"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-black via-cinema-deep-black to-cinema-blood-red/10 film-grain">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="animate-fade-in-cinematic">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cinema-fire-red/20 to-cinema-sunset-orange/20 backdrop-blur-sm border border-cinema-fire-red/30 rounded-full px-6 py-2 mb-8">
              <Crown className="w-4 h-4 text-cinema-fire-red" />
              <span className="text-cinema-fire-red font-semibold text-sm tracking-wider">MAESTROS DEL ARTE CINEMATOGRÁFICO</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold font-cinzel mb-8 leading-none">
              <span className="gradient-text-red block">LA VISIÓN</span>
              <span className="gradient-text-gold block">DETRÁS DEL</span>
              <span className="text-white block">ARTE</span>
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-gray-300">
                <span className="text-cinema-gold font-bold">720 FILMS</span> emergió del sueño audaz de transformar 
                cada proyecto audiovisual en una <span className="text-cinema-fire-red font-semibold">obra maestra cinematográfica</span> 
                que perdure en la memoria colectiva de la humanidad.
              </p>
              
              <p className="text-gray-300">
                Somos <span className="gradient-text-gold font-semibold">alquimistas visuales</span> que fusionamos 
                técnica impecable con visión artística trascendental, creando experiencias que no solo cumplen 
                objetivos comerciales, sino que <span className="text-cinema-fire-red font-semibold">redefinen paradigmas</span> 
                en la industria global.
              </p>
              
              <p className="text-gray-300">
                Cada producción que emprendemos está destinada a competir en los <span className="text-cinema-gold font-semibold">
                festivales más prestigiosos del mundo</span>, porque creemos que el arte audiovisual debe aspirar 
                siempre a la <span className="gradient-text-red font-bold">inmortalidad cinematográfica</span>.
              </p>
            </div>

            <Button size="lg" className="btn-cinematic text-xl px-12 py-6 mt-8 hover-cinematic group">
              <Users className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              CONOCE A LOS VISIONARIOS
            </Button>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="hover-cinematic border-0 bg-gradient-to-br from-cinema-deep-black/90 to-black/90 backdrop-blur-sm border border-cinema-gold/20 animate-fade-in-cinematic group overflow-hidden" 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center relative">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cinema-fire-red/5 to-cinema-sunset-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-cinema-fire-red to-cinema-sunset-orange rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-cinema-fire-red/30">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="font-bold text-xl mb-4 text-white group-hover:text-cinema-gold transition-colors duration-300">
                      {value.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Premium Stats Section */}
        <div className="mt-24 bg-gradient-to-r from-cinema-deep-black to-black border border-cinema-gold/30 rounded-3xl p-12 backdrop-blur-sm">
          <h3 className="text-4xl font-bold gradient-text-gold font-cinzel text-center mb-12">
            NÚMEROS QUE HABLAN POR SÍ SOLOS
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "8+", label: "Años Revolucionando", sublabel: "la Industria Audiovisual" },
              { number: "350+", label: "Obras Maestras", sublabel: "Producidas con Excelencia" },
              { number: "85+", label: "Clientes Visionarios", sublabel: "Que Confían en Nosotros" },
              { number: "42+", label: "Premios Internacionales", sublabel: "en Festivales de Élite" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center animate-count-up group" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="text-5xl md:text-6xl font-bold gradient-text-gold font-cinzel mb-3 group-hover:animate-glow-pulse">
                  {stat.number}
                </div>
                <div className="text-white font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-bold gradient-text-red font-cinzel mb-8">
              "CADA PROYECTO ES UNA SINFONÍA VISUAL QUE ASPIRA A LA ETERNIDAD"
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              En 720 FILMS, no creamos simplemente videos. Forjamos <span className="text-cinema-gold font-semibold">legados visuales</span> 
              que trascienden el tiempo y se graban para siempre en la memoria colectiva del arte cinematográfico mundial.
            </p>
            <div className="text-cinema-gold font-cinzel text-lg tracking-[0.3em]">
              ✦ VISIÓN • ARTE • LEGADO ✦
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
