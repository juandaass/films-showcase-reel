
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Target, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Creatividad",
    description: "Cada proyecto es una oportunidad de innovar y crear contenido único"
  },
  {
    icon: Target,
    title: "Precisión",
    description: "Atención meticulosa a cada detalle en la producción audiovisual"
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Trabajamos estrechamente con nuestros clientes para superar expectativas"
  },
  {
    icon: Award,
    title: "Excelencia",
    description: "Compromiso constante con la calidad y la innovación técnica"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold font-playfair mb-6 gradient-text">
              Sobre Nosotros
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              720 FILMS nació de la pasión por contar historias a través de imágenes en movimiento. 
              Somos un equipo de creativos especializados en producción audiovisual que transforma 
              ideas en experiencias visuales memorables.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nuestro enfoque combina técnica profesional con visión artística, creando contenido 
              que no solo cumple objetivos comerciales, sino que también emociona y conecta con 
              las audiencias de manera auténtica.
            </p>
            <Button size="lg" className="gradient-bg text-white hover:opacity-90 px-8 py-6 rounded-full">
              Conoce Nuestro Equipo
            </Button>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} className="hover-lift border-0 shadow-lg animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "5+", label: "Años de Experiencia" },
            { number: "200+", label: "Proyectos Completados" },
            { number: "50+", label: "Clientes Satisfechos" },
            { number: "15+", label: "Premios Obtenidos" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="text-4xl md:text-5xl font-bold gradient-text font-playfair mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
