'use client';

import React from "react";

const DemoSection = () => {
  return (
    <section className="relative w-full overflow-hidden py-20 lg:py-24 bg-[radial-gradient(circle_at_center,#3CE0BF33_10%,#042623_120%)] text-[#0B2E2E] text-center">
      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:flex flex-col items-center text-center mx-auto max-w-[1280px] px-6 lg:px-8 relative z-10">
        {/* Headline */}
        <h2 className="font-manrope font-medium text-[50.5px] leading-[58px] tracking-[-0.8px] text-[#0B2E2E] mb-4">
          See GIL with your own numbers.
        </h2>

        {/* Subtitle */}
        <p className="font-poppins font-normal text-[20px] leading-[30px] text-[#0B2E2E]/80 max-w-[850px] mx-auto mb-10">
          A short working session shows you exactly what GIL finds in your business — where money is going, where it is being lost, and the decisions in front of you.
        </p>

        {/* Action Button */}
        <button className="bg-white text-[#0B2E2E] font-poppins font-medium text-[20.5px] leading-[100%] h-[56px] px-5 rounded-[59px] shadow-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
          Request a Demonstration
        </button>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden flex flex-col items-center text-center px-5 relative z-10">
        {/* Headline */}
        <h2 className="font-manrope font-medium text-[28px] leading-[36px] tracking-tight text-[#0B2E2E] mb-3">
          See GIL with your own numbers.
        </h2>

        {/* Subtitle */}
        <p className="font-poppins font-normal text-[14px] leading-[22px] text-[#0B2E2E]/80 mb-8">
          A short working session shows you exactly what GIL finds in your business — where money is going, where it is being lost, and the decisions in front of you.
        </p>

        {/* Action Button */}
        <button className="bg-white text-[#0B2E2E] font-poppins font-semibold text-[14px] leading-[100%] h-[48px] px-8 rounded-[59px] shadow-md hover:bg-gray-50 transition-colors duration-200 cursor-pointer w-full max-w-xs">
          Request a Demonstration
        </button>
      </div>
    </section>
  );
};

export default DemoSection;
