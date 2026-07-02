import Image from "next/image";
import Hero from "@/sections/home/Hero";
import HowItWorks from "@/sections/home/HowItWorks";
import PayForItself from "@/sections/home/PayForItself";
import ModulesSection from "@/sections/home/ModulesSection";
import WhatsAppSection from "@/sections/home/WhatsAppSection";
import TrustSection from "@/sections/home/TrustSection";
import WhoItsFor from "@/sections/home/WhoItsFor";
import LanguageSection from "@/sections/home/LanguageSection";
import PricingSection from "@/sections/home/PricingSection";
import MarketSection from "@/sections/home/MarketSection";
import DemoSection from "@/sections/home/DemoSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <PayForItself />
      <ModulesSection />
      <WhatsAppSection />
      <TrustSection />
      <WhoItsFor />
      <LanguageSection />
      <PricingSection />
      <MarketSection />
      <DemoSection />
    </>
  );
}
