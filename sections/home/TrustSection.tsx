import Image from "next/image";

const TrustSection = () => {
  return (
    <section id="about" className="relative w-full bg-white overflow-hidden py-10 lg:py-18">
      {/* Background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/home/botbg.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Side Grids */}
      <div className="hidden md:block pointer-events-none absolute top-0 left-0 w-[70px] h-[1024px] z-10 select-none -scale-x-100">
        <Image
          src="/home/sidegrid.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="hidden md:block pointer-events-none absolute top-0 right-0 w-[70px] h-[1024px] z-10 select-none">
        <Image
          src="/home/sidegrid.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:flex flex-col items-center text-center mx-auto max-w-[1280px] px-6 lg:px-8 relative z-10">
        {/* Badge */}
        <div className="mb-6">
          <span className="rounded-[31px] border border-[#3CE0BF] inline-flex items-center justify-center px-5 h-[38px] font-poppins font-medium text-[16px] leading-[100%] tracking-[0px] text-[#3CE0BF] bg-transparent whitespace-nowrap">
            Built on trust
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-manrope font-bold text-[48px] leading-[58px] tracking-[-0.8px] text-[#004944] mb-6">
          Nothing is made up.
        </h2>

        {/* Subtitle */}
        <p className="font-poppins font-normal text-[20px] leading-[30px] text-gray-500 max-w-[898px] mx-auto">
          Every figure GIL shows traces back to your source data, and when it cannot work something out with confidence, it tells you so rather than guessing. The numbers you decide on are numbers you can stand behind.
        </p>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden flex flex-col items-center text-center px-5 relative z-10">
        {/* Badge */}
        <div className="mb-5">
          <span className="rounded-[31px] border border-[#3CE0BF] inline-flex items-center justify-center px-4 h-[34px] font-poppins font-medium text-[13px] leading-[100%] tracking-[0px] text-[#3CE0BF] bg-transparent whitespace-nowrap">
            Built on trust
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-manrope font-bold text-[28px] leading-[36px] tracking-tight text-[#0B2E2E] mb-4">
          Nothing is made up.
        </h2>

        {/* Subtitle */}
        <p className="font-poppins font-normal text-[14px] leading-[22px] text-gray-500">
          Every figure GIL shows traces back to your source data, and when it cannot work something out with confidence, it tells you so rather than guessing. The numbers you decide on are numbers you can stand behind.
        </p>
      </div>
    </section>
  );
};

export default TrustSection;
