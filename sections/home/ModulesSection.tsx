'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ModuleData {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
}

const MODULES_DATA: ModuleData[] = [
  {
    id: "cost-structure",
    name: "Cost Structure Intelligence",
    title: "Where your money goes",
    description: "Every cost shown as a share of your income across eight areas, down to the individual ledger line, with anything quietly creeping up flagged in money — and what it is costing you a month.",
    image: "/home/module_cost_structure.png"
  },
  {
    id: "leakage",
    name: "Leakage",
    title: "Where money is being lost",
    description: "Everywhere money commonly drains away — slow payments, excess stock, idle capacity, over-discounting and more — each one as an amount. What is already gone is kept separate from what is only at risk.",
    image: "/home/leakage.png"
  },
  {
    id: "forecasting",
    name: "Forecasting",
    title: "What your cash does next",
    description: "A ninety-day cash view week by week with every payment named, plus revenue, stock, hiring and reserves — so you see a shortfall in time to act, not after it bites.",
    image: "/home/forecasting.png"
  },
  {
    id: "decision-library",
    name: "The Decision Library",
    title: "The everyday calls, in money",
    description: "Hire or contract, buy or lease, discount or wait — each weighed on your real numbers, with the money implication of both options, one recommendation, and the single thing that would change it.",
    image: "/home/The Decision Library.png"
  },
  {
    id: "decision-ledger",
    name: "The Decision Ledger",
    title: "Where your money goes",
    description: "GIL records what it advised, whether you acted, and what it returned — so the value of every call is on the record, in money, not opinion.",
    image: "/home/The Decision Ledger.png"
  },
  {
    id: "compliance",
    name: "Statutory Compliance",
    title: "The deadline and penalty watch",
    description: "Every tax and statutory deadline watched for you, the penalty shown in money as it builds, and a warning ninety days before a cash shortfall — across India and other markets.",
    image: "/home/Statutory Compliance.png"
  },
  {
    id: "governance",
    name: "Governance Score & Priority Stack",
    title: "Whether the business is healthy",
    description: "One number that tells you whether the business is getting stronger or weaker — tracked monthly, set against your industry — with the single priority to fix first.",
    image: "/home/Governance Score & Priority Stack.png"
  },
  {
    id: "language",
    name: "The Language Engine",
    title: "The numbers, explained",
    description: "Every change put in plain words — what moved this month and why — so a figure never reaches you without its meaning attached.",
    image: "/home/The Language Engine.png"
  },
  {
    id: "kanban",
    name: "Kanban Intelligence",
    title: "From a finding to a fix",
    description: "Each issue becomes a tracked action with an owner and a deadline, and progress is measured from your real numbers rather than self-reported.",
    image: "/home/Kanban Intelligence.png"
  },
  {
    id: "board-pack",
    name: "The Board Pack",
    title: "Your reporting, already done",
    description: "A complete, ready-to-present report produced for you each month — figures, charts and written narrative — without anyone assembling it by hand.",
    image: "/home/The Board Pack.png"
  }
];

