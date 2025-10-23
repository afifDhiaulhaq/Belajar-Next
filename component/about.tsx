"use client";

export default function About() {
    return (
    <section className="py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Teks Kiri */}
        <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">
            About Me
        </h2>
        <p className="text-stone-600 dark:text-stone-400 text-lg leading-relaxed">
            With a keen eye for detail and a passion for creating harmonious
            environments, I blend functionality with aesthetics to craft spaces
            that reflect your unique style and needs. My approach is rooted in
            understanding your vision and translating it into a design that
            enhances your everyday life.
        </p>
        </div>

        {/* Gambar Kanan */}
        <div className="w-full aspect-[4/5] rounded-xl overflow-hidden">
        <div
            className="w-full h-full bg-center bg-no-repeat bg-cover"
            style={{
            backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVhwhxhcc1hLRanwLAC-pVsuJZkAum2jRT9bzknCOr4Qu-NdYB_JqAfvd-y4aQYd10qG01LhVoaMAtj4zh-ZpopH1_oeumF6PG_tpvlV28CPSRLDaa1pQ6DT6-5b54EkS3duaDb9orLmLmK2w8zdoVmfvQfKr725g1g052Dhc37dSjnJaIomZdKErDySYFBor4qm9ZVstwZ5ORcD5t8g7Kq4aytCyRxdzH1QXI_dBJqEafvTUqPWN2PEHXS0NCyh4HNOVI1KqZdbdo")',
            }}
        />
        </div>
    </section>
    );
}
