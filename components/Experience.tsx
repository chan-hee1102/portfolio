"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

type Kind = "work" | "own" | "military" | "education";

interface Entry {
  kind: Kind;
  period: string;
  org: string;
  orgDesc: string;
  role: string;
  current?: boolean;
  /** 한 일 — 굵은 제목 한 줄 + 풀어 쓴 한 줄 */
  items: { t: string; d?: string }[];
}

const ENTRIES: Entry[] = [
  {
    kind: "own",
    period: "2025 — 현재",
    org: "KOSTOCK",
    orgDesc: "직접 만들어 운영하는 SaaS",
    role: "1인 기획·디자인·개발·배포·운영",
    current: true,
    items: [
      { t: "최근 한 달 가입 100명 넘음", d: "2026년 9월 기준, 광고 없이" },
      { t: "AEO·GEO·SEO로 네이버 웹문서 1위", d: "검색어 3개에서 1위, Perplexity 첫 번째 출처, ChatGPT를 타고 들어온 가입자" },
      { t: "코스콤 정식 시세 계약", d: "2026년 6월부터 장중 실시간 운영" },
    ],
  },
  {
    kind: "work",
    period: "2026.06 — 현재",
    org: "윈에이드",
    orgDesc: "병원 마케팅 대행사",
    role: "풀스택 개발, 병원 마케팅 SaaS 운영",
    current: true,
    items: [
      {
        t: "병원 마케팅 AEO·GEO·SEO SaaS 「WINAI」 개발·운영",
        d: "블로그 원고·이미지 생성, 의료광고법 검증, AI 검색 노출 확인을 한 서비스로 묶었습니다",
      },
      {
        t: "GAMEX 2026 현장 진단으로 92명 가입",
        d: "MEDIT 부스에서 병원 이름만 넣으면 AI 노출 상태를 1분 안에 진단했고, 가입으로 이어졌습니다",
      },
      {
        t: "치과 홈페이지 제작과 AEO·GEO·SEO 적용",
        d: "진료시간, 위치, 진료 과목을 검색엔진과 AI가 그대로 읽어 가게 정리했습니다",
      },
    ],
  },
  {
    kind: "work",
    period: "2026.03 — 2026.05",
    org: "에이드온",
    orgDesc: "AI 솔루션 스타트업",
    role: "AI 풀스택 개발자",
    items: [
      { t: "건설현장 AI CCTV 안전 감지 시스템", d: "YOLOv8 실시간 추론, 이벤트 확인 화면, PDF 리포트를 만들었습니다" },
      { t: "KB국민은행 IT자산관리포털(DMS) 프로토타입", d: "60여 개 화면, 5개 메뉴 그룹" },
      { t: "회원제 AI 챗봇과 회사 공식 홈페이지" },
    ],
  },
  {
    kind: "military",
    period: "2020 — 2022",
    org: "대한민국 육군",
    orgDesc: "병역",
    role: "만기 전역",
    items: [{ t: "전역 후 복학했습니다" }],
  },
  {
    kind: "education",
    period: "2019 — 2025",
    org: "고려대학교",
    orgDesc: "빅데이터 전공 학사",
    role: "데이터베이스·통계·머신러닝",
    items: [
      { t: "파이썬 전공 스터디 대표", d: "2023년 KUS-TUDY, 우수상" },
      { t: "SQL 전공 멘토 두 학기", d: "2023·2024년 KUS-Tutoring, 장려상·우수상" },
      { t: "데이터분석 준전문가(ADsP)", d: "2023년 9월 취득" },
    ],
  },
];

const KIND_LABEL: Record<Kind, string> = {
  work: "회사",
  own: "직접 운영",
  military: "병역",
  education: "학력",
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  // 스크롤을 내리면 세로선이 위에서부터 채워진다
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 55%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });

  return (
    <section id="experience" className="py-24 sm:py-32 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 sm:mb-16">
          <p className="text-sm font-bold text-indigo-600 mb-3">경력</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-[-0.03em] leading-tight">
            지금까지 일한 곳
          </h2>
        </div>

        <ol ref={listRef} className="relative">
          {/* 세로선 — 회색 바탕 위로 인디고가 차오른다 */}
          <span aria-hidden className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-px bg-gray-200" />
          <motion.span
            aria-hidden
            style={{ scaleY: reduce ? 1 : fill }}
            className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-[2px] -translate-x-[0.5px] origin-top bg-indigo-500"
          />

          {ENTRIES.map((e, i) => (
            <motion.li
              key={e.org}
              initial={reduce ? false : { opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.04 * i }}
              className="relative pl-10 sm:pl-14 pb-8 last:pb-0"
            >
              {/* 점 — 지금 다니는 곳만 숨을 쉰다 */}
              <span className="absolute left-0 top-6 sm:top-7 inline-flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center">
                {e.current && (
                  <span className="animate-ping-soft absolute inset-1 rounded-full bg-emerald-400" aria-hidden />
                )}
                <span
                  className={`relative inline-block rounded-full ring-4 ring-slate-50 ${
                    e.current
                      ? "h-3.5 w-3.5 bg-emerald-500"
                      : e.kind === "work" || e.kind === "own"
                        ? "h-3 w-3 bg-indigo-500"
                        : "h-3 w-3 bg-white border-2 border-gray-300"
                  }`}
                />
              </span>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div className="min-w-0">
                    <p className="flex flex-wrap items-center gap-2">
                      <span className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-[-0.02em]">{e.org}</span>
                      <span className="text-sm text-gray-500">{e.orgDesc}</span>
                    </p>
                    <p className="mt-1 text-sm font-semibold text-indigo-600">{e.role}</p>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold ${
                      e.current ? "bg-emerald-50 text-emerald-700" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <span className="text-gray-400">{KIND_LABEL[e.kind]}</span>
                    {e.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-3">
                  {e.items.map((it) => (
                    <li key={it.t} className="flex gap-3">
                      <span aria-hidden className="mt-[9px] h-1 w-1 flex-shrink-0 rounded-full bg-indigo-400" />
                      <span className="min-w-0">
                        <span className="block text-[15px] font-semibold text-gray-800 leading-snug">{it.t}</span>
                        {it.d && <span className="mt-0.5 block text-sm text-gray-500 leading-relaxed">{it.d}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
