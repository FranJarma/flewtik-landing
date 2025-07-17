import { Footer, Header } from "@/components/layout";
import {
  ContactSection,
  HeroSection,
  HowItWorksSection,
  IndustriesSection,
  PricingSection,
  StatsSection,
  TestimonialsSection,
} from "@/components/sections";
import { WhatsAppButton } from "@/components/ui";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <IndustriesSection />
        <StatsSection />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
