
import { Film, Instagram, Youtube, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-film-dark text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
                <Film className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">720 FILMS</h3>
                <p className="text-white/70 text-sm">Productora Audiovisual</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              Transformamos ideas en experiencias visuales memorables. Especialistas en 
              videos musicales, cortometrajes, documentales y comerciales para redes sociales.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Videos Musicales</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Cortometrajes</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Documentales</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Comerciales</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span className="text-white/70 text-sm">contacto@720films.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span className="text-white/70 text-sm">+1 (555) 720-FILM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 720 FILMS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
