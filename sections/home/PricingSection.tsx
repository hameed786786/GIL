'use client';

import React from "react";
import Image from "next/image";

const PricingSection = () => {
  const cards = [
    {
      id: "establishing",
      icon: "/home/icon13.svg",
      tag: "Owner-led",
      title: "Establishing",
      description: "Smaller, owner-run businesses getting their first clear view — where the money goes, what is being lost, and what to do this month."
    },
    {
      id: "growing",
      icon: "/home/icon14.svg",
      tag: "Multi-location",
      title: "Growing",
      description: "Businesses across locations or entities that need forecasting, decision support, and a single view over the whole group."
    },
    {
      id: "established",
      icon: "/home/icon15.svg",
      tag: "Board-governed",
      title: "Established",
      description: "Larger businesses with boards and auditors, requiring risk oversight, deeper controls, and audit-ready records."
    }
  ];

  return (
    <section id="pricing" className="relative w-full h-auto md:h-[781px] overflow-hidden py-12 md:py-0 bg-[#004944] text-white">
      {/* Background Grid Image */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Image
          src="/home/botbg.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Side Grids */}
      <div className="hidden md:block pointer-events-none absolute top-0 left-0 w-[70px] h-[1024px] z-10 select-none -scale-x-100">
        <Image
          src="/home/sidegrid.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="hidden md:block pointer-events-none absolute top-0 right-0 w-[70px] h-[1024px] z-10 select-none">
        <Image
          src="/home/sidegrid.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:flex flex-col items-center text-center mx-auto max-w-[1280px] relative z-10 pt-[48px]">
        {/* Badge */}
        <div className="mb-4">
          <span className="rounded-[31px] border border-[#3CE0BF] inline-flex items-center justify-center w-[238px] h-[38px] font-poppins font-medium text-[16px] leading-[100%] tracking-[0px] text-[#3CE0BF] bg-transparent whitespace-nowrap">
            Grows with your business
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-manrope font-medium text-[48px] leading-[58px] tracking-[-0.8px] text-white w-[850px] mb-4">
          Priced to your stage, not to your features.
        </h2>

        {/* Subtitle */}
        <p className="font-poppins font-normal text-[18px] leading-[28px] text-white/80 max-w-[850px] mx-auto mb-8">
          Every business gets the full intelligence engine. What changes is the depth, which grows naturally as your data builds. GIL is useful from the first month and becomes more so as it learns your business.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-3 gap-6 w-full mb-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-[#D9D9D9] rounded-[22px] p-6 text-left flex flex-col justify-between h-[295px] shadow-[0px_13px_100px_0px_#c7c7c740]"
            >
              {/* Icon Container */}
              <div className="w-[88px] h-[88px] rounded-[14px] border border-[#E5E7EB] flex items-center justify-center bg-[#F9FAFB] mb-1">
                <Image
                  src={card.icon}
                  alt=""
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>

              {/* Tag */}
              <span className="font-poppins font-medium text-[16px] text-[#3CE0BF] mb-2 block">
                {card.tag}
              </span>

              {/* Title */}
              <h3 className="font-manrope font-bold text-[24px] leading-tight text-[#0B2E2E] mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="font-poppins font-normal text-[14px] leading-[160%] text-[#757575] h-[63px] w-[370px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="font-poppins font-medium text-[13px] leading-[22px] text-white max-w-[928px] mx-auto mt-2 tracking-[0.3]">
          The full engine — the money view, the decisions, the statutory watch, the board pack and WIL — is there from the first edition. Higher tiers add reach and depth, not basics.
        </p>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden flex flex-col items-center text-center px-5 relative z-10">
        {/* Badge */}
        <div className="mb-5">
          <span className="rounded-[31px] border border-[#3CE0BF] inline-flex items-center justify-center px-4 h-[34px] font-poppins font-medium text-[13px] leading-[100%] tracking-[0px] text-[#3CE0BF] bg-transparent whitespace-nowrap">
            Grows with your business
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-manrope font-medium text-[20px] leading-[28px] tracking-tight text-white mb-4">
          Priced to your stage, not to your features.
        </h2>

        {/* Subtitle */}
        <p className="font-poppins font-normal text-[13px] leading-[21px] text-white/80 mb-8">
          Every business gets the full intelligence engine. What changes is the depth, which grows naturally as your data builds. GIL is useful from the first month and becomes more so as it learns your business.
        </p>

        {/* Cards */}
        <div className="flex flex-col gap-6 w-full mb-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-[#D9D9D9] rounded-[22px] p-6 text-left flex flex-col shadow-[0px_13px_100px_0px_#c7c7c740]"
            >
              {/* Icon Container */}
              <div className="w-[50px] h-[50px] rounded-[12px] border border-[#E5E7EB] flex items-center justify-center bg-[#F9FAFB] mb-4">
                <Image
                  src={card.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              {/* Tag */}
              <span className="font-poppins font-medium text-[13px] text-[#3CE0BF] mb-1 block">
                {card.tag}
              </span>

              {/* Title */}
              <h3 className="font-manrope font-bold text-[20px] leading-tight text-[#0B2E2E] mb-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="font-poppins font-normal text-[13px] leading-[150%] text-gray-500">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="font-poppins font-normal text-[12px] leading-[18px] text-white">
          The full engine — the money view, the decisions, the statutory watch, the board pack and WIL — is there from the first edition. Higher tiers add reach and depth, not basics.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
