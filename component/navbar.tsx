"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    ];

    return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
            MyPortfolio
        </Link>

        <ul className="flex space-x-6">
            {navItems.map((item) => (
            <li key={item.href}>
                <Link
                href={item.href}
                className={`${
                    pathname === item.href
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-500"
                }`}
                >
                {item.name}
                </Link>
            </li>
            ))}
        </ul>
        </div>
    </nav>
    );
}
