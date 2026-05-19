"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface Project {
  id: string;
  name: string;
  status?: "출시 예정" | "운영 중" | "완료" | "개발 완료" | "진행 중";
  shortDesc: string;
  longDesc?: string;
  stack: string[];
  features?: string[];
  badge?: string;
}

interface Phase {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  projects: Project[];
}

const phases: Phase[] = [
  {
    id: "phase-1-data",
    period: "2019 — 2024",
    title: "데이터 전공기",
    subtitle: "고려대학교 빅데이터 전공 — 데이터의 기반을 다진 시기",
    description:
      "빅데이터 전공으로 통계·머신러닝·데이터베이스를 학습하며, 데이터를 다루는 기본기를 쌓았던 시기입니다. (콘텐츠 추후 추가 예정)",
    projects: [
      {
        id: "univ-data-project",
        name: "전공 프로젝트 (추가 예정)",
        shortDesc: "학부 전공 수업·팀 프로젝트로 진행한 데이터 분석 작업들",
        stack: ["Python", "Pandas", "SQL", "scikit-learn"],
      },
    ],
  },
  {
    id: "phase-2-self",
    period: "2023 — 2024",
    title: "독학기",
    subtitle: "GPT 등장 이후 — 혼자 부딪히며 웹·API를 배운 시기",
    description:
      "분석 결과를 실생활에 직접 쓰고 싶어 GPT에게 코드를 하나하나 물어보며 첫 웹 서비스를 만들었습니다. 프롬프트 엔지니어링과 배포를 처음 경험한 시기입니다.",
    projects: [
      {
        id: "streamlit",
        name: "주식 데이터 자동화 웹",
        status: "완료",
        shortDesc: "개발 입문작 — Streamlit + GPT API 주식 분석 자동화",
        longDesc:
          "개발을 전혀 몰랐던 상태에서 GPT에게 코드를 하나하나 물어보며 만든 첫 번째 웹 서비스입니다. 주식 데이터를 분석하고 GPT가 해설을 생성하는 구조로, 프롬프트 엔지니어링과 배포를 처음 경험한 프로젝트입니다.",
        stack: ["Python", "Streamlit", "GPT API", "GitHub Actions", "pandas"],
        features: [
          "GPT API 연동 주식 데이터 자동 분석·해설 생성",
          "GitHub Actions로 데이터 수집 자동화",
          "프롬프트 엔지니어링 반복 적용",
          "개발 무경험 상태에서 독학으로 완성",
        ],
      },
    ],
  },
  {
    id: "phase-3-claude",
    period: "2025 — 현재",
    title: "Claude Code 풀스택기",
    subtitle: "데이터·백엔드·UX까지 끝까지 책임지는 풀스택 개발자로",
    description:
      "Claude Code를 도입하면서 DB 설계부터 백엔드, 프론트, 배포까지 한 사람이 완성도 높게 만들 수 있게 된 시기입니다. KOSTOCK을 솔로로 운영하며 사용자 관점의 UX를 직접 검증하고 있습니다.",
    projects: [
      {
        id: "kostock",
        name: "KOSTOCK Pro",
        status: "출시 예정",
        badge: "코스콤 정식 계약 진행 중",
        shortDesc: "한국 주식 테마 분석 SaaS — 2026년 6월 출시 예정",
        longDesc:
          "국내 주식 테마 동향을 AI가 분석·정리해주는 구독형 SaaS 서비스입니다. Claude Code로 프론트·백엔드 전체를 솔로로 개발했고, 코스콤(KOSCOM)과 정식 계약을 진행하며 Railway 24시간 실시간 배포까지 직접 운영 중입니다.",
        stack: [
          "Next.js",
          "Claude Code",
          "KIS API",
          "Claude API",
          "Supabase",
          "Railway",
        ],
        features: [
          "프론트·백엔드·DB·배포까지 솔로 풀스택 개발",
          "코스콤 정식 계약 진행 중 (2026년 6월 출시 예정)",
          "Free / Pro / Max 구독 티어 구조",
          "실시간 SSE 데이터 스트리밍",
          "Claude API 기반 테마 분석 리포트 자동 생성",
          "모바일·웹 모두에서 자연스럽게 동작하도록 UX 설계",
        ],
      },
      {
        id: "aidon-agent",
        name: "에이드온 AI Agent 서비스",
        status: "진행 중",
        shortDesc: "에이드온 주식회사 — AI Agent 기반 서비스 개발 (재직 중)",
        longDesc:
          "에이드온 주식회사에서 AI Agent 기반 서비스를 풀스택으로 개발하고 있습니다. 상세 내용은 추후 공개 예정입니다.",
        stack: ["Next.js", "FastAPI", "Claude API", "PostgreSQL", "Docker"],
        features: [
          "AI Agent 기반 서비스 설계 및 구현",
          "Claude API 연동 및 프롬프트 엔지니어링",
          "프론트엔드부터 백엔드·배포까지 풀스택 담당",
        ],
      },
    ],
  },
];

