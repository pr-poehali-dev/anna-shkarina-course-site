import React from "react";

// Layout Components
import Layout from "@/components/layout/Layout";

// Section Components
import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import AboutSection from "@/components/sections/AboutSection";
import ModulesSection from "@/components/sections/ModulesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";

const Index: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout onContactClick={scrollToContact}>
      <HeroSection onContactClick={scrollToContact} />
      <BenefitsSection />
      <AboutSection />
      <ModulesSection />
      <TestimonialsSection />
      <PricingSection onContactClick={scrollToContact} />
      <ContactSection />
    </Layout>
  );
};

export default Index;
