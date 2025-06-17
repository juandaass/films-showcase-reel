
import { useState, useEffect } from "react";
import { Film, Home, User, Mail, Folder, Video, Award } from "lucide-react";

const menuItems = [
  {
    title: "Inicio",
    url: "#home",
    icon: Home,
    section: "hero"
  },
  {
    title: "Portfolio",
    url: "#portfolio",
    icon: Folder,
    section: "portfolio"
  },
  {
    title: "Servicios",
    url: "#services",
    icon: Video,
    section: "services"
  },
  {
    title: "Nosotros",
    url: "#about",
    icon: User,
    section: "about"
  },
  {
    title: "Contacto",
    url: "#contact",
    icon: Mail,
    section: "contact"
  },
];

export function BottomNavigation() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "portfolio", "services", "about", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (url: string, section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(section);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 film-grain">
      {/* Backdrop blur and gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-cinema-blood-red/10 to-transparent backdrop-blur-xl border-t border-cinema-gold/20" />
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-cinema-fire-red/5 to-transparent" />
      
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cinema-gold/60 to-transparent" />
      
      {/* Navigation content */}
      <div className="relative px-4 py-3 safe-area-inset-bottom">
        <div className="flex items-center justify-center max-w-md mx-auto">
          {/* Brand logo on the left */}
          <div className="absolute left-4 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cinema-fire-red to-cinema-sunset-orange rounded-lg flex items-center justify-center shadow-lg shadow-cinema-fire-red/30">
              <Film className="w-4 h-4 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold gradient-text-gold font-cinzel tracking-wider">720</h1>
            </div>
          </div>

          {/* Navigation items */}
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            {menuItems.map((item) => {
              const isActive = activeSection === item.section;
              return (
                <button
                  key={item.title}
                  onClick={() => handleNavClick(item.url, item.section)}
                  className={`
                    group relative flex flex-col items-center gap-1 px-3 py-2 rounded-xl
                    transition-all duration-300 hover:scale-110
                    ${isActive 
                      ? 'bg-gradient-to-t from-cinema-fire-red/20 to-cinema-sunset-orange/10 border border-cinema-gold/30' 
                      : 'hover:bg-gradient-to-t hover:from-cinema-fire-red/10 hover:to-cinema-sunset-orange/5'
                    }
                  `}
                >
                  {/* Glow effect for active item */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-cinema-fire-red/10 to-cinema-gold/5 blur-sm" />
                  )}
                  
                  <item.icon 
                    className={`
                      w-5 h-5 transition-all duration-300 relative z-10
                      ${isActive 
                        ? 'text-cinema-gold drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]' 
                        : 'text-cinema-gold/70 group-hover:text-white group-hover:drop-shadow-[0_0_6px_rgba(255,215,0,0.4)]'
                      }
                    `}
                  />
                  
                  <span 
                    className={`
                      hidden sm:block text-xs font-medium tracking-wide transition-all duration-300 relative z-10
                      ${isActive 
                        ? 'text-white font-semibold' 
                        : 'text-gray-400 group-hover:text-white'
                      }
                    `}
                  >
                    {item.title}
                  </span>

                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cinema-gold rounded-full shadow-[0_0_6px_rgba(255,215,0,0.8)]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Award badge on the right */}
          <div className="absolute right-4 hidden sm:flex items-center gap-1 bg-gradient-to-r from-cinema-gold/10 to-cinema-warm-gold/10 border border-cinema-gold/20 rounded-full px-2 py-1">
            <Award className="w-3 h-3 text-cinema-gold" />
            <span className="text-cinema-gold text-xs font-bold tracking-wider">PREMIADO</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
