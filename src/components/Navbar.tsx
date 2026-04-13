"use client";

import { FiUser } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm border-b"
          : "bg-white/70 backdrop-blur border-b"
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 py-3 md:px-6 md:py-4 flex justify-between items-center">

        {/* Name / Logo */}
        <a
          href="#top"
          className="group font-semibold tracking-tight flex items-center gap-2 transition hover:text-[#D97706]"
        >
          <FiUser className="text-gray-600 group-hover:text-[#D97706] transition" />
          Paul Henry Atienza
        </a>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-sm tracking-wide">
          <a
            href="#about"
            className="text-gray-600 hover:text-[#D97706] transition"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-gray-600 hover:text-[#D97706] transition"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="text-gray-600 hover:text-[#D97706] transition"
          >
            Skills
          </a>
          <a
            href="#certifications"
            className="text-gray-600 hover:text-[#D97706] transition"
          >
            Certifications
          </a>
          <a
            href="#services"
            className="text-gray-600 hover:text-[#D97706] transition"
          >
            Services
          </a>
          <a
            href="/blog"
            className="text-gray-600 hover:text-[#D97706] transition"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-[#D97706] transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
