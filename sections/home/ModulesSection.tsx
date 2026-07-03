'use client';

import React, { useState } from "react";
import Image from "next/image";

interface ModuleData {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
}

const MODULES_DATA: ModuleData[] = [
  {
    id: "cost-structure",
    name: "Cost Structure Intelligence",
    title: "Where your money goes",
    description: "Every cost shown as a share of your income across eight areas, down to the individual ledger line, with anything quietly creeping up flagged in money — and what it is costing you a month.",
    image: "/home/module_cost_structure.png"
  },
  {
    id: "leakage",
    name: "Leakage",
    title: "Stop the waste",
    description: "Identify duplicate payments, unbilled hours, vendor overcharges, and subscription bloat automatically. Every leak is priced and ranked by effort to fix.",
    image: "/home/module_cost_structure.png"
  },
  {
    id: "forecasting",
    name: "Forecasting",
    title: "Look ahead with confidence",
    description: "Rolling 12-month cash flow and runway forecasts. GIL models realistic upside and downside scenarios based on live transaction velocity, not stale spreadsheets.",
    image: "/home/module_cost_structure.png"
  },
  {
    id: "decision-library",
    name: "The Decision Library",
    title: "Search past outcomes",
    description: "A structured repository of every past decision, its projected value, and its actual real-world outcome. Learn what works and build institutional memory.",
    image: "/home/module_cost_structure.png"
  },
  {
    id: "decision-ledger",
    name: "The Decision Ledger",
    title: "Track commitments in real-time",
    description: "Log every approved initiative, assigned owner, and target metric. GIL connects directly to your ledger to verify if the savings actually hit the bottom line.",
    image: "/home/module_cost_structure.png"
  },
  {
    id: "compliance",
    name: "Statutory Compliance",
    title: "Zero-stress filings",
    description: "Automated checks against local tax, payroll, and compliance laws. Flag anomalies before they become audits, penalties, or costly fees.",
    image: "/home/module_cost_structure.png"
  },
  {
    id: "governance",
    name: "Governance Score & Priority Stack",
    title: "Focus on what matters",
    description: "A dynamic, prioritized stack of financial issues ranked by urgency and financial impact. Your Governance Score shows your overall operational health at a glance.",
    image: "/home/module_cost_structure.png"
  },
  {
    id: "language",
    name: "The Language Engine",
    title: "Finance explained in plain words",
    description: "No complex jargon or raw tables. GIL's language engine translates complex accounting patterns into simple executive summaries you can act on immediately.",
    image: "/home/module_cost_structure.png"
  },
  {
    id: "kanban",
    name: "Kanban Intelligence",
    title: "Visual workflow for your money",
    description: "Track financial tasks, audit queries, and vendor negotiations through a familiar visual board. Keep teams aligned and tasks moving to completion.",
    image: "/home/module_cost_structure.png"
  },
  {
    id: "board-pack",
    name: "The Board Pack",
    title: "Investor-ready reporting",
    description: "Beautiful, comprehensive monthly board decks compiled automatically. High-level summaries for directors, detailed transaction logs for auditors.",
    image: "/home/module_cost_structure.png"
  }
];

