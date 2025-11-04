"use client";

export default function About() {
    return (
    <section id="about" className="py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Teks Kiri */}
        <div className="space-y-4">
        <h2 className="text-7xl font-bold tracking-tight text-stone-900 dark:text-white">
            INTERIOR DESIGNER
        </h2>
        <p className="text-stone-600 dark:text-stone-400 text-xl leading-relaxed">
             believe that good architectural design is not just about creating an intelligent 
blend of style, form and function. It is also a form of storytelling.
        </p>
        </div>

        {/* Gambar Kanan */}
        <div className="w-full aspect-[4/5] rounded-xl overflow-hidden">
        <div
            className="w-full h-full bg-center bg-no-repeat bg-cover"
            style={{
            backgroundImage:
                'url("/person.jpg")',
            }}
        />
        </div>
    </section>
    );
}
