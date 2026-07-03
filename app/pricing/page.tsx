'use client';

import React from "react";
import Hero from "@/sections/pricing/Hero";
import PricingSection from "@/sections/pricing/PricingSection";
import ComparePlans from "@/sections/pricing/ComparePlans";
import CTA from "@/components/CTA";

export default function PricingPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Hero />
      <PricingSection />
      <ComparePlans />
      <CTA 
        primaryButtonText="Get Started Free"
        secondaryButtonText="Schedule a Call"
      />
    </main>
  );
}
