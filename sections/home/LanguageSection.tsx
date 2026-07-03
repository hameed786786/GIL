'use client';

import React from "react";

const LanguageSection = () => {
  const languages = [
    { label: "English", lang: "en" },
    { label: "हिन्दी", lang: "hi" },
    { label: "العربية", lang: "ar" },
    { label: "中文", lang: "zh" },
    { label: "日本語", lang: "ja" },
    { label: "Français", lang: "fr" },
    { label: "Español", lang: "es" },
    { label: "Bahasa", lang: "id" }
  ];

  return (
    <section className="relative w-full h-[430px] md:h-[504px] overflow-hidden py-4 bg-[#004944] text-white">
      {/* Side Glows */}
      <div className="pointer-events-none absolute left-[-150px] top-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-[#3CE0BF]/20 blur-[100px] z-0" />
      <div className="pointer-events-none absolute right-[-150px] top-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-[#3CE0BF]/20 blur-[100px] z-0" />

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:flex flex-col items-center text-center mx-auto max-w-[1280px] px-6 lg:px-8 relative z-10 py-14">
        {/* Badge */}
        <div className="mb-6">
          <span className="rounded-[31px] border border-[#3CE0BF] inline-flex items-center justify-center w-[238px] h-[38px] font-poppins font-medium text-[16px] leading-[100%] tracking-[0px] text-[#3CE0BF] bg-transparent whitespace-nowrap">
            Built to be understood
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-manrope font-medium text-[48px] leading-[58px] tracking-[-0.8px] text-white mb-6">
          Clear language, in your language.
        </h2>

        {/* Subtitle */}
        <p className="font-poppins font-medium text-[20px] leading-[30px] text-white/90 max-w-[928px] mx-auto mb-12 px-2">
          GIL explains everything in plain, everyday language rather than financial terminology, and works in the language you operate in. You do not need a finance background, a dashboard habit, or a spare hour.
        </p>

        {/* Language pills row */}
        <div className="flex flex-wrap justify-center gap-10 max-w-[1000px] mx-auto h-[50px]">
          {languages.map((item) => (
            <span
              key={item.lang}
              className="bg-white text-[#004944] font-poppins font-medium text-[16px] leading-[100%] h-[50px] px-4 rounded-[59px] inline-flex items-center justify-center shadow-sm hover:scale-[1.02] transition-transform duration-200 cursor-default select-none"
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden flex flex-col items-center text-center px-5 relative z-10 py-4">
        {/* Badge */}
        <div className="mb-5">
          <span className="rounded-[31px] border border-[#3CE0BF] inline-flex items-center justify-center px-4 h-[34px] font-poppins font-medium text-[13px] leading-[100%] tracking-[0px] text-[#3CE0BF] bg-transparent whitespace-nowrap">
            Built to be understood
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-manrope font-bold text-[20px] leading-[28px] tracking-tight text-white mb-4">
          Clear language, in your language.
        </h2>

        {/* Subtitle */}
        <p className="font-poppins font-normal text-[13px] leading-[21px] text-white/90 mb-8">
          GIL explains everything in plain, everyday language rather than financial terminology, and works in the language you operate in. You do not need a finance background, a dashboard habit, or a spare hour.
        </p>

        {/* Language pills */}
        <div className="flex flex-wrap justify-center gap-3 w-full">
          {languages.map((item) => (
            <span
              key={item.lang}
              className="bg-white text-[#0B2E2E] font-poppins font-medium text-[14px] leading-[100%] h-[40px] px-6 rounded-[31px] inline-flex items-center justify-center shadow-sm"
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageSection;
