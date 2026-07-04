'use client';

import React, { useState } from "react";
import Image from "next/image";

const QNA_DATA = [
  {
    question: "Why is there never enough in the bank?",
    topText: (
      <>
        About <span className="font-semibold">$184,000</span> a month — most
        of it in slow customer payments and excess stock. Each amount
        is named, with what is causing it.
      </>
    ),
    bottomText: (
      <>
        <span className="font-semibold text-white">Leakage.</span> The pain: money
        draining away you cannot see.
      </>
    )
  },
  {
    question: "Where am I losing money?",
    topText: (
      <>
        Around <span className="font-semibold">$45,000</span> this quarter — most
        of it in underpriced services and unused software subscriptions.
      </>
    ),
    bottomText: (
      <>
        <span className="font-semibold text-white">Waste.</span> The pain: overhead
        cost creep that silently eats margins.
      </>
    )
  },
  {
    question: "Are my costs creeping up on me?",
    topText: (
      <>
        Yes, supplier costs are up <span className="font-semibold">14%</span> over
        the last 90 days. Shipping and raw material expenses are scaling faster than pricing.
      </>
    ),
    bottomText: (
      <>
        <span className="font-semibold text-white">Inflation.</span> The pain: margin
        shrinkage because sales prices aren't keeping pace.
      </>
    )
  },
  {
    question: "Should I hire now, or wait?",
    topText: (
      <>
        We recommend waiting. Your current cash buffer is <span className="font-semibold">$80,000</span>,
        but your safety model requires <span className="font-semibold">$120,000</span> to support a new hire.
      </>
    ),
    bottomText: (
      <>
        <span className="font-semibold text-white">Runway.</span> The pain: hiring
        too early and choking monthly working capital.
      </>
    )
  },
  {
    question: "Am I about to get hit with a penalty?",
    topText: (
      <>
        Tax compliance models show a potential gap of <span className="font-semibold">$12,000</span> in
        estimated payments. Resolving this before the 15th prevents a <span className="font-semibold">$1,200</span> penalty.
      </>
    ),
    bottomText: (
      <>
        <span className="font-semibold text-white">Compliance.</span> The pain: paying
        unnecessary IRS fees due to tracking lag.
      </>
    )
  },
  {
    question: "Is the business actually healthy?",
    topText: (
      <>
        Net margin is strong at <span className="font-semibold">18%</span>, but cash conversion
        takes 45 days. The business is profitable on paper, but cash-strained.
      </>
    ),
    bottomText: (
      <>
        <span className="font-semibold text-white">Liquidity.</span> The pain: looking
        rich on the P&L, but struggling to meet weekly payroll.
      </>
    )
  }
];

