"use client";
import React, { useState, useRef, useEffect } from "react";

interface PortfolioItem {
  title: string;
  slug: string;
  image: string;
}

const PortfolioSection: React.FC = () => {
  const portfolioItems: PortfolioItem[] = [
    { title: "Residential", slug: "residential", image: "/asset/image1.png" },
    { title: "Retail", slug: "retail", image: "/asset/image2.png" },
    { title: "Other", slug: "other", image: "/asset/image4.png" },
  ];

  const sliderRef = useRef<HTMLDivElement>(null);

  // Scroll kembali ke awal jika sudah mencapai akhir
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;

    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
      slider.scrollLeft = 0; // kembali ke awal saat mencapai ujung kanan
    }
  };

  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">
          Project
        </h2>
      </div>

      {/* Mobile Slider */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="sm:hidden flex gap-4 overflow-x-auto px-4 snap-x snap-mandatory scroll-smooth scrollbar-none"
      >
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 snap-center group relative overflow-hidden rounded-xl cursor-pointer"
          >
            <div
              className="bg-cover bg-center flex flex-col justify-end p-6 aspect-[3/4] transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="relative text-white text-lg font-bold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Grid */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl cursor-pointer"
          >
            <div
              className="bg-cover bg-center flex flex-col justify-end p-6 aspect-[3/4] transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="relative text-white text-lg font-bold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
