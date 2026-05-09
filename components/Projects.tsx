"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface Project {
  id: string;
  name: string;
  type: string;
  status: "출시 예정" | "운영 중" | "완료" | "개발 완료";
  shortDesc: string;
  longDesc: string;
  stack: string[];
  features: string[];
  badge?: string;
}

const projects: Project[] = [
  {
    id: "kostock",
    name: "KOSTOCK Pro",
    type: "솔로 프로젝트",
    status: "출시 예정",
    badge: "코스콤 정식 계약 진행 중",
    shortDesc: "한국 주식 테마 분석 SaaS 플랫폼 — 2026년 6월 출시 예정",
    longDesc:
      "국내 주식 테마 동향을 AI가 분석하고 정리해주는 구독형 SaaS 서비스입니다. Claude Code로 프론트·백엔드 전체를 개발했으며, 코스콤과 정식 계약을 진행하고 Railway 24시간 실시간 배포까지 솔로로 완성했습니다.",
    stack: ["Next.js", "Claude Code", "KIS API", "Claude API", "Supabase", "Railway"],
    features: [
      "Claude Code로 프론트엔드·백엔드 전체 개발",
      "코스콤 정식 계약 진행 중 (2026년 6월 출시 예정)",
      "Free / Pro / Max 구독 티어 구조",
      "실시간 SSE 데이터 스트리밍",
      "Claude API 기반 테마 분석 리포트 자동 생성",
      "Railway 24시간 실시간 배포",
    ],
  },
  {
    id: "kb-portal",
    name: "KB IT자산관리포털",
    type: "엔터프라이즈 프로젝트",
    status: "개발 완료",
    shortDesc: "KB국민은행 IT 자산관리 내부 포털 시스템",
    longDesc:
      "KB국민은행의 IT 자산(하드웨어, 소프트웨어 라이선스 등)을 통합 관리하는 내부 포털입니다. 에이드온 재직 중 담당 개발자로 기획부터 배포까지 전담했습니다.",
    stack: ["Next.js 14", "FastAPI", "PostgreSQL", "Docker", "Cloudflare Tunnel"],
    features: [
      "자산 도입·이력 통합 관리 대시보드",
      "FastAPI 기반 RESTful API 서버",
      "Docker Compose 컨테이너 배포 파이프라인",
      "Cloudflare Tunnel을 통한 내부망 보안 접속",
    ],
  },
  {
    id: "streamlit",
    name: "주식 데이터 자동화 웹",
    type: "개인 프로젝트 (첫 번째 작품)",
    status: "완료",
    shortDesc: "개발 입문작 — Streamlit + GPT API 주식 분석 자동화",
    longDesc:
      "개발을 전혀 몰랐던 상태에서 GPT에게 코드를 하나하나 물어보며 만든 첫 번째 웹 서비스입니다. 주식 데이터를 분석하고 GPT가 해설을 생성하는 구조로, 프롬프트 엔지니어링을 처음 경험한 프로젝트입니다.",
    stack: ["Python", "Streamlit", "GPT API", "GitHub Actions", "pandas"],
    features: [
      "GPT API 연동 주식 데이터 자동 분석·해설 생성",
      "GitHub Actions로 데이터 수집 자동화",
      "프롬프트 엔지니어링 반복 적용",
      "개발 무경험 상태에서 독학으로 완성",
    ],
  },
];

const statusStyle: Record<Project["status"], string> = {
  "출시 예정": "bg-amber-50 text-amber-700",
  "운영 중": "bg-emerald-50 text-emerald-700",
  "완료": "bg-gray-100 text-gray-500",
  "개발 완료": "bg-blue-50 text-blue-700",
};

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <SectionWrapper id="projects" className="py-24 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            프로젝트
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-3">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                      {project.type}
                    </span>
                    <span
                      className={`flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyle[project.status]}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  {project.badge && (
                    <div className="mb-2">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-2.5 py-1 rounded-full">
                        <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
                        {project.badge}
                      </span>
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-gray-900">
                    {project.name}
                  </h3>
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

                <button
                  onClick={() =>
                    setExpanded(expanded === project.id ? null : project.id)
                  }
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors mt-auto"
                >
                  자세히 보기
                  <motion.svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: expanded === project.id ? 180 : 0 }}
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
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {project.longDesc}
                        </p>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                          주요 기능
                        </h4>
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
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
