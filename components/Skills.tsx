"use client";

import { motion, useReducedMotion } from "framer-motion";

/** 실제로 운영 중인 서비스에 쓰고 있는 것만 적는다(2026-09 기준) */
const categories = [
  {
    title: "Frontend",
    color: "text-violet-600 bg-violet-50",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend·Data",
    color: "text-blue-600 bg-blue-50",
    skills: ["Supabase (PostgreSQL)", "FastAPI", "Python", "SQLite", "SSE · WebSocket"],
  },
  {
    title: "AEO·GEO·SEO",
    color: "text-emerald-700 bg-emerald-50",
    skills: ["네이버 서치어드바이저", "구글 서치콘솔", "JSON-LD 구조화 데이터", "llms.txt", "사이트맵 · IndexNow"],
  },
  {
    title: "AI",
    color: "text-rose-600 bg-rose-50",
    skills: ["Claude Code", "Gemini API", "Groq Llama", "YOLOv8", "LightGBM"],
  },
  {
    title: "Infra",
    color: "text-orange-600 bg-orange-50",
    skills: ["Railway", "Vercel", "Docker", "GitHub Actions", "PortOne 결제"],
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Skills() {
  const reduce = useReducedMotion();
  return (
    <section id="skills" className="py-24 sm:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-bold text-indigo-600 mb-3">기술</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-[-0.03em]">지금 쓰는 도구</h2>
        </div>

        <div className="mx-auto max-w-4xl border-t border-gray-200">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: EASE }}
              className="grid gap-3 border-b border-gray-200 py-5 sm:grid-cols-[160px_minmax(0,1fr)] sm:items-center sm:gap-6"
            >
              <h3 className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-bold ${cat.color}`}>
                {cat.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="rounded-lg bg-gray-50 px-3 py-1.5 text-sm text-gray-700 ring-1 ring-gray-100">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
