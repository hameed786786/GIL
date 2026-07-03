'use client';

import React from "react";
import Image from "next/image";

const MarketSection = () => {
  const markets = [
    { name: "India", flag: "/home/india.svg" },
    { name: "UAE", flag: "/home/united-arab-emirates.svg" },
    { name: "Singapore", flag: "/home/singapore.svg" },
    { name: "United Kingdom", flag: "/home/united-kingdom.svg" }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-10 lg:py-16 text-[#0B2E2E]">

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:flex flex-col items-center text-center mx-auto max-w-[1128px] px-0 relative z-10">
        {/* Badge */}
        <div className="mb-6">
          <span className="rounded-[31px] border border-[#3CE0BF] inline-flex items-center justify-center w-[325px] h-[38px] font-poppins font-medium text-[20px] leading-[100%] tracking-[0px] text-[#3CE0BF] bg-transparent whitespace-nowrap">
            Built for more than one market
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-manrope font-medium text-[48px] leading-[58px] tracking-[-0.8px] text-[#004944] mb-6">
          Local rules, your currency, your language.
        </h2>

        {/* Subtitle */}
        <p className="font-poppins font-normal text-[20px] leading-[30px] text-[#757575] max-w-[898px] mx-auto mb-12">
          GIL reads the tax and statutory rules of the country you operate in, reports in your own currency, and speaks your language — so the same product serves a business in Bengaluru, Dubai, Singapore or London without a separate build.
        </p>

        {/* Markets list */}
        <div className="flex justify-center gap-16 mb-10">
          {markets.map((market) => (
            <div key={market.name} className="flex flex-col items-center gap-3">
              {/* Flag Container */}
              <div className="w-[64px] h-[44px] relative rounded-[8px] overflow-hidden border border-gray-100 shadow-sm">
                <Image
                  src={market.flag}
                  alt={market.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-poppins font-medium text-[14px] text-[#004944]">
                {market.name}
              </span>
            </div>
          ))}
        </div>

        {/* More on the way */}
        <span className="font-poppins font-medium text-[18px] text-[#004944] tracking-[0.2px] hover:underline cursor-default">
          More on the way
        </span>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden flex flex-col items-center text-center px-5 relative z-10">
        {/* Badge */}
        <div className="mb-5">
          <span className="rounded-[31px] border border-[#3CE0BF] inline-flex items-center justify-center px-4 h-[34px] font-poppins font-medium text-[13px] leading-[100%] tracking-[0px] text-[#3CE0BF] bg-transparent whitespace-nowrap">
            Built for more than one market
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-manrope font-medium text-[20px] leading-[28px] tracking-tight text-[#004944] mb-4">
          Local rules, your currency, your language.
        </h2>

        {/* Subtitle */}
        <p className="font-poppins font-normal text-[13px] leading-[21px] text-[#757575] mb-8">
          GIL reads the tax and statutory rules of the country you operate in, reports in your own currency, and speaks your language — so the same product serves a business in Bengaluru, Dubai, Singapore or London without a separate build.
        </p>

        {/* Markets Grid */}
        <div className="grid grid-cols-2 gap-8 mb-8 w-full max-w-xs mx-auto">
          {markets.map((market) => (
            <div key={market.name} className="flex flex-col items-center gap-2">
              <div className="w-[56px] h-[38px] relative rounded-[6px] overflow-hidden border border-gray-100 shadow-sm">
                <Image
                  src={market.flag}
                  alt={market.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-poppins font-medium text-[13px] text-[#004944]">
                {market.name}
              </span>
            </div>
          ))}
        </div>

        {/* More on the way */}
        <span className="font-poppins font-medium text-[14px] text-[#004944]">
          More on the way
        </span>
      </div>
    </section>
  );
};

export default MarketSection;
