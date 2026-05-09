"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "PROFILE", href: "#about" },
  { label: "PROJECT", href: "#projects" },
  { label: "STORY", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      glowRef.current.style.background = `radial-gradient(ellipse 22% 22% at ${x}% ${y}%, rgba(190,160,255,0.35), transparent 65%)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden"
      style={{ background: "#020010" }}
    >
      {/* ── 실크 배경 (보라 팔레트) ── */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: [
            /* 구체 하이라이트 (오른쪽 상단) */
            "radial-gradient(ellipse 26% 30% at 67% 27%, rgba(210,185,255,0.55) 0%, transparent 55%)",
            /* 구체 메인 바디 */
            "radial-gradient(ellipse 48% 58% at 63% 47%, rgba(88,48,175,0.85) 0%, transparent 52%)",
            /* 구체 그림자 (오른쪽 하단) */
            "radial-gradient(ellipse 32% 42% at 80% 64%, rgba(6,2,30,0.97) 0%, transparent 45%)",
            /* 왼쪽 흐름 */
            "radial-gradient(ellipse 65% 45% at 18% 62%, rgba(42,18,105,0.72) 0%, transparent 58%)",
            /* 상단 어두운 영역 */
            "radial-gradient(ellipse 55% 38% at 38% 12%, rgba(10,5,40,0.85) 0%, transparent 55%)",
            /* 하단 중앙 흐름 */
            "radial-gradient(ellipse 50% 35% at 50% 88%, rgba(30,12,85,0.6) 0%, transparent 55%)",
          ].join(", "),
        }}
      />

      {/* 마우스 글로우 */}
      <div
        ref={glowRef}
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ mixBlendMode: "screen" }}
      />

      {/* 노이즈 텍스처 */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.05,
        }}
      />

      {/* ── 상단 좌: 로고 ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute top-7 left-8 z-10"
      >
        <span
          className="text-sm tracking-wider"
          style={{ color: "rgba(255,255,255,0.55)", fontWeight: 300 }}
        >
          임찬희
        </span>
      </motion.div>

      {/* ── 상단 우: 세로 네비게이션 ── */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute top-6 right-8 z-10 flex flex-col items-end gap-1.5"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[11px] tracking-[0.18em] uppercase transition-all duration-200 hover:opacity-100"
            style={{ color: "rgba(255,255,255,0.35)", fontWeight: 400 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
          >
            {link.label}
          </a>
        ))}
      </motion.nav>

      {/* ── 중앙: 유령 텍스트 ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
          className="text-center select-none"
          style={{
            fontSize: "clamp(42px, 7vw, 96px)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.12)",
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
          }}
        >
          포트폴리오를<br />소개합니다.
        </motion.h1>
      </div>

      {/* ── 하단 좌: 원형 SCROLL DOWN ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="absolute bottom-8 left-8 z-10"
      >
        <div className="relative w-[72px] h-[72px]">
          {/* 원형 텍스트 */}
          <svg
            viewBox="0 0 72 72"
            className="w-full h-full"
            style={{
              animation: "spin 10s linear infinite",
            }}
          >
            <defs>
              <path
                id="scrollCircle"
                d="M 36 36 m -26 0 a 26 26 0 1 1 52 0 a 26 26 0 1 1 -52 0"
              />
            </defs>
            <text
              style={{
                fontSize: "7.2px",
                fill: "rgba(255,255,255,0.3)",
                letterSpacing: "2.8px",
                fontWeight: 400,
              }}
            >
              <textPath href="#scrollCircle">
                SCROLL DOWN · SCROLL DOWN ·{" "}
              </textPath>
            </text>
          </svg>
          {/* 중앙 아이콘 */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
                d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* spin 애니메이션 */}
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>

      {/* 다음 섹션 페이드 */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #ffffff)" }}
      />
    </section>
  );
}