const ModulesSection = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-white overflow-hidden py-6 md:py-24">
      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:block mx-auto max-w-[1280px] px-2">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Badge */}
          <div className="mb-6">
            <span className="rounded-[31px] border border-[#3CE0BF] inline-flex items-center justify-center px-4 h-[38px] font-poppins font-medium text-[20px] leading-[100%] tracking-[0px] text-[#3CE0BF] bg-transparent whitespace-nowrap w-[143px] h-[38px]">
              What it does
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-manrope font-bold text-[48px] leading-[58px] tracking-[-0.8px] text-[#004944] max-w-[850px] mb-6">
            Every module turns your numbers into a decision.
          </h2>

          {/* Subtitle */}
          <p className="font-poppins font-normal text-[18px] leading-[28px] text-[#757575] max-w-[800px]">
            Each one takes a corner of the business, puts its financial implication in front of you in money and plain words, and tells you what to do. These are GIL's working modules.
          </p>
        </div>

        {/* Interactive Layout (Sidebar + Content) */}
        <div className="flex items-center gap-12 lg:gap-16">
          
          {/* Sidebar Tabs */}
          <div className="w-[404px] h-[566px] shrink-0 flex flex-col justify-between border-l border-gray-100">
            {MODULES_DATA.map((mod, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`relative py-4 pl-6 text-left transition-all duration-200 outline-none ${
                    isActive 
                      ? "text-[#3CE0BF] font-manrope font-bold text-[24px] leading-[100%] tracking-[-0.17px]" 
                      : "text-gray-400 font-manrope font-bold text-[24px] leading-[100%] tracking-[-0.17px] hover:text-gray-600"
                  }`}
                >
                  {/* Left Active border indicator */}
                  {isActive && (
                    <span className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-[#3CE0BF]" />
                  )}
                  {mod.name}
                </button>
              );
            })}
          </div>

          {/* Content Card Display */}
          <div className="flex-1">
            {(() => {
              const currentIdx = activeIdx ?? 0;
              return (
                <div className="bg-[#D2FBF4] rounded-[24px] p-6 lg:p-6 w-full max-w-[845px] transition-all duration-300 shadow-[0px_4px_24px_rgba(0,0,0,0.03) max-h-[732px]">
                  {/* Illustration Image Box */}
                  <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden mb-8 shadow-[0px_2px_12px_rgba(0,0,0,0.04)] w-[800px] h-[533px]">
                    <Image
                      src={MODULES_DATA[currentIdx].image}
                      alt={MODULES_DATA[currentIdx].title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Text copy */}
                  <div className="flex flex-col gap-3 pl-4">
                    <h3 className="font-manrope font-bold text-[28px] leading-[36px] text-[#000000]">
                      {MODULES_DATA[currentIdx].title}
                    </h3>
                    <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#000000] w-[768px] mb-4">
                      {MODULES_DATA[currentIdx].description}
                    </p>
                  </div>
                </div>
              );
            })()}
          </div>

        </div>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden px-5">
        
        {/* Header Block */}
        <div className="flex flex-col mb-10">
          {/* Badge */}
          <div className="mb-5">
            <span className="rounded-[31px] border border-[#3CE0BF] inline-flex items-center justify-center px-4 h-[34px] font-poppins font-medium text-[13px] leading-[100%] tracking-[0px] text-[#3CE0BF] bg-transparent whitespace-nowrap">
              What it does
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-manrope font-bold text-[20px] leading-[28px] tracking-tight text-[#004944] mb-4">
            Every module turns your numbers into a decision.
          </h2>

          {/* Subtitle */}
          <p className="font-poppins font-normal text-[13px] leading-[21px] text-[#757575]">
            Each one takes a corner of the business, puts its financial implication in front of you in money and plain words, and tells you what to do. These are GIL's working modules.
          </p>
        </div>

        {/* Mobile Accordion Style List */}
        <div className="flex flex-col gap-4">
          {MODULES_DATA.map((mod, idx) => {
            const isActive = idx === activeIdx;
            return (
              <div 
                key={mod.id} 
                className={`border rounded-[16px] overflow-hidden transition-all duration-300 ${
                  isActive ? "border-[#3CE0BF] bg-[#D2FBF4]" : "border-gray-100 bg-white"
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                  className="w-full text-left py-4 px-5 flex items-center justify-between font-manrope font-bold text-[16px] text-[#0B2E2E]"
                >
                  <span className={isActive ? "text-[#0B2E2E]" : "text-gray-600"}>
                    {mod.name}
                  </span>
                  <span className={`text-[18px] transition-transform duration-200 ${isActive ? "rotate-90 text-[#3CE0BF]" : "text-gray-400"}`}>
                    ▶
                  </span>
                </button>

                {/* Collapsible Content */}
                {isActive && (
                  <div className="px-5 pb-5">
                    {/* Image */}
                    <div className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden mb-4 shadow-sm">
                      <Image
                        src={mod.image}
                        alt={mod.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Title & Desc */}
                    <div className="flex flex-col gap-2">
                      <h4 className="font-manrope font-bold text-[18px] leading-tight text-[#000000]">
                        {mod.title}
                      </h4>
                      <p className="font-poppins text-[13px] leading-[20px] text-[#000000]">
                        {mod.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ModulesSection;
