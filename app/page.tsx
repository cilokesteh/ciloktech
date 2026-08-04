import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortofolioSection from "@/components/PortofolioSection";
import PricingSection from "@/components/PricingSection";
import TestimoniSection from "@/components/TestimoniSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-white">
        <HeroSection />
        <ServicesSection />
        <PortofolioSection />
        <PricingSection />
        <TestimoniSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
