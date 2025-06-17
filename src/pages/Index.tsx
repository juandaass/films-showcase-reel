
import { HeroSection } from "@/components/HeroSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { BottomNavigation } from "@/components/BottomNavigation";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-black">
      <main className="w-full pb-24">
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Index;