const statusStyle: Record<NonNullable<Project["status"]>, string> = {
  "출시 예정": "bg-amber-50 text-amber-700",
  "운영 중": "bg-emerald-50 text-emerald-700",
  "진행 중": "bg-emerald-50 text-emerald-700",
  "완료": "bg-gray-100 text-gray-500",
  "개발 완료": "bg-blue-50 text-blue-700",
};

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <SectionWrapper id="projects" className="py-24 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <span className="inline-block mb-3 px-3 py-1 text-xs font-bold tracking-widest text-indigo-600 bg-indigo-50 rounded-full uppercase">
            Growth Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            프로젝트 — 연도별 성장 과정
          </h2>
        </div>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16 leading-relaxed">
          데이터 전공 → 독학으로 웹 개발 입문 → Claude Code로 풀스택 서비스
          완성까지, 각 시기마다 어떤 프로젝트로 성장해왔는지 정리했습니다.
        </p>

        <div className="space-y-16">
          {phases.map((phase, phaseIdx) => (
            <div key={phase.id} className="relative">
              {/* Phase header */}
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-xs font-bold tracking-widest text-indigo-500 uppercase">
                  Phase {phaseIdx + 1}
                </span>
                <span className="text-xs font-semibold text-gray-400 bg-white border border-gray-200 px-2.5 py-1 rounded-full">
                  {phase.period}
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-1">
                {phase.title}
              </h3>
              <p className="text-sm font-semibold text-indigo-600 mb-3">
                {phase.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-3xl">
                {phase.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {phase.projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
                  >
                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-3">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="text-lg font-bold text-gray-900">
                            {project.name}
                          </h4>
                          {project.status && (
                            <span
                              className={`flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyle[project.status]}`}
                            >
                              {project.status}
                            </span>
                          )}
                        </div>
                        {project.badge && (
                          <div className="mb-2">
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-2.5 py-1 rounded-full">
                              <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
                              {project.badge}
                            </span>
                          </div>
                        )}
                      </div>

                      <p className="text-gray-500 text-sm mb-4 flex-1">
                        {project.shortDesc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {(project.longDesc || project.features) && (
                        <>
                          <button
                            onClick={() =>
                              setExpanded(
                                expanded === project.id ? null : project.id,
                              )
                            }
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors mt-auto"
                          >
                            자세히 보기
                            <motion.svg
                              className="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              animate={{
                                rotate: expanded === project.id ? 180 : 0,
                              }}
                              transition={{ duration: 0.25 }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </motion.svg>
                          </button>

                          <AnimatePresence initial={false}>
                            {expanded === project.id && (
                              <motion.div
                                key="detail"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="pt-5 mt-5 border-t border-gray-100">
                                  {project.longDesc && (
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                      {project.longDesc}
                                    </p>
                                  )}
                                  {project.features && (
                                    <>
                                      <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                                        주요 기능
                                      </h5>
                                      <ul className="space-y-2">
                                        {project.features.map((f) => (
                                          <li
                                            key={f}
                                            className="flex items-start gap-2 text-sm text-gray-600"
                                          >
                                            <svg
                                              className="h-4 w-4 mt-0.5 text-indigo-500 flex-shrink-0"
                                              fill="none"
                                              stroke="currentColor"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                              />
                                            </svg>
                                            {f}
                                          </li>
                                        ))}
                                      </ul>
                                    </>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
