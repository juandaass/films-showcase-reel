
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { HeroSection } from "@/components/HeroSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1">
          <div className="fixed top-4 left-4 z-50">
            <SidebarTrigger className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg" />
          </div>
          
          <HeroSection />
          <PortfolioSection />
          <ServicesSection />
          <AboutSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
