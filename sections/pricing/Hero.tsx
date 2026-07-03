'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden px-4 py-12 md:py-0 md:h-[350px] lg:px-8 flex flex-col justify-center items-center isolate">
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

      {/* Side Grids constrained to Features Hero height (Desktop only) */}
      <div className="hidden md:block pointer-events-none absolute top-0 left-0 w-[70px] z-10 select-none -scale-x-100">
        <Image
          src="/home/sidegrid.svg"
          alt=""
          width={70}
          height={1424}
          priority
        />
      </div>
      <div className="hidden md:block pointer-events-none absolute top-0 right-0 w-[70px] z-10 select-none">
        <Image
          src="/home/sidegrid.svg"
          alt=""
          width={70}
          height={1424}
          priority
        />
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:flex mx-auto max-w-[1165px] text-center flex-col items-center justify-center relative z-20">
        {/* Heading */}
        <h1 className="font-manrope text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-bold leading-tight xl:leading-[88px] xl:tracking-[-1.6px] text-[#004944] max-w-[1152px]">
          Three plans. One source of truth.
        </h1>

        {/* Subheading */}
        <p className="mt-6 font-poppins text-base text-[18px] font-medium leading-relaxed sm:leading-[36px] text-gray-500 max-w-[1002px]">
          Start by seeing the numbers, move up to act on them, then to govern the whole business. Every plan shares the same auditable engine.
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

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden flex flex-col items-center justify-center text-center relative z-20 px-4 w-full">
        {/* Heading */}
        <h1 className="text-center text-[20px] font-bold leading-snug text-[#004944] max-w-[300px] mx-auto">
          Three plans. One source of truth.
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-4 max-w-sm text-center text-[13px] leading-relaxed text-gray-500">
          Start by seeing the numbers, move up to act on them, then to govern the whole business. Every plan shares the same auditable engine.
        </p>

        {/* CTAs */}
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/#demo"
            className="rounded-full bg-[#3CE0BF] px-5 py-2 text-xs font-semibold text-[#0B2E2E] hover:bg-emerald-500 whitespace-nowrap"
          >
            Book a Demo
          </Link>
          <Link
            href="/#how-it-works"
            className="rounded-full border border-gray-300 bg-white px-5 py-2 text-xs font-semibold text-gray-800 hover:bg-gray-50 whitespace-nowrap"
          >
            See how it works
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
