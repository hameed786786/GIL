'use client';

import React from "react";
import Image from "next/image";

const Statement = () => {
  return (
    <section className="relative w-full overflow-hidden py-24 md:py-22 text-center px-6 sm:px-8 flex flex-col  isolate bg-[#004944]">
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

      {/* Content Container */}
      <div className="relative z-10 max-w-[1100px] mx-auto flex flex-col max-h-[462px]">
        {/* Desktop Statement text */}
        <p className="hidden md:block font-manrope font-medium text-[48px] leading-[60px] tracking-[-0.5px] text-white/95 text-center">
          GIL is built by PeopleAxis Consultants. We work with finance and operations leaders who are tired of dashboards that look impressive but can't answer the one question that matters:<br/>where is the money actually going?<br/>We built GIL to answer that with figures you can stand behind.
        </p>

        {/* Mobile Statement text (following mobile guidelines of 13px/18px for readability) */}
        <p className="md:hidden font-poppins font-normal text-[15px] leading-[26px] tracking-tight text-white/95 max-w-[340px]">
          GIL is built by PeopleAxis Consultants. We work with finance and operations leaders who are tired of dashboards that look impressive but can't answer the one question that matters: where is the money actually going? We built GIL to answer that with figures you can stand behind.
        </p>
      </div>
    </section>
  );
};

export default Statement;
