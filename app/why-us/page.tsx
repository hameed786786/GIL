'use client';

import React from "react";
import Hero from "@/sections/why-us/Hero";
import WhyChooseUs from "@/sections/why-us/WhyChooseUs";
import TrustedTeams from "@/sections/why-us/TrustedTeams";
import CTA from "@/components/CTA";

export default function WhyUsPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Hero />
      <WhyChooseUs />
      <TrustedTeams />
      <CTA 
        primaryButtonText="Get Started Free"
        secondaryButtonText="Schedule a Call"
      />
    </main>
  );
}
