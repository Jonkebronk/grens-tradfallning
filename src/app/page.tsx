import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { MessengerButton } from "@/components/shared/MessengerButton";
import { MobileBottomBar } from "@/components/shared/MobileBottomBar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-20 md:pb-0">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <MessengerButton />
      <MobileBottomBar />
    </>
  );
}
