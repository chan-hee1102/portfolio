"use client";

import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "포트폴리오", href: "#hero" },
  { label: "프로필", href: "#about" },
  { label: "프로젝트", href: "#projects" },
  { label: "자기소개서", href: "#experience" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 10) {
        setVisible(true);
      } else if (currentY < lastScrollY.current) {
        // 스크롤 올릴 때 → 나타남
        setVisible(true);
      } else if (currentY > lastScrollY.current + 4) {
        // 스크롤 내릴 때 → 숨김 (4px 여유)
        setVisible(false);
        setMobileOpen(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        background: "#481a54",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* 로고 */}
          <a
            href="#"
            className="flex items-center gap-2 text-base font-bold text-white tracking-tight"
          >
            <span
              className="w-6 h-6 flex items-center justify-center text-white font-black text-xs"
              style={{
                background: "linear-gradient(135deg, #d17dfe, #9602c7)",
                borderRadius: "6px",
              }}
            >
              임
            </span>
            포트폴리오
          </a>

          {/* 데스크탑 메뉴 — pill 스타일 */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                style={{ borderRadius: "90px" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* 우측 CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="px-5 py-2 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
              style={{
                background: "#611f69",
                borderRadius: "4px",
                boxShadow: "rgb(97, 31, 105) 0px 0px 0px 1px inset",
              }}
            >
              시작하기
            </a>
          </div>

          {/* 모바일 햄버거 */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white"
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
      </div>

      {/* 모바일 메뉴 */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 px-6 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 py-3">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center py-2.5 text-sm font-semibold text-white"
              style={{ background: "#611f69", borderRadius: "4px" }}
            >
              시작하기
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