const ModulesSection = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const isClickScrolling = useRef<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current || !scrollTrackRef.current) return;

      const rect = scrollTrackRef.current.getBoundingClientRect();
      const trackHeight = rect.height;
      const scrolledPastTop = -rect.top;
      const totalScrollableDistance = trackHeight - window.innerHeight;
      
      if (totalScrollableDistance <= 0) return;

      const currentProgress = Math.max(0, Math.min(1, scrolledPastTop / totalScrollableDistance));
      const targetIndex = Math.min(
        Math.floor(currentProgress * MODULES_DATA.length),
        MODULES_DATA.length - 1
      );

      if (targetIndex !== activeIdx) {
        setActiveIdx(targetIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIdx]);

  const handleTabClick = (idx: number) => {
    if (!scrollTrackRef.current) return;

    isClickScrolling.current = true;
    setActiveIdx(idx);

    const rect = scrollTrackRef.current.getBoundingClientRect();
    const currentScrollY = window.scrollY || document.documentElement.scrollTop;
    const totalScrollableDistance = rect.height - window.innerHeight;

    const absoluteTrackTop = rect.top + currentScrollY;
    const targetScrollPosition = absoluteTrackTop + (idx / (MODULES_DATA.length - 1)) * totalScrollableDistance;

    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth"
    });

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  return (
    <section className="relative w-full bg-white py-6 md:py-24">
      
      {/* ================= DESKTOP VIEW ================= */}
      <div 
        ref={scrollTrackRef}
        className="hidden md:block relative w-full"
        style={{ height: `${MODULES_DATA.length * 100}vh` }}
      >
        {/* Sticky wrapper locks the view frame during scrolling transitions */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
          <div className="mx-auto max-w-[1280px] px-2 w-full">
            
            {/* Header Block */}
            <div className="flex flex-col items-center text-center mb-16">
              {/* Badge */}
              <div className="mb-6">
                <span className="rounded-[31px] border border-[#3CE0BF] inline-flex items-center justify-center px-4 h-[38px] font-poppins font-medium text-[20px] leading-[100%] tracking-[0px] text-[#3CE0BF] bg-transparent whitespace-nowrap w-[143px] h-[38px]">
                  What it does
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-manrope font-bold text-[48px] leading-[58px] tracking-[-0.8px] text-[#004944] max-w-[850px] mb-6">
                Every module turns your numbers into a decision.
              </h2>

              {/* Subtitle */}
              <p className="font-poppins font-normal text-[18px] leading-[28px] text-[#757575] max-w-[800px]">
                Each one takes a corner of the business, puts its financial implication in front of you in money and plain words, and tells you what to do. These are GIL's working modules.
              </p>
            </div>

            {/* Interactive Layout (Sidebar + Content) */}
            <div className="flex items-center gap-12 lg:gap-16">
              
              {/* Sidebar Tabs */}
              <div className="w-[404px] h-[566px] shrink-0 flex flex-col justify-between border-l border-gray-100">
                {MODULES_DATA.map((mod, idx) => {
                  const isActive = idx === activeIdx;
                  return (
                    <button
                      key={mod.id}
                      onClick={() => handleTabClick(idx)}
                      className={`relative py-4 pl-6 text-left transition-all duration-200 outline-none ${
                        isActive 
                          ? "text-[#3CE0BF] font-manrope font-bold text-[24px] leading-[100%] tracking-[-0.17px]" 
                          : "text-gray-400 font-manrope font-bold text-[24px] leading-[100%] tracking-[-0.17px] hover:text-gray-600"
                      }`}
                    >
                      {/* Left Active border indicator */}
                      {isActive && (
                        <span className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-[#3CE0BF]" />
                      )}
                      {mod.name}
                    </button>
                  );
                })}
              </div>

              {/* Content Card Display */}
              <div className="flex-1 relative max-w-[845px] h-[732px]">
                {MODULES_DATA.map((mod, idx) => {
                  const isActive = idx === activeIdx;
                  return (
                    <div
                      key={mod.id}
                      className={`absolute inset-0 bg-[#D2FBF4] rounded-[24px] p-6 lg:p-6 w-full max-w-[845px] max-h-[732px] transition-all duration-500 ease-in-out ${
                        isActive 
                          ? "opacity-100 translate-y-0 pointer-events-auto scale-100 z-10" 
                          : "opacity-0 translate-y-4 pointer-events-none scale-[0.99] z-0"
                      }`}
                    >
                      {/* Illustration Image Box */}
                      <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden mb-8 shadow-[0px_2px_12px_rgba(0,0,0,0.04)] w-[800px] h-[533px]">
                        <Image
                          src={mod.image}
                          alt={mod.title}
                          fill
                          className="object-cover"
                          priority={idx === 0}
                        />
                      </div>

                      {/* Text copy */}
                      <div className="flex flex-col gap-3 pl-4">
                        <h3 className="font-manrope font-bold text-[28px] leading-[36px] text-[#000000]">
                          {mod.title}
                        </h3>
                        <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#000000] w-[768px] mb-4">
                          {mod.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden px-5">
        
        {/* Header Block */}
        <div className="flex flex-col mb-10">
          {/* Badge */}
          <div className="mb-5">
            <span className="rounded-[31px] border border-[#3CE0BF] inline-flex items-center justify-center px-4 h-[34px] font-poppins font-medium text-[13px] leading-[100%] tracking-[0px] text-[#3CE0BF] bg-transparent whitespace-nowrap">
              What it does
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-manrope font-bold text-[20px] leading-[28px] tracking-tight text-[#004944] mb-4">
            Every module turns your numbers into a decision.
          </h2>

          {/* Subtitle */}
          <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#757575]">
            Each one takes a corner of the business, puts its financial implication in front of you in money and plain words, and tells you what to do. These are GIL's working modules.
          </p>
        </div>

        {/* Mobile Accordion Style List */}
        <div className="flex flex-col gap-4">
          {MODULES_DATA.map((mod, idx) => {
            const isActive = idx === activeIdx;
            return (
              <div 
                key={mod.id} 
                className={`border rounded-[16px] overflow-hidden transition-all duration-300 ${
                  isActive ? "border-[#3CE0BF] bg-[#D2FBF4]" : "border-gray-100 bg-white"
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => setActiveIdx(activeIdx === idx ? 0 : idx)}
                  className="w-full text-left py-4 px-5 flex items-center justify-between font-manrope font-bold text-[16px] text-[#0B2E2E]"
                >
                  <span className={isActive ? "text-[#0B2E2E]" : "text-gray-600"}>
                    {mod.name}
                  </span>
                  <span className={`text-[18px] transition-transform duration-200 ${isActive ? "rotate-90 text-[#3CE0BF]" : "text-gray-400"}`}>
                    ▶
                  </span>
                </button>

                {/* Collapsible Content */}
                {isActive && (
                  <div className="px-5 pb-5">
                    {/* Image */}
                    <div className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden mb-4 shadow-sm">
                      <Image
                        src={mod.image}
                        alt={mod.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Title & Desc */}
                    <div className="flex flex-col gap-2">
                      <h4 className="font-manrope font-bold text-[18px] leading-tight text-[#000000]">
                        {mod.title}
                      </h4>
                      <p className="font-poppins text-[13px] leading-[20px] text-[#000000]">
                        {mod.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ModulesSection;