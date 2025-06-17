
import { Film, Home, User, Mail, Folder, Video } from "lucide-react";
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
    title: "Portafolio",
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
    <Sidebar>
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
            <Film className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold gradient-text">720 FILMS</h1>
            <p className="text-xs text-muted-foreground">Productora Audiovisual</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a 
                      href={item.url} 
                      className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
