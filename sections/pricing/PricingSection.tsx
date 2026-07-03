'use client';

import React from "react";

interface PlanFeature {
  text: string;
}

interface Plan {
  id: string;
  badge?: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  features: PlanFeature[];
  aiCredits: string;
  ctaLabel: string;
  highlighted: boolean;
}

const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "See where money goes and monitor governance performance through a single source of truth.",
    price: "₹49,000",
    priceNote: "/month",
    features: [
      { text: "All 37 KPIs" },
      { text: "21 Leakage Components" },
      { text: "3 Governance Scores" },
      { text: "Core Data Modules" },
      { text: "View-Only Alerts" },
    ],
    aiCredits: "AI Credits: 50 Credits / Month",
    ctaLabel: "Choose Starter",
    highlighted: false,
  },
  {
    id: "growth",
    badge: "Most Popular",
    name: "GROWTH",
    tagline: "Identify issues, assign ownership, and drive corrective actions across the business.",
    price: "₹1,29,000",
    priceNote: "/month",
    features: [
      { text: "Everything in Starter" },
      { text: "Full Smart Alerts" },
      { text: "Kanban Governance Board" },
      { text: "Root-Cause Analysis" },
      { text: "Corrective Actions" },
      { text: "Hiring Module" },
      { text: "Budget Module" },
      { text: "Variable Cost Management" },
      { text: "Project Registry" },
    ],
    aiCredits: "AI Credits: 300 Credits / Month",
    ctaLabel: "Choose Growth",
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Govern operations, monitor compliance, benchmark performance, and scale accountability.",
    price: "Custom",
    priceNote: "",
    features: [
      { text: "Everything in Growth" },
      { text: "Vendor Management" },
      { text: "WhatsApp Intelligence (WIL)" },
      { text: "Board Pack Export" },
      { text: "Peer Benchmarking" },
      { text: "Governance Forecasting" },
      { text: "Config Change Approval Workflow" },
    ],
    aiCredits: "AI Credits: 1,500 Credits / Month",
    ctaLabel: "Talk to Sales",
    highlighted: false,
  },
];

