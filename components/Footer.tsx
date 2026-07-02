'use client';

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-[#757575] font-poppins text-[13px] border-t border-gray-100 py-12">
      <div className="mx-auto max-w-[1440px] max-h-[255px] px-6 lg:px-12 py-[20px] flex flex-col gap-6">
        
        {/* Logo and Brand Title stacked vertically */}
        <div className="flex flex-col items-start gap-3">
          <div className="w-[40px] h-[40px] relative">
            <Image
              src="/logo.svg"
              alt="GIL Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-manrope font-bold text-[24px] text-[#004944] tracking-wide">
            GIL
          </span>
        </div>

        {/* Bottom row: Sub-brand description, links, copyright */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 ">
          {/* Brand line */}
          <span className="text-gray-400 text-[15.4px]">
            A product of People Axis Consultants · Bengaluru
          </span>

          {/* Links and Copyright group */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 text-[15.4px] inter-medium">
            <span className="text-[#909090]">
              People Axis Consultants
            </span>
            
            <span className="text-[#909090]">
              Request a demonstration
            </span>

            <span className="text-[#909090]">
              © 2026 People Axis Consultants
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
