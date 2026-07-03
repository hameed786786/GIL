'use client';

import React from "react";
import Hero from "@/sections/about/Hero";
import Statement from "@/sections/about/Statement";
import Principles from "@/sections/about/Principles";
import CompanyDetails from "@/sections/about/CompanyDetails";
import CTA from "@/components/CTA";

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Hero />
      <Statement />
      <Principles />
      <CompanyDetails />
      <CTA 
        primaryButtonText="Get Started Free"
        secondaryButtonText="Schedule a Call"
      />
    </main>
  );
}
