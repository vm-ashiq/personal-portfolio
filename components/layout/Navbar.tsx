"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { profileData } from "../../data/portfolioData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Research & Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="absolute top-0 w-full z-50 bg-transparent h-24">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 border-x border-b border-zinc-100 bg-white/70 backdrop-blur-sm h-full">
        <div className="flex justify-between items-center h-full">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <Link href="/" className="flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-lg overflow-hidden border border-yellow-500 shadow-sm">
               <img src="https://i.pravatar.cc/100?img=11" alt="Logo" className="w-full h-full object-cover" />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-zinc-900 hover:opacity-70 transition-opacity"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions Area */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#contact" className="px-6 py-2.5 bg-zinc-900 text-white rounded-lg font-bold shadow-lg hover:bg-zinc-800 transition-colors ml-2">
              Contact Me!
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-x border-zinc-100 absolute w-full max-w-7xl mx-auto left-0 right-0 shadow-lg px-4 sm:px-6 lg:px-8">
          <div className="pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-bold text-zinc-900 hover:bg-zinc-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-3 pt-4">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block w-full py-3 bg-zinc-900 text-white rounded-lg font-bold shadow-lg text-center mx-auto">
                Contact Me!
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
