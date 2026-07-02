'use client';

import React from "react";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden px-4 py-20 sm:px-6 lg:px-8 flex flex-col justify-center items-center min-h-[70vh]">
        {/* Background grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(60, 224, 191, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(60, 224, 191, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(circle at center, black 65%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 65%, transparent 100%)',
          }}
        />

        {/* Content Wrapper */}
        <div className="mx-auto max-w-[1165px] text-center flex flex-col items-center justify-center">
          {/* Heading */}
          <h1 className="font-manrope text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-bold leading-tight xl:leading-[88px] xl:tracking-[-1.6px] text-[#004944] max-w-[1000px]">
            Stop guessing where the money goes.
          </h1>

          {/* Subheading */}
          <p className="mt-6 font-poppins text-base sm:text-lg lg:text-[20px] xl:text-[23.1px] font-medium leading-relaxed sm:leading-[36px] text-gray-500 max-w-[950px]">
            GIL turns the financial, people, sales and operational data you already produce into a continuously-scored picture of where your business is leaking money — and how stable it really is.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#demo"
              className="flex items-center justify-center w-[178px] h-[54px] gap-[10px] rounded-[40px] bg-[#3CE0BF] px-[24px] py-[13px] text-[18px] sm:text-[20.5px] font-medium leading-none text-[#0B2E2E] transition-colors duration-150 hover:bg-emerald-500 whitespace-nowrap shadow-sm"
            >
              Book a Demo
            </Link>
            <Link
              href="/#how-it-works"
              className="flex items-center justify-center w-[212px] h-[54px] gap-[10px] rounded-[40px] border border-gray-300 bg-white px-[24px] py-[13px] text-[18px] sm:text-[20.5px] font-medium leading-none text-gray-800 transition-colors duration-150 hover:bg-gray-50 whitespace-nowrap shadow-sm"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
