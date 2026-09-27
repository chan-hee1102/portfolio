"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** 맨 위 얇은 진행 막대 — 지금 페이지의 어디쯤인지 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-indigo-600"
    />
  );
}
