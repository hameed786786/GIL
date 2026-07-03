'use client';

import React from "react";
import Image from "next/image";

interface BlogPost {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

const POSTS: BlogPost[] = [
  {
    id: 1,
    category: "Governance Intelligence",
    title: "Where Mid-Size Businesses Leak Money — And Never See It",
    excerpt: "An introduction to quantified leakage and why hidden operational costs matter more than most businesses realize.",
    author: "Elena Vane",
    date: "June 2026",
    readTime: "6 Min Read",
    image: "/blog/blogimg.png"
  },
  {
    id: 2,
    category: "Governance",
    title: "Stability, Fragility & Data Reliability",
    excerpt: "Understanding GIL's three governance scores.",
    author: "Elena Vane",
    date: "June 2026",
    readTime: "6 Min Read",
    image: "/blog/blogimg.png"
  },
  {
    id: 3,
    category: "AI & Analytics",
    title: "AI At The Edges, Maths In The Middle",
    excerpt: "Why GIL remains fully auditable end to end.",
    author: "Elena Vane",
    date: "June 2026",
    readTime: "6 Min Read",
    image: "/blog/blogimg.png"
  }
];

// Inline meta icons
const UserIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#757575]">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#757575]">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ClockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#757575]">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const BlogList = () => {
  const featured = POSTS[0];
  const gridPosts = POSTS.slice(1);

  return (
    <section className="w-full bg-white py-16 md:py-24 pt-0 md:pt-5">
      <div className=" max-w-[1440px] px-6 lg:px-18">
        
        {/* ================= FEATURED POST (TOP) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[807px_1fr] gap-8 lg:gap-12 items-center mb-8">
          {/* Featured Image */}
          <div className="relative rounded-[16px] overflow-hidden w-full aspect-[16/10] lg:aspect-auto lg:w-[807px] lg:h-[447px] bg-gray-100 border border-gray-100 shadow-sm">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover"
              sizes="(max-w-1024px) 100vw, 700px"
              priority
            />
          </div>

          {/* Featured Info */}
          <div className="flex flex-col items-start justify-between lg:w-[425px] lg:h-[413px] w-full">
            <div className="flex flex-col items-start">
              {/* Category Badge */}
              <span className="rounded-[31px] border border-[#3CE0BF] inline-flex items-center justify-center px-4 h-[32px] font-poppins font-medium text-[13px] text-[#3CE0BF] bg-transparent mb-4">
                {featured.category}
              </span>

              {/* Title */}
              <h2 className="font-manrope font-bold text-[24px] md:text-[36px] leading-tight text-black mb-4">
                {featured.title}
              </h2>

              {/* Excerpt */}
              <p className="font-poppins font-normal text-[14px] leading-relaxed text-gray-500 mb-6">
                {featured.excerpt}
              </p>

              {/* Meta Tags */}
              <div className="flex flex-wrap gap-2.5 mb-6 lg:mb-0">
                {[
                  { icon: <UserIcon />, label: featured.author },
                  { icon: <CalendarIcon />, label: featured.date },
                  { icon: <ClockIcon />, label: featured.readTime }
                ].map((meta, i) => (
                  <div 
                    key={i} 
                    className="bg-[#F5F6F6] rounded-[31px] px-3.5 py-1.5 flex items-center gap-1.5 font-poppins font-medium text-[12px] text-[#757575]"
                  >
                    {meta.icon}
                    <span>{meta.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Read Article Button */}
            <button className="w-full h-[46px] rounded-[6px] bg-[#3CE0BF] hover:bg-emerald-500 transition-colors duration-150 text-gray-900 font-poppins font-semibold text-[15px] cursor-pointer flex items-center justify-center mt-0 lg:mt-0">
              Read Article
            </button>
          </div>
        </div>

        {/* ================= GRID POSTS (BOTTOM) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
          {gridPosts.map((post) => (
            <div key={post.id} className="flex flex-col items-start">
              {/* Image */}
              <div className="relative w-full rounded-[16px] overflow-hidden aspect-[16/10] bg-gray-100 border border-gray-100 shadow-sm mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 550px"
                />
              </div>

              {/* Category Badge */}
              <span className="rounded-[31px] border border-[#3CE0BF] inline-flex items-center justify-center px-4 h-[32px] font-poppins font-medium text-[13px] text-[#3CE0BF] bg-transparent mb-4">
                {post.category}
              </span>

              {/* Title */}
              <h3 className="font-manrope font-bold text-[22px] md:text-[28px] leading-tight text-black mb-3">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="font-poppins font-normal text-[14px] leading-relaxed text-gray-500 mb-6">
                {post.excerpt}
              </p>

              {/* Meta Tags */}
              <div className="flex flex-wrap gap-2.5 mb-6">
                {[
                  { icon: <UserIcon />, label: post.author },
                  { icon: <CalendarIcon />, label: post.date },
                  { icon: <ClockIcon />, label: post.readTime }
                ].map((meta, i) => (
                  <div 
                    key={i} 
                    className="bg-[#F5F6F6] rounded-[31px] px-3.5 py-1.5 flex items-center gap-1.5 font-poppins font-medium text-[12px] text-[#757575]"
                  >
                    {meta.icon}
                    <span>{meta.label}</span>
                  </div>
                ))}
              </div>

              {/* Read Article Button */}
              <button className="w-full h-[46px] rounded-[6px] bg-[#3CE0BF] hover:bg-emerald-500 transition-colors duration-150 text-gray-900 font-poppins font-semibold text-[15px] cursor-pointer flex items-center justify-center">
                Read Article
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogList;
