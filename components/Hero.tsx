"use client";

import { motion, type TargetAndTransition } from "framer-motion";

/* 애니메이션 오브 컴포넌트 */
function Orb({
  style,
  animate,
  duration,
}: {
  style: React.CSSProperties;
  animate: TargetAndTransition;
  duration: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ filter: "blur(80px)", ...style }}
      animate={animate}
      transition={{ duration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
    />
  );
}

const containerVariants = {
  animate: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const itemTransition = { duration: 0.8, ease: "easeOut" as const };

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
      style={{ background: "#08011a" }}
    >
      {/* ── 배경 그라디언트 오브 ── */}
      <Orb
        style={{ width: 600, height: 600, top: "-10%", left: "15%", background: "rgba(99,66,213,0.35)" }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        duration={12}
      />
      <Orb
        style={{ width: 500, height: 500, bottom: "-5%", right: "10%", background: "rgba(139,92,246,0.25)" }}
        animate={{ x: [0, -50, 0], y: [0, -40, 0] }}
        duration={15}
      />
      <Orb
        style={{ width: 300, height: 300, top: "40%", left: "55%", background: "rgba(167,139,250,0.15)" }}
        animate={{ x: [0, 30, -20, 0], y: [0, -30, 20, 0] }}
        duration={18}
      />

      {/* ── 노이즈 오버레이 (고급감) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.04,
          mixBlendMode: "overlay",
        }}
      />

      {/* ── 중앙 콘텐츠 ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {/* 상단 레이블 */}
        <motion.div variants={itemVariants} transition={itemTransition} className="flex items-center gap-3 mb-10">
          <div className="h-px w-12 bg-white/20" />
          <span className="text-xs tracking-[0.25em] text-white/40 uppercase font-medium">
            Portfolio · 2026
          </span>
          <div className="h-px w-12 bg-white/20" />
        </motion.div>

        {/* 메인 이름 */}
        <motion.h1
          variants={itemVariants} transition={itemTransition}
          className="font-extrabold text-white leading-none tracking-tighter mb-6 select-none"
          style={{ fontSize: "clamp(72px, 14vw, 180px)", letterSpacing: "-0.03em" }}
        >
          임찬희
        </motion.h1>

        {/* 역할 태그라인 */}
        <motion.p
          variants={itemVariants} transition={itemTransition}
          className="text-sm sm:text-base tracking-[0.2em] uppercase mb-12"
          style={{ color: "rgba(167,139,250,0.7)" }}
        >
          Vibe Coder&nbsp;&nbsp;·&nbsp;&nbsp;Fullstack Developer
        </motion.p>

        {/* 한 줄 소개 */}
        <motion.p
          variants={itemVariants} transition={itemTransition}
          className="text-white/40 text-sm sm:text-base max-w-md leading-relaxed mb-12"
        >
          데이터를 이해하고, AI로 만들고, 직접 배포합니다.
        </motion.p>

        {/* CTA 버튼 */}
        <motion.div variants={itemVariants} transition={itemTransition} className="flex flex-col sm:flex-row gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white transition-all hover:opacity-80 active:scale-95"
            style={{ background: "rgba(99,66,213,0.9)", borderRadius: "6px" }}
          >
            프로젝트 보기
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold transition-all hover:bg-white/10 active:scale-95"
            style={{
              color: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "6px",
            }}
          >
            프로필 보기
          </a>
        </motion.div>
      </motion.div>

      {/* ── 스크롤 인디케이터 ── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "rgba(255,255,255,0.25)" }}>
          Scroll
        </span>
        <motion.div
          style={{ color: "rgba(255,255,255,0.25)" }}
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>

      {/* ── 하단 그라디언트 페이드 (다음 섹션으로 자연스럽게) ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #ffffff)" }}
      />
    </section>
  );
}
