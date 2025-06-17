import { Video, Film, Camera, Edit, Award, Star } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Videos Musicales de Élite",
    description: "Producciones cinematográficas que elevan la música a arte visual puro. Conceptos únicos, narrativas impactantes y técnicas de vanguardia.",
    features: ["Concepto artístico exclusivo", "Cinematografía 8K", "Post-producción avanzada", "Color grading profesional"],
    price: "Desde €15,000",
    popular: true
  },
  {
    icon: Film,
    title: "Cortometrajes de Autor",
    description: "Historias que desafían los límites del cine narrativo. Guiones originales, dirección impecable y un sello artístico inconfundible.",
    features: ["Guion original a medida", "Dirección de actores experta", "Diseño de producción detallado", "Banda sonora original"],
    price: "Desde €20,000",
    popular: false
  },
  {
    icon: Camera,
    title: "Documentales de Impacto",
    description: "Narrativas reales que inspiran, educan y transforman. Investigación exhaustiva, testimonios conmovedores y un compromiso con la verdad.",
    features: ["Investigación y guionización", "Equipo de rodaje internacional", "Edición y montaje creativo", "Distribución estratégica"],
    price: "Desde €25,000",
    popular: false
  },
  {
    icon: Edit,
    title: "Comerciales Premium",
    description: "Campañas publicitarias que conectan con el corazón del consumidor. Ideas innovadoras, producción impecable y resultados medibles.",
    features: ["Estrategia creativa integral", "Casting de talentos exclusivo", "Dirección de arte de lujo", "Análisis de resultados post-campaña"],
    price: "Desde €30,000",
    popular: false
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-cinema-deep-black to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cinema-fire-red/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-cinema-gold/10 to-transparent rounded-full blur-2xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-cinema-fire-red/10 to-cinema-sunset-orange/10 border border-cinema-fire-red/30 rounded-full px-6 py-2">
            <Star className="w-5 h-5 text-cinema-fire-red" />
            <span className="text-cinema-fire-red text-sm font-bold tracking-[0.2em]">SERVICIOS PREMIUM</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-cinzel font-black mb-6">
            <span className="text-white">MAESTRÍA </span>
            <span className="gradient-text-red">AUDIOVISUAL</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transformamos <span className="gradient-text-gold">visiones creativas</span> en 
            <span className="gradient-text-red"> experiencias cinematográficas</span> que marcan historia
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover-cinematic
                ${service.popular 
                  ? 'bg-gradient-to-b from-cinema-fire-red/20 to-cinema-sunset-orange/10 border-2 border-cinema-gold/50' 
                  : 'bg-gradient-to-b from-cinema-deep-black to-black border border-cinema-gold/20'
                }
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cinema-gold to-cinema-warm-gold text-black px-4 py-2 rounded-full text-xs font-bold tracking-wider rotate-12">
                  MÁS POPULAR
                </div>
              )}

              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cinema-fire-red to-cinema-sunset-orange rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cinema-gold/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-cinzel font-bold text-white mb-4 group-hover:gradient-text-gold transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-cinema-gold rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="mb-6">
                <span className="text-2xl font-bold gradient-text-gold font-cinzel">{service.price}</span>
              </div>

              {/* CTA Button */}
              <button className={`
                w-full py-4 rounded-xl font-bold tracking-wide transition-all duration-300 group-hover:scale-105
                ${service.popular
                  ? 'bg-gradient-to-r from-cinema-gold to-cinema-warm-gold text-black hover:shadow-2xl hover:shadow-cinema-gold/30'
                  : 'bg-gradient-to-r from-cinema-fire-red to-cinema-sunset-orange text-white hover:shadow-2xl hover:shadow-cinema-fire-red/30'
                }
              `}>
                SOLICITAR PRESUPUESTO
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-cinema-deep-black via-cinema-blood-red/10 to-cinema-deep-black rounded-3xl p-12 border border-cinema-gold/20">
          <h3 className="text-3xl font-cinzel font-bold text-white mb-4">
            ¿Tienes un proyecto <span className="gradient-text-gold">único</span>?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Creamos soluciones audiovisuales personalizadas para proyectos excepcionales que requieren un enfoque artístico exclusivo.
          </p>
          <button className="bg-gradient-to-r from-cinema-fire-red to-cinema-sunset-orange text-white font-bold py-4 px-12 rounded-full hover:scale-105 transition-all duration-300">
            CONVERSEMOS SOBRE TU VISIÓN
          </button>
        </div>
      </div>
    </section>
  );
}
