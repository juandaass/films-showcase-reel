
import { Mail, Phone, MapPin, Send, Star } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hola@720films.com",
    description: "Te respondemos súper rápido"
  },
  {
    icon: Phone,
    title: "Teléfono",
    value: "+34 900 123 456",
    description: "Lunes a Viernes 9:00 - 20:00"
  },
  {
    icon: MapPin,
    title: "Oficina",
    value: "Madrid, España",
    description: "Podemos vernos en persona"
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-cinema-deep-black to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cinema-fire-red/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-cinema-gold/15 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-cinema-fire-red/10 to-cinema-sunset-orange/10 border border-cinema-fire-red/30 rounded-full px-6 py-2">
            <Star className="w-5 h-5 text-cinema-fire-red" />
            <span className="text-cinema-fire-red text-sm font-bold tracking-[0.2em]">HABLEMOS</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-cinzel font-black mb-6">
            <span className="text-white">TRABAJEMOS </span>
            <span className="gradient-text-red">JUNTOS</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cuéntanos tu <span className="gradient-text-gold">idea loca</span> y la convertimos en 
            <span className="gradient-text-red"> algo increíble</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <h3 className="text-3xl font-cinzel font-bold text-white mb-8">
              Cuéntanos de tu <span className="gradient-text-gold">Proyecto</span>
            </h3>
            
            <p className="text-gray-300 mb-12 leading-relaxed">
              Todo empieza con una buena charla. Nos cuentas qué tienes en mente y nosotros 
              te mostramos cómo lo podemos hacer realidad de una manera que te va a encantar.
            </p>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group hover-cinematic p-4 rounded-xl hover:bg-gradient-to-r hover:from-cinema-fire-red/5 hover:to-cinema-sunset-orange/5"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cinema-fire-red to-cinema-sunset-orange rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div>
                    <h4 className="text-white font-bold mb-1 group-hover:gradient-text-gold transition-all duration-300">
                      {info.title}
                    </h4>
                    <p className="text-cinema-gold font-medium mb-1">
                      {info.value}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="mt-12 p-6 bg-gradient-to-r from-cinema-gold/10 to-cinema-warm-gold/10 border border-cinema-gold/30 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-cinema-gold fill-current" />
                <span className="text-cinema-gold font-bold">Te Respondemos Rápido</span>
              </div>
              <p className="text-gray-300 text-sm">
                Nos gusta responder rápido, así que seguramente te contestemos en menos de 2 horas.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-gradient-to-b from-cinema-deep-black to-black border border-cinema-gold/20 rounded-3xl p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Tu Nombre *</label>
                  <input
                    type="text"
                    className="w-full bg-black/50 border border-cinema-gold/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cinema-gold focus:outline-none transition-colors duration-300"
                    placeholder="Como te llamas"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    className="w-full bg-black/50 border border-cinema-gold/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cinema-gold focus:outline-none transition-colors duration-300"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Qué Tipo de Proyecto</label>
                <select className="w-full bg-black/50 border border-cinema-gold/30 rounded-xl px-4 py-3 text-white focus:border-cinema-gold focus:outline-none transition-colors duration-300">
                  <option>Video Musical</option>
                  <option>Cortometraje</option>
                  <option>Documental</option>
                  <option>Comercial</option>
                  <option>Algo diferente</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Presupuesto Aprox</label>
                <select className="w-full bg-black/50 border border-cinema-gold/30 rounded-xl px-4 py-3 text-white focus:border-cinema-gold focus:outline-none transition-colors duration-300">
                  <option>€5,000 - €15,000</option>
                  <option>€15,000 - €30,000</option>
                  <option>€30,000 - €50,000</option>
                  <option>€50,000+</option>
                  <option>Hablemos primero</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Cuéntanos Tu Idea *</label>
                <textarea
                  rows={5}
                  className="w-full bg-black/50 border border-cinema-gold/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cinema-gold focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Describe tu proyecto, qué estilo te gusta, referencias que tengas, fechas importantes..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cinema-fire-red to-cinema-sunset-orange text-white font-bold py-4 rounded-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                <span>ENVIAR MENSAJE</span>
              </button>
            </form>

            {/* Trust indicators */}
            <div className="mt-8 pt-6 border-t border-cinema-gold/20">
              <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                <span>✓ Respuesta rápida</span>
                <span>✓ Propuesta gratis</span>
                <span>✓ 100% confidencial</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
