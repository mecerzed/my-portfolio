// "use client";

// import { useState } from "react";
// import Link from "next/link";

// const navLinks = [
//     { label: "Work", href: "/#work" },
//     { label: "About", href: "/#about" },
//     { label: "Services", href: "/#services" },
//     { label: "Contact", href: "/#contact" },
// ];

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-dark/10">
//             <nav className="px-8 md:px-16 lg:px-24 py-5 flex items-center justify-between">
//                 <Link href="/" className="font-semibold text-dark text-lg">
//                     Mecer / Design
//                 </Link>

//                 {/* Desktop links */}
//                 <div className="hidden md:flex gap-8">
//                     {navLinks.map((link) => (
//                         <Link
//                             key={link.label}
//                             href={link.href}
//                             className="text-sm text-text/70 hover:text-accent transition-colors"
//                         >
//                             {link.label}
//                         </Link>
//                     ))}
//                 </div>

//                 {/* Mobile menu button */}
//                 <button
//                     onClick={() => setIsOpen(!isOpen)}
//                     className="md:hidden flex flex-col gap-1.5 p-2"
//                     aria-label="Toggle menu"
//                     aria-expanded={isOpen}
//                 >
//                     <span
//                         className={`block w-6 h-0.5 bg-dark transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}
//                     />
//                     <span
//                         className={`block w-6 h-0.5 bg-dark transition-opacity ${isOpen ? "opacity-0" : ""}`}
//                     />
//                     <span
//                         className={`block w-6 h-0.5 bg-dark transition-transform ${isOpen ? "-rotate-5 -translate-y-2" : ""}`}
//                     />
//                 </button>
//             </nav>

//             {/* Mobile menu panel */}
//             {isOpen && (
//                 <div className="md:hidden px-8 pb-6 flex flex-col gap-4 border-t border-dark/10 pt-6">
//                     {navLinks.map((link) => (
//                         <Link
//                             key={link.label}
//                             href={link.href}
//                             onClick={() => setIsOpen(false)}
//                             className="text-text/70 hover:text-accent transition-colors"
//                         >
//                             {link.label}
//                         </Link>
//                     ))}
//                 </div>
//             )}
//         </header>
//     );
// }


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
    <header className="sticky top-0 z-50 border-b border-dark/10 bg-bg/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-1 text-base font-semibold tracking-[-0.02em] text-dark"
        >
          <span>Mecer</span>
          <span className="text-accent transition-transform duration-300 group-hover:rotate-12">
            /
          </span>
          <span>Design</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative py-2 text-sm font-medium text-text/60 transition-colors duration-300 hover:text-dark"
            >
              {link.label}

              <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-dark/10 transition-colors duration-300 hover:border-accent md:hidden"
        >
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-5 bg-dark transition-all duration-300 ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-[7px] h-[1.5px] w-5 bg-dark transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute bottom-0 left-0 h-[1.5px] w-5 bg-dark transition-all duration-300 ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
          isOpen
            ? "max-h-[420px] border-t border-dark/10 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-6 py-6">
          <div className="flex flex-col">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between border-b border-dark/10 py-5"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-medium text-accent">
                    0{index + 1}
                  </span>

                  <span className="text-2xl font-semibold tracking-[-0.03em] text-dark">
                    {link.label}
                  </span>
                </div>

                <span className="text-lg text-dark/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}