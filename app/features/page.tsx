'use client';

import React from "react";
import Hero from "@/sections/features/Hero";
import FeaturesGrid from "@/sections/features/FeaturesGrid";
import DeepDive from "@/sections/features/DeepDive";
import CTA from "@/components/CTA";

export default function FeaturesPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Hero />
      <FeaturesGrid />
      <DeepDive />
      <CTA primaryButtonText="Book a Demo" />
    </main>
  );
}
