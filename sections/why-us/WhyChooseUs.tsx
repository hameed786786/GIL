'use client';

import React from "react";
import Image from "next/image";

interface ChooseUsCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const CARDS: ChooseUsCard[] = [
  {
    id: "defend-numbers",
    title: "Numbers You Can Defend",
    description: "Every KPI, governance score, and recommendation is backed by transparent formulas and complete auditability. AI determines your business performance.",
    icon: "/why-us/solar_shield-check-bold-duotone.svg",
  },
  {
    id: "rupee-leakage",
    title: "Leakage In Rupees",
    description: "Know exactly where money is being lost and what it is costing the business. Prioritize actions based on financial impact, not assumptions.",
    icon: "/why-us/streamline-ultimate_currency-sign-rupee-decrease-bold.svg",
  },
  {
    id: "no-spreadsheet",
    title: "No Spreadsheet Busywork",
    description: "Upload exports from CRM, ERP, HRMS, finance systems, or spreadsheets. GIL automatically maps, validates, and structures the data.",
    icon: "/why-us/solar_cloud-upload-bold-duotone.svg",
  },
  {
    id: "whatsapp-answers",
    title: "Answers On WhatsApp",
    description: "Ask business questions where your team already works. Get governance insights and financial answers directly through WhatsApp.",
    icon: "/why-us/stash_social-whatsapp-duotone.svg",
  },
  {
    id: "indian-finance",
    title: "Built For Indian Finance Teams",
    description: "Designed around rupees, lakhs, crores, and real-world finance workflows. Built to work with the tools businesses already use.",
    icon: "/why-us/fluent_people-money-24-filled.svg",
  },
  {
    id: "grows-with-you",
    title: "Grows With You",
    description: "Start with visibility. Move to corrective action. Mature into full governance and oversight without changing platforms.",
    icon: "/why-us/solar_course-up-bold-duotone.svg",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative w-full bg-white py-12 pt-0 md:pt-0 md:py-24 overflow-hidden">
      
      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:flex mx-auto max-w-[1440px] px-20 flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-10 max-w-[928px] flex flex-col gap-6">
          <h2 className="font-manrope font-medium text-[48px] lg:text-[48px] leading-tight text-[#004944]">
            Why finance and operations leaders choose GIL
          </h2>
          <p className="font-poppins font-normal text-[20px] leading-[26px] text-gray-500  mx-auto">
            Built for organizations that need clarity, accountability, and measurable business outcomes.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-3 gap-6 w-full">
          {CARDS.map((card) => (
            <div 
              key={card.id}
              className="border border-[#E5E7EB] rounded-[24px] p-8 flex flex-col text-left bg-white shadow-[0px_8px_32px_rgba(0,0,0,0.01)] hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
            >
              {/* Icon */}
              <div className="mb-6 w-[56px] h-[56px] relative">
                <Image
                  src={card.icon}
                  alt={card.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-manrope font-semibold text-[20px] leading-tight mb-3 text-[#0B2E2E]">
                {card.title}
              </h3>

              {/* Description */}
              <p className="font-poppins font-normal text-[13.5px] leading-relaxed text-gray-500">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden px-5 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-10 max-w-[340px] flex flex-col gap-3">
          <h2 className="font-manrope font-bold text-[24px] leading-[36px] text-[#004944]">
            Why finance and operations leaders choose GIL
          </h2>
          <p className="font-poppins font-normal text-[14px] leading-[22px] text-gray-500">
            Built for organizations that need clarity, accountability, and measurable business outcomes.
          </p>
        </div>

        {/* 1x6 Stack */}
        <div className="flex flex-col gap-4 w-full">
          {CARDS.map((card) => (
            <div 
              key={card.id}
              className="border border-[#E5E7EB] rounded-[20px] p-5 flex flex-col text-left bg-white shadow-[0px_6px_20px_rgba(0,0,0,0.01)]"
            >
              {/* Icon */}
              <div className="mb-4 w-[48px] h-[48px] relative">
                <Image
                  src={card.icon}
                  alt={card.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-manrope font-bold text-[18px] leading-tight mb-2 text-[#0B2E2E]">
                {card.title}
              </h3>

              {/* Description */}
              <p className="font-poppins font-normal text-[13px] leading-relaxed text-gray-500">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default WhyChooseUs;
