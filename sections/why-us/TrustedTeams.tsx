'use client';

import React from "react";
import Image from "next/image";

const TrustedTeams = () => {
  return (
    <section className="relative w-full bg-white py-16 md:pt-0 pt-0 md:py-24 overflow-hidden">
      
      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:flex mx-auto max-w-[1440px] px-20 flex-col items-center">
        {/* Section Header */}
        <h2 className="font-manrope font-semibold md:text-[48px] leading-tight text-[#004944] text-center mb-16 max-w-[968px]">
          Trusted by teams focused on governance and performance
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-12 gap-5 w-full items-stretch">
          
          {/* Box 1: GIL Logo */}
          <div className="col-span-2 border border-[#E5E7EB] rounded-[24px] bg-white flex items-center justify-center p-6 shadow-[0px_8px_32px_rgba(0,0,0,0.01)] min-h-[196px]">
            <div className="relative w-[110px] h-[110px]">
              <Image
                src="/home/logo.svg"
                alt="GIL Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Box 2: 37 KPI */}
          <div className="col-span-3 rounded-[24px] bg-[#004944] flex flex-col justify-center p-8 text-left min-h-[196px] ">
            <span className="font-manrope font-bold text-[64px] text-white leading-none mb-3">
              37 KPI
            </span>
            <span className="font-poppins font-medium text-[24px] text-white/90 w-[260px]">
              Business KPIs Tracked
            </span>
          </div>

          {/* Box 3: Testimonial Quote */}
          <div className="col-span-7 rounded-[24px] bg-[#004944] flex flex-col justify-between p-8 pl-10 text-left min-h-[196px]">
            <p className="font-poppins font-normal text-[20px]  text-white/95 max-w-[628px] text-center">
              &ldquo;GIL helped us move from fragmented reports to measurable governance. We now know exactly where inefficiencies exist and what actions to take first.&rdquo;
            </p>
            
            <div className="self-end text-right mt-4">
              <p className="font-poppins font-semibold text-[16px] text-white">
                Finance Director
              </p>
              <p className="font-poppins font-normal text-[14px] text-white/70">
                Enterprise Services Company
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden px-5 flex flex-col items-center">
        {/* Section Header */}
        <h2 className="font-manrope font-semibold text-[20px] leading-[28px] text-[#004944] text-center mb-8 max-w-[340px]">
          Trusted by teams focused on governance and performance
        </h2>

        {/* Stack Container */}
        <div className="flex flex-col gap-4 w-full">
          
          {/* Row 1: Logo & KPI side by side */}
          <div className="grid grid-cols-12 gap-4 w-full">
            {/* Box 1: GIL Logo */}
            <div className="col-span-4 border border-[#E5E7EB] rounded-[20px] bg-white flex items-center justify-center p-3 shadow-[0px_6px_20px_rgba(0,0,0,0.01)] h-[116px]">
              <div className="relative w-[52px] h-[52px]">
                <Image
                  src="/home/logo.svg"
                  alt="GIL Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Box 2: 37 KPI */}
            <div className="col-span-8 rounded-[20px] bg-[#004944] flex flex-col justify-center p-5 text-left h-[116px]">
              <span className="font-manrope font-bold text-[30px] text-white leading-none mb-1">
                37 KPI
              </span>
              <span className="font-poppins font-medium text-[12px] text-white/90 leading-tight">
                Business KPIs Tracked
              </span>
            </div>
          </div>

          {/* Box 3: Testimonial Quote */}
          <div className="rounded-[20px] bg-[#004944] flex flex-col justify-between p-7 text-left w-full min-h-[220px]">
            <p className="font-poppins font-normal text-[15px] leading-relaxed text-white/95">
              &ldquo;GIL helped us move from fragmented reports to measurable governance. We now know exactly where inefficiencies exist and what actions to take first.&rdquo;
            </p>
            
            <div className="text-right mt-8">
              <p className="font-poppins font-semibold text-[13px] text-white">
                Finance Director
              </p>
              <p className="font-poppins font-normal text-[11px] text-white/70">
                Enterprise Services Company
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default TrustedTeams;
