"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
    { label: "Work", href: "/#work" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-dark/10">
            <nav className="px-8 md:px-16 lg:px-24 py-5 flex items-center justify-between">
                <Link href="/" className="font-semibold text-dark text-lg">
                    Mecer
                </Link>

                {/* Desktop links */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-sm text-text/70 hover:text-accent transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <span
                        className={`block w-6 h-0.5 bg-dark transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-dark transition-opacity ${isOpen ? "opacity-0" : ""}`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-dark transition-transform ${isOpen ? "-rotate-5 -translate-y-2" : ""}`}
                    />
                </button>
            </nav>

            {/* Mobile menu panel */}
            {isOpen && (
                <div className="md:hidden px-8 pb-6 flex flex-col gap-4 border-t border-dark/10 pt-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-text/70 hover:text-accent transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
