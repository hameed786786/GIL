'use client';

import React from "react";
import Image from "next/image";

const WhoItsFor = () => {
  const cards = [
    {
      id: "owners",
      icon: "/icon9.svg",
      title: "Business owners",
      description: "One clear number and a short list of what to fix first — delivered where you already work."
    },
    {
      id: "cfos",
      icon: "/icon10.svg",
      title: "CFOs & finance leads",
      description: "A board pack by the 5th, early warnings before problems become crises, and the financial implication of every option on the table."
    },
    {
      id: "teams",
      icon: "/icon11.svg",
      title: "Finance teams",
      description: "Upload quickly and see at once what went wrong and what needs attention — no reports to build from scratch."
    },
    {
      id: "accountants",
      icon: "/icon12.svg",
      title: "Accountants & auditors",
      description: "Clean, time-stamped records and evidence, without weeks of chasing information."
    }
  ];

  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:block mx-auto max-w-[1128px] px-0">
        <div className="grid grid-cols-3 gap-10">
          
          {/* Top Left: Wide Green Card (spans 2 columns) */}
          <div className="col-span-2 bg-[#004944] rounded-[22px] p-10 flex flex-col gap-[15px] h-[317px] min-h-[317px] shadow-[0px_13px_100px_0px_#c7c7c740]">
            {/* Badge */}
            <div className="">
              <span className="rounded-[31px] border border-[#3CE0BF] inline-flex items-center justify-center px-4 h-[38px] font-poppins font-medium text-[16px] leading-[100%] tracking-[0px] text-[#3CE0BF] bg-transparent whitespace-nowrap">
                Who it's for
              </span>
            </div>
            
            {/* Copy Block */}
            <div className="flex flex-col ">
              <h2 className="font-manrope font-medium text-[48px] leading-[100%] tracking-[-0.17px] text-white w-[684px] h-[132px]">
                Made for the people who carry the numbers.
              </h2>
              <p className="font-poppins font-medium text-[20px] leading-[100%] tracking-[-0.17px] text-white/80">
                One system, read differently by everyone who depends on it.
              </p>
            </div>
          </div>

          {/* Top Right: Business Owners Card (spans 1 column) */}
          <div className="w-[360px] h-[317px] bg-[#F5F6F6] border border-[#D9D9D9] rounded-[22px] p-8 flex flex-col shadow-[0px_13px_100px_0px_#c7c7c740]">
            <div className="w-[80px] h-[80px] relative mb-4">
              <Image 
                src={cards[0].icon} 
                alt="" 
                width={80} 
                height={80} 
                className="object-contain"
              />
            </div>
            <div className="mt-auto flex flex-col gap-3">
              <h3 className="font-manrope font-bold text-[24px] leading-tight text-[#0B2E2E]">
                {cards[0].title}
              </h3>
              <p className="font-poppins font-normal text-[14px] leading-[150%] tracking-[0px] text-gray-500">
                {cards[0].description}
              </p>
            </div>
          </div>

          {/* Row 2: CFOs, Finance Teams, Accountants & Auditors */}
          {cards.slice(1).map((card) => (
            <div key={card.id} className="w-[360px] h-[317px] bg-[#F5F6F6] border border-[#D9D9D9] rounded-[22px] p-8 flex flex-col shadow-[0px_13px_100px_0px_#c7c7c740]">
              <div className="w-[80px] h-[80px] relative mb-4">
                <Image 
                  src={card.icon} 
                  alt="" 
                  width={80} 
                  height={80} 
                  className="object-contain"
                />
              </div>
              <div className="mt-auto flex flex-col gap-3">
                <h3 className="font-manrope font-bold text-[24px] leading-tight text-[#0B2E2E]">
                  {card.title}
                </h3>
                <p className="font-poppins font-normal text-[14px] leading-[150%] tracking-[0px] text-gray-500">
                  {card.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      <div className="md:hidden px-5 flex flex-col gap-6">
        {/* Top Green Card */}
        <div className="bg-[#004944] rounded-[22px] p-8 flex flex-col gap-8 shadow-[0px_13px_100px_0px_#c7c7c740]">
          <div>
            <span className="rounded-[31px] border border-[#3CE0BF] inline-flex items-center justify-center px-4 h-[34px] font-poppins font-medium text-[13px] leading-[100%] tracking-[0px] text-[#3CE0BF] bg-transparent whitespace-nowrap">
              Who it's for
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-manrope font-bold text-[26px] leading-[34px] text-white">
              Made for the people who carry the numbers.
            </h2>
            <p className="font-poppins font-normal text-[14px] leading-[22px] text-white/80">
              One system, read differently by everyone who depends on it.
            </p>
          </div>
        </div>

        {/* Role Cards */}
        {cards.map((card) => (
          <div key={card.id} className="bg-[#F5F6F6] border border-[#D9D9D9] rounded-[22px] p-6 flex flex-col gap-6 shadow-[0px_13px_100px_0px_#c7c7c740]">
            <div className="w-[64px] h-[64px] relative">
              <Image 
                src={card.icon} 
                alt="" 
                width={64} 
                height={64} 
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-manrope font-bold text-[24px] leading-tight text-[#0B2E2E]">
                {card.title}
              </h3>
              <p className="font-poppins font-normal text-[14px] leading-[150%] tracking-[0px] text-gray-500">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoItsFor;
