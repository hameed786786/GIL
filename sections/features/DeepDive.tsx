'use client';

import React from "react";
import Image from "next/image";

interface BenefitItemProps {
  text: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ text }) => {
  return (
    <div className="flex items-center gap-3 py-1">
      <div className="w-[20px] h-[20px] rounded-[6px] bg-[#C6FFF3] flex items-center justify-center shrink-0">
        <svg 
          className="w-[14px] h-[14px] text-[#004944]" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={3.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="font-poppins font-normal text-[15px] md:text-[15px] text-[#0B2E2E] tracking-tight">
        {text}
      </span>
    </div>
  );
};

const DeepDive = () => {
  return (
    <section id="deep-dive" className="relative w-full bg-white py-10 md:py-10 overflow-hidden">
      
      {/* Section Title */}
      <div className="text-center mb-10 md:mb-24">
        <h2 className="font-manrope font-bold text-[30px] md:text-[48px] leading-tight text-[#004944]">
          Deep Dive
        </h2>
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:block mx-auto max-w-[1440px] px-20 flex flex-col">
        
        {/* Row 1: Data Ingestion (Text Left, Image Right) */}
        <div className="grid grid-cols-12 gap-16 items-center">
          {/* Left Column: Text */}
          <div className="col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="font-manrope font-bold text-[32px] leading-[115%] text-[#000000] tracking-tight">
                Data Ingestion
              </h3>
              <p className="font-poppins font-normal text-[14px] leading-[160%] text-[#000000] w-[519px]">
                Upload exports from ERP, CRM, HRMS, Finance Systems, or spreadsheets. GIL automatically understands columns, remembers mappings, and reduces manual effort.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 mt-2">
              <h4 className="font-manrope font-bold text-[24px] text-[#000000] leading-none">
                Benefits
              </h4>
              <div className="flex flex-col gap-3">
                <BenefitItem text="No Formatting" />
                <BenefitItem text="Auto Mapping" />
                <BenefitItem text="Reusable Templates" />
                <BenefitItem text="Faster Onboarding" />
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="col-span-7">
            <div className="relative w-full aspect-[700/467] bg-[#C6FFF3] p-5 rounded-[28px] shadow-[0px_13px_100px_0px_#c7c7c725] transition-all duration-300 hover:shadow-lg">
              <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                <Image 
                  src="/features/dd1.png" 
                  alt="Data Ingestion Flow" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Leakage Intelligence (Image Left, Text Right) */}
        <div className="grid grid-cols-12 gap-16 items-center mt-20">
          {/* Left Column: Image */}
          <div className="col-span-7">
            <div className="relative w-full aspect-[700/467] bg-[#C6FFF3] p-5 rounded-[28px] shadow-[0px_13px_100px_0px_#c7c7c725] transition-all duration-300 hover:shadow-lg">
              <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                <Image 
                  src="/features/dd2.png" 
                  alt="Leakage Intelligence Flow" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="font-manrope font-bold text-[32px] leading-[115%] text-[#000000] tracking-tight">
                Leakage Intelligence
              </h3>
              <p className="font-poppins font-normal text-[14px] leading-[160%] text-[#000000]">
                Identify financial leakage across workforce, operations, revenue, vendors, compliance, and working capital.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 mt-2">
              <h4 className="font-manrope font-bold text-[24px] text-[#000000] leading-none">
                Benefits
              </h4>
              <div className="flex flex-col gap-3">
                <BenefitItem text="Prioritized Issues" />
                <BenefitItem text="Rupee-Based Impact" />
                <BenefitItem text="Root Cause Visibility" />
                <BenefitItem text="Faster Recovery" />
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Governance Scoring (Text Left, Image Right) */}
        <div className="grid grid-cols-12 gap-16 items-center mt-20">
          {/* Left Column: Text */}
          <div className="col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="font-manrope font-bold text-[32px] leading-[115%] text-[#000000] tracking-tight">
                Governance Scoring
              </h3>
              <p className="font-poppins font-normal text-[14px] leading-[160%] text-[#000000]">
                Track governance performance using measurable scores that reveal risk, stability, and confidence in your data.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 mt-2">
              <h4 className="font-manrope font-bold text-[24px] text-[#000000] leading-none">
                Benefits
              </h4>
              <div className="flex flex-col gap-3">
                <BenefitItem text="Executive Visibility" />
                <BenefitItem text="Monthly Tracking" />
                <BenefitItem text="Industry Benchmarking" />
                <BenefitItem text="Governance Trends" />
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="col-span-7">
            <div className="relative w-full aspect-[700/467] bg-[#C6FFF3] p-5 rounded-[28px] shadow-[0px_13px_100px_0px_#c7c7c725] transition-all duration-300 hover:shadow-lg">
              <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                <Image 
                  src="/features/dd3.png" 
                  alt="Governance Scoring Flow" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden px-5 flex flex-col gap-10">
        
        {/* Row 1: Data Ingestion */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 pl-1">
            <h3 className="font-manrope font-bold text-[24px] leading-tight text-[#0B2E2E] tracking-tight">
              Data Ingestion
            </h3>
            <p className="font-poppins font-normal text-[14px] leading-[22px] text-[#000000]">
              Upload exports from ERP, CRM, HRMS, Finance Systems, or spreadsheets. GIL automatically understands columns, remembers mappings, and reduces manual effort.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-[700/467] bg-[#C6FFF3] p-2 rounded-[20px] shadow-sm">
            <div className="relative w-full h-full rounded-[12px] overflow-hidden">
              <Image 
                src="/features/dd1.png" 
                alt="Data Ingestion Flow" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-3 mt-2 pl-2">
            <h4 className="font-manrope font-bold text-[18px] text-[#0B2E2E] leading-none">
              Benefits
            </h4>
            <div className="flex flex-col gap-2.5">
              <BenefitItem text="No Formatting" />
              <BenefitItem text="Auto Mapping" />
              <BenefitItem text="Reusable Templates" />
              <BenefitItem text="Faster Onboarding" />
            </div>
          </div>
        </div>

        {/* Row 2: Leakage Intelligence */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 pl-1">
            <h3 className="font-manrope font-bold text-[24px] leading-tight text-[#0B2E2E] tracking-tight">
              Leakage Intelligence
            </h3>
            <p className="font-poppins font-normal text-[14px] leading-[22px] text-[#000000]">
              Identify financial leakage across workforce, operations, revenue, vendors, compliance, and working capital.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-[700/467] bg-[#C6FFF3] p-2 rounded-[20px] shadow-sm">
            <div className="relative w-full h-full rounded-[12px] overflow-hidden">
              <Image 
                src="/features/dd2.png" 
                alt="Leakage Intelligence Flow" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-3 mt-2 pl-2">
            <h4 className="font-manrope font-bold text-[18px] text-[#0B2E2E] leading-none">
              Benefits
            </h4>
            <div className="flex flex-col gap-2.5">
              <BenefitItem text="Prioritized Issues" />
              <BenefitItem text="Rupee-Based Impact" />
              <BenefitItem text="Root Cause Visibility" />
              <BenefitItem text="Faster Recovery" />
            </div>
          </div>
        </div>

        {/* Row 3: Governance Scoring */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 pl-1">
            <h3 className="font-manrope font-bold text-[24px] leading-tight text-[#0B2E2E] tracking-tight">
              Governance Scoring
            </h3>
            <p className="font-poppins font-normal text-[14px] leading-[22px] text-[#000000]">
              Track governance performance using measurable scores that reveal risk, stability, and confidence in your data.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-[700/467] bg-[#C6FFF3] p-2 rounded-[20px] shadow-sm">
            <div className="relative w-full h-full rounded-[12px] overflow-hidden">
              <Image 
                src="/features/dd3.png" 
                alt="Governance Scoring Flow" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-3 mt-2 pl-2">
            <h4 className="font-manrope font-bold text-[18px] text-[#0B2E2E] leading-none">
              Benefits
            </h4>
            <div className="flex flex-col gap-2.5">
              <BenefitItem text="Executive Visibility" />
              <BenefitItem text="Monthly Tracking" />
              <BenefitItem text="Industry Benchmarking" />
              <BenefitItem text="Governance Trends" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DeepDive;
