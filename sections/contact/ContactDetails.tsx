'use client';

import React from "react";
import Image from "next/image";

const ContactDetails = () => {
  const contactInfo = [
    {
      icon: "/contact/si_mail-duotone.svg",
      label: "Email",
      value: "hello@peopleaxis.com",
      link: "mailto:hello@peopleaxis.com"
    },
    {
      icon: "/contact/ant-design_message-twotone.svg",
      label: "Recommendations acted on",
      value: "+91 XXXXX XXXXX",
      link: "tel:+919953666374"
    },
    {
      icon: "/contact/solar_phone-calling-bold-duotone.svg",
      label: "Recovery Score",
      value: "+91 XXXXX XXXXX",
      link: "tel:+919953666374"
    },
    {
      icon: "/contact/solar_clock-circle-bold-duotone.svg",
      label: "Business getting stronger",
      value: "Mon – Fri · 9:00 AM – 6:00 PM",
      link: null
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 text-gray-900">
      
      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:flex flex-col gap-16 max-w-[1440px]  px-6 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-manrope font-semibold text-[48px] leading-tight text-[#004944]">
            Other ways to reach us.
          </h2>
          <p className="mt-4 font-outfit font-normal text-[20px] leading-relaxed text-[#757575] max-w-[928px] mx-auto">
            Every plan uses the same governance engine. Upgrade when your needs evolve.
          </p>
        </div>

        {/* Content Area Grid */}
        <div className="flex max-w-[1440px] gap-5 px-5">
          
          {/* Left Side: Map Location */}
            <div className="w-[845px] h-[557px] relative rounded-[24px] overflow-hidden border border-gray-100 shadow-lg">
              <Image
                src="/contact/img1.png"
                alt="GIL Office Location Map"
                fill
                className="object-cover"
              />
            </div>

          {/* Right Side: Contact Info Card */}
          <div className="w-[411px] h-[557px] bg-[#003C36] rounded-[24px] p-8 flex flex-col justify-between shadow-xl text-white">
            <div>
              <h3 className="font-manrope font-semibold text-[24px] text-white mb-6">
                Need a faster response?
              </h3>
              
              <div className="flex flex-col">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className={`flex items-center  gap-4 py-4 ${idx !== contactInfo.length - 1 ? 'border-b border-white' : ''}`}>
                    {/* Icon Box */}
                    <div className="w-[44px] h-[44px] rounded-[10px] border border-[#FFFFFF] flex items-center justify-center bg-white/5 flex-shrink-0">
                      <div className="w-[24px] h-[24px] relative">
                        <Image
                          src={item.icon}
                          alt={item.label}
                          fill
                          className="object-contain brightness-0 invert"
                        />
                      </div>
                    </div>

                    {/* Text Details */}
                    <div className="flex flex-col justify-center">
                      <span className="font-poppins text-[16px] text-[#FFFFFFBF] tracking-wide ">
                        {item.label}
                      </span>
                      {item.link ? (
                        <a href={item.link} className="font-poppins text-[20px] text-white font-medium hover:underline mt-0.5">
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-poppins text-[20px] text-white font-medium mt-0.5 w-[290px]">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA button */}
            <div className="mt-8">
              <a
                href="https://wa.me/91"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-[48px] rounded-[10px] bg-[#3CE0BF] hover:bg-[#32c9ab] text-gray-900 font-poppins font-semibold text-[14px] flex items-center justify-center transition-colors shadow-lg cursor-pointer"
              >
                <div className="w-[24px] h-[24px] relative mr-2">
                  <Image
                    src="/contact/stash_social-whatsapp-duotone.svg"
                    alt="WhatsApp"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden w-full px-6 flex flex-col gap-8">
        
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-manrope font-semibold text-[28px] leading-tight text-[#004944]">
            Other ways to reach us.
          </h2>
          <p className="mt-2.5 font-outfit font-normal text-[14px] leading-relaxed text-[#757575] max-w-[280px] mx-auto">
            Every plan uses the same governance engine. Upgrade when your needs evolve.
          </p>
        </div>

        {/* Content Area Stack */}
        <div className="flex flex-col gap-6">
          
          {/* Map Location */}
          <div className="w-full h-[220px] relative rounded-[16px] overflow-hidden border border-gray-100 shadow-md">
            <Image
              src="/contact/img1.png"
              alt="GIL Office Location Map"
              fill
              className="object-cover"
            />
          </div>

          {/* Contact Info Card */}
          <div className="bg-[#003C36] rounded-[16px] p-5 flex flex-col shadow-lg text-white">
            <h3 className="font-manrope font-semibold text-[20px] text-white mb-4">
              Need a faster response?
            </h3>
            
            <div className="flex flex-col">
              {contactInfo.map((item, idx) => (
                <div key={idx} className={`flex items-center gap-3 py-3 ${idx !== contactInfo.length - 1 ? 'border-b border-white' : ''}`}>
                  {/* Icon Box */}
                  <div className="w-[36px] h-[36px] rounded-[8px] border border-[#FFFFFF] flex items-center justify-center bg-white/5 flex-shrink-0">
                    <div className="w-[16px] h-[16px] relative">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        fill
                        className="object-contain brightness-0 invert"
                      />
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="flex flex-col justify-center">
                    <span className="font-poppins text-[10px] text-[#FFFFFFBF] tracking-wider uppercase">
                      {item.label}
                    </span>
                    {item.link ? (
                      <a href={item.link} className="font-poppins text-[13.5px] text-white font-medium hover:underline mt-0.5">
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-poppins text-[13.5px] text-white font-medium mt-0.5">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA button */}
            <div className="mt-6">
              <a
                href="https://wa.me/91"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-[44px] rounded-[8px] bg-[#3CE0BF] hover:bg-[#32c9ab] text-gray-900 font-poppins font-bold text-[13.5px] flex items-center justify-center transition-colors shadow-md cursor-pointer"
              >
                <div className="w-[20px] h-[20px] relative mr-2">
                  <Image
                    src="/contact/stash_social-whatsapp-duotone.svg"
                    alt="WhatsApp"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactDetails;
