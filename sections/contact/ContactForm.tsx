'use client';

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companySize: "1 - 50",
    phone: "",
    companyName: "",
    message: "",
    agree: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target as Node)) {
        setMobileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        companySize: "1-50",
        phone: "",
        companyName: "",
        message: "",
        agree: false
      });
    }, 3000);
  };

  return (
    <section className="relative w-full bg-[#121212] py-16 md:py-24 text-white">

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:block max-w-[1440px] mx-auto px-6 lg:px-16">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-manrope font-semibold text-[48px] leading-tight text-white">
            Contact us
          </h2>
          <p className="mt-4 font-outfit font-normal text-[18px] leading-relaxed text-gray-400 max-w-[436px] mx-auto">
            We're here to help—share your thoughts or inquiries with us, and we'll get back to you soon!
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="mx-auto max-w-[1120px] rounded-[24px] bg-[#ffffff14] border border-white/5 p-12 shadow-2xl h-[628px] flex flex-col">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-20">
              <div className="w-16 h-16 rounded-full bg-[#3CE0BF]/10 flex items-center justify-center text-[#3CE0BF] mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-manrope font-semibold text-[24px] text-white mb-2">Message Sent!</h3>
              <p className="font-poppins text-[14px] text-gray-400 max-w-[360px]">
                Thank you for reaching out. We will get back to you within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full h-full flex flex-col max-w-[1000px] mx-auto">
              <div className="grid grid-cols-2 gap-10">
                {/* Left Column */}
                <div className="flex flex-col gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-3">
                    <label className="font-poppins font-semibold text-[16px] tracking-wider text-gray-400 mb-2 uppercase">
                      Name*
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jonnie Dawson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-[48px] w-[480px] bg-transparent border border-white/10 rounded-[8px] px-4 text-[#FFFFFF] font-poppins text-[16px] focus:outline-none focus:border-[#3CE0BF]/40 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-3">
                    <label className="font-poppins font-semibold text-[16px] tracking-wider text-gray-400 mb-2 uppercase">
                      Email*
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="hello123@com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-[48px] w-[480px] bg-transparent border border-white/10 rounded-[8px] px-4 text-[#FFFFFF] font-poppins text-[16px]  focus:outline-none focus:border-[#3CE0BF]/40 transition-colors"
                    />
                  </div>

                  {/* Company Size Dropdown */}
                  <div className="flex flex-col gap-3">
                    <label className="font-poppins font-semibold text-[16px] tracking-wider text-gray-400 mb-2 uppercase">
                      Company Size (optional)
                    </label>
                    <div className="relative w-[480px]" ref={dropdownRef}>
                      <div
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="h-[48px] w-full bg-transparent border border-white/10 rounded-[8px] px-4 flex items-center justify-between text-[#FFFFFF] font-poppins text-[16px] cursor-pointer focus:border-[#3CE0BF]/40 transition-colors select-none"
                      >
                        <span>{formData.companySize}</span>
                        <svg 
                          width="14" 
                          height="14" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2.5" 
                          className={`text-gray-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>

                      {dropdownOpen && (
                        <div className="absolute left-0 right-0 mt-2 z-50 rounded-[8px] bg-[#1E1E1E] border border-white/10 shadow-2xl overflow-hidden py-1">
                          {["1 - 50", "51 - 200", "201 - 500", "501 - 1000", "1000+"].map((size) => (
                            <div
                              key={size}
                              onClick={() => {
                                setFormData({ ...formData, companySize: size });
                                setDropdownOpen(false);
                              }}
                              className="px-4 py-3 text-white font-poppins text-[15px] hover:bg-[#ffffff14] hover:text-[#3CE0BF] cursor-pointer transition-colors"
                            >
                              {size}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="flex flex-col gap-3">
                    <label className="font-poppins font-semibold text-[16px] tracking-wider text-gray-400 mb-2 uppercase">
                      Phone / Whatsapp Number (optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 99536 66374"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-[48px] w-[480px] bg-transparent border border-white/10 rounded-[8px] px-4 text-[#FFFFFF] font-poppins text-[16px]  focus:outline-none focus:border-[#3CE0BF]/40 transition-colors"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6">
                  {/* Company Name Input */}
                  <div className="flex flex-col gap-3">
                    <label className="font-poppins font-semibold text-[16px] tracking-wider text-gray-400 mb-2 uppercase">
                      Company Name*
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Gil pvt ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="h-[48px] w-[480px] bg-transparent border border-white/10 rounded-[8px] px-4 text-[#FFFFFF] font-poppins text-[16px] focus:outline-none focus:border-[#3CE0BF]/40 transition-colors"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="flex flex-col gap-3">
                    <label className="font-poppins font-semibold text-[16px] tracking-wider text-gray-400 mb-2 uppercase">
                      What are you trying to solve? *
                    </label>
                    <textarea
                      required
                      placeholder="I'd love to learn more about your services"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-[480px] h-[172px] bg-transparent border border-white/10 rounded-[8px] p-4 text-[#FFFFFF] font-poppins text-[16px] focus:outline-none focus:border-[#3CE0BF]/40 transition-colors resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex flex-row items-center justify-between gap-6 mt-auto">
                {/* Terms Agreement Checkbox */}
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agree}
                    onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                    className="peer sr-only"
                  />
                  <div className="w-[18px] h-[18px] rounded-[6px] border border-gray-500 flex items-center justify-center peer-checked:bg-[#3CE0BF] peer-checked:border-[#3CE0BF] transition-all duration-150">
                    {formData.agree && (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="text-black"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                  <span className="font-poppins text-[18px] text-white">
                    I agree to the <span className="text-white underline font-medium">Terms and Condition</span>
                  </span>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="h-[48px] w-[479px] rounded-full bg-[#3CE0BF] hover:bg-emerald-500 text-gray-900 font-outfit font-semibold text-[18px] px-8 flex items-center justify-center gap-2.5 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Send a Message</span>
                  <div className="w-[22px] h-[22px] relative">
                    <Image
                      src="/contact/arrow right.svg"
                      alt="Arrow Right"
                      fill
                      className="object-contain"
                    />
                  </div>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden w-full px-6">

        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-manrope font-semibold text-[28px] leading-tight text-white">
            Contact us
          </h2>
          <p className="mt-2.5 font-outfit font-normal text-[14px] leading-relaxed text-gray-400 max-w-[280px] mx-auto">
            We're here to help—share your thoughts or inquiries with us, and we'll get back to you soon!
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="w-full rounded-[16px] bg-[#ffffff14] border border-white/5 p-5 shadow-2xl">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-10">
              <div className="w-12 h-12 rounded-full bg-[#3CE0BF]/10 flex items-center justify-center text-[#3CE0BF] mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-manrope font-semibold text-[18px] text-white mb-1.5">Message Sent!</h3>
              <p className="font-poppins text-[12px] text-gray-400 max-w-[240px]">
                Thank you for reaching out. We will get back to you within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">

              {/* Name Input */}
              <div className="flex flex-col gap-1.5">
                <label className="font-poppins font-semibold text-[11px] tracking-wider text-gray-400 mb-0.5 uppercase">
                  Name*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jonnie Dawson"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-[42px] w-full bg-transparent border border-white/10 rounded-[6px] px-3.5 text-white font-poppins text-[13.5px] placeholder-gray-600 focus:outline-none focus:border-[#3CE0BF]/40 transition-colors"
                />
              </div>

              {/* Company Name Input */}
              <div className="flex flex-col gap-1.5">
                <label className="font-poppins font-semibold text-[11px] tracking-wider text-gray-400 mb-0.5 uppercase">
                  Company Name*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Gil pvt ltd"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="h-[42px] w-full bg-transparent border border-white/10 rounded-[6px] px-3.5 text-[#FFFFFF] font-poppins text-[13.5px] placeholder-gray-600 focus:outline-none focus:border-[#3CE0BF]/40 transition-colors"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-1.5">
                <label className="font-poppins font-semibold text-[11px] tracking-wider text-gray-400 mb-0.5 uppercase">
                  Email*
                </label>
                <input
                  type="email"
                  required
                  placeholder="hello123@com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-[42px] w-full bg-transparent border border-white/10 rounded-[6px] px-3.5 text-[#FFFFFF] font-poppins text-[13.5px] placeholder-gray-600 focus:outline-none focus:border-[#3CE0BF]/40 transition-colors"
                />
              </div>

              {/* What are you trying to solve */}
              <div className="flex flex-col gap-1.5">
                <label className="font-poppins font-semibold text-[11px] tracking-wider text-gray-400 mb-0.5 uppercase">
                  What are you trying to solve? *
                </label>
                <textarea
                  required
                  placeholder="I'd love to learn more about your services"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full h-[110px] bg-transparent border border-white/10 rounded-[6px] p-3 text-[#FFFFFF] font-poppins text-[13.5px] placeholder-gray-600 focus:outline-none focus:border-[#3CE0BF]/40 transition-colors resize-none"
                />
              </div>

              {/* Company Size Dropdown */}
              <div className="flex flex-col gap-1.5">
                <label className="font-poppins font-semibold text-[11px] tracking-wider text-gray-400 mb-0.5 uppercase">
                  Company Size (optional)
                </label>
                <div className="relative w-full" ref={mobileDropdownRef}>
                  <div
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="h-[42px] w-full bg-transparent border border-white/10 rounded-[6px] px-3.5 flex items-center justify-between text-[#FFFFFF] font-poppins text-[13.5px] cursor-pointer focus:border-[#3CE0BF]/40 transition-colors select-none"
                  >
                    <span>{formData.companySize}</span>
                    <svg 
                      width="12" 
                      height="12" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      className={`text-gray-400 transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>

                  {mobileDropdownOpen && (
                    <div className="absolute left-0 right-0 mt-1 z-50 rounded-[6px] bg-[#1E1E1E] border border-white/10 shadow-xl overflow-hidden py-1">
                      {["1 - 50", "51 - 200", "201 - 500", "501 - 1000", "1000+"].map((size) => (
                        <div
                          key={size}
                          onClick={() => {
                            setFormData({ ...formData, companySize: size });
                            setMobileDropdownOpen(false);
                          }}
                          className="px-3.5 py-2.5 text-white font-poppins text-[13px] hover:bg-[#ffffff14] hover:text-[#3CE0BF] cursor-pointer transition-colors"
                        >
                          {size}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Phone Input */}
              <div className="flex flex-col gap-1.5">
                <label className="font-poppins font-semibold text-[11px] tracking-wider text-gray-400 mb-0.5 uppercase">
                  Phone / Whatsapp Number (optional)
                </label>
                <input
                  type="tel"
                  placeholder="+91 99536 66374"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-[42px] w-full bg-transparent border border-white/10 rounded-[6px] px-3.5 text-[#FFFFFF] font-poppins text-[13.5px] placeholder-gray-600 focus:outline-none focus:border-[#3CE0BF]/40 transition-colors"
                />
              </div>

              {/* Terms Agreement Checkbox */}
              <label className="flex items-center gap-3 cursor-pointer select-none mt-1">
                <input
                  type="checkbox"
                  required
                  checked={formData.agree}
                  onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                  className="peer sr-only"
                />
                <div className="w-[16px] h-[16px] rounded-[4px] border border-gray-500 flex items-center justify-center peer-checked:bg-[#3CE0BF] peer-checked:border-[#3CE0BF] transition-all duration-150">
                  {formData.agree && (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="text-gray-900"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
                <span className="font-poppins text-[13px] text-gray-300">
                  I agree to the <span className="text-white underline font-medium">Terms and Condition</span>
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-[44px] rounded-full bg-[#3CE0BF] hover:bg-emerald-500 text-gray-900 font-outfit font-semibold text-[13.5px] px-6 flex items-center justify-center gap-2 transition-colors cursor-pointer mt-1"
              >
                <span>Send a Message</span>
                <div className="w-[12px] h-[12px] relative">
                  <Image
                    src="/contact/arrow right.svg"
                    alt="Arrow Right"
                    fill
                    className="object-contain"
                  />
                </div>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
