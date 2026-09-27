"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lines from "@/components/ui/Lines";

type VantaEffect = { destroy: () => void };

const NAME = ["임", "찬", "희"];
/** 첫 화면 근거 한 줄 — 자세한 캡처는 #proof */
const PROOF = ["한 달 가입 100명+", "검색어 3개에서 네이버 1위", "Perplexity 첫 번째 출처"];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<VantaEffect | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const THREE_NS = await import("three");
      // vanta 0.5.24 was built against three < r137 and reads `THREE.VertexColors`,
      // which newer three removed in favor of `vertexColors: true`. Shim it.
      const THREE = { ...THREE_NS, VertexColors: true } as typeof THREE_NS;
      // @ts-expect-error vanta ships no types
      const NET = (await import("vanta/dist/vanta.net.min")).default;
      if (cancelled || !vantaRef.current || effectRef.current) return;
      effectRef.current = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        color: 0x6366f1,
        backgroundColor: 0xffffff,
        points: 9,
        maxDistance: 18,
        spacing: 18,
        showDots: true,
      });
    })();

    return () => {
      cancelled = true;
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center bg-white px-4 overflow-hidden"
    >
      <div
        ref={vantaRef}
        className="absolute inset-0 z-0 opacity-60"
        aria-hidden
      />
      {/* 글씨 뒤만 살짝 비워 그물 선이 글자를 긁지 않게 */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.6)_38%,transparent_70%)]"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center pt-20 pb-24">
        <motion.a
          href="#proof"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 text-[13px] font-semibold text-gray-700 backdrop-blur hover:border-indigo-300 transition-colors"
        >
          <span className="relative inline-flex h-2 w-2">
            <span className="animate-ping-soft absolute inset-0 rounded-full bg-emerald-400" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          직접 만든 SaaS 운영 중 · 한 달 가입 100명+
        </motion.a>

        <h1
          className="mt-7 text-6xl sm:text-8xl font-extrabold text-gray-900 tracking-[-0.06em] leading-none"
          aria-label="임찬희"
        >
          {NAME.map((ch, i) => (
            <span key={ch} aria-hidden className="inline-block overflow-hidden pb-2 align-bottom">
              <motion.span
                className="inline-block"
                initial={reduce ? false : { y: "105%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.15 + i * 0.09, duration: 0.8, ease: EASE }}
              >
                {ch}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-4 text-base sm:text-lg font-bold text-indigo-600 tracking-[-0.01em]"
        >
          1인 풀스택 개발자
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease: EASE }}
          className="mt-5 text-xl sm:text-3xl font-bold text-gray-900 leading-snug tracking-[-0.03em]"
        >
          <Lines text={"기획부터 디자인, 배포, 운영까지\n혼자 만들고 키웁니다."} />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6, ease: EASE }}
          className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-indigo-600 text-white text-[15px] font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all"
          >
            만든 것 보기
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full border-2 border-gray-200 bg-white/70 text-gray-700 text-[15px] font-semibold hover:border-indigo-300 hover:text-indigo-600 active:scale-95 transition-all"
          >
            연락하기
          </a>
        </motion.div>

        {/* 근거 한 줄 — 누르면 캡처가 있는 곳으로 */}
        <motion.a
          href="#proof"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          className="group mt-9 inline-flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 sm:px-5 text-[13px] sm:text-sm text-gray-600 backdrop-blur hover:border-indigo-300 transition-colors"
        >
          {/* 폰에서는 제목 한 줄 + 알약 세 개, 데스크탑에서는 세로선으로 나눈 한 줄 */}
          <span className="w-full font-bold text-gray-900 sm:w-auto">직접 만든 KOSTOCK</span>
          {PROOF.map((p, i) => (
            <motion.span
              key={p}
              initial={reduce ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.12, duration: 0.45, ease: EASE }}
              className="inline-flex items-center gap-3 rounded-full bg-indigo-50/80 px-2.5 py-1 sm:rounded-none sm:bg-transparent sm:p-0"
            >
              <span className="hidden h-3 w-px bg-gray-200 sm:block" aria-hidden />
              {p}
            </motion.span>
          ))}
          <span className="text-indigo-500 transition-transform group-hover:translate-x-0.5" aria-hidden>
            →
          </span>
        </motion.a>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        aria-hidden
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
