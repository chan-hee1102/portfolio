"use client";

import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "프로필", href: "#about" },
  { label: "프로젝트", href: "#projects" },
  { label: "자기소개서", href: "#experience" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 시작 → 즉시 표시
      setVisible(true);

      // 기존 타이머 취소
      if (hideTimer.current) clearTimeout(hideTimer.current);

      // 최상단이면 타이머 없이 항상 표시
      if (window.scrollY < 10) return;

      // 1.8초 후 멈춤 감지 → 숨김
      hideTimer.current = setTimeout(() => {
        setVisible(false);
        setMobileOpen(false);
      }, 1800);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  return (
    <>
      {/* 데스크탑 — 플로팅 pill */}
      <div
        className="fixed top-4 left-1/2 z-50 hidden md:flex transition-all duration-300"
        style={{
          transform: visible
            ? "translateX(-50%) translateY(0)"
            : "translateX(-50%) translateY(-120%)",
        }}
      >
        <nav
          className="flex items-center gap-1 px-2 py-2 bg-white"
          style={{
            borderRadius: "9999px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.06)",
          }}
        >
          {/* 로고 */}
          <a
            href="#"
            className="pl-3 pr-4 text-sm font-bold tracking-tight"
            style={{ color: "#6366f1" }}
          >
            포트폴리오
          </a>

          {/* 구분선 */}
          <div className="w-px h-4 bg-gray-200 mx-1" />

          {/* 메뉴 */}
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              style={{ borderRadius: "9999px" }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* 모바일 — 플로팅 pill */}
      <div
        className="fixed top-4 left-1/2 z-50 md:hidden transition-all duration-300"
        style={{
          transform: visible
            ? "translateX(-50%) translateY(0)"
            : "translateX(-50%) translateY(-120%)",
          width: "calc(100% - 32px)",
          maxWidth: "420px",
        }}
      >
        <nav
          className="flex items-center justify-between px-4 py-2.5 bg-white"
          style={{
            borderRadius: "9999px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.06)",
          }}
        >
          <a href="#" className="text-sm font-bold" style={{ color: "#6366f1" }}>
            포트폴리오
          </a>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="p-1.5 text-gray-400 hover:text-gray-700 transition-colors"
            aria-label="메뉴"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* 모바일 드롭다운 */}
        {mobileOpen && (
          <div
            className="mt-2 py-2 bg-white"
            style={{
              borderRadius: "20px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.06)",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
