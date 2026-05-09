"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  // 마우스 따라다니는 글로우 — React state 없이 직접 DOM 조작 (성능 최적화)
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      glowRef.current.style.background = `radial-gradient(ellipse 30% 30% at ${x}% ${y}%, rgba(139,92,246,0.5), transparent 70%)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden cursor-none"
      style={{ background: "#000000" }}
    >
      {/* 정적 배경 그라디언트 */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 90% 70% at 15% 65%, rgba(76,29,149,0.7), transparent 55%)",
            "radial-gradient(ellipse 60% 60% at 82% 25%, rgba(109,40,217,0.45), transparent 55%)",
          ].join(", "),
        }}
      />

      {/* 마우스 글로우 레이어 */}
      <div
        ref={glowRef}
        aria-hidden
        className="absolute inset-0 pointer-events-none transition-none"
        style={{ mixBlendMode: "screen" }}
      />

      {/* 노이즈 텍스처 */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.04,
        }}
      />

      {/* 상단 메타 */}
      <div className="relative z-10 flex justify-between px-8 sm:px-14 pt-24">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-[11px] tracking-[0.25em] uppercase"
          style={{ color: "rgba(255,255,255,0.25)", fontWeight: 400 }}
        >
          Portfolio
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="text-[11px] tracking-[0.25em] uppercase"
          style={{ color: "rgba(255,255,255,0.25)", fontWeight: 400 }}
        >
          2026
        </motion.span>
      </div>

      {/* 중앙 텍스트 */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 gap-5">

        {/* 이름 */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.15, ease: "easeOut" }}
          className="text-white select-none"
          style={{
            fontSize: "clamp(52px, 9vw, 110px)",
            fontWeight: 300,
            letterSpacing: "-0.01em",
            lineHeight: 1.0,
          }}
        >
          임찬희
        </motion.h1>

        {/* 구분선 */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="w-10 h-px origin-left"
          style={{ background: "rgba(255,255,255,0.2)" }}
        />

        {/* 한 줄 소개 */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
          style={{
            fontSize: "clamp(15px, 2vw, 22px)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.02em",
          }}
        >
          포트폴리오를 소개합니다.
        </motion.p>
      </div>

      {/* 하단 */}
      <div className="relative z-10 flex justify-between items-end px-8 sm:px-14 pb-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-col items-start gap-2"
        >
          <div className="h-8 w-px" style={{ background: "rgba(255,255,255,0.15)" }} />
          <span
            className="text-[10px] tracking-[0.22em] uppercase"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            Scroll
          </span>
        </motion.div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-[10px] tracking-widest"
          style={{ color: "rgba(255,255,255,0.12)", fontWeight: 300 }}
        >
          Chan-Hee Lim
        </motion.span>
      </div>

      {/* 다음 섹션 페이드 */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #ffffff)" }}
      />
    </section>
  );
}
