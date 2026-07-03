'use client';

import React from "react";
import Hero from "@/sections/blog/Hero";
import BlogList from "@/sections/blog/BlogList";
import AllArticles from "@/sections/blog/AllArticles";

export default function BlogPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Hero />
      <BlogList />
      <AllArticles />
    </main>
  );
}
