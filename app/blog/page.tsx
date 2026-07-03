'use client';

import React from "react";
import Hero from "@/sections/blog/Hero";
import CTA from "@/components/CTA";

export default function BlogPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Hero />
      <CTA 
        primaryButtonText="Get Started Free"
        secondaryButtonText="Schedule a Call"
      />
    </main>
  );
}
