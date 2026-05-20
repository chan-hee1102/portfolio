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
      "빅데이터 전공으로 통계·머신러닝·데이터베이스를 학습하며 데이터를 다루는 기본기를 다진 시기입니다.\n불면증 발병 예측, 축구 승부 예측 같은 분석을 전공 프로젝트로 진행하면서 가설→검증 사이클을 익혔고,\n분석 결과를 실제로 쓰고 싶다는 동기에서 다음 단계인 웹 개발로 자연스럽게 넘어가게 됐습니다.",
    projects: [],
  },
  {
    id: "phase-2-self",
    period: "2024 — 2025",
    title: "개발 입문 with GPT",
    shortName: "개발 입문기",
    subtitle: "데이터 전공자가 GPT를 페어 삼아 처음으로 코드를 만든 시기",
    description:
      "데이터 분석에 머무르지 않고 GPT를 페어 삼아 웹·자동화·AI 기능까지 직접 만들기 시작한 시기입니다.\n전공의 분석력을 실제로 동작하는 코드로 옮긴 첫 단계였습니다.",
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
          "개인 투자자로서 매일 KOSPI·KOSDAQ 3,000여 종목을 직접 조사하는 비효율을 해결하기 위해 솔로로 만든 End-to-End 자동화 시스템입니다.\nGitHub Actions가 매일 밤 8시에 스캐너를 돌려 매매 전략에 맞는 종목을 추리고, LightGBM 모델이 22종 기술·매크로 지표로 단기 상승 확률을 산출하며, Groq Llama-3 에이전트가 종목별 뉴스 요약과 대화형 분석을 제공합니다.\n데이터 수집부터 ML 스코어링, LLM 추론, Streamlit 대시보드 서빙까지 한 사람이 직접 설계·운영하고 있습니다.",
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
    subtitle: "바이브 코딩으로 만들고 24시간 운영하는 유료 SaaS",
    description:
      "AI 페어 프로그래밍을 본격적으로 도입해 DB·백엔드·프론트·배포까지 한 사람이 끝까지 책임진 시기입니다.\nKOSTOCK Pro를 솔로로 개발·운영하며 실시간 데이터 처리와 사용자 UX를 직접 검증하고,\n코스콤과의 정식 계약까지 진행했습니다.",
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
          "국내 주식 테마 동향을 AI가 분석·정리해주는 구독형 SaaS 서비스입니다.\nClaude Code로 프론트·백엔드 전체를 솔로로 개발했고,\n코스콤(KOSCOM)과 정식 계약을 진행하며 Railway 24시간 실시간 배포까지 직접 운영 중입니다.",
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
    subtitle: "AI Agent · 컴퓨터 비전 — 회사 제품으로 AI 영역에 본격 진입",
    description:
      "주식회사 에이드온에 합류해 AI·컴퓨터 비전 기반 서비스를 풀스택으로 개발하기 시작한 시기입니다.\n개인 프로젝트에서 쌓은 데이터·풀스택 경험을 실제 회사 제품에 적용하며,\n실시간 추론과 운영 시스템까지 직접 구현하고 있습니다.",
    projects: [
      {
        id: "aidon-cctv",
        name: "AI CCTV — 건설현장 안전 감지",
        status: "개발 완료",
        shortDesc:
          "건설현장 CCTV로 안전모 미착용·낙상·화재·침입을 YOLOv8로 실시간 감지하는 풀스택 시스템",
        longDesc:
          "건설현장 CCTV 영상을 받아 YOLOv8 기반 다단계 추론 파이프라인으로 안전모 미착용, 낙상, 화재/연기, 위험구역 침입을 자동 감지·기록·시각화하는 풀스택 시스템입니다.\nRTSP·로컬 파일·웹캠 등 다양한 영상 소스를 다중 카메라로 동시 처리하고,\nWebSocket으로 주석 프레임을 실시간 송출합니다.\n운영자가 이벤트를 확인 처리하고 주·월 단위 PDF 리포트까지 받아볼 수 있도록 백엔드부터 프론트까지 한 사람이 풀스택으로 구현했습니다.",
        stack: [
          "Next.js 16",
          "React 19",
          "FastAPI",
          "YOLOv8",
          "OpenCV",
          "PostgreSQL",
          "WebSocket",
          "Docker",
        ],
        features: [
          "YOLOv8 다단계 추론: 사람 탐지 → PPE 분류 → 화재/연기 (+HSV 사전필터) → 유형별 지속 검증으로 오감지 감소",
          "다중 카메라(RTSP · 로컬 파일 · 내장 웹캠) 동시 처리 + WebSocket(/ws/view) 실시간 프레임 송출",
          "ByteTrack 기반 사람 트래킹 + 2단계 트리거 아키텍처로 이벤트 변환율 관리",
          "이벤트 로그·확인 처리·대시보드 KPI·시간대별 추이·유형별 분포 시각화 (recharts)",
          "주·월 단위 운영 리포트 PDF 자동 생성 (reportlab)",
          "JWT 기반 인증 + Refresh 토큰 자동 재발급, 카메라 CRUD·ROI 설정·웹캠 송출까지 REST API로 통합",
        ],
        screenshots: [
          "/projects/aidon-cctv/1.png",
          "/projects/aidon-cctv/2.png",
          "/projects/aidon-cctv/3.png",
          "/projects/aidon-cctv/4.png",
          "/projects/aidon-cctv/5.png",
        ],
      },
      {
        id: "kb-portal",
        name: "KB국민은행 IT자산관리포털 (DMS)",
        status: "개발 완료",
        shortDesc:
          "KB국민은행 사내 IT자산 통합 관리 시스템 — 60여 개 화면 풀스택 프로토타입",
        longDesc:
          "KB국민은행 사내 IT자산 통합 관리 시스템(DMS)의 차세대 프로토타입을 풀스택으로 개발했습니다.\n레거시 DMS의 메뉴 구조(번호 기반 라우트)를 그대로 옮기면서 Next.js App Router 위에 공통·관리자·H/W·S/W·센터자산 등 5개 메뉴 그룹, 60여 개 화면을 일관된 디자인 시스템으로 구축했습니다.\n사이드바·헤더 공통 레이아웃, 부서 트리·메뉴 트리 같은 재귀 트리 컴포넌트, recharts·d3 기반 대시보드까지 직접 설계했고,\nFastAPI 백엔드와 PostgreSQL을 Docker Compose로 묶어 한 번에 띄울 수 있도록 정리했습니다.",
        stack: [
          "Next.js 16",
          "React 19",
          "TypeScript",
          "Tailwind v4",
          "FastAPI",
          "PostgreSQL",
          "recharts",
          "Docker Compose",
        ],
        features: [
          "레거시 DMS 메뉴 구조(번호 기반 라우트, 예: /901600=대시보드)를 1:1로 마이그레이션",
          "60여 개 화면 · 5개 메뉴 그룹(공통 / 관리자 / H/W / S/W / 센터자산) 풀스택 구현",
          "Next.js App Router 라우트 그룹으로 인증 영역(사이드바+헤더 레이아웃)과 로그인 분리",
          "부서 트리·메뉴 트리 등 재귀 expand/collapse 패턴을 재사용 컴포넌트로 추상화",
          "recharts·d3 기반 대시보드 — 자산 통계·추이 시각화",
          "FastAPI + PostgreSQL + Frontend 3-tier를 Docker Compose로 통합 오케스트레이션",
          "KB 브랜드 컬러(#FFB800) 기반 디자인 시스템 — 카드·버튼·상태 표시 일관성 확보",
        ],
        screenshots: [
          "/projects/kb-portal/1.png",
          "/projects/kb-portal/2.png",
          "/projects/kb-portal/3.png",
          "/projects/kb-portal/4.png",
          "/projects/kb-portal/5.png",
          "/projects/kb-portal/6.png",
        ],
      },
      {
        id: "aidon-chatbot",
        name: "개인 AI 어시스턴트 챗봇",
        status: "개발 완료",
        shortDesc:
          "Gemini API + SSE 스트리밍 기반 회원제 챗봇 — Next.js 14 + SQLite + JWT 직접 구현",
        longDesc:
          "에이드온 사내 과제로 개발한 회원제 AI 어시스턴트 챗봇입니다.\nNextAuth·ORM 같은 외부 의존성 없이 JWT(jose)와 SQLite(better-sqlite3)를 직접 다뤄 인증·데이터 영속성을 처리했고,\nGemini API의 스트리밍 응답을 SSE로 클라이언트에 흘려보내는 구조로 실시간 응답을 구현했습니다.\n대화 히스토리 영구 저장, 컨텍스트 윈도우 관리, 대화 제목 자동 생성, 마크다운 렌더링까지 챗봇의 기본기를 처음부터 끝까지 직접 설계했습니다.",
        stack: [
          "Next.js 14",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "SQLite (better-sqlite3)",
          "Gemini API",
          "JWT (jose)",
          "Railway",
        ],
        features: [
          "JWT 인증 직접 구현(jose + bcryptjs) — HttpOnly 쿠키 + Edge Runtime 미들웨어 인증",
          "Gemini API 스트리밍을 SSE(Server-Sent Events)로 변환해 실시간 토큰 전달, 완료 후 메시지 DB 저장",
          "다중 대화 세션 — 사이드바로 대화 목록 관리, 첫 메시지로 제목 자동 생성",
          "컨텍스트 윈도우 — 토큰 비용 관리를 위해 최근 20개 메시지만 LLM에 전달",
          "마크다운 + 코드 하이라이팅 (react-markdown · react-syntax-highlighter)",
          "Railway 볼륨 마운트로 SQLite DB 영구 보존, 모든 SQL Prepared Statement로 Injection 방어",
        ],
        screenshots: [
          "/projects/chatbot/1.png",
          "/projects/chatbot/2.png",
          "/projects/chatbot/3.png",
        ],
      },
      {
        id: "aidon-site",
        name: "에이드온 공식 홈페이지",
        status: "운영 중",
        shortDesc:
          "주식회사 에이드온 코퍼레이트 사이트 — 단일 페이지 스크롤 스토리텔링 + 견적 상담 문의",
        longDesc:
          "주식회사 에이드온의 공식 코퍼레이트 사이트를 처음부터 끝까지 직접 구축했습니다.\n'산업이 필요로 하는 AI 솔루션을 만들고 함께 운영한다'는 핵심 메시지를 중심으로, How AID ON works(일하는 방식 4단계) → Inside AID ON(4가지 핵심 영역) → 산업 모듈 카탈로그 → 비교 테이블 → 사례 → 문의까지 회사의 가치 제안을 한 호흡의 스크롤 흐름으로 풀어냈습니다.\n다크 테마(#0F1012) 디자인 시스템과 섹션별 스크롤 인터랙션, 견적 상담 문의 폼까지 한 사람이 설계·구현해 라이브 운영 중입니다.",
        stack: [
          "HTML",
          "CSS",
          "JavaScript",
          "반응형 디자인",
          "다크 테마 시스템",
          "Static Hosting",
        ],
        features: [
          "단일 페이지 스크롤 스토리텔링 — 회사가 일하는 방식·솔루션·사례를 한 호흡으로 전달",
          "Inside AID ON 섹션 — Domain Console · Data Pipeline · Field App · Operations 4개 영역의 스크롤 인터랙션 시각화",
          "How AID ON works — 도메인 진단부터 특화 AI 구축까지 4단계 프로세스 다이어그램",
          "AID ON vs 자체 개발 vs 일반 SaaS 비교 테이블로 차별점 강조",
          "산업 모듈 카탈로그 — Document/Generation · Safety/Site · Edge AI · Schedule/Cost · Operations/Knowledge",
          "Contact 섹션 — '상담 시작하기' CTA + Email 기반 견적 상담 문의 통합",
          "다크 테마(#0F1012) 디자인 시스템, 반응형 레이아웃, Skip-link 등 접근성 고려",
        ],
        siteUrl: "https://aidon.ai.kr/",
      },
    ],
  },
  {
    id: "phase-5-hobby",
    period: "2025 — 현재",
    title: "취미 개발",
    shortName: "취미 개발",
    subtitle: "호기심·친구들과의 필요에서 출발하는 사이드 프로젝트",
    description:
      "공식 프로젝트와 별개로, 호기심이나 친구들과의 필요에서 출발한 웹앱을 직접 만들어 봅니다.\n떠오른 아이디어를 그날 안에 동작하는 결과물까지 끌고 가는 과정 자체를 즐기는 시기입니다.",
    projects: [
      {
        id: "readyjob",
        name: "ReadyJOB — 친구들과 함께하는 취준 트래커",
        status: "개발 완료",
        shortDesc:
          "같이 취업 준비하는 친구들끼리 접속 현황·공고·자료를 가볍게 공유하는 웹앱",
        longDesc:
          "같이 취업을 준비하는 친구들끼리 누가 접속해 있는지, 어떤 공고에 관심을 두고 있는지, 이력서·포트폴리오는 어디까지 정리했는지를 가볍게 공유하기 위해 만든 사이드 프로젝트입니다.\n채용 공고 URL을 붙여넣으면 OG 메타데이터로 회사·제목·썸네일이 자동 추출되고,\n마감일·중요도·상태를 친구별로 분리해 관리합니다.\n파일 보관함은 공개/비공개 토글이 가능해 친구들과 보여주고 싶은 자료만 골라 공유할 수 있게 설계했습니다.",
        stack: [
          "Next.js 14",
          "React 18",
          "TypeScript",
          "Tailwind CSS",
          "SQLite (better-sqlite3)",
          "next-themes",
        ],
        features: [
          "친구 접속 현황 — 60초 heartbeat 기반 presence 추적, 누가 몇 시간째 접속 중인지 한눈에",
          "채용 공고 URL 미리보기 — OG 메타데이터로 회사·제목·썸네일 자동 추출",
          "친구별 분리된 공고 보드 — 마감일·중요도(★)·상태 관리",
          "파일 보관함 — 포트폴리오·이력서·자소서 업로드 + 공개/비공개 토글",
          "Repository 추상화 — 외부 DB(Turso 등)로 무중단 마이그레이션 가능한 구조",
          "다크 모드 · 모바일 반응형 — deep navy + violet 커스텀 토큰",
        ],
        screenshots: [
          "/projects/readyjob/1.png",
          "/projects/readyjob/2.png",
          "/projects/readyjob/3.png",
          "/projects/readyjob/4.png",
          "/projects/readyjob/5.png",
          "/projects/readyjob/6.png",
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
          데이터 분석에서 시작해 AI와 바이브 코딩으로 풀스택 서비스까지,
          <br />
          시기별로 어떤 프로젝트로 발전해왔는지 정리했습니다.
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
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tabular-nums tracking-tighter leading-none">
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
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
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
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 whitespace-pre-line">
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
                    <div className={phase.projects.length > 0 ? "mb-8" : ""}>
                      {header}
                    </div>
                    {phase.projects.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cards}
                      </div>
                    )}
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
