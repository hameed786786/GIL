'use client';

import React from "react";
import Image from "next/image";

const metrics = [
  {
    icon: "/home/icon5.svg",
    label: "Money recovered",
    value: "1,830,000",
  },
  {
    icon: "/home/icon6.svg",
    label: "Recommendations acted on",
    value: "18 of 23",
  },
  {
    icon: "/home/icon7.svg",
    label: "Recovery Score",
    value: "23% → 71%",
  },
  {
    icon: "/home/icon8.svg",
    label: "Business getting stronger",
    value: "48 → 71",
  },
];

const PayForItself = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* ================= DESKTOP ================= */}
      {/* Badge — outside two-column container */}
      <div className="hidden md:block mx-auto max-w-[1400px] px-8 xl:px-16 pt-24">
        <span className="rounded-[31px] border border-[#3CE0BF] inline-flex items-center justify-center px-4 h-[38px] font-poppins font-medium text-[16px] leading-[100%] tracking-[0px] text-[#3CE0BF] bg-transparent whitespace-nowrap">
          Does it pay for itself?
        </span>
      </div>

      <div className="hidden md:flex items-center gap-16 mx-auto max-w-[1400px] px-8 xl:px-16 pb-24">
        {/* Left Column */}
        <div className="flex flex-col gap-[26px] w-[463px] h-[328px] mt-[30px]">

          {/* Headline */}
          <h2 className="font-manrope font-bold text-[48px] leading-[58px] tracking-[-0.8px] text-[#004944]">
            The money it finds is money you keep.
          </h2>

          {/* Body */}
          <p className="font-poppins font-normal text-[20px] leading-[150%] tracking-[-0.17px] text-gray-500 w-[463px] h-[180px]">
            GIL records every recommendation, whether it was acted on, and the result. The Recovery Score is the share of identified losses you have actually put back in the business — the single number that shows it has paid for itself many times over. At year end, it is all on one page.
          </p>
        </div>

        {/* Right Column — Dark Card */}
        <div className="shrink-0">
          <div className="bg-[#0B3B38] rounded-[16px] p-8 text-white w-[737px] h-[361px] flex flex-col justify-center">
            {/* Card Title */}
            <p className="font-poppins font-normal text-[16px] leading-[24px] text-white/70 mb-6">
              Year in review — illustrative
            </p>

            {/* Metrics */}
            <div className="flex flex-col divide-y divide-white/10">
              {metrics.map((metric) => (
                <div key={metric.label} className="flex items-center justify-between py-4">
                  <div className="flex items-center gap-3">
                    <Image src={metric.icon} alt={metric.label} width={24} height={24} className="object-contain shrink-0" />
                    <span className="font-poppins font-medium text-[16px] leading-[24px] text-white">
                      {metric.label}
                    </span>
                  </div>
                  <span className="font-poppins font-semibold text-[16px] leading-[24px] text-white text-right">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-5 py-16 flex flex-col gap-10">
        {/* Left Column */}
        <div className="px-1">
          {/* Badge */}
          <div className="mb-6">
            <span className="rounded-[31px] border border-[#3CE0BF] inline-flex items-center justify-center px-4 h-[38px] font-poppins font-medium text-[14px] leading-[100%] tracking-[0px] text-[#3CE0BF] bg-transparent whitespace-nowrap">
              Does it pay for itself?
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-manrope font-bold text-[28px] leading-[36px] tracking-tight text-[#004944] mb-4">
            The money it finds is money you keep.
          </h2>

          {/* Body */}
          <p className="font-poppins font-normal text-[14px] leading-[22px] text-gray-500">
            GIL records every recommendation, whether it was acted on, and the result. The Recovery Score is the share of identified losses you have actually put back in the business — the single number that shows it has paid for itself many times over. At year end, it is all on one page.
          </p>
        </div>

        {/* Dark Card */}
        <div className="bg-[#0B3B38] rounded-[20px] p-6 text-white w-full">
          {/* Card Title */}
          <p className="font-poppins font-normal text-[13px] leading-[20px] text-white/70 mb-4">
            Year in review — illustrative
          </p>

          {/* Metrics */}
          <div className="flex flex-col divide-y divide-white/10">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex items-center justify-between py-3">
                <div className="flex items-center gap-2">
                  <Image src={metric.icon} alt={metric.label} width={20} height={20} className="object-contain shrink-0" />
                  <span className="font-poppins font-medium text-[13px] leading-[20px] text-white">
                    {metric.label}
                  </span>
                </div>
                <span className="font-poppins font-semibold text-[13px] leading-[20px] text-white text-right ml-2 shrink-0">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayForItself;
