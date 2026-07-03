'use client';

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden px-4 py-15 pt-10 md:py-26 lg:px-8 flex flex-col justify-center items-center isolate">
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

      {/* Side Grids constrained to Hero height (Desktop only) */}
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
        <h1 className="font-manrope text-[64px] sm:text-5xl lg:text-6xl xl:text-[64px] font-bold leading-[115%] tracking-tight text-[#004944] max-w-[1152px]">
          Governance you can prove,<br />not just claim.
        </h1>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden flex flex-col items-center  text-center relative z-20 px-2 w-full">
        {/* Heading */}
        <h1 className=" text-[22px] font-bold  text-[#004944] max-w-[300px] ">
          Governance you can prove,<br /> not just claim.
        </h1>
      </div>
    </section>
  );
};

export default Hero;
