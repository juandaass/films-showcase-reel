
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, FileVideo, FileVideo2, Projector, Award, Star } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Videos Musicales",
    subtitle: "Épicos & Cinematográficos",
    description: "Creaciones audiovisuales que elevan la música a la categoría de arte cinematográfico, combinando narrativa visual innovadora con técnicas de producción de vanguardia.",
    features: [
      "Conceptualización artística de élite",
      "Dirección cinematográfica premium", 
      "Efectos visuales hiperrealistas",
      "Color grading profesional de festival"
    ],
    highlight: "Ganadores de MTV VMAs 2024"
  },
  {
    icon: FileVideo,
    title: "Cortometrajes",
    subtitle: "Narrativas de Autor",
    description: "Obras cinematográficas que trascienden el formato corto, creando experiencias narrativas profundas con lenguaje visual sofisticado y técnica impecable.",
    features: [
      "Guiones originales premiados",
      "Dirección de fotografía artística",
      "Casting profesional internacional",
      "Montaje narrativo avanzado"
    ],
    highlight: "Selección Oficial Cannes 2024"
  },
  {
    icon: FileVideo2,
    title: "Documentales",
    subtitle: "Testimonios Universales",
    description: "Documentales que capturan la esencia humana con sensibilidad artística, combinando rigor periodístico con belleza cinematográfica excepcional.",
    features: [
      "Investigación exhaustiva y ética",
      "Técnicas de entrevista especializadas",
      "Cinematografía documental de autor",
      "Narrativa no-lineal innovadora"
    ],
    highlight: "Premio Sundance al Mejor Documental"
  },
  {
    icon: Projector,
    title: "Comerciales",
    subtitle: "Publicidad Cinematográfica",
    description: "Spots publicitarios que redefinen los estándares de la industria, fusionando estrategia de marca con espectacularidad visual y narrativa emocional.",
    features: [
      "Estrategia creativa disruptiva",
      "Producción de lujo internacional",
      "Tecnología 8K y efectos holográficos",
      "Distribución multiplataforma optimizada"
    ],
    highlight: "León de Oro Cannes Lions 2024"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-gradient-to-br from-cinema-deep-black via-black to-cinema-blood-red/10 film-grain">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-cinematic">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cinema-gold/20 to-cinema-warm-gold/20 backdrop-blur-sm border border-cinema-gold/30 rounded-full px-6 py-2 mb-8">
            <Star className="w-4 h-4 text-cinema-gold" />
            <span className="text-cinema-gold font-semibold text-sm tracking-wider">SERVICIOS DE ÉLITE INTERNACIONAL</span>
          </div>

          <h2 className="text-5xl md:text-8xl font-bold font-cinzel mb-8 gradient-text-gold leading-none">
            SERVICIOS
          </h2>
          <h3 className="text-3xl md:text-5xl font-light gradient-text-red mb-8">
            EXCEPCIONALES
          </h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Servicios integrales de producción audiovisual que superan los estándares internacionales, 
            diseñados para clientes que exigen la excelencia absoluta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="hover-cinematic group border-0 bg-gradient-to-br from-cinema-deep-black/90 to-black/90 backdrop-blur-sm border border-cinema-gold/20 animate-fade-in-cinematic overflow-hidden" 
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-6 relative">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cinema-fire-red/5 to-cinema-sunset-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Award Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-cinema-gold to-cinema-warm-gold text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  PREMIADO
                </div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-cinema-fire-red to-cinema-sunset-orange rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl shadow-cinema-fire-red/30">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <CardTitle className="text-3xl font-bold text-white mb-2 group-hover:text-cinema-gold transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  
                  <p className="text-cinema-gold font-medium text-lg tracking-wide">
                    {service.subtitle}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${idx * 100}ms`}}>
                      <div className="w-3 h-3 bg-gradient-to-r from-cinema-gold to-cinema-warm-gold rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Highlight Badge */}
                <div className="bg-gradient-to-r from-cinema-fire-red/20 to-cinema-sunset-orange/20 border border-cinema-fire-red/30 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-cinema-fire-red font-bold text-sm">
                    <Award className="w-4 h-4" />
                    {service.highlight}
                  </div>
                </div>
              </CardContent>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-cinema-fire-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-cinema-deep-black to-black border border-cinema-gold/30 rounded-3xl p-12 backdrop-blur-sm">
            <h3 className="text-4xl font-bold gradient-text-gold font-cinzel mb-4">
              ¿LISTO PARA CREAR HISTORIA?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Cada proyecto que emprendemos está destinado a redefinir estándares y crear nuevos paradigmas en la industria audiovisual
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="btn-cinematic text-lg px-10 py-4 hover-cinematic">
                SOLICITAR COTIZACIÓN PREMIUM
              </button>
              <button className="btn-gold text-lg px-10 py-4 hover-cinematic">
                VER CASOS DE ÉXITO
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
