
import { Film, Home, User, Mail, Folder, Video, Award } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Inicio",
    url: "#home",
    icon: Home,
  },
  {
    title: "Portfolio",
    url: "#portfolio",
    icon: Folder,
  },
  {
    title: "Servicios",
    url: "#services",
    icon: Video,
  },
  {
    title: "Nosotros",
    url: "#about",
    icon: User,
  },
  {
    title: "Contacto",
    url: "#contact",
    icon: Mail,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-cinema-gold/20 bg-gradient-to-b from-black to-cinema-deep-black">
      <SidebarHeader className="p-6 border-b border-cinema-gold/20">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-cinema-fire-red to-cinema-sunset-orange rounded-xl flex items-center justify-center shadow-2xl shadow-cinema-fire-red/30">
            <Film className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold gradient-text-gold font-cinzel tracking-wider">720 FILMS</h1>
            <p className="text-xs text-cinema-fire-red font-medium tracking-wider">ÉLITE AUDIOVISUAL</p>
          </div>
        </div>
        
        {/* Premium Badge */}
        <div className="mt-4 bg-gradient-to-r from-cinema-gold/20 to-cinema-warm-gold/20 border border-cinema-gold/30 rounded-full px-3 py-1 flex items-center justify-center gap-2">
          <Award className="w-3 h-3 text-cinema-gold" />
          <span className="text-cinema-gold text-xs font-bold tracking-wider">PREMIADO INTERNACIONALMENTE</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a 
                      href={item.url} 
                      className="flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-cinema-fire-red/20 hover:to-cinema-sunset-orange/20 hover:border hover:border-cinema-gold/30 group"
                    >
                      <item.icon className="w-5 h-5 text-cinema-gold group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                      <span className="font-medium text-gray-300 group-hover:text-white transition-colors duration-300 tracking-wide">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {/* Signature Element */}
        <div className="mt-8 p-4 text-center border-t border-cinema-gold/20">
          <p className="text-cinema-gold text-xs font-cinzel tracking-[0.2em] mb-2">
            ✦ DESDE 2016 ✦
          </p>
          <p className="text-gray-500 text-xs tracking-wider">
            REDEFINIENDO ESTÁNDARES
          </p>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