const Hero = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>
      <section className="relative w-full overflow-hidden px-4 py-5 md:py-24 sm:px-6 lg:px-8 isolate">
      {/* Background botbg image */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 w-full h-full -z-20">
        <Image
          src="/home/botbg.png"
          alt=""
          fill
          className="object-contain object-top"
          priority
        />
      </div>

      {/* Background grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(60, 224, 191, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(60, 224, 191, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
        }}
      />

      {/* ================= MOBILE ================= */}
      <div className="md:hidden">
        <div className="mx-auto max-w-md">

          {/* Badge */}
          <div className="mb-5 flex justify-center">
            <span className="rounded-full border border-[#3CE0BF] px-3 py-1 text-[10px] font-medium tracking-wide text-[#3CE0BF]">
              GIL – Governance Intelligence Layer
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-center text-[28px] font-bold leading-snug text-[#004944]">
            Your accounts tell you what happened.
          </h1>
          <h1 className="mt-1 text-center text-[28px] font-bold leading-snug text-[#3CE0BF]">
            GIL tells you what to do next.
          </h1>

          {/* Paragraph */}
          <p className="mx-auto mt-4 max-w-sm text-center text-[13px] leading-relaxed text-gray-500">
            Every decision in business has a financial implication. GIL is the
            intelligence layer above your accounting system — each month it
            reads your numbers and shows you that implication, in money and
            in plain language, so the right call is clear. No finance
            background required, in the language you work in.
          </p>

          {/* CTAs */}
          <div className="mt-6 flex justify-center gap-3">
            <a
              href="/contact"
              className="rounded-full bg-[#3CE0BF] px-5 py-2 text-xs font-semibold text-[#0B2E2E] hover:bg-emerald-500"
            >
              Book a Demo
            </a>
            <a
              href="#play"
              className="rounded-full border border-gray-300 px-5 py-2 text-xs font-semibold text-gray-800 hover:bg-gray-50"
            >
              Play Demo
            </a>
          </div>

          {/* Questions / answer card */}
          <div className="mt-12 flex flex-col gap-6">
            <div>
              <h3 className="mb-3 text-lg font-bold text-[#004944]">
                The questions owners actually ask
              </h3>
              <ul className="space-y-3.5 text-[14px]">
                {QNA_DATA.map((item, index) => {
                  const isActive = activeIdx === index;
                  return (
                    <li
                      key={item.question}
                      onClick={() => setActiveIdx(index)}
                      className={`font-poppins text-[14px] cursor-pointer transition-all duration-200 relative pl-4 ${
                        isActive
                          ? "font-semibold text-[#3CE0BF]"
                          : "font-medium text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      <span className={`absolute left-0 top-[7.5px] w-1.5 h-1.5 rounded-full bg-[#3CE0BF] transition-all duration-200 ${
                        isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                      }`} />
                      <span>{item.question}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div 
              key={activeIdx} 
              className="animate-fade-in-up rounded-2xl bg-[#004944] p-5 text-white shadow-md relative overflow-hidden"
            >
              {/* Subtle internal glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(60,224,191,0.08)_0%,transparent_100%)]" />
              <p className="text-[13.5px] leading-relaxed relative z-10 font-poppins">
                {QNA_DATA[activeIdx].topText}
              </p>
              <hr className="my-3.5 border-white/15 relative z-10" />
              <p className="text-[12.5px] leading-relaxed relative z-10 font-poppins text-gray-300">
                {QNA_DATA[activeIdx].bottomText}
              </p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-[10px] italic text-gray-400">
          Illustrative example. GIL works in your own currency and language,
          from your real data.
        </p>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-[1165px] px-6 md:px-8 xl:px-0 w-full">

          {/* Badge */}
          <div className="mb-6 flex justify-center">
            <span className="rounded-full border border-[#3CE0BF] px-4 py-1.5 font-poppins text-[14px] font-bold leading-[100%] tracking-[0px] text-[#3CE0BF]">
              GIL – Governance Intelligence Layer
            </span>
          </div>

          {/* Heading */}
          <h1 className="mx-auto flex flex-col justify-center items-center w-full max-w-[1165px] h-auto xl:h-[176px] text-center font-manrope text-4xl lg:text-5xl xl:text-[64px] font-bold leading-tight xl:leading-[88px] xl:tracking-[-1.6px] text-[#004944]">
            <span>Your accounts tell you what happened.</span>
            <span className="text-[#3CE0BF]">GIL tells you what to do next.</span>
          </h1>

          {/* Paragraph */}
          <p className="mx-auto mt-6 flex justify-center items-center text-center font-poppins text-lg lg:text-xl xl:text-[23.1px] font-medium   tracking-[0px] text-gray-500 w-full max-w-[1095px] h-auto xl:h-[140px]">
            Every decision in business has a financial implication. GIL is the
            intelligence layer above your accounting system — each month it
            reads your numbers and shows you that implication, in money and
            in plain language, so the right call is clear. No finance
            background required, in the language you work in.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/contact"
              className="flex items-center justify-center w-[178px] h-[54px] gap-[10px] rounded-[40px] bg-[#3CE0BF] px-[24px] py-[13px] text-[20.5px] font-medium leading-[27.3px] tracking-[0px] text-[#0B2E2E] transition-colors duration-150 hover:bg-emerald-500 whitespace-nowrap"
            >
              Book a Demo
            </a>
            <a
              href="#play"
              className="flex items-center justify-center w-[152px] h-[54px] gap-[10px] rounded-[40px] border border-gray-300 px-[24px] py-[13px] text-[20.5px] font-medium leading-[27.3px] tracking-[0px] text-gray-800 transition-colors duration-150 hover:bg-gray-50 whitespace-nowrap"
            >
              Play Demo
            </a>
          </div>
        </div>

        {/* Questions / answer card */}
        <div className="mx-auto mt-16 flex flex-col xl:flex-row items-center justify-between w-full max-w-[1280px] px-8 gap-8 p-4 h-[390px]">
          <div>
            <h3 className="mb-6 text-2xl lg:text-3xl xl:text-[32px] font-bold w-full max-w-[448px] h-auto xl:h-[98px] text-[#004944] font-manrope">
              The questions owners actually ask
            </h3>
            <ul className="space-y-4 xl:space-y-5 text-base lg:text-lg xl:text-[20px] font-poppins">
              {QNA_DATA.map((item, index) => (
                <li
                  key={item.question}
                  onClick={() => setActiveIdx(index)}
                  className={
                    activeIdx === index
                      ? "font-manrope text-[24px] font-bold leading-[100%] tracking-[-0.17px] text-[#3CE0BF] cursor-pointer"
                      : "font-poppins text-[20px] font-normal text-gray-400 hover:text-gray-600 cursor-pointer transition-all duration-200"
                  }
                >
                  {item.question}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center  mb-[-100px]">
            <div className="rounded-2xl xl:rounded-[16px] bg-[#004944] p-8 xl:pl-[25px] xl:pr-[25px] xl:pt-[60px] xl:pb-[60px] text-white w-full xl:w-[707px] xl:h-[278px] flex flex-col justify-center gap-[10px] font-poppins">
              <p className="font-manrope font-semibold text-lg lg:text-xl xl:text-[24px]  xl:leading-[140%] tracking-[-0.17px] w-full xl:w-[615px] xl:h-[99px] mx-auto opacity-100">
                {QNA_DATA[activeIdx].topText}
              </p>
              <hr className="my-4 xl:my-5 border-white/85 w-full" />
              <p className="font-manrope font-bold text-sm lg:text-base xl:text-[20px] leading-snug xl:leading-[100%] tracking-[-0.17px] text-center w-full xl:w-[657px] xl:h-[27px] mx-auto text-gray-300 opacity-100">
                {QNA_DATA[activeIdx].bottomText}
              </p>
            </div>
            <p className="mt-2 text-center text-[12px] italic text-gray-400">
              Illustrative example. GIL works in your own currency and language,
              from your real data.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Decision Banner Section */}
    <section className="relative w-full overflow-hidden isolate">
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block py-[180px] relative w-full">
        {/* Background concentric circles SVG */}
        <Image 
          src="/home/bg-circle.svg" 
          alt="" 
          width={1349}
          height={1349}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 max-w-none h-[770px] w-[1020px]"
          priority
        />

        {/* Horizontal banner */}
        <div className="relative w-full  py-20 px-8 mb-10 overflow-hidden">
          {/* Background Image */}
          <div className="pointer-events-none absolute inset-0 z-10 w-full h-full">
            <Image
              src="/bgimg1.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Subtle internal glow inside the banner */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(60,224,191,0.05)_0%,transparent_100%)]" />

          <div className="relative z-10 mx-auto max-w-[1165px] text-center">
            {/* Headline */}
            <h2 className="font-manrope text-[40px] font-bold leading-[52px] tracking-[-0.8px] text-white">
              Most businesses don't have a reporting
              <br className="hidden md:inline" /> problem. They have a decision problem.
            </h2>

            {/* Subtext */}
            <p className="mx-auto mt-6 max-w-[850px] font-poppins text-[18px] leading-[28px] text-white/80">
              Reporting tools show you the numbers and stop. GIL reads what they mean — the financial implication of every move and tells you what to do. Insight is where reporting ends. For GIL, it is where the work begins.
            </p>
          </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden py-[120px] relative w-full">
        {/* Background concentric circles SVG */}
        <Image 
          src="/home/bg-circle.svg" 
          alt="" 
          width={1349}
          height={1349}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 max-w-none h-[550px] w-[600px]"
          priority
        />

        {/* Horizontal banner */}
        <div className="relative w-full bg-[#004944] py-16 px-6 mb-10 overflow-hidden">
          {/* Background Image */}
          <div className="pointer-events-none absolute inset-0 -z-20 w-full h-full">
            <Image
              src="/bgimg1.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Subtle internal glow inside the banner */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(60,224,191,0.05)_0%,transparent_100%)]" />

          {/* Left Side Glow */}
          <div 
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-[150px]" 
            style={{
              background: 'radial-gradient(circle at left, rgba(60, 224, 191, 0.35) 0%, transparent 75%)'
            }}
          />

          {/* Right Side Glow */}
          <div 
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-[150px]" 
            style={{
              background: 'radial-gradient(circle at right, rgba(60, 224, 191, 0.35) 0%, transparent 75%)'
            }}
          />

          <div className="relative z-10 mx-auto w-full text-center">
            {/* Headline */}
            <h2 className="font-manrope text-2xl font-bold leading-snug tracking-tight text-white">
              Most businesses don't have a reporting problem. They have a decision problem.
            </h2>

            {/* Subtext */}
            <p className="mx-auto mt-4 w-full font-poppins text-[13px] leading-relaxed text-white/80">
              Reporting tools show you the numbers and stop. GIL reads what they mean — the financial implication of every move and tells you what to do. Insight is where reporting ends. For GIL, it is where the work begins.
            </p>
          </div>
        </div>
      </div>
    </section>

  </>
  );
};

export default Hero;