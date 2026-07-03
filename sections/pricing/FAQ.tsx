'use client';

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What counts as an AI Credit?",
    answer: "An AI Credit is used when you ask GIL to perform custom calculations, generate summaries, or run automated audits on your operational records. Simple lookups and core dashboards do not consume credits."
  },
  {
    question: "Can I upgrade later?",
    answer: "Yes. You can move between plans as your governance requirements grow."
  },
  {
    question: "Is my data secure?",
    answer: "Yes. GIL is built with enterprise-grade security. We use tenant-level database isolation, end-to-end encryption in transit and at rest, and support role-based access controls (RBAC) to ensure your data stays secure."
  },
  {
    question: "What data do I need to start?",
    answer: "You only need basic reports or exports from your existing accounting systems, ERP, or spreadsheets. There is no complex integration or code migration required."
  },
  {
    question: "Does AI calculate my KPIs?",
    answer: "GIL uses deterministic formulas for financial KPIs to guarantee accuracy, and uses AI to perform audit checks, detect anomalies, explain discrepancies, and suggest recovery actions."
  },
  {
    question: "Can I request a custom enterprise deployment?",
    answer: "Yes. For Enterprise tier customers, we offer custom deployment options, dedicated support channels, custom SLAs, and deeper compliance benchmarking tailored to your industry."
  }
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First question open by default

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative w-full bg-white py-16 md:py-24 md:pt-5 pt-5">
      
      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:block mx-auto max-w-[1440px] px-6 lg:px-26">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="font-manrope font-medium text-[48px] leading-tight text-[#004944]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col border-t border-[#E5E7EB]">
          {FAQS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="border-b border-[#E5E7EB] py-8 transition-colors duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <span className="font-poppins font-medium text-[28.21px] leading-snug text-[#0B2E2E] pr-6 transition-colors duration-200 group-hover:text-[#004944]">
                    {item.question}
                  </span>
                  
                  {/* Toggle Button Graphic */}
                  <div 
                    className={`flex-shrink-0 w-[60px] h-[60px] rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                        ? "bg-[#3CE0BF] text-white rotate-45" 
                        : "bg-[#F5F6F6] text-[#757575] hover:bg-[#EAEBEB]"
                    }`}
                  >
                    {isOpen ? (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 3.75V14.25M3.75 9H14.25" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 3.75V14.25M3.75 9H14.25" stroke="#757575" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                  </div>
                </button>

                {/* Collapsible Answer */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-poppins font-normal text-[17.24px] leading-relaxed text-gray-500 max-w-[800px]">
                      {item.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden mx-auto max-w-[1440px] px-6">
        {/* Section Heading */}
        <div className="text-center mb-6">
          <h2 className="font-manrope font-medium text-[20px] leading-tight text-[#004944]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col border-t border-[#E5E7EB]">
          {FAQS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="border-b border-[#E5E7EB] py-4 transition-colors duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <span className="font-poppins font-medium text-[14px] leading-snug text-[#0B2E2E] pr-6 transition-colors duration-200 group-hover:text-[#004944]">
                    {item.question}
                  </span>
                  
                  {/* Toggle Button Graphic */}
                  <div 
                    className={`flex-shrink-0 w-[32px] h-[32px] rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                        ? "bg-[#3CE0BF] text-white rotate-45" 
                        : "bg-[#F5F6F6] text-[#757575]"
                    }`}
                  >
                    {isOpen ? (
                      <svg width="12" height="12" viewBox="0 0 18 18" fill="none">
                        <path d="M9 3.75V14.25M3.75 9H14.25" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg width="12" height="12" viewBox="0 0 18 18" fill="none">
                        <path d="M9 3.75V14.25M3.75 9H14.25" stroke="#757575" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    )}
                  </div>
                </button>

                {/* Collapsible Answer */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-poppins font-normal text-[12px] leading-relaxed text-gray-500">
                      {item.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default FAQ;
