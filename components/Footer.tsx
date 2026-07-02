'use client';

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-[#757575] font-poppins border-t border-gray-100">
      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:flex mx-auto max-w-[1440px] px-6 lg:px-12 py-12 flex-col gap-6">
        {/* Logo and Brand Title stacked vertically */}
        <div className="flex flex-col items-start gap-3">
          <div className="w-[40px] h-[40px] relative">
            <Image
              src="/home/logo.svg"
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
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
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

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden flex flex-col px-6 py-8 gap-6">
        {/* Logo and Brand Title stacked vertically */}
        <div className="flex flex-col items-start gap-2">
          <div className="w-[40px] h-[40px] relative">
            <Image
              src="/home/logo.svg"
              alt="GIL Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-manrope font-bold text-[22px] text-[#004944] tracking-wide">
            GIL
          </span>
        </div>

        {/* Links list */}
        <div className="flex flex-col gap-3.5 text-[14px] font-medium">
          <span className="text-[#909090]">
            People Axis Consultants
          </span>
          <span className="text-[#909090]">
            Request a demonstration
          </span>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gray-100" />

        {/* Footer Meta info */}
        <div className="flex flex-col gap-2 text-[12.5px] text-gray-400">
          <span>A product of People Axis Consultants · Bengaluru</span>
          <span className="text-[#909090]">© 2026 People Axis Consultants</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
