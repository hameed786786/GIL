'use client';

import React from "react";
import Image from "next/image";

const Principles = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20 bg-white text-center px-6 sm:px-8 flex flex-col justify-center items-center isolate">
      
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

      {/* Top curved ellipse image */}
      <div className="absolute top-5 md:top-10 left-1/2 -translate-x-1/2 pointer-events-none z-0 select-none">
        <div className="w-[300px] md:w-[680px] lg:w-[740px] aspect-[740/150] relative overflow-visible transform -translate-y-[48%]">
          <Image
            src="/about/Ellipse 4.svg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

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

      {/* Content Container */}
      <div className="relative z-20 max-w-[1100px] mx-auto flex flex-col items-center">
        
        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden md:flex flex-col items-center text-center pt-[180px]">
          {/* Heading */}
          <h2 className="font-manrope font-medium text-[48px] leading-tight tracking-[-0.5px] text-[#004944] mb-6 max-w-[800px]">
            Principles Behind Every Decision
          </h2>
          {/* Subtext */}
          <p className="font-poppins font-normal text-[20px] leading-[30px] text-[#757575] max-w-[928px] mx-auto px-1">
            The job of software is to be honest. That’s why GIL’s engine is deterministic and auditable from the first KPI to the last leakage figure — and why we use AI only at the edges, to read your files and answer your questions, never to invent a number.
          </p>
        </div>

        {/* ================= MOBILE VIEW ================= */}
        <div className="md:hidden flex flex-col items-center text-center">
          {/* Heading */}
          <h2 className="font-manrope font-bold text-[20px] leading-[28px] text-[#004944] mb-4 max-w-[300px]">
            Principles Behind Every Decision
          </h2>
          {/* Subtext */}
          <p className="font-poppins font-normal text-[13px] leading-[21px] text-gray-500 max-w-[320px] mx-auto">
            The job of software is to be honest. That’s why GIL’s engine is deterministic and auditable from the first KPI to the last leakage figure — and why we use AI only at the edges, to read your files and answer your questions, never to invent a number.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Principles;
