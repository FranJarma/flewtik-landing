import { Footer, Header } from "@/components/layout";
import {
  ContactSection,
  HeroSection,
  HowItWorksSection,
  IndustriesSection,
  StatsSection,
  TestimonialsSection,
} from "@/components/sections";
import { WhatsAppButton } from "@/components/ui";

export default function HomePage() {
  return (
    <div className="bg-flewtik-primary-950 min-h-screen text-white">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <IndustriesSection />
        <StatsSection />
        <TestimonialsSection />
        {/* <PricingSection /> // TODO: When pricing is ready */}
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
