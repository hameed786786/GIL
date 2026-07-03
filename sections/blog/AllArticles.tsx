'use client';

import React, { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";

interface Article {
  id: number;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

const ARTICLES_DATA: Article[] = [
  {
    id: 1,
    category: "Financial Intelligence",
    title: "Where Mid-Size Businesses Leak Money — And Never See It",
    description: "Hidden operational costs matter more than most businesses realize.",
    author: "Elena Vane",
    date: "June 2026",
    readTime: "6 Min Read",
    image: "/blog/article1.png"
  },
  {
    id: 2,
    category: "Governance",
    title: "Stability, Fragility & Data Reliability",
    description: "Understanding GIL's three governance scores.",
    author: "Elena Vane",
    date: "June 2026",
    readTime: "6 Min Read",
    image: "/blog/article2.png"
  },
  {
    id: 3,
    category: "Data Quality",
    title: "Why Your Dashboard Should Refuse To Compute On Bad Data",
    description: "Data quality is a precondition, not a feature.",
    author: "Elena Vane",
    date: "June 2026",
    readTime: "6 Min Read",
    image: "/blog/article3.png"
  },
  {
    id: 4,
    category: "AI & Analytics",
    title: "AI At The Edges, Maths In The Middle",
    description: "Why GIL remains fully auditable end to end.",
    author: "Elena Vane",
    date: "June 2026",
    readTime: "6 Min Read",
    image: "/blog/article2.png"
  },
  {
    id: 5,
    category: "Financial Intelligence",
    title: "The True Cost of Cloud Financial Auditing",
    description: "How modern operations teams track waste across multi-cloud infrastructure.",
    author: "Elena Vane",
    date: "June 2026",
    readTime: "6 Min Read",
    image: "/blog/article1.png"
  },
  {
    id: 6,
    category: "Data Quality",
    title: "Data Reliability Metrics in Enterprise ERPs",
    description: "Five key indicators that tell you if your financial reporting pipeline is broken.",
    author: "Elena Vane",
    date: "June 2026",
    readTime: "6 Min Read",
    image: "/blog/article3.png"
  }
];

const CATEGORIES = [
  "All Articles",
  "Governance",
  "Financial Intelligence",
  "Data Quality",
  "AI & Analytics"
];

// Meta icons
const UserIcon = () => (
  <Image 
    src="/blog/solar_user-bold-duotone.svg" 
    alt="User" 
    width={12} 
    height={12} 
  />
);

const CalendarIcon = () => (
  <Image 
    src="/blog/solar_calendar-date-bold-duotone.svg" 
    alt="Calendar" 
    width={12} 
    height={12} 
  />
);

const ClockIcon = () => (
  <Image 
    src="/blog/solar_clock-circle-bold-duotone.svg" 
    alt="Clock" 
    width={12} 
    height={12} 
  />
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const AllArticles = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");
  const desktopScrollRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right", isMobile = false) => {
    const ref = isMobile ? mobileScrollRef : desktopScrollRef;
    if (ref.current) {
      if (isMobile) {
        const container = ref.current;
        const firstCard = container.firstElementChild as HTMLElement;
        const cardWidth = firstCard ? firstCard.offsetWidth : 160;
        const scrollAmount = direction === "left" ? -(cardWidth + 16) : (cardWidth + 16);
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } else {
        const scrollAmount = direction === "left" ? -412 : 412; // card width + gap (380 + 32)
        ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (desktopScrollRef.current) {
      desktopScrollRef.current.scrollLeft = 0;
    }
    if (mobileScrollRef.current) {
      mobileScrollRef.current.scrollLeft = 0;
    }
  }, [selectedCategory, searchQuery]);

  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      const matchesCategory = 
        selectedCategory === "All Articles" || 
        article.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesSearch = 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
        article.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-15 bg-[#004944] isolate">
      {/* Background Image layer */}
      <div className="pointer-events-none absolute inset-0 -z-20 w-full h-full">
        <Image
          src="/bgimg1.png"
          alt=""
          fill
          className="object-cover opacity-80"
          priority
        />
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:block mx-auto max-w-[1440px] px-6 lg:px-20">
        
        {/* ================= CATEGORY BAR ================= */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-white/10">
          
          {/* Category tabs */}
          <div className="flex flex-wrap items-center gap-2.5">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4.5 py-2 font-poppins font-medium text-[13px] transition-all duration-150 cursor-pointer ${
                    isActive 
                      ? "bg-[#3CE0BF] text-gray-900 shadow-sm" 
                      : "bg-white text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search bar */}
          <div className="relative w-[280px]">
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[38px] rounded-[12px] bg-white pl-10 pr-4 font-poppins text-[13px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#3CE0BF]"
            />
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
              <SearchIcon />
            </div>
          </div>

        </div>

        {/* ================= HEADER SECTION ================= */}
        <div className="flex items-end justify-between gap-4 mb-8">
          <div className="flex flex-col">
            <span className="font-poppins font-medium text-[14px] text-[#3CE0BF] mb-2 uppercase tracking-wider">
              Latest
            </span>
            <h2 className="font-manrope font-semibold text-[42px] leading-tight text-white">
              All articles
            </h2>
          </div>
          
          <div className="flex items-center gap-6 pr-[13px]">
            <span className="font-poppins font-medium text-[14px] text-white/70">
              {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}
            </span>

            {/* Slider arrows */}
            {filteredArticles.length > 0 && (
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => scroll("left", false)}
                  aria-label="Scroll left"
                  className="w-10 h-10 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-all cursor-pointer select-none"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  onClick={() => scroll("right", false)}
                  aria-label="Scroll right"
                  className="w-10 h-10 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-all cursor-pointer select-none"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ================= ARTICLES SLIDER ================= */}
        {filteredArticles.length > 0 ? (
          <div className="relative w-full">
            <div 
              ref={desktopScrollRef}
              className="flex overflow-x-auto gap-12 snap-x snap-mandatory scrollbar-none scroll-smooth w-full"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredArticles.map((article) => (
                <div key={article.id} className="flex-shrink-0 w-[380px] snap-start flex flex-col items-start">
                  
                  {/* Card Image */}
                  <div className="relative w-[416px] h-[373.33px] rounded-[16px] overflow-hidden bg-emerald-950 border border-white/5 shadow-md mb-6">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Category badge */}
                  <span className="rounded-[31px] border border-[#3CE0BF]/50 inline-flex items-center justify-center px-4 h-[32px] font-poppins font-medium text-[12.5px] text-[#3CE0BF] bg-transparent mb-4">
                    {article.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-manrope font-semibold text-[20px] leading-snug text-white mb-3 min-h-[56px] line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="font-poppins font-normal text-[13.5px] leading-relaxed text-white/70 mb-5 min-h-[40px] line-clamp-2">
                    {article.description}
                  </p>

                  {/* Meta Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {[
                      { icon: <UserIcon />, label: article.author },
                      { icon: <CalendarIcon />, label: article.date },
                      { icon: <ClockIcon />, label: article.readTime }
                    ].map((meta, idx) => (
                      <div 
                        key={idx} 
                        className="bg-white rounded-[31px] px-3 py-1 flex items-center gap-1.5 font-poppins font-medium text-[11px] text-gray-600 shadow-sm"
                      >
                        {meta.icon}
                        <span>{meta.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Read Article Button */}
                  <button className="w-full h-[44px] rounded-[6px] bg-[#3CE0BF] hover:bg-emerald-500 transition-colors duration-150 text-gray-900 font-poppins font-semibold text-[14.5px] cursor-pointer flex items-center justify-center">
                    Read Article
                  </button>

                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full text-center py-20">
            <p className="font-poppins text-[15px] text-white/60">
              No articles found matching your criteria. Try adjusting filters or search term.
            </p>
          </div>
        )}

      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden mx-auto max-w-[1440px] px-6">
        
        {/* ================= CATEGORY BAR ================= */}
        <div className="flex flex-col gap-5 pb-6 mb-4 border-b border-white/10">
          
          {/* Search bar */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[38px] rounded-[12px] bg-white pl-10 pr-4 font-poppins text-[13px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#3CE0BF]"
            />
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
              <SearchIcon />
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-3 py-1.5 font-poppins font-medium text-[11px] transition-all duration-150 cursor-pointer ${
                    isActive 
                      ? "bg-[#3CE0BF] text-gray-900 shadow-sm" 
                      : "bg-white text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col mb-4">
          <div className="flex flex-col">
            <span className="font-poppins font-medium text-[12px] text-[#3CE0BF] mb-1 uppercase tracking-wider">
              Latest
            </span>
            <h2 className="font-manrope font-semibold text-[24px] leading-tight text-white">
              All articles
            </h2>
          </div>
          
          <div className="flex items-end justify-between gap-6 w-full pr-[13px]">
            <span className="font-poppins font-medium text-[14px] text-white/70">
              {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}
            </span>

            {/* Slider arrows */}
            {filteredArticles.length > 0 && (
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => scroll("left", true)}
                  aria-label="Scroll left"
                  className="w-10 h-10 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-all cursor-pointer select-none"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  onClick={() => scroll("right", true)}
                  aria-label="Scroll right"
                  className="w-10 h-10 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-all cursor-pointer select-none"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ================= ARTICLES SLIDER ================= */}
        {filteredArticles.length > 0 ? (
          <div className="relative w-full">
            <div 
              ref={mobileScrollRef}
              className="flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-none scroll-smooth w-full"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredArticles.map((article) => (
                <div key={article.id} className="flex-shrink-0 w-[calc((100%-16px)/2)] snap-start flex flex-col items-start">
                  
                  {/* Card Image */}
                  <div className="relative w-full aspect-[416/373.33] rounded-[12px] overflow-hidden bg-emerald-950 border border-white/5 shadow-md mb-3">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Category badge */}
                  <span className="rounded-[31px] border border-[#3CE0BF]/50 inline-flex items-center justify-center px-2 h-[24px] font-poppins font-medium text-[10px] text-[#3CE0BF] bg-transparent mb-2">
                    {article.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-manrope font-semibold text-[14px] leading-snug text-white mb-2 min-h-[40px] line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="font-poppins font-normal text-[11px] leading-normal text-white/70 mb-3 min-h-[32px] line-clamp-2">
                    {article.description}
                  </p>

                  {/* Meta Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <div className="bg-white rounded-[31px] px-2 py-0.5 flex items-center gap-1 font-poppins font-medium text-[9px] text-gray-600 shadow-sm">
                      <ClockIcon />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Read Article Button */}
                  <button className="w-full h-[34px] rounded-[6px] bg-[#3CE0BF] hover:bg-emerald-500 transition-colors duration-150 text-gray-900 font-poppins font-semibold text-[12px] cursor-pointer flex items-center justify-center">
                    Read Article
                  </button>

                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full text-center py-20">
            <p className="font-poppins text-[15px] text-white/60">
              No articles found matching your criteria. Try adjusting filters or search term.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default AllArticles;
