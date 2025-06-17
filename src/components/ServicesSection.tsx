
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, FileVideo, FileVideo2, Projector } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Videos Musicales",
    description: "Producción completa de videos musicales con conceptos creativos únicos, desde la preproducción hasta la postproducción.",
    features: ["Desarrollo conceptual", "Dirección creativa", "Producción ejecutiva", "Postproducción avanzada"]
  },
  {
    icon: FileVideo,
    title: "Cortometrajes",
    description: "Creación de narrativas visuales impactantes que cuentan historias memorables en formato corto.",
    features: ["Guión y storyboard", "Dirección de fotografía", "Dirección de actores", "Edición narrativa"]
  },
  {
    icon: FileVideo2,
    title: "Documentales",
    description: "Producción documental con enfoque periodístico y artístico para capturar la realidad de manera auténtica.",
    features: ["Investigación profunda", "Entrevistas especializadas", "Filmación verité", "Montaje documental"]
  },
  {
    icon: Projector,
    title: "Comerciales",
    description: "Contenido publicitario optimizado para redes sociales y plataformas digitales con alto impacto visual.",
    features: ["Estrategia de marca", "Producción ágil", "Formatos múltiples", "Optimización digital"]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold font-playfair mb-6 gradient-text">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos servicios integrales de producción audiovisual adaptados a las necesidades de cada proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="hover-lift group border-0 shadow-lg animate-scale-in" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader className="pb-4">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 gradient-bg rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
