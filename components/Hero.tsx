"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-magic-dust rainbow-washes overflow-hidden px-4"
    >
      {/* Orchid glow orb */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(209,125,254,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block mb-6 px-4 py-1.5 text-xs font-semibold tracking-widest text-orchid-glow border border-orchid-glow/40 uppercase"
            style={{ borderRadius: "90px" }}
          >
            Vibe Coder · Fullstack Developer
          </motion.span>

          <h1
            className="font-display font-bold text-white mb-6 leading-none"
            style={{
              fontSize: "clamp(56px, 10vw, 96px)",
              letterSpacing: "-0.012em",
              lineHeight: 0.97,
            }}
          >
            임찬희
          </h1>

          <p
            className="text-white/60 max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ fontSize: "18px" }}
          >
            데이터를 이해하고, AI로 만들고, 직접 배포하는
            <br className="hidden sm:block" />
            풀스택 바이브 코더입니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-10 py-5 text-sm font-semibold text-white bg-purple-heart transition-all hover:opacity-90 active:scale-95"
              style={{ borderRadius: "4px" }}
            >
              프로젝트 보기
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-5 text-sm font-semibold text-white/90 border border-white/30 transition-all hover:border-white/60 hover:text-white active:scale-95"
              style={{ borderRadius: "90px" }}
            >
              연락하기
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
