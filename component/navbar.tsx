"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3 ${
        scrolled
          ? "bg-white/0 backdrop-blur-md border-b-0 shadow-md"
          : "bg-white border-b border-b-[#f5f4f0] shadow-none"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-4 text-[#181711] dark:text-white">
        <div className="size-4">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor" />
          </svg>
        </div>
        <h2 className="text-lg font-bold tracking-[-0.015em]">Bono Design</h2>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex flex-1 justify-end">
        <div className="flex items-center gap-9">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300 px-1 ${
                  isActive
                    ? "text-yellow-500 dark:text-yellow-500 font-bold"
                    : "text-[#181711] dark:text-white hover:text-yellow-500 dark:hover:text-yellow-500"
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-500 dark:bg-yellow-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex text-[#181711] dark:text-white"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        {open ? <span className="text-xl font-bold">✕</span> : <span className="text-xl font-bold">☰</span>}
      </button>

      {/* Mobile Drawer */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-[#f5f4f0] dark:border-[#2a271a] flex flex-col gap-4 p-6 md:hidden shadow-md">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-base font-medium transition-all duration-300 px-1 ${
                  isActive
                    ? "text-yellow-500 dark:text-yellow-500 font-bold"
                    : "text-[#181711] dark:text-white hover:text-yellow-500 dark:hover:text-yellow-500"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-500 dark:bg-yellow-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
