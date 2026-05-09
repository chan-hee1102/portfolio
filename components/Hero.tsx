"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 1.2, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* 유기적 보라 그라디언트 (monopo 스타일) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 100% 80% at 15% 60%, rgba(76,29,149,0.75), transparent 60%)",
            "radial-gradient(ellipse 70% 70% at 80% 30%, rgba(109,40,217,0.5), transparent 60%)",
            "radial-gradient(ellipse 50% 50% at 50% 90%, rgba(139,92,246,0.35), transparent 60%)",
          ].join(", "),
        }}
      />

      {/* 노이즈 텍스처 */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.045,
          mixBlendMode: "screen",
        }}
      />

      {/* 상단 메타 */}
      <div className="relative z-10 flex justify-between items-start px-8 sm:px-14 pt-28">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xs tracking-[0.25em] uppercase"
          style={{ color: "rgba(255,255,255,0.3)", fontWeight: 400 }}
        >
          Portfolio
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xs tracking-[0.25em] uppercase"
          style={{ color: "rgba(255,255,255,0.3)", fontWeight: 400 }}
        >
          2026
        </motion.p>
      </div>

      {/* 중앙 메인 타이포 */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* 이름 — weight 300, monopo 스타일 */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
          className="text-white select-none"
          style={{
            fontSize: "clamp(80px, 16vw, 220px)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            lineHeight: 0.9,
          }}
        >
          임찬희
        </motion.h1>

        {/* 구분선 + 역할 */}
        <motion.div
          {...fadeUp(0.7)}
          className="flex items-center gap-6 mt-8"
        >
          <div className="h-px w-10" style={{ background: "rgba(255,255,255,0.2)" }} />
          <p
            className="text-xs tracking-[0.22em] uppercase"
            style={{ color: "rgba(255,255,255,0.4)", fontWeight: 400 }}
          >
            Fullstack Developer&nbsp;&nbsp;·&nbsp;&nbsp;Vibe Coder
          </p>
          <div className="h-px w-10" style={{ background: "rgba(255,255,255,0.2)" }} />
        </motion.div>

        {/* 소개 */}
        <motion.p
          {...fadeUp(0.9)}
          className="mt-6 max-w-xs text-sm leading-relaxed"
          style={{ color: "rgba(255,255,255,0.25)", fontWeight: 300 }}
        >
          데이터를 이해하고, AI로 만들고, 직접 배포합니다.
        </motion.p>

        {/* CTA */}
        <motion.div {...fadeUp(1.1)} className="mt-10 flex gap-3">
          <a
            href="#projects"
            className="px-7 py-2.5 text-sm text-white transition-all hover:opacity-60"
            style={{
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "75px",
              fontWeight: 400,
            }}
          >
            프로젝트 보기
          </a>
          <a
            href="#about"
            className="px-7 py-2.5 text-sm transition-all hover:opacity-60"
            style={{ color: "rgba(255,255,255,0.35)", fontWeight: 400 }}
          >
            프로필 →
          </a>
        </motion.div>
      </div>

      {/* 하단 */}
      <div className="relative z-10 flex justify-between items-end px-8 sm:px-14 pb-10">
        <motion.div
          {...fadeUp(1.4)}
          className="flex flex-col items-start gap-2"
        >
          <div className="h-10 w-px" style={{ background: "rgba(255,255,255,0.15)" }} />
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            Scroll
          </span>
        </motion.div>

        <motion.p
          {...fadeUp(1.4)}
          className="text-xs"
          style={{ color: "rgba(255,255,255,0.15)", fontWeight: 300 }}
        >
          Chan-Hee Lim
        </motion.p>
      </div>

      {/* 다음 섹션 페이드 */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #ffffff)" }}
      />
    </section>
  );
}
