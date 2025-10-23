"use client";

import React from "react";

const Hero2: React.FC = () => {
    return (
    <section className="@container">
        <div className="@[480px]:p-4">
        <div
            className='flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-6 pb-10 @[480px]:px-12'
            style={{
                backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBaywWnHtvvlzUTJCX2llPqgs5ybBnl-1xF5CJFI_zlAmfXdOlMtJ0lf05s3nlXBj21EPAsLEz16QLzhKHHmy0ISl-al_7VpgwyBiDxop-Xiyje0oQnQJJxfusU-MzY3XeAuhdpw-3_gR9-TAbmZMzhTpEH6wOco_a-KM-M47U6_WGO5DpHB6DEy9U2OZnBvpauWNi5YYND5ditw4M8is9keS3lK-xmOYfKvZR7vNNky4XBq2ejIzoZLgx87KOaNP_bnzo_0KykclJO")',
                borderRadius: '10px',
            }}

        >
            {/* Teks utama */}
            <div className="flex flex-col gap-4 text-left">
            <h1 className="text-white text-4xl font-black leading-tight tracking-tighter @[480px]:text-6xl">
                Designing Modern Spaces That Inspire Calm &amp; Clarity
            </h1>
            <p className="text-white/90 text-base @[480px]:text-lg max-w-2xl">
                Hi, I’m Afif — an interior designer passionate about transforming
                spaces with simplicity and purpose.
            </p>
            </div>

            {/* Tombol CTA */}
            <div className="flex flex-wrap gap-4">
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-black text-base font-bold transition-transform hover:scale-105">
                <span>View My Work</span>
            </button>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary/20 dark:bg-primary/30 text-white text-base font-bold transition-transform hover:scale-105">
                <span>Contact Me</span>
            </button>
            </div>
        </div>
        </div>
    </section>
    );
};

export default Hero2;
