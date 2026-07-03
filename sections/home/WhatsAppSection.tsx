'use client';

import React from "react";
import Image from "next/image";

const WhatsAppSection = () => {
  return (
    <section className="relative z-20 w-full bg-white pt-10 pb-6 md:pt-[420px] md:pb-14 lg:pb-18 overflow-visible">
      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:block mx-auto max-w-[1280px] relative overflow-visible">
        {/* Dark Teal Background Card */}
        <div className="relative w-full bg-[#004944] rounded-[40px] pl-16 pr-0 flex items-center xl:h-[412px] min-h-[412px] overflow-visible">
          {/* Subtle glow effect */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(60,224,191,0.03)_0%,transparent_100%)] rounded-[40px]" />
          
          {/* Left Text Content */}
          <div className="w-[615px] flex flex-col gap-[20px] relative z-10 text-white shrink-0">
            {/* Badge */}
            <div>
              <span className="rounded-[31px] border border-[#3CE0BF] inline-flex items-center justify-center px-4 h-[38px] font-poppins font-medium text-[16px] leading-[100%] tracking-[0px] text-[#3CE0BF] bg-transparent whitespace-nowrap">
                WIL · the WhatsApp Intelligence Layer
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-manrope font-bold text-[48px] leading-[58px] tracking-[-0.8px] text-white w-[755px] h-[66px]">
              Your business, on WhatsApp.
            </h2>

            {/* Paragraph 1 */}
            <p className="font-poppins font-normal text-[20px] leading-[26px] text-white/95 w-[755px] ">
              Ask anything in plain words — where am I losing money, will I have cash next month, what should I fix first — and WIL answers in money, drawn straight from your numbers.
            </p>

            {/* Paragraph 2 */}
            <p className="font-poppins font-normal text-[20px] leading-[26px] text-white/95 w-[755px]">
              Every Monday morning it sends a short brief without being asked: your score, your biggest leaks, and your top three actions. The place you already check is the place GIL meets you.
            </p>
          </div>

          {/* Right Phone Image (Absolute positioning based on Figma coordinates) */}
          <div className="absolute left-[843px] top-[-377px] w-[394px] h-[817px] z-20 pointer-events-none">
            <div className="relative w-full h-full">
              <Image
                src="/home/phone.png"
                alt="Your business on WhatsApp screenshot"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden px-5 relative overflow-visible">
        {/* Dark Teal Background Card */}
        <div className="relative w-full bg-[#004944] rounded-[32px] px-6 pt-12 pb-16 flex flex-col gap-8 text-white overflow-visible">
          {/* Subtle glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(60,224,191,0.03)_0%,transparent_100%)] rounded-[32px]" />

          {/* Badge */}
          <div className="w-fit">
            <span className="rounded-[31px] border border-[#3CE0BF] inline-flex items-center justify-center px-4.5 h-[34px] font-poppins font-medium text-[13px] leading-[100%] tracking-[0px] text-[#3CE0BF] bg-transparent whitespace-nowrap">
              WIL · WhatsApp Layer
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-manrope font-bold text-[20px] leading-[28px] tracking-tight text-white">
            Your business, on WhatsApp.
          </h2>

          {/* Body Copy */}
          <div className="flex flex-col gap-4">
            <p className="font-poppins font-normal text-[13px] leading-[21px] text-white/90">
              Ask anything in plain words — where am I losing money, will I have cash next month, what should I fix first — and WIL answers in money, drawn straight from your numbers.
            </p>
            <p className="font-poppins font-normal text-[13px] leading-[21px] text-white/90">
              Every Monday morning it sends a short brief without being asked: your score, your biggest leaks, and your top three actions. The place you already check is the place GIL meets you.
            </p>
          </div>

          {/* Phone Image Below Content */}
          <div className="w-full h-[480px] relative pointer-events-none mt-4">
            <Image
              src="/home/phone.png"
              alt="Your business on WhatsApp screenshot"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;
