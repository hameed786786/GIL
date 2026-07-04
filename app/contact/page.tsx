'use client';

import React from "react";
import Hero from "@/sections/contact/Hero";
import ContactForm from "@/sections/contact/ContactForm";
import ContactDetails from "@/sections/contact/ContactDetails";
import CTA from "@/components/CTA";

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Hero />
      <ContactForm />
      <ContactDetails />
      <CTA 
        primaryButtonText="Get Started Free"
        secondaryButtonText="Schedule a Call"
      />
    </main>
  );
}
