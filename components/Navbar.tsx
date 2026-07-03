'use client';

import React, { useState } from "react";
import Image from "next/image";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Why Us", href: "/why-us" },
  { label: "About us", href: "/#about" },
  { label: "Blog", href: "/#blog" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 py-3 md:px-[70px] sm:px-6 lg:px-[70px]">
      <div className="relative mx-auto w-full">

        {/* ================= MOBILE ================= */}
        <div className="md:hidden">
          <div className="flex items-center justify-between rounded-full bg-white px-4 py-2.5 shadow-[0_2px_16px_rgba(0,0,0,0.06)]">

            {/* Logo */}
            <a href="/" aria-label="Home" className="flex shrink-0 items-center">
              <Image
                src="/home/logo.svg"
                alt="Logo"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
            </a>

            {/* Hamburger toggle */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full"
            >
              <span className="h-0.5 w-5 rounded-full bg-gray-800" />
              <span className="h-0.5 w-5 rounded-full bg-gray-800" />
              <span className="h-0.5 w-5 rounded-full bg-gray-800" />
            </button>
          </div>

          {/* Dropdown panel */}
          {isMenuOpen && (
            <div className="mt-2 flex flex-col gap-4 rounded-3xl bg-white px-6 py-5 shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
              <ul className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-[16.6px] font-medium text-gray-700 hover:text-gray-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 border-t border-gray-100 pt-4">
                <a
                  href="#login"
                  className="w-full rounded-full bg-gray-100 px-5 py-2 text-center text-[15.9px] font-medium text-gray-800 hover:bg-gray-200"
                >
                  Log In
                </a>
                <a
                  href="#demo"
                  className="w-full rounded-full bg-[#3CE0BF] px-5 py-2 text-center text-[15.9px] font-medium text-white hover:bg-emerald-500"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          )}
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:flex items-center justify-between w-full px-5">

          {/* Left: Pill with Logo and Nav links */}
          <div className="flex items-center rounded-full bg-white pl-3 pr-10 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100/50">
            {/* Logo */}
            <a href="/" aria-label="Home" className="flex shrink-0 items-center">
              <Image
                src="/home/logo.svg"
                alt="Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </a>

            {/* Nav links */}
            <ul className="flex items-center gap-8 ml-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[16.6px] font-medium text-gray-800 transition-colors duration-150 hover:text-gray-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <a
              href="#login"
              className="flex items-center justify-center w-[81.52px] h-[44.21px] rounded-full border-t border-t-white bg-gray-100 text-[15.9px] font-medium text-gray-800 transition-colors duration-150 hover:bg-gray-200 whitespace-nowrap"
            >
              Log In
            </a>
            <a
              href="#demo"
              className="flex items-center justify-center w-[135px] h-[44px] gap-[10px] rounded-full border-t border-t-white/30 bg-[#3CE0BF] px-[18px] py-[12px] text-[15.9px] font-medium text-gray-900 transition-colors duration-150 hover:bg-emerald-500 whitespace-nowrap"
            >
              Book a Demo
            </a>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;