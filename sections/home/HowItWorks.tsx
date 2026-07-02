'use client';

import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block py-14 mx-auto max-w-[1280px] px-6 lg:px-2 relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="rounded-[31px] border border-[#3CE0BF] w-[142px] h-[38px] flex items-center justify-center gap-[10px] font-poppins font-medium text-[20px] leading-[100%] tracking-[0px] text-[#3CE0BF] bg-transparent">
            How it works
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-center font-manrope text-[48px] font-bold leading-[62px] tracking-[-0.8px] text-[#004944] w-[928px] h-[132px] mx-auto">
          From raw numbers, to the implication, to the decision.
        </h2>

        {/* Subtitle */}
        <p className="text-center font-poppins text-[20px] leading-relaxed text-gray-500 max-w-[920px] mx-auto mt-4 mb-16 px-4">
          Drop in any file from any system. From there, GIL runs the same loop every month, on its own.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-4 gap-8 mt-[100px]">
          {/* Step 1 */}
          <div className="flex flex-col items-start">
            <div className="w-[88px] h-[88px] flex items-center justify-center bg-white rounded-[12px] border border-gray-100 shadow-[0px_1px_7px_0px_rgba(0,0,0,0.16)] mb-6">
              <Image src="/home/icon1.svg" alt="Read" width={46.66666793823242} height={46.66666793823242} className="object-cover" />
            </div>
            <span className="font-poppins font-bold text-[11px] tracking-wider text-[#3CE0BF] uppercase mb-2 block">
              Read
            </span>
            <h3 className="font-manrope font-bold text-[20px] text-[#0B2E2E] mb-3">
              Reads your data
            </h3>
            <p className="font-poppins text-[14px] leading-relaxed text-[#757575] w-[302px]">
              Any file or export from any accounting system. GIL reads it and works out your numbers. Nothing to migrate.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-start">
            <div className="w-[88px] h-[88px] flex items-center justify-center bg-white rounded-[12px] border border-gray-100 shadow-[0px_1px_7px_0px_rgba(0,0,0,0.16)] mb-6">
              <Image src="/home/icon2.svg" alt="Understand" width={46.66666793823242} height={46.666667938232} className="object-cover" />
            </div>
            <span className="font-poppins font-bold text-[11px] tracking-wider text-[#3CE0BF] uppercase mb-2 block">
              Understand
            </span>
            <h3 className="font-manrope font-bold text-[20px] text-[#0B2E2E] mb-3">
              Puts money on it
            </h3>
            <p className="font-poppins text-[14px] leading-relaxed text-[#757575] w-[302px]">
              It puts a money figure on everything where your money goes, where it is being lost, what each issue is costing and says what that means in plain words.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-start">
            <div className="w-[88px] h-[88px] flex items-center justify-center bg-white rounded-[12px] border border-gray-100 shadow-[0px_1px_7px_0px_rgba(0,0,0,0.16)] mb-6">
              <Image src="/home/icon3.svg" alt="Decide" width={46.66666793823242} height={46.66666793823242} className="object-cover" />
            </div>
            <span className="font-poppins font-bold text-[11px] tracking-wider text-[#3CE0BF] uppercase mb-2 block">
              Decide
            </span>
            <h3 className="font-manrope font-bold text-[20px] text-[#0B2E2E] mb-3">
              Shows the right call
            </h3>
            <p className="font-poppins text-[14px] leading-relaxed text-[#757575] w-[302px]">
              For every choice in front of you, GIL shows the financial implication of each option and the call it would make. You decide with the numbers in hand.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-start">
            <div className="w-[88px] h-[88px] flex items-center justify-center bg-white rounded-[12px] border border-gray-100 shadow-[0px_1px_7px_0px_rgba(0,0,0,0.16)] mb-6">
              <Image src="/home/icon4.svg" alt="See the result" width={46.66666793823242} height={46.66666793823242} className="object-cover" />
            </div>
            <span className="font-poppins font-bold text-[11px] tracking-wider text-[#3CE0BF] uppercase mb-2 block">
              See the result
            </span>
            <h3 className="font-manrope font-bold text-[20px] text-[#0B2E2E] mb-3">
              Proves the value
            </h3>
            <p className="font-poppins text-[14px] leading-relaxed text-[#757575] w-[302px]">
              GIL measures what the decision was worth, so the value is something you can see, not something you assume.
            </p>
          </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden  px-5 relative z-10">
        {/* Badge */}
        <div className="flex justify-start mb-5">
          <span className="rounded-[31px] border border-[#3CE0BF] inline-flex items-center justify-center px-3 h-[34px] font-poppins font-medium text-[13px] leading-[100%] tracking-[0px] text-[#3CE0BF] bg-transparent whitespace-nowrap">
            How it works
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-manrope text-[26px] font-bold leading-[34px] tracking-tight text-[#004944] mb-3">
          From raw numbers, to the implication, to the decision.
        </h2>

        {/* Subtitle */}
        <p className="font-poppins text-[14px] leading-[22px] text-gray-500 mb-10">
          Drop in any file from any system. From there, GIL runs the same loop every month, on its own.
        </p>

        {/* Steps Column Stack */}
        <div className="flex flex-col gap-16">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-[62px] h-[62px] flex-shrink-0 flex items-center justify-center bg-white rounded-[12px] border border-gray-100 shadow-[0px_1px_7px_0px_rgba(0,0,0,0.16)]">
              <Image src="/home/icon1.svg" alt="Read" width={38} height={38} className="object-contain" />
            </div>
            <div className="flex flex-col gap-[5px]">
              <span className="font-poppins font-bold text-[11px] tracking-[0.08em] text-[#3CE0BF] uppercase">Read</span>
              <h3 className="font-manrope font-bold text-[18px] leading-[23px] text-[#0B2E2E]">Reads your data</h3>
              <p className="font-poppins text-[13px] leading-[20px] text-gray-500 max-w-[300px] mx-auto">
                Any file or export from any accounting system. GIL reads it and works out your numbers. Nothing to migrate.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-[62px] h-[62px] flex-shrink-0 flex items-center justify-center bg-white rounded-[12px] border border-gray-100 shadow-[0px_1px_7px_0px_rgba(0,0,0,0.16)]">
              <Image src="/home/icon2.svg" alt="Understand" width={38} height={38} className="object-contain" />
            </div>
            <div className="flex flex-col gap-[5px]">
              <span className="font-poppins font-bold text-[11px] tracking-[0.08em] text-[#3CE0BF] uppercase">Understand</span>
              <h3 className="font-manrope font-bold text-[18px] leading-[23px] text-[#0B2E2E]">Puts money on it</h3>
              <p className="font-poppins text-[13px] leading-[20px] text-gray-500 max-w-[300px] mx-auto">
                It puts a money figure on everything where your money goes, where it is being lost, what each issue is costing and says what that means in plain words.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-[62px] h-[62px] flex-shrink-0 flex items-center justify-center bg-white rounded-[12px] border border-gray-100 shadow-[0px_1px_7px_0px_rgba(0,0,0,0.16)]">
              <Image src="/home/icon3.svg" alt="Decide" width={38} height={38} className="object-contain" />
            </div>
            <div className="flex flex-col gap-[5px]">
              <span className="font-poppins font-bold text-[11px] tracking-[0.08em] text-[#3CE0BF] uppercase">Decide</span>
              <h3 className="font-manrope font-bold text-[18px] leading-[23px] text-[#0B2E2E]">Shows the right call</h3>
              <p className="font-poppins text-[13px] leading-[20px] text-gray-500 max-w-[300px] mx-auto">
                For every choice in front of you, GIL shows the financial implication of each option and the call it would make. You decide with the numbers in hand.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-[62px] h-[62px] flex-shrink-0 flex items-center justify-center bg-white rounded-[12px] border border-gray-100 shadow-[0px_1px_7px_0px_rgba(0,0,0,0.16)]">
              <Image src="/home/icon4.svg" alt="See the result" width={38} height={38} className="object-contain" />
            </div>
            <div className="flex flex-col gap-[5px]">
              <span className="font-poppins font-bold text-[11px] tracking-[0.08em] text-[#3CE0BF] uppercase">See the result</span>
              <h3 className="font-manrope font-bold text-[18px] leading-[23px] text-[#0B2E2E]">Proves the value</h3>
              <p className="font-poppins text-[13px] leading-[20px] text-gray-500 max-w-[300px] mx-auto">
                GIL measures what the decision was worth, so the value is something you can see, not something you assume.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
