'use client';

import React, { useState } from "react";
import Image from "next/image";

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconPath: string;
}

const FeaturesGrid = () => {
  const [activeMobileIdx, setActiveMobileIdx] = useState<number | null>(0);
  const features: FeatureCard[] = [
    {
      id: "data-ingestion",
      title: "Smart Data Ingestion",
      description: "Upload exports from any ERP, CRM, HRMS, or spreadsheet. GIL understands your data structure and remembers mappings automatically.",
      iconPath: "/features/solar_database-bold-duotone.svg"
    },
    {
      id: "kpi-engine",
      title: "Unified KPI Engine",
      description: "Track 37 business KPIs across finance, workforce, sales, and operations from one unified view.",
      iconPath: "/features/Mask group.svg"
    },
    {
      id: "leakage-intel",
      title: "Leakage Intelligence",
      description: "Identify hidden financial leakage in rupees and prioritize the issues with the highest business impact.",
      iconPath: "/features/solar_star-rings-bold-duotone.svg"
    },
    {
      id: "gov-scoring",
      title: "Governance Scoring",
      description: "Measure Stability, Fragility, and Data Reliability through continuously monitored governance scores.",
      iconPath: "/features/solar_layers-bold-duotone.svg"
    },
    {
      id: "action-mgmt",
      title: "Action Management",
      description: "Convert findings into assigned tasks, track progress, and ensure issues are owned and resolved.",
      iconPath: "/features/solar_command-bold-duotone.svg"
    },
    {
      id: "whatsapp-intel",
      title: "WhatsApp Intelligence",
      description: "Every KPI, score, and insight is backed by transparent formulas that can be verified at any time.",
      iconPath: "/features/stash_social-whatsapp-duotone.svg"
    },
    {
      id: "auditable-logic",
      title: "Fully Auditable Logic",
      description: "Every KPI, score, and insight is backed by transparent formulas that can be verified at any time.",
      iconPath: "/features/solar_copy-bold-duotone.svg"
    },
    {
      id: "security",
      title: "Enterprise-Grade Security",
      description: "Protect sensitive data with role-based access, tenant isolation, and complete audit visibility.",
      iconPath: "/features/solar_folder-security-bold-duotone.svg"
    }
  ];

  return (
    <section className="relative w-full bg-white py-4 md:py-14 overflow-hidden">
      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:flex mx-auto max-w-[1280px] px-2 flex-col items-center w-full">
        {/* Title & Subtitle */}
        <div className="text-center mb-16 max-w-[850px]">
          <h2 className="font-manrope font-bold text-[48px] leading-[1.2] text-[#004944]">
            Features
          </h2>
          <p className="mt-4 font-poppins text-[18px] leading-relaxed text-[#757575]">
            Each module is purpose-built to close the gap between operational data and financial accountability.
          </p>
        </div>

        {/* 4x2 Grid */}
        <div className="grid grid-cols-4 gap-5 w-full">
          {features.map((feat) => {
            return (
              <div
                key={feat.id}
                className="w-[308px] group border rounded-[22px] p-6 flex flex-col h-[250px] shadow-[0px_8px_32px_rgba(0,0,0,0.01)] transition-all duration-300 hover:scale-[1.02] hover:shadow-md bg-white border-[#E5E7EB] hover:bg-[#D2FBF4] hover:border-[#3CE0BF]"
              >
                {/* Icon */}
                <div className="mb-5 w-[56px] h-[56px]">
                  <Image
                    src={feat.iconPath}
                    alt={feat.title}
                    width={56}
                    height={56}
                    className="object-contain icon-hover-teal"
                  />
                </div>

                {/* Title */}
                <h3 className="font-manrope font-bold text-[20px] leading-tight mb-3 transition-colors duration-300 text-[#0B2E2E] group-hover:text-[#004944]">
                  {feat.title}
                </h3>

                {/* Description */}
                <p className="font-poppins font-normal text-[13.5px] leading-relaxed transition-colors duration-300 text-[#757575] group-hover:text-[#004944]/80">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden w-full px-5 flex flex-col items-center">
        {/* Title & Subtitle */}
        <div className="text-center mb-10 max-w-[340px]">
          <h2 className="font-manrope font-bold text-[20px] leading-[28px] text-[#004944]">
            Features
          </h2>
          <p className="mt-3 font-poppins text-[13px] leading-[21px] text-[#757575]">
            Each module is purpose-built to close the gap between operational data and financial accountability.
          </p>
        </div>

        {/* 1x8 Stack list */}
        <div className="flex flex-col gap-4 w-full">
          {features.map((feat, idx) => {
            const isMobileActive = activeMobileIdx === idx;
            return (
              <div
                key={feat.id}
                onClick={() => setActiveMobileIdx(activeMobileIdx === idx ? null : idx)}
                className={`border rounded-[22px] p-5 text-left flex flex-col shadow-[0px_6px_20px_rgba(0,0,0,0.01)] transition-all duration-300 active:scale-[0.98] cursor-pointer ${
                  isMobileActive
                    ? "bg-[#D2FBF4] border-[#3CE0BF]"
                    : "bg-white border-[#E5E7EB]"
                }`}
              >
                {/* Icon */}
                <div className="mb-5 w-[48px] h-[48px]">
                  <Image
                    src={feat.iconPath}
                    alt={feat.title}
                    width={48}
                    height={48}
                    className={`object-contain transition-all duration-300 ${
                      isMobileActive ? "icon-active-teal" : ""
                    }`}
                  />
                </div>

                {/* Title */}
                <h3 className={`font-manrope font-bold text-[18px] leading-tight mb-2 transition-colors duration-300 ${
                  isMobileActive ? "text-[#004944]" : "text-[#0B2E2E]"
                }`}>
                  {feat.title}
                </h3>

                {/* Description */}
                <p className={`font-poppins font-normal text-[13px] leading-relaxed transition-colors duration-300 ${
                  isMobileActive ? "text-[#004944]/80" : "text-[#757575]"
                }`}>
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
