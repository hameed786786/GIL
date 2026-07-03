'use client';

import React from "react";

type CellValue = "check" | "dash" | string;

interface CompareRow {
  feature: string;
  starter: CellValue;
  growth: CellValue;
  enterprise: CellValue;
}

const ROWS: CompareRow[] = [
  { feature: "Best For",                   starter: "Seeing the Numbers", growth: "Acting on Them",  enterprise: "Full Governance" },
  { feature: "37 KPIs",                    starter: "check",              growth: "check",            enterprise: "check" },
  { feature: "21 Leakage Components",      starter: "check",              growth: "check",            enterprise: "check" },
  { feature: "3 Governance Scores",        starter: "check",              growth: "check",            enterprise: "check" },
  { feature: "Core Data Modules",          starter: "dash",               growth: "dash",             enterprise: "dash" },
  { feature: "Smart Alerts",               starter: "View Only",          growth: "check",            enterprise: "check" },
  { feature: "Kanban Governance Board",    starter: "dash",               growth: "check",            enterprise: "check" },
  { feature: "Root-Cause Actions",         starter: "dash",               growth: "check",            enterprise: "check" },
  { feature: "Hiring Module",              starter: "dash",               growth: "check",            enterprise: "check" },
  { feature: "Budget Module",              starter: "dash",               growth: "check",            enterprise: "check" },
  { feature: "Variable Cost Management",   starter: "dash",               growth: "check",            enterprise: "check" },
  { feature: "Project Registry",           starter: "dash",               growth: "check",            enterprise: "check" },
  { feature: "Vendor Management",          starter: "dash",               growth: "dash",             enterprise: "check" },
  { feature: "WhatsApp Queries",           starter: "dash",               growth: "dash",             enterprise: "check" },
  { feature: "Board Pack Export",          starter: "dash",               growth: "dash",             enterprise: "check" },
  { feature: "Peer Benchmarking",          starter: "dash",               growth: "dash",             enterprise: "check" },
  { feature: "Governance Forecast",        starter: "dash",               growth: "dash",             enterprise: "check" },
  { feature: "Config Approval Workflow",   starter: "dash",               growth: "dash",             enterprise: "check" },
  { feature: "AI Credits / Month",         starter: "50",                 growth: "300",              enterprise: "1,500" },
];

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mx-auto">
    <path d="M3.5 9.5L7.5 13L14.5 5" stroke="#3CE0BF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DashIcon = () => (
  <span className="block text-center text-[#BDBDBD] text-[18px] leading-none select-none">—</span>
);

const Cell = ({ value, shaded }: { value: CellValue; shaded: boolean }) => {
  const base = `flex items-center justify-center h-full px-3 py-3.5 ${shaded ? "bg-[#F5F6F6]" : "bg-white"}`;

  if (value === "check") return <div className={base}><CheckIcon /></div>;
  if (value === "dash") return <div className={base}><DashIcon /></div>;

  // Text label (e.g. "Seeing the Numbers", "View Only", "50")
  const isNumber = /^\d/.test(value);
  return (
    <div className={base}>
      <span className={`font-poppins font-normal text-[13px] leading-tight text-center ${isNumber ? "text-[#004944] font-semibold" : "text-[#3BB89A]"}`}>
        {value}
      </span>
    </div>
  );
};

const ComparePlans = () => {
  return (
    <section className="relative w-full bg-white py-16 md:py-20">
      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:block mx-auto max-w-[900px] px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-manrope font-medium text-[42px] leading-tight tracking-[-0.5px] text-[#004944] mb-3">
            Compare Plans
          </h2>
          <p className="font-poppins font-normal text-[16px] text-gray-400 max-w-[520px] mx-auto">
            Every plan uses the same governance engine. Upgrade when your needs evolve.
          </p>
        </div>

        {/* Table */}
        <div className="w-full rounded-[16px] overflow-hidden border border-[#E5E7EB]">
          {/* Column Headers */}
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr]">
            <div className="px-6 py-4 bg-white">
              <span className="font-poppins font-semibold text-[14px] text-[#004944]">Feature</span>
            </div>
            {["Starter", "Growth", "Enterprise"].map((col) => (
              <div key={col} className="px-3 py-4 bg-white text-center border-l border-[#E5E7EB]">
                <span className="font-poppins font-semibold text-[14px] text-[#3CE0BF]">{col}</span>
              </div>
            ))}
          </div>

          {/* Rows */}
          {ROWS.map((row, idx) => {
            const shaded = idx % 2 !== 0;
            return (
              <div
                key={row.feature}
                className={`grid grid-cols-[2fr_1fr_1fr_1fr] border-t border-[#E5E7EB] ${shaded ? "bg-[#F5F6F6]" : "bg-white"}`}
              >
                {/* Feature label */}
                <div className={`px-6 py-3.5 flex items-center ${shaded ? "bg-[#F5F6F6]" : "bg-white"}`}>
                  <span className="font-poppins font-normal text-[13.5px] text-[#1A1A1A]">{row.feature}</span>
                </div>
                {/* Plan cells */}
                {[row.starter, row.growth, row.enterprise].map((val, ci) => (
                  <div key={ci} className="border-l border-[#E5E7EB]">
                    <Cell value={val} shaded={shaded} />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden px-5">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="font-manrope font-medium text-[20px] leading-[28px] text-[#004944] mb-2">
            Compare Plans
          </h2>
          <p className="font-poppins font-normal text-[13px] leading-[21px] text-gray-400 max-w-[300px] mx-auto">
            Every plan uses the same governance engine. Upgrade when your needs evolve.
          </p>
        </div>

        {/* Scrollable Table */}
        <div className="w-full overflow-x-auto rounded-[14px] border border-[#E5E7EB]">
          <div className="min-w-[560px]">
            {/* Column Headers */}
            <div className="grid grid-cols-[1.8fr_1fr_1fr_1fr]">
              <div className="px-4 py-3 bg-white">
                <span className="font-poppins font-semibold text-[12px] text-[#004944]">Feature</span>
              </div>
              {["Starter", "Growth", "Enterprise"].map((col) => (
                <div key={col} className="px-2 py-3 bg-white text-center border-l border-[#E5E7EB]">
                  <span className="font-poppins font-semibold text-[12px] text-[#3CE0BF]">{col}</span>
                </div>
              ))}
            </div>

            {/* Rows */}
            {ROWS.map((row, idx) => {
              const shaded = idx % 2 !== 0;
              return (
                <div
                  key={row.feature}
                  className={`grid grid-cols-[1.8fr_1fr_1fr_1fr] border-t border-[#E5E7EB] ${shaded ? "bg-[#F5F6F6]" : "bg-white"}`}
                >
                  <div className={`px-4 py-3 flex items-center ${shaded ? "bg-[#F5F6F6]" : "bg-white"}`}>
                    <span className="font-poppins font-normal text-[12px] text-[#1A1A1A]">{row.feature}</span>
                  </div>
                  {[row.starter, row.growth, row.enterprise].map((val, ci) => (
                    <div key={ci} className="border-l border-[#E5E7EB]">
                      <Cell value={val} shaded={shaded} />
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparePlans;
