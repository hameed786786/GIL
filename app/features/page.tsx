'use client';

import React from "react";
import Hero from "@/sections/features/Hero";
import FeaturesGrid from "@/sections/features/FeaturesGrid";

export default function FeaturesPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Hero />
      <FeaturesGrid />
    </main>
  );
}
