'use client';

import React from "react";
import Image from "next/image";

const CompanyDetails = () => {
  const details = [
    { label: "Founded", value: "2016" },
    { label: "Headquarters", value: "Bangalore" },
    { label: "Focus", value: "Governance Intelligence" },
    { label: "Industry", value: "Business Analytics & Governance" }
  ];

  return (
    <section className="w-full bg-white py-8 md:py-20 pt-0">
      <div className=" max-w-[1440px] px-6 lg:px-20">
        
        {/* Section Heading */}
        <h2 className="font-manrope font-semibold text-[20px] md:text-[48px] leading-tight text-[#004944] mb-8 md:mb-12">
          Company details
        </h2>

        {/* Desktop View Grid */}
        <div className="hidden md:grid grid-cols-[554px_1.2fr_0.8fr] gap-4 items-start">
          
          {/* Column 1: Company Record Card */}
          <div className="w-[554px] h-[391px] bg-white border border-[#2E38331A] rounded-[22px] p-8 shadow-[0px_1px_7px_0px_#00000021] flex flex-col justify-between">
            <div>
              <h3 className="font-manrope font-semibold text-[24px] text-[#004944] mb-2">
                Company Record
              </h3>
              
              <div className="flex flex-col">
                {details.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-start justify-between py-4 w-[474px] h-[72px] ${
                      idx !== details.length - 1 ? "border-b border-[#004944]" : ""
                    }`}
                  >
                    <span className="font-poppins font-medium text-[20px] text-[#004944]">
                      {item.label}
                    </span>
                    <span className="font-poppins font-medium text-[20px] text-[#004944] text-right max-w-[250px] leading-tight">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Large Middle Image */}
          <div className="relative rounded-[22px] overflow-hidden h-[391px] w-[504px]">
            <Image
              src="/about/img1.png"
              alt="PeopleAxis Consultants Team"
              fill
              className="object-cover"
              sizes="(max-w-768px) 100vw, 500px"
              priority
            />
          </div>

          {/* Column 3: Stacked Images */}
          <div className="flex flex-col gap-4 h-[391px] w-full">
            <div className="relative rounded-[22px] overflow-hidden h-[189px] w-[190px]">
              <Image
                src="/about/img2.png"
                alt="Office building"
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 300px"
                priority
              />
            </div>
            <div className="relative rounded-[22px] overflow-hidden h-[189px] w-[190px]">
              <Image
                src="/about/img3.png"
                alt="Meeting room"
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 300px"
                priority
              />
            </div>
          </div>

        </div>

        {/* Mobile View Stack */}
        <div className="md:hidden flex flex-col gap-6">
          
          {/* Card */}
          <div className="bg-white border border-[#2E38331A] rounded-[20px] p-6 shadow-[0px_4px_24px_rgba(0,0,0,0.02)]">
            <h3 className="font-manrope font-bold text-[18px] text-[#004944] mb-4">
              Company Record
            </h3>
            <div className="flex flex-col">
              {details.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-start justify-between py-3.5 ${
                    idx !== details.length - 1 ? "border-b border-[#2E383314]" : ""
                  }`}
                >
                  <span className="font-poppins font-medium text-[13px] text-[#556961]">
                    {item.label}
                  </span>
                  <span className="font-poppins font-semibold text-[13px] text-[#004944] text-right max-w-[140px]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Team image */}
          <div className="relative rounded-[20px] overflow-hidden h-[260px]">
            <Image
              src="/about/img1.png"
              alt="PeopleAxis Consultants Team"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Side by side stacked images in mobile */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-[20px] overflow-hidden h-[130px]">
              <Image
                src="/about/img2.png"
                alt="Office building"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="relative rounded-[20px] overflow-hidden h-[130px]">
              <Image
                src="/about/img3.png"
                alt="Meeting room"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CompanyDetails;
