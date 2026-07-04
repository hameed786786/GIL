'use client';

import React from "react";
import Image from "next/image";

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonOnClick?: () => void;
  secondaryButtonText?: string;
  secondaryButtonOnClick?: () => void;
}

const CTA: React.FC<CTAProps> = ({
  title = "See GIL with your own numbers.",
  subtitle = "A short working session shows you exactly what GIL finds in your business — where money is going, where it is being lost, and the decisions in front of you.",
  primaryButtonText = "Request a Demonstration",
  primaryButtonOnClick,
  secondaryButtonText,
  secondaryButtonOnClick,
}) => {
  return (
    <section className="relative w-full overflow-hidden py-20 lg:py-24 bg-[#E2F0EC] text-[#0B2E2E] text-center isolate">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 -z-20 w-full h-full">
        <Image
          src="/bgimg2.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:flex flex-col items-center text-center mx-auto max-w-[1280px] px-6 lg:px-8 relative z-10">
        {/* Headline */}
        <h2 className="font-manrope font-medium text-[50.5px] leading-[58px] tracking-[-0.8px] text-[#0B2E2E] mb-4 max-w-[950px]">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="font-poppins font-normal text-[20px] leading-[30px] text-[#0B2E2E]/80 max-w-[850px] mx-auto mb-10">
          {subtitle}
        </p>

        {/* Buttons Group */}
        <div className="flex flex-row items-center gap-4.5 justify-center">
          {/* Primary Button */}
          <button 
            onClick={primaryButtonOnClick}
            className="bg-white/80 text-[#0B2E2E] font-poppins font-medium text-[14.9px] leading-[100%] h-[35.209999084472656px] px-4 rounded-[6px] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
          >
            {primaryButtonText}
          </button>

          {/* Secondary Button */}
          {secondaryButtonText && (
            <button 
              onClick={secondaryButtonOnClick}
              className="bg-[#2D2D2D] text-white font-poppins font-medium text-[14.9px] leading-[100%] h-[35.209999084472656px] px-4 rounded-[6px] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] hover:bg-[#3F3F3F] transition-colors duration-200 cursor-pointer"
            >
              {secondaryButtonText}
            </button>
          )}
        </div>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden flex flex-col items-center text-center px-5 relative z-10">
        {/* Headline */}
        <h2 className="font-manrope font-medium text-[20px] leading-[28px] tracking-tight text-[#0B2E2E] mb-3 max-w-[300px]">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#0B2E2E]/80 mb-8 max-w-[320px]">
          {subtitle}
        </p>

        {/* Buttons Group */}
        <div className="flex flex-row gap-3 justify-center items-center">
          {/* Primary Button */}
          <button 
            onClick={primaryButtonOnClick}
            className="bg-white text-[#0B2E2E] font-poppins font-medium text-[13px] leading-none h-[40px] px-5 rounded-[6px] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] hover:bg-gray-50 transition-colors duration-200 cursor-pointer whitespace-nowrap"
          >
            {primaryButtonText}
          </button>

          {/* Secondary Button */}
          {secondaryButtonText && (
            <button 
              onClick={secondaryButtonOnClick}
              className="bg-[#2D2D2D] text-white font-poppins font-medium text-[13px] leading-none h-[40px] px-5 rounded-[6px] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] hover:bg-[#3F3F3F] transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              {secondaryButtonText}
            </button>
          )}
        </div>
      </div>
    </section>

  );
};

export default CTA;
