'use client';

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden px-4 py-10 pt-5 md:py-0 md:h-[320px] lg:px-8 flex flex-col justify-center items-center isolate">
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

      {/* Side Grids (Desktop only) */}
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
      <div className="hidden md:flex mx-auto max-w-[1440px] text-center flex-col items-center justify-center relative z-20">
        {/* Heading */}
        <h1 className="font-manrope text-[64px] font-bold leading-tight xl:leading-[88px] xl:tracking-[-1.6px] text-[#004944] max-w-[950px]">
          Talk to us.
        </h1>
        {/* Subheading */}
        <p className="mt-6 font-manrope text-[18px] font-medium leading-relaxed text-[#7A7A7B] max-w-[1152px] mx-auto">
          Book a walkthrough, ask a question, or tell us what you're trying to govern. We'll get back within one business day.
        </p>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden flex flex-col items-center justify-center text-center relative z-20 px-4 w-full">
        {/* Heading */}
        <h1 className="text-center text-[32px] font-bold leading-snug text-[#004944] max-w-[300px] mx-auto">
          Talk to us.
        </h1>
        {/* Subheading */}
        <p className="mx-auto mt-4 max-w-sm text-center text-[13px] leading-relaxed text-[#7A7A7B]">
          Book a walkthrough, ask a question, or tell us what you're trying to govern. We'll get back within one business day.
        </p>
      </div>
    </section>
  );
};

export default Hero;
