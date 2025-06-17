
import { Award, Users, Calendar, Trophy, Target, Heart } from "lucide-react";

const stats = [
  { icon: Award, number: "45+", label: "Premios Internacionales", description: "Reconocimientos en festivales de prestigio mundial" },
  { icon: Users, number: "200+", label: "Clientes Satisfechos", description: "Artistas y marcas que confían en nuestra visión" },
  { icon: Calendar, number: "8", label: "Años de Excelencia", description: "Redefiniendo estándares desde 2016" },
  { icon: Trophy, number: "120+", label: "Proyectos Realizados", description: "Cada uno una obra maestra única" }
];

const values = [
  {
    icon: Target,
    title: "Visión Artística",
    description: "Cada proyecto nace de una visión única que trasciende lo convencional"
  },
  {
    icon: Heart,
    title: "Pasión Cinematográfica", 
    description: "El amor por el cine impulsa cada decisión creativa y técnica"
  },
  {
    icon: Award,
    title: "Excelencia Sin Límites",
    description: "Buscamos la perfección en cada frame, cada corte, cada detalle"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black via-cinema-deep-black to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cinema-fire-red/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-cinema-gold/10 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-cinema-gold/10 to-cinema-warm-gold/10 border border-cinema-gold/30 rounded-full px-6 py-2">
            <Users className="w-5 h-5 text-cinema-gold" />
            <span className="text-cinema-gold text-sm font-bold tracking-[0.2em]">NOSOTROS</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-cinzel font-black mb-6">
            <span className="gradient-text-gold">MAESTROS</span>
            <span className="text-white"> DEL </span>
            <span className="gradient-text-red">ARTE</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Somos <span className="gradient-text-gold">visionarios cinematográficos</span> que transformamos ideas en 
            <span className="gradient-text-red"> experiencias audiovisuales extraordinarias</span>
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover-cinematic"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cinema-fire-red to-cinema-sunset-orange rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cinema-gold/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 mx-auto w-16 h-16" />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold gradient-text-gold font-cinzel mb-2 animate-count-up">
                {stat.number}
              </div>
              
              <h3 className="text-white font-bold mb-2 tracking-wide">
                {stat.label}
              </h3>
              
              <p className="text-gray-400 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Story section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-4xl font-cinzel font-bold text-white mb-6">
              Una <span className="gradient-text-gold">Pasión</span> que se Convirtió en <span className="gradient-text-red">Leyenda</span>
            </h3>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Desde 2016, hemos redefinido los estándares de la producción audiovisual, 
                creando obras que no solo capturan momentos, sino que <span className="text-cinema-gold font-medium">crean emociones</span> 
                y construyen legados.
              </p>
              
              <p>
                Nuestro enfoque combina <span className="text-cinema-gold font-medium">técnica cinematográfica clásica</span> 
                con tecnología de vanguardia, resultando en producciones que compiten 
                en los festivales más prestigiosos del mundo.
              </p>
              
              <p>
                Cada proyecto es una <span className="text-cinema-fire-red font-medium">colaboración íntima</span> 
                entre nuestra visión artística y la esencia única de nuestros clientes.
              </p>
            </div>
            
            <button className="mt-8 bg-gradient-to-r from-cinema-fire-red to-cinema-sunset-orange text-white font-bold py-4 px-8 rounded-full hover:scale-105 transition-all duration-300">
              CONOCE NUESTRO PROCESO
            </button>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border-2 border-cinema-gold/30">
              <img 
                src="/placeholder.svg" 
                alt="Equipo 720 Films"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cinema-fire-red/20 to-transparent" />
            </div>
            
            {/* Floating award badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-cinema-gold to-cinema-warm-gold text-black p-6 rounded-2xl border-4 border-black">
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <div className="text-sm font-bold">MEJOR PRODUCTORA</div>
                <div className="text-xs">Festival Internacional 2024</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-4xl font-cinzel font-bold text-center text-white mb-12">
            Nuestros <span className="gradient-text-gold">Valores</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover-cinematic"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cinema-fire-red/20 to-cinema-sunset-orange/10 border border-cinema-gold/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-cinema-gold/60 transition-all duration-300">
                  <value.icon className="w-10 h-10 text-cinema-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-4 group-hover:gradient-text-gold transition-all duration-300">
                  {value.title}
                </h4>
                
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
