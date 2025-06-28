import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import FloatingContacts from "@/components/FloatingContacts";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <BeforeAfter />
      <Benefits />
      <Testimonials />
      <CTA />
      <FAQ />
      <FloatingContacts />
    </div>
  );
};

export default Index;
