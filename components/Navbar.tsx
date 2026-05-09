"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "소개", href: "#about" },
  { label: "프로젝트", href: "#projects" },
  { label: "기술", href: "#skills" },
  { label: "경력", href: "#experience" },
  { label: "철학", href: "#philosophy" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-frost border-b border-slate-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#"
            className={`text-xl font-bold font-display tracking-tight transition-colors ${
              scrolled ? "text-dark-plum" : "text-white"
            }`}
          >
            임찬희
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-electric-blue ${
                  scrolled ? "text-pewter" : "text-white/80"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-5 py-2 text-sm font-semibold text-white bg-purple-heart rounded transition-all hover:opacity-90 active:scale-95"
              style={{ borderRadius: "4px" }}
            >
              연락하기
            </a>
          </div>

          <button
            className={`md:hidden p-2 rounded transition-colors ${
              scrolled ? "text-pewter" : "text-white"
            }`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="메뉴 열기"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-slate-border bg-surface-frost">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 px-2 text-sm font-medium text-pewter hover:text-electric-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 mx-2 py-2.5 text-center text-sm font-semibold text-white bg-purple-heart"
              style={{ borderRadius: "4px" }}
            >
              연락하기
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
