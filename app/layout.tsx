import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../component/navbar";
// import Hero2 from "../component/hero-2";
// import Panorama360 from "../component/parinama360";
import ExperienceSection from "../component/experiance";
import ScrollToTop from "../component/scrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-background-light dark:bg-background-dark font-display text-stone-800 dark:text-stone-200">
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
          {/* Navbar fixed di atas */}
          <Navbar />

          {/* Main content */}
          <main className="flex-1">
              {children}

            {/* Scroll to top button */}
            <ScrollToTop />
          </main>

          {/* Footer */}
          <footer className="flex flex-col gap-6 px-5 py-10 text-center">
            <p className="text-stone-500 dark:text-stone-400 text-base">
              © 2024 Bono Designs. All rights reserved.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
