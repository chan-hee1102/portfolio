"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ProjectModal from "@/components/ui/ProjectModal";

interface Project {
  id: string;
  name: string;
  status?: "출시 예정" | "운영 중" | "완료" | "개발 완료" | "진행 중";
  shortDesc: string;
  longDesc?: string;
  stack: string[];
  features?: string[];
  badge?: string;
  pdfUrl?: string;
  siteUrl?: string;
  screenshots?: string[];
}

interface PhaseHighlight {
  title: string;
  description: string;
}

interface Phase {
  id: string;
  period: string;
  title: string;
  shortName: string;
  subtitle: string;
  description: string;
  highlights?: PhaseHighlight[];
  projects: Project[];
}

const phases: Phase[] = [
  {
    id: "phase-1-data",
    period: "2019 — 2024",
    title: "데이터 전공기",
    shortName: "데이터 전공기",
    subtitle: "고려대학교 빅데이터 전공 — 데이터의 기반을 다진 시기",
    description:
      "빅데이터 전공으로 통계·머신러닝·데이터베이스를 학습하며, 데이터를 다루는 기본기를 쌓았던 시기입니다. 가설을 세우고 데이터로 검증하는 분석 워크플로우를 전공 프로젝트로 직접 경험했습니다.",
    projects: [
      {
        id: "univ-insomnia",
        name: "불면증 발병 예측 분석",
        status: "완료",
        shortDesc: "로지스틱 회귀로 불면증 발병 요인을 식별한 통계 분석 프로젝트",
        longDesc:
          "Kaggle 불면증 데이터 7만 건을 활용해, 12개 변수 중 어떤 요인이 불면증 발병에 영향을 미치는지 로지스틱 회귀모형으로 분석한 학부 범주형자료분석 PBL 프로젝트입니다. 카이제곱 검정으로 변수 선택, VIF로 다중공선성 확인, 가능도비 검정으로 모형 적합도까지 단계별로 검증했습니다.",
        stack: ["R", "glm", "로지스틱 회귀", "통계 검정"],
        features: [
          "Kaggle 불면증 데이터 70,001건 · 12개 변수 분석",
          "이상치 제거 + age 변수 범주화 등 전처리 파이프라인 설계",
          "카이제곱 검정으로 비유의 변수(성별·연령) 제거",
          "VIF로 다중공선성 확인 (모든 변수 < 2)",
          "최종 모델 AUC 0.78 / 정확도 0.73",
          "스트레스 1단위 증가 → 발병 확률 약 71% 증가 등 변수별 영향도 해석",
        ],
        pdfUrl: "/projects/불면증발병원인분석.pdf",
      },
      {
        id: "univ-soccer",
        name: "축구 경기 승부 예측 모델",
        status: "완료",
        shortDesc: "EPL 30년 데이터로 홈/무/패 예측 — 단일 모델에서 앙상블까지",
        longDesc:
          "Kaggle 프리미어리그 데이터를 사용해 경기 결과(홈 승·무·패)를 예측하는 분류 모델을 만든 학부 전공 프로젝트입니다. 단일 모델(로지스틱·SVM·판별분석)의 정확도가 65% 수준에 머무르자, 변수를 확장하고 그리드 서치와 앙상블(Bagging·Adaboost·XGBoost)을 차례로 적용해 최종 XGBoost 71.8%까지 끌어올렸습니다. 마지막에는 팀 이름만 입력하면 결과를 반환하는 예측 함수까지 구현했습니다.",
        stack: ["Python", "scikit-learn", "XGBoost", "pandas"],
        features: [
          "Kaggle EPL 데이터 11,114건 · 22개 변수 수집·정제",
          "결측치·이상치 처리 후 9,000건 데이터셋으로 축약",
          "단일 모델 비교: 로지스틱·판별분석·SVM·KNN (정확도 64~66%)",
          "그리드 서치 + 앙상블(Bagging·Pasting·Adaboost·GBM·XGBoost) 단계적 개선",
          "최종 XGBoost 정확도 71.8% — 초기 모델 대비 +7%p 향상",
          "팀명 입력 → 홈 승/무/패 반환 예측 함수 구현",
        ],
        pdfUrl: "/projects/축구 데이터를 이용한 승부 예측 모델.pdf",
      },
    ],
  },
  {
    id: "phase-2-self",
    period: "2024 — 2025",
    title: "개발 입문 with GPT",
    shortName: "개발 입문기",
    subtitle: "빅데이터 전공이 AI를 페어로 삼아 실제 개발에 뛰어든 시기",
    description:
      "데이터 분석에 머무르지 않고, GPT를 페어 프로그래머 삼아 웹·자동화·AI 기능까지 직접 만들어낸 시기입니다. 전공의 분석력을 실제로 동작하는 서비스 코드로 옮겨놓기 시작한 첫 단계였습니다.",
    highlights: [
      {
        title: "Streamlit으로 필요한 웹 직접 제작",
        description:
          "분석 결과를 실제 도구로 쓰고 싶어 Streamlit을 학습하고, Python만으로 차트·표·인터랙티브 UI를 갖춘 풀-페이지 웹 서비스를 처음부터 끝까지 만들어냈습니다.",
      },
      {
        title: "GitHub Actions로 완전 자동화",
        description:
          "CRON 스케줄러를 활용해 매일 정해진 시각에 데이터 수집·분석을 자동 실행. 사용자 개입 없이 24시간 갱신되는 무인 운영 구조를 직접 설계·구축했습니다.",
      },
      {
        title: "Llama 기반 AI 기능 통합",
        description:
          "Groq의 Llama 모델을 연동해 정적인 데이터 위에 AI 분석 레이어를 얹었습니다. 페르소나 프롬프트 설계로 단순 요약을 넘어 투자 관점의 인사이트를 도출하는 대화형 환경까지 완성했습니다.",
      },
    ],
    projects: [
      {
        id: "streamlit",
        name: "AI Stock Commander",
        status: "운영 중",
        shortDesc: "국내 주식 종목 선정 자동화 시스템 — 데이터·ML·LLM·UI까지 솔로 풀스택",
        longDesc:
          "개인 투자자로서 매일 KOSPI·KOSDAQ 3,000여 종목을 직접 조사하는 비효율을 해결하기 위해 솔로로 만든 End-to-End 자동화 시스템입니다. GitHub Actions가 매일 밤 8시에 스캐너를 돌려 매매 전략에 맞는 종목을 추리고, LightGBM 모델이 22종 기술·매크로 지표로 단기 상승 확률을 산출하며, Groq Llama-3 에이전트가 종목별 뉴스 요약과 대화형 분석을 제공합니다. 데이터 수집부터 ML 스코어링, LLM 추론, Streamlit 대시보드 서빙까지 한 사람이 직접 설계·운영하고 있습니다.",
        stack: [
          "Python",
          "Streamlit",
          "LightGBM",
          "Groq Llama-3",
          "GitHub Actions",
          "BeautifulSoup",
          "pandas",
        ],
        features: [
          "GitHub Actions 매일 밤 8시 자동 스캔 — KOSPI/KOSDAQ 3,000+ 종목 전수 조사",
          "Naver 금융 + Yahoo Finance + FinanceDataReader 다중 소스 크롤링 + retry/sleep 안정화",
          "LightGBM 상승 확률 모델 — 매크로 6종(나스닥·VIX·금리 등) 추가로 정확도 54% → 64%",
          "Groq Llama-3 \"주식 분석 전문가\" 페르소나 — 뉴스 요약 + 대화형 의사결정 지원",
          "Streamlit 대시보드: 차트·외인/기관 수급·재무 트렌드·AI 상승 확률을 한 화면에 통합",
          "API 키 환경변수 분리, CSV 일자별 아카이빙으로 분석 히스토리 영속성 확보",
        ],
        pdfUrl: "/projects/국내주식_종목선정_자동화_시스템.pdf",
      },
    ],
  },
  {
    id: "phase-3-claude",
    period: "2025 — 2026",
    title: "개인 프로젝트 및 실제 배포",
    shortName: "실제 배포",
    subtitle: "AI 페어 프로그래밍으로 완성하고 24시간 운영하는 풀스택 서비스",
    description:
      "AI 페어 프로그래밍을 본격적으로 도입해 DB·백엔드·프론트·배포까지 한 사람이 처음부터 끝까지 만들고 실제 운영까지 책임진 시기입니다. KOSTOCK Pro를 솔로로 개발·운영하며 실시간 데이터 처리와 사용자 UX를 직접 검증하고 있습니다.",
    highlights: [
      {
        title: "Supabase + 한국투자증권(KIS) API",
        description:
          "Supabase 기반 PostgreSQL로 데이터베이스를 직접 설계·운영하고, 한국투자증권 OpenAPI를 연동해 국내 주식의 실시간 시세·체결 데이터를 안정적으로 수집·처리했습니다.",
      },
      {
        title: "Railway 24시간 실시간 운영·배포",
        description:
          "한국 주식 시장의 실시간 데이터를 끊김 없이 처리하기 위해 Railway 컨테이너로 배포. 장 시간 외에도 24시간 가동되는 백엔드 서비스를 직접 운영하고 있습니다.",
      },
      {
        title: "Gemini API + 프롬프트 엔지니어링",
        description:
          "Google Gemini API로 시장·종목 데이터를 기반으로 한 AI 분석 리포트를 자동 생성. 프롬프트를 반복 정교화해 분석의 일관성과 인사이트 깊이를 끌어올렸습니다.",
      },
      {
        title: "바이브 코딩으로 풀스택 완성",
        description:
          "AI 페어 프로그래밍 도구를 적극 활용해 기획·DB·백엔드·프론트엔드·배포까지 전 과정을 한 사람이 빠르고 완결성 있게 만들어냈습니다.",
      },
    ],
    projects: [
      {
        id: "kostock",
        name: "KOSTOCK Pro",
        status: "출시 예정",
        badge: "코스콤 정식 계약 진행 중",
        shortDesc: "한국 주식 테마 분석 SaaS — 2026년 6월 출시 예정",
        longDesc:
          "국내 주식 테마 동향을 AI가 분석·정리해주는 구독형 SaaS 서비스입니다. Claude Code로 프론트·백엔드 전체를 솔로로 개발했고, 코스콤(KOSCOM)과 정식 계약을 진행하며 Railway 24시간 실시간 배포까지 직접 운영 중입니다.",
        siteUrl: "https://kostock-production.up.railway.app/pricing",
        screenshots: [
          "/projects/kostock/1.png",
          "/projects/kostock/2.png",
          "/projects/kostock/3.png",
          "/projects/kostock/4.png",
          "/projects/kostock/5.png",
          "/projects/kostock/6.png",
        ],
        stack: [
          "Next.js",
          "Claude Code",
          "KIS API",
          "Gemini API",
          "Supabase",
          "Railway",
        ],
        features: [
          "프론트·백엔드·DB·배포까지 솔로 풀스택 개발",
          "코스콤 정식 계약 진행 중 (2026년 6월 출시 예정)",
          "Free / Pro / Max 구독 티어 구조",
          "실시간 SSE 데이터 스트리밍",
          "Gemini API 기반 테마 분석 리포트 자동 생성",
          "모바일·웹 모두에서 자연스럽게 동작하도록 UX 설계",
        ],
      },
    ],
  },
  {
    id: "phase-4-aidon",
    period: "2026 — 현재",
    title: "주식회사 에이드온",
    shortName: "AI Agent",
    subtitle: "AI Agent 시작 — 회사 제품으로 AI Agent 영역에 본격 진입",
    description:
      "주식회사 에이드온에 합류해 AI Agent 기반 서비스를 풀스택으로 개발하기 시작한 시기입니다. 개인 프로젝트에서 쌓은 데이터·풀스택 경험을 실제 회사 제품에 적용하며 AI Agent 영역으로 본격적으로 진입하고 있습니다.",
    highlights: [
      {
        title: "AI Agent 기반 서비스 풀스택 개발",
        description:
          "회사 제품의 AI Agent 영역을 프론트엔드·백엔드·배포까지 한 사람이 일관성 있게 책임지는 방식으로 만들고 있습니다. 개인 프로젝트에서 쌓은 풀스택 역량을 실제 회사 제품에 그대로 적용하는 과정입니다.",
      },
      {
        title: "프롬프트 엔지니어링 + AI 추론 설계",
        description:
          "AI Agent의 추론 흐름과 도구 사용 패턴을 직접 설계하고, 프롬프트를 반복 정교화하여 결과의 일관성과 안정성을 확보하는 작업을 진행하고 있습니다.",
      },
    ],
    projects: [
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
  const [modalProject, setModalProject] = useState<Project | null>(null);

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
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          데이터 전공 → 독학으로 웹 개발 입문 → Claude Code로 풀스택 서비스
          완성까지, 각 시기마다 어떤 프로젝트로 성장해왔는지 정리했습니다.
        </p>

        <div className="mb-20 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {phases.map((p, idx) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-700 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/40 active:scale-95 transition-all"
            >
              <span className="text-xs font-bold tracking-wider text-indigo-400 tabular-nums">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span>{p.shortName}</span>
            </a>
          ))}
        </div>

        <div className="space-y-24">
          {phases.map((phase, phaseIdx) => {
            const phaseIntro = (
              <div className="text-center mb-16">
                <div className="inline-flex items-baseline gap-2.5 mb-5">
                  <span className="text-xs font-bold tracking-[0.25em] text-indigo-500 uppercase">
                    Phase
                  </span>
                  <span className="text-2xl font-black text-indigo-600 tabular-nums leading-none">
                    {String(phaseIdx + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="text-5xl sm:text-6xl font-black text-gray-900 tabular-nums tracking-tighter leading-none">
                  {phase.period}
                </div>
              </div>
            );

            const header = (
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
                  {phase.title}
                </h3>
                <p className="text-sm font-semibold text-indigo-600 mb-4">
                  {phase.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            );

            const highlightsPanel = phase.highlights && (
              <div>
                <span className="inline-block text-xs font-bold tracking-widest text-indigo-500 uppercase mb-4">
                  이 시기의 핵심
                </span>
                <ol className="space-y-5">
                  {phase.highlights.map((h, i) => (
                    <li key={h.title} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold flex items-center justify-center border border-indigo-100">
                        {i + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-gray-900 mb-1 leading-snug">
                          {h.title}
                        </h5>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {h.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            );

            const cards = phase.projects.map((project) => {
                  const hasPdf = Boolean(project.pdfUrl);
                  const hasScreenshots = Boolean(
                    project.screenshots && project.screenshots.length > 0,
                  );
                  const cardClickable = hasPdf || hasScreenshots;
                  return (
                  <div
                    key={project.id}
                    onClick={
                      cardClickable ? () => setModalProject(project) : undefined
                    }
                    onKeyDown={
                      cardClickable
                        ? (e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              setModalProject(project);
                            }
                          }
                        : undefined
                    }
                    role={cardClickable ? "button" : undefined}
                    tabIndex={cardClickable ? 0 : undefined}
                    className={`bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col transition-all ${
                      cardClickable
                        ? "cursor-pointer hover:shadow-lg hover:-translate-y-0.5 hover:border-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                        : "hover:shadow-md"
                    }`}
                  >
                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-3">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="text-lg font-bold text-gray-900">
                            {project.name}
                          </h4>
                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            {hasPdf && (
                              <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-1 rounded-full uppercase">
                                <svg
                                  className="h-3 w-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                  />
                                </svg>
                                PDF
                              </span>
                            )}
                            {hasScreenshots && !hasPdf && (
                              <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-full uppercase">
                                <svg
                                  className="h-3 w-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                View
                              </span>
                            )}
                            {project.status && (
                              <span
                                className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyle[project.status]}`}
                              >
                                {project.status}
                              </span>
                            )}
                          </div>
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

                      {(project.longDesc ||
                        project.features ||
                        project.siteUrl) && (
                        <>
                          <div className="mt-auto flex items-center gap-4 flex-wrap">
                            {(project.longDesc || project.features) && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setExpanded(
                                    expanded === project.id ? null : project.id,
                                  );
                                }}
                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
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
                            )}
                            {project.siteUrl && (
                              <a
                                href={project.siteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                              >
                                사이트 방문
                                <svg
                                  className="h-4 w-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
                                </svg>
                              </a>
                            )}
                          </div>

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
                  );
                });

            return (
              <div
                key={phase.id}
                id={phase.id}
                className="relative scroll-mt-24"
              >
                {phaseIdx > 0 && (
                  <div
                    className="mb-20 flex items-center justify-center gap-4"
                    aria-hidden
                  >
                    <div className="h-px w-20 sm:w-32 bg-gradient-to-r from-transparent to-gray-200" />
                    <span className="text-[10px] font-bold tracking-[0.5em] text-gray-300">
                      ◆
                    </span>
                    <div className="h-px w-20 sm:w-32 bg-gradient-to-l from-transparent to-gray-200" />
                  </div>
                )}

                {phaseIntro}

                {phase.highlights ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <div>
                      {header}
                      <div className="mt-10 space-y-6">{cards}</div>
                    </div>
                    <div className="lg:pl-6 lg:border-l lg:border-gray-200">
                      {highlightsPanel}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">{header}</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {cards}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <ProjectModal
        open={modalProject !== null}
        title={modalProject?.name}
        pdfUrl={modalProject?.pdfUrl ?? null}
        screenshots={modalProject?.screenshots ?? null}
        siteUrl={modalProject?.siteUrl ?? null}
        onClose={() => setModalProject(null)}
      />
    </SectionWrapper>
  );
}
