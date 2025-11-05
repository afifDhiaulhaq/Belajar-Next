"use client";

import React, { useEffect, useState } from "react";

const images = [
  "asset/image1.png",
  "asset/image2.png",
  "asset/image4.png",
];

const Hero2: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // ganti gambar tiap 5 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-screen h-screen relative overflow-hidden flex items-center justify-center">
      {/* Sliding Background */}
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.concat(images[0]).map((img, idx) => (
          <div
            key={idx}
            className="w-screen h-screen bg-center bg-cover flex-shrink-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${img})`,
            }}
          />
        ))}
      </div>

      {/* Konten Teks di Tengah */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-white text-4xl font-black leading-tight tracking-tighter md:text-6xl">
          Designing Modern Spaces That Inspire Calm &amp; Clarity
        </h1>

        {/* Tombol CTA */}
        <div className="flex flex-wrap gap-4 mt-6 justify-center">
          <button className="flex min-w-[84px] items-center justify-center rounded-lg h-12 px-6 bg-primary text-black font-bold hover:scale-105 transition-transform">
            View My Work
          </button>
          <button className="flex min-w-[84px] items-center justify-center rounded-lg h-12 px-6 bg-primary/20 dark:bg-primary/30 text-white font-bold hover:scale-105 transition-transform">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
