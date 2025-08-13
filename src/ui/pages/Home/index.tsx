'use client'
import { CTASection, HeroSection, QuoteSection, ServicesSection } from "./components"
import { AppLayout } from "@/ui/modules";

 export const HomePage = () => {
    console.log('home');
    
    return (
        <AppLayout>
          <HeroSection />
          <ServicesSection />
          <QuoteSection />
        
          <CTASection />
        </AppLayout>
      );
}