const CheckIcon = ({ highlighted }: { highlighted: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="shrink-0 mt-0.5"
  >
    <path
      d="M3 8L6.5 11.5L13 4.5"
      stroke={highlighted ? "#FFFFFF" : "#1F8064"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PricingSection = () => {
  return (
    <section className="relative w-full bg-white  md:py-20 md:pt-5">
      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:block mx-auto max-w-[1280px] px-8">
        {/* Section Heading */}
        <h2 className="font-manrope font-medium text-[48px] leading-[1.15] tracking-[-0.8px] text-[#004944] text-center mb-14 max-w-[700px] mx-auto">
          Choose the stage that fits your governance journey.
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-3 gap-6 items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-[20px] flex flex-col ${
                plan.highlighted
                  ? "bg-[#004944] text-white pt-5 pb-8 px-8 shadow-[0px_24px_60px_rgba(0,73,68,0.18)] border border-white"
                  : "bg-white border-[0.5px] border-[#2E383380] text-[#0B2E2E] p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-[19px] left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-[#004944] border-5 border-white text-white font-poppins font-bold text-[13px] px-5 py-[6px] rounded-full inline-block whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3
                className={`font-manrope font-bold text-[20px] mb-2 ${
                  plan.highlighted ? "text-white" : "text-[#0B2E2E]"
                }`}
              >
                {plan.name}
              </h3>

              {/* Tagline */}
              <p
                className={`font-poppins font-normal text-[14px] leading-[22px] mb-6 ${
                  plan.highlighted ? "text-white/75" : "text-gray-500"
                }`}
              >
                {plan.tagline}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-6">
                <span
                  className={`font-manrope font-extrabold text-[30px] ${plan.highlighted ? "text-white" : "text-[#0B2E2E]"}`}
                >
                  {plan.price}
                </span>
                {plan.priceNote && (
                  <span
                    className={`font-poppins font-normal text-[13.5px] ${
                      plan.highlighted ? "text-white" : "text-black"
                    }`}
                  >
                    {plan.priceNote}
                  </span>
                )}
              </div>

              {/* Features List */}
              <ul className="flex flex-col gap-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckIcon highlighted={plan.highlighted} />
                    <span
                      className={`font-poppins  text-[13.5px] leading-[20px] ${
                        plan.highlighted ? "text-white font-bold" : "text-[#87928C] font-normal"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* AI Credits Badge */}
              <div className="mt-auto mb-5">
                <span
                  className={`inline-block font-poppins font-medium border border-[#D9D9D9] text-[12px] px-4 py-1.5 rounded-full  ${
                    plan.highlighted
                      ? " text-white"
                      : "  text-[#004944]"
                  }`}
                >
                  {plan.aiCredits}
                </span>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full h-[48px] rounded-[10px] text-[#121212]  font-poppins font-bold text-[14px] transition-colors duration-200 cursor-pointer ${
                  plan.highlighted
                    ? "bg-[#3CE0BF] "
                    : "bg-[#CCD7D2] "
                }`}
              >
                {plan.ctaLabel}
              </button>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="font-poppins font-normal text-[13px] text-gray-400 text-center mt-10">
          All plans include secure data processing, tenant-level isolation, and role-based access control.
        </p>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden px-5">
        {/* Section Heading */}
        <h2 className="font-manrope font-bold text-[20px] leading-[28px] text-[#004944] text-center mb-10 max-w-[320px] mx-auto">
          Choose the stage that fits your governance journey.
        </h2>

        {/* Cards Stack */}
        <div className="flex flex-col gap-8">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-[20px] flex flex-col ${
                plan.highlighted
                  ? "bg-[#004944] text-white pt-6 pb-7 px-6 shadow-[0px_16px_40px_rgba(0,73,68,0.18)] border border-white"
                  : "bg-white border-[0.5px] border-[#2E383380] text-[#0B2E2E] p-6 shadow-[0px_4px_16px_rgba(0,0,0,0.04)]"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-[17px] left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-[#004944] border border-white text-white font-poppins font-bold text-[12px] px-4 py-[6px] rounded-full inline-block whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3
                className={`font-manrope font-bold text-[20px] mb-1.5 ${
                  plan.highlighted ? "text-white" : "text-[#0B2E2E]"
                }`}
              >
                {plan.name}
              </h3>

              {/* Tagline */}
              <p
                className={`font-poppins font-normal text-[13px] leading-[20px] mb-5 ${
                  plan.highlighted ? "text-white/75" : "text-gray-500"
                }`}
              >
                {plan.tagline}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-5">
                <span
                  className={`font-manrope font-extrabold text-[28px] ${plan.highlighted ? "text-white" : "text-[#0B2E2E]"}`}
                >
                  {plan.price}
                </span>
                {plan.priceNote && (
                  <span
                    className={`font-poppins font-normal text-[13px] ${
                      plan.highlighted ? "text-white" : "text-black"
                    }`}
                  >
                    {plan.priceNote}
                  </span>
                )}
              </div>

              {/* Features List */}
              <ul className="flex flex-col gap-2.5 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckIcon highlighted={plan.highlighted} />
                    <span
                      className={`font-poppins text-[13px] leading-[19px] ${
                        plan.highlighted ? "text-white font-bold" : "text-[#87928C] font-normal"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* AI Credits Badge */}
              <div className="mt-auto mb-4">
                <span
                  className={`inline-block font-poppins font-medium border border-[#D9D9D9] text-[11.5px] px-3.5 py-1.5 rounded-full ${
                    plan.highlighted ? "text-white" : "text-[#004944]"
                  }`}
                >
                  {plan.aiCredits}
                </span>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full h-[46px] rounded-[10px] text-[#121212] font-poppins font-bold text-[14px] transition-colors duration-200 cursor-pointer ${
                  plan.highlighted
                    ? "bg-[#3CE0BF]"
                    : "bg-[#CCD7D2]"
                }`}
              >
                {plan.ctaLabel}
              </button>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="font-poppins font-normal text-[12px] text-gray-400 text-center mt-8 px-2">
          All plans include secure data processing, tenant-level isolation, and role-based access control.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
