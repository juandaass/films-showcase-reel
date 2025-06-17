
import { Award, Users, Calendar, Trophy, Target, Heart } from "lucide-react";

const stats = [
  { icon: Award, number: "45+", label: "Premios Ganados", description: "En festivales de todo el mundo" },
  { icon: Users, number: "200+", label: "Clientes Contentos", description: "Artistas y marcas que repiten con nosotros" },
  { icon: Calendar, number: "8", label: "Años en Esto", description: "Mejorando desde 2016" },
  { icon: Trophy, number: "120+", label: "Proyectos Hechos", description: "Cada uno único y especial" }
];

const values = [
  {
    icon: Target,
    title: "Visión Clara",
    description: "Cada proyecto tiene una idea súper clara que lo hace diferente a todo lo demás"
  },
  {
    icon: Heart,
    title: "Nos Encanta lo que Hacemos", 
    description: "La pasión se nota en cada video, cada edición, cada detalle que cuidamos"
  },
  {
    icon: Award,
    title: "Hacemos Todo Bien",
    description: "No nos conformamos con 'está bien'. Queremos que quede increíble"
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
            <span className="gradient-text-gold">QUIÉNES</span>
            <span className="text-white"> SOMOS</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Somos <span className="gradient-text-gold">un equipo creativo</span> que hace 
            <span className="gradient-text-red"> videos increíbles</span> desde hace un buen rato
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
              Todo Empezó con <span className="gradient-text-gold">Ganas</span> de Hacer <span className="gradient-text-red">Algo Diferente</span>
            </h3>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Desde 2016 venimos haciendo videos que la gente recuerda. No somos de los que hacen 
                todo igual - cada proyecto <span className="text-cinema-gold font-medium">tiene su propia personalidad</span> 
                y su propia historia que contar.
              </p>
              
              <p>
                Mezclamos <span className="text-cinema-gold font-medium">técnicas clásicas de cine</span> 
                con la tecnología más nueva, y el resultado son videos que compiten 
                en festivales internacionales y que además se vuelven virales.
              </p>
              
              <p>
                Cada proyecto es <span className="text-cinema-fire-red font-medium">una colaboración real</span> 
                entre lo que nosotros sabemos hacer y lo que tú quieres contar.
              </p>
            </div>
            
            <button className="mt-8 bg-gradient-to-r from-cinema-fire-red to-cinema-sunset-orange text-white font-bold py-4 px-8 rounded-full hover:scale-105 transition-all duration-300">
              CONOCE CÓMO TRABAJAMOS
            </button>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border-2 border-cinema-gold/30">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=600&fit=crop&crop=faces" 
                alt="Equipo de 720 Films trabajando en set de grabación"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cinema-fire-red/20 to-transparent" />
            </div>
            
            {/* Floating award badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-cinema-gold to-cinema-warm-gold text-black p-6 rounded-2xl border-4 border-black">
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <div className="text-sm font-bold">MEJOR PRODUCTORA</div>
                <div className="text-xs">Festival 2024</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-4xl font-cinzel font-bold text-center text-white mb-12">
            En Qué <span className="gradient-text-gold">Creemos</span>
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
