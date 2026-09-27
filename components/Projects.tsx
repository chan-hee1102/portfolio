"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import ProjectModal from "@/components/ui/ProjectModal";
import Lines from "@/components/ui/Lines";

type Status = "운영 중" | "개발 완료" | "현장 운영" | "완료";

interface Project {
  id: string;
  name: string;
  status?: Status;
  shortDesc: string;
  longDesc?: string;
  stack?: string[];
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

/**
 * 시기별 성장 과정 — 2026-09-27 개편: 에이드온(3~5월)·윈에이드(6월~) 추가, KOSTOCK·MyPet을 운영 중 서비스로,
 * taif.kr 레퍼런스 전부(병원 SaaS·진단 도구·치과 홈페이지 포함)를 카드로. 카드마다 대표 화면을 붙였다.
 * 카피는 「무엇을 했고 무엇이 됐나」만 — 형용사로 부풀리지 않는다.
 */
const phases: Phase[] = [
  {
    id: "phase-1-data",
    period: "2019 — 2024",
    title: "데이터 전공기",
    shortName: "데이터 전공",
    subtitle: "고려대학교 빅데이터 전공",
    description:
      "통계와 머신러닝, 데이터베이스를 배웠습니다.\n불면증 발병 요인 분석, 축구 승부 예측을 팀 프로젝트로 하면서‖가설을 세우고 데이터로 확인하는 순서를 익혔습니다.\n분석 결과를 직접 써 보고 싶어서 개발로 넘어갔습니다.",
    projects: [],
  },
  {
    id: "phase-2-self",
    period: "2024 — 2025",
    title: "GPT와 처음 만든 프로그램",
    shortName: "개발 입문",
    subtitle: "매일 밤 하던 일을 자동화하는 것부터",
    description:
      "분석용 코드가 아니라 매일 저절로 돌아가는 프로그램을 처음 만들었습니다.\n매일 밤 3,000개 종목을 들여다보던 일을‖사람 손 없이 돌아가게 만드는 게 첫 목표였습니다.",
    highlights: [
      {
        title: "Streamlit으로 쓸 수 있는 화면까지",
        description: "분석 결과를 차트와 표가 있는 웹 화면으로 옮겼습니다. Python만으로 처음부터 끝까지 만들었습니다.",
      },
      {
        title: "GitHub Actions로 사람 없이 돌게",
        description: "매일 밤 8시에 수집과 분석이 저절로 돌아갑니다. 제가 자리에 없어도 결과가 쌓입니다.",
      },
      {
        title: "Llama로 뉴스 요약과 질문 답변",
        description: "Groq의 Llama 모델을 붙여 종목별 뉴스를 요약하고, 궁금한 걸 물어보면 답하게 했습니다.",
      },
    ],
    projects: [
      {
        id: "streamlit",
        name: "AI Stock Commander",
        status: "완료",
        shortDesc: "국내 주식 종목 선정 자동화. 수집부터 머신러닝, LLM, 화면까지 혼자 만들었습니다.",
        longDesc:
          "매일 KOSPI·KOSDAQ 3,000여 종목을 직접 훑는 게 불가능해서 만든 자동화 시스템입니다.\n매일 밤 8시에 스캐너가 돌아 제 매매 기준에 맞는 종목을 추리고,\nLightGBM이 22개 기술·매크로 지표로 단기 상승 확률을 계산합니다.\n추려진 종목은 Llama가 뉴스를 요약해 주고, 대화로 더 물어볼 수 있습니다.",
        stack: ["Python", "Streamlit", "LightGBM", "Groq Llama-3", "GitHub Actions", "pandas"],
        features: [
          "매일 밤 8시 자동 스캔, KOSPI·KOSDAQ 3,000여 종목 전수 조사",
          "여러 데이터 출처를 재시도·대기 로직으로 안정적으로 수집",
          "LightGBM 상승 확률 모델, 매크로 지표 6종을 더해 정확도 54% → 64%",
          "Llama 에이전트로 종목별 뉴스 요약과 대화형 질문 답변",
          "차트, 외국인·기관 수급, 재무 추이, 상승 확률을 한 화면에",
        ],
        pdfUrl: "/projects/국내주식_종목선정_자동화_시스템.pdf",
      },
    ],
  },
  {
    id: "phase-3-own",
    period: "2025 — 현재",
    title: "직접 만들고, 운영하기",
    shortName: "직접 운영",
    subtitle: "혼자 기획·디자인·개발·배포·운영한 서비스",
    description:
      "기획, 디자인, DB, 서버, 화면, 배포, 운영까지 혼자 맡았습니다.\nKOSTOCK은 최근 한 달 동안‖100명 넘게 가입한 서비스가 됐습니다.",
    highlights: [
      {
        title: "광고 없이 한 달 가입 100명+",
        description: "AEO·GEO·SEO로 네이버 웹문서 1위와 Perplexity 첫 번째 출처를 만들었고, 그 노출이 가입으로 이어졌습니다.",
      },
      {
        title: "코스콤 정식 시세 계약",
        description: "무료 API로 시작했다가, 서비스로 내놓을 수 있는 데이터가 필요해 코스콤과 정식 계약을 맺고 2026년 6월 실시간 시세로 옮겼습니다.",
      },
      {
        title: "장중 내내 실시간",
        description: "거래대금 상위 종목을 장중 내내 집계해 SSE로 화면에 흘려보냅니다. 동시 접속과 전송량을 숫자로 재 가며 한도를 잡습니다.",
      },
      {
        title: "AI 코딩 도구로 혼자서도 빠르게",
        description: "Claude Code를 옆에 두고 기획부터 배포까지 혼자 끝냅니다.",
      },
    ],
    projects: [
      {
        id: "kostock",
        name: "KOSTOCK",
        status: "운영 중",
        badge: "한 달 가입 100명+",
        shortDesc: "거래대금 상위 종목을 35개 섹터로 실시간 분류하는 국내주식 SaaS. 코스콤 정식 시세로 운영합니다.",
        longDesc:
          "오늘 어느 섹터로 돈이 몰렸는지 한 화면에서 보는 서비스입니다.\n코스콤 정식 계약 시세로 코스피·코스닥 거래대금 상위 종목을‖장중 내내 집계하고 35개 섹터로 묶습니다.\n회원 가입, 관리자 화면, 방문 통계까지 직접 만들어 운영하고 있습니다.",
        siteUrl: "https://kostock.taif.kr",
        screenshots: [
          "/projects/kostock/main.png",
          "/projects/kostock/report.png",
          "/projects/proof/naver-1.png",
          "/projects/proof/perplexity.png",
        ],
        stack: ["Next.js", "Supabase", "Railway", "SSE", "코스콤 시세", "Claude Code"],
        features: [
          "코스콤 정식 계약 시세로 장중 실시간 집계 (2026년 6월 운영 시작)",
          "SSE 실시간 스트리밍, 패치 크기를 4분의 1로 줄여 전송량 관리",
          "날짜별 섹터 기록, 월간 리포트, 지수 장중 차트",
          "회원·관리자·방문 통계를 직접 구현",
          "광고 없이 네이버 웹문서 1위, Perplexity 첫 번째 출처",
          "JSON-LD, llms.txt, 구역별 사이트맵, IndexNow 적용",
        ],
      },
      {
        id: "mypet",
        name: "MyPet · 반려동물 케어 리포트",
        status: "운영 중",
        shortDesc: "품종·나이·체중만 넣으면 맞춤 케어 보고서를 만들어 주는 서비스",
        longDesc:
          "보호자가 품종과 나이, 체중만 넣으면‖수의사 가이드라인과 188개 품종 데이터를 바탕으로\n건강·식단·운동·예방 관리를 한 장의 보고서로 정리해 줍니다.\n가입 없이 시작해서 결제까지 한 흐름으로 이어지게 만들었습니다.",
        siteUrl: "https://mypet.taif.kr",
        screenshots: ["/projects/mypet/1.png", "/projects/mypet/2.png", "/projects/mypet/3.png"],
        stack: ["Next.js", "Supabase", "PortOne 결제", "Gemini API", "Vercel"],
        features: [
          "188개 품종 데이터와 수의사 가이드라인 기반 보고서",
          "가입 없이 입력부터 결제까지 한 흐름",
          "PortOne 결제와 웹훅 검증",
          "주문·방문을 보는 관리자 화면",
          "품종별 안내 페이지로 검색 유입",
        ],
      },
      {
        id: "readyjob",
        name: "ReadyJOB · 같이 쓰는 취준 트래커",
        badge: "친구들과 쓰려고 만든 것",
        status: "개발 완료",
        shortDesc: "같이 취업 준비하는 친구들끼리 접속 현황, 공고, 자료를 가볍게 나누는 웹앱",
        longDesc:
          "누가 지금 접속해 있는지, 어떤 공고를 보고 있는지,\n이력서와 포트폴리오는 어디까지 정리했는지를 친구들과 나누려고 만들었습니다.\n공고 주소를 붙여 넣으면 회사·제목·썸네일을 자동으로 가져오고,\n자료는 공개·비공개를 골라 보여 줄 것만 공유합니다.",
        stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "SQLite", "next-themes"],
        features: [
          "60초 하트비트로 친구 접속 현황 표시",
          "공고 주소 미리보기, OG 메타데이터 자동 추출",
          "친구별 공고 보드, 마감일·중요도·상태 관리",
          "파일 보관함과 공개·비공개 토글",
          "다크 모드와 모바일 대응",
        ],
        screenshots: [
          "/projects/readyjob/1.png",
          "/projects/readyjob/2.png",
          "/projects/readyjob/3.png",
          "/projects/readyjob/4.png",
          "/projects/readyjob/5.png",
        ],
      },
    ],
  },
  {
    id: "phase-4-aidon",
    period: "2026.03 — 2026.05",
    title: "주식회사 에이드온",
    shortName: "에이드온",
    subtitle: "AI 솔루션 스타트업에서 회사 제품을 만든 석 달",
    description:
      "개인 프로젝트에서 쓰던 방식을 회사 제품에 그대로 가져갔습니다.\n컴퓨터 비전 실시간 추론부터 금융권 업무 포털, 회사 홈페이지까지‖석 달 동안 네 가지를 만들었습니다.",
    projects: [
      {
        id: "aidon-cctv",
        name: "AI CCTV · 건설현장 안전 감지",
        status: "개발 완료",
        shortDesc: "안전모 미착용, 낙상, 화재, 위험구역 침입을 CCTV 영상에서 실시간으로 잡아냅니다.",
        longDesc:
          "건설현장 CCTV 영상을 YOLOv8 다단계 추론으로 분석해\n안전모 미착용, 낙상, 화재·연기, 위험구역 침입을 감지하고 기록합니다.\n여러 카메라를 동시에 받아 WebSocket으로 실시간 화면을 보내고,\n운영자가 이벤트를 확인하고 주·월 단위 PDF 리포트를 받을 수 있게 만들었습니다.",
        stack: ["Next.js 16", "React 19", "FastAPI", "YOLOv8", "OpenCV", "PostgreSQL", "WebSocket", "Docker"],
        features: [
          "사람 탐지 → 보호구 분류 → 화재·연기 순서의 다단계 추론, 지속 시간 검증으로 오감지 감소",
          "RTSP·로컬 파일·웹캠 다중 카메라 동시 처리, WebSocket 실시간 송출",
          "ByteTrack 사람 추적과 2단계 트리거로 이벤트 변환율 관리",
          "이벤트 로그, 확인 처리, 시간대·유형별 대시보드",
          "주·월 단위 운영 리포트 PDF 자동 생성",
          "JWT 인증과 토큰 자동 재발급, 카메라·관심 영역 설정 API",
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
        shortDesc: "사내 IT자산 통합 관리 시스템의 차세대 프로토타입. 60여 개 화면.",
        longDesc:
          "KB국민은행 사내 IT자산 관리 시스템(DMS)의 차세대 프로토타입입니다.\n기존 메뉴 구조를 그대로 옮기면서 공통·관리자·H/W·S/W·센터자산\n다섯 메뉴 그룹, 60여 개 화면을 하나의 디자인 시스템으로 만들었습니다.\nFastAPI 백엔드와 PostgreSQL을 Docker Compose로 한 번에 띄울 수 있게 정리했습니다.",
        stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "FastAPI", "PostgreSQL", "recharts", "Docker Compose"],
        features: [
          "번호 기반 레거시 라우트(예: /901600=대시보드)를 1:1로 이전",
          "60여 개 화면, 5개 메뉴 그룹 풀스택 구현",
          "부서·메뉴 트리 같은 재귀 트리를 재사용 컴포넌트로",
          "recharts·d3 자산 통계 대시보드",
          "프런트·API·DB 3계층을 Docker Compose로 묶어 실행",
        ],
        screenshots: [
          "/projects/kb-portal/2.png",
          "/projects/kb-portal/4.png",
          "/projects/kb-portal/3.png",
          "/projects/kb-portal/6.png",
          "/projects/kb-portal/5.png",
          "/projects/kb-portal/1.png",
        ],
      },
      {
        id: "aidon-chatbot",
        name: "회원제 AI 어시스턴트 챗봇",
        status: "개발 완료",
        shortDesc: "Gemini 스트리밍을 SSE로 흘려보내는 회원제 챗봇. 인증과 DB를 직접 다뤘습니다.",
        longDesc:
          "NextAuth나 ORM 없이 JWT와 SQLite를 직접 다뤄 인증과 저장을 처리한 회원제 챗봇입니다.\nGemini의 스트리밍 응답을 SSE로 바꿔 글자가 나오는 대로 화면에 보여 주고,\n대화 기록 저장, 최근 대화만 모델에 보내는 문맥 관리, 제목 자동 생성까지 만들었습니다.",
        stack: ["Next.js 14", "TypeScript", "SQLite", "Gemini API", "JWT (jose)", "Railway"],
        features: [
          "jose·bcryptjs로 JWT 인증 직접 구현, HttpOnly 쿠키와 미들웨어 검사",
          "Gemini 스트리밍 → SSE 실시간 전달, 끝나면 DB 저장",
          "여러 대화 세션, 첫 메시지로 제목 자동 생성",
          "최근 20개 메시지만 모델에 보내 토큰 비용 관리",
          "모든 SQL을 Prepared Statement로 처리",
        ],
        screenshots: ["/projects/chatbot/3.png", "/projects/chatbot/2.png", "/projects/chatbot/1.png"],
      },
      {
        id: "aidon-site",
        name: "에이드온 공식 홈페이지",
        status: "운영 중",
        shortDesc: "스크롤 한 번에 회사 소개부터 일하는 방식, 문의까지 읽히는 코퍼레이트 사이트",
        longDesc:
          "「산업이 필요로 하는 AI를 만들고 함께 운영한다」는 메시지를 한 페이지 스크롤로 풀었습니다.\n일하는 방식 4단계, 핵심 영역 4가지, 산업별 모듈, 비교표, 사례, 문의 순서로 읽히게 만들었고\n다크 테마 디자인과 섹션별 스크롤 인터랙션을 직접 구현했습니다.",
        stack: ["HTML", "CSS", "JavaScript", "반응형"],
        features: [
          "한 페이지 스크롤로 회사가 일하는 방식과 사례 전달",
          "핵심 4개 영역을 스크롤 인터랙션으로 시각화",
          "직접 개발·일반 SaaS와의 비교표",
          "견적 상담 문의 연결, 스킵 링크 등 접근성 고려",
        ],
        siteUrl: "https://aidon.ai.kr/",
        screenshots: ["/projects/aidon-site/1.png", "/projects/aidon-site/2.png", "/projects/aidon-site/3.png"],
      },
    ],
  },
  {
    id: "phase-5-winaid",
    period: "2026.06 — 현재",
    title: "윈에이드",
    shortName: "윈에이드",
    subtitle: "병원 마케팅 대행사에서 SaaS 개발·운영",
    description:
      "병원 마케팅 AEO·GEO·SEO SaaS를 만들고 운영합니다.\nGAMEX 2026 박람회에서 진행한 AI 노출 진단이‖가입으로 이어져 92명이 가입했습니다.",
    projects: [
      {
        id: "winai",
        name: "WINAI · 병원 마케팅 AEO·GEO·SEO SaaS",
        badge: "GAMEX 진단 후 92명 가입",
        status: "운영 중",
        shortDesc: "블로그 원고, 이미지, 의료광고법 검증, AI 검색 노출 확인을 한 서비스에서",
        longDesc:
          "병원 마케터가 매주 반복하는 일을 한 서비스로 묶었습니다.\n블로그 원고를 쓰면 의료광고법에 걸리는 표현을 먼저 걸러 주고,\n안내 이미지를 만들고, 재방문 안내를 보내고,\n우리 병원이 ChatGPT 답변에 인용되는지까지 확인합니다.",
        features: [
          "블로그 원고 생성과 의료광고법 검증",
          "안내 이미지 자동 생성",
          "재방문 안내 발송 대행, 대상은 화면에서 선별",
          "AI 검색 노출 확인 (ChatGPT 인용 여부)",
        ],
        screenshots: ["/projects/winai/1.png", "/projects/winai/2.png", "/projects/winai/3.png"],
      },
      {
        id: "gamex",
        name: "병원 AEO·GEO 진단 · GAMEX 2026",
        status: "현장 운영",
        badge: "MEDIT 부스",
        shortDesc: "박람회 부스에서 원장님 병원이 AI 검색에 나올지 진단하고, WINAI 가입으로 이었습니다",
        longDesc:
          "GAMEX 2026 MEDIT 부스에서 쓴 진단 도구입니다.\n홈페이지 주소나 병원 이름만 넣으면 약 1분 뒤,\nChatGPT·Gemini가 그 병원을 읽고 추천할 수 있는 상태인지 알려 줍니다.\n진단 기준은 프린스턴대 GEO 연구, OpenAI·Google 공식 문서, 의료법 제56조에서 가져왔습니다.",
        features: [
          "로그인 없이 병원 이름이나 주소만으로 진단",
          "약 1분 안에 결과, 부스 상담 흐름에 맞춘 담당자 선택",
          "진단 근거를 화면 아래에 출처와 함께 표시",
        ],
        screenshots: ["/projects/gamex/1.png"],
      },
      {
        id: "dental-circle",
        name: "치과 홈페이지 ① · AEO·GEO·SEO",
        status: "운영 중",
        shortDesc: "진료 안내, 예약, 증상별 찾아보기를 한곳에. 진료시간과 위치를 검색과 AI가 정확히 읽게.",
        longDesc:
          "고양시의 한 치과 홈페이지입니다.\n환자가 증상으로 진료를 찾아보고 바로 예약하게 만들고,\n야간진료·토요일·주차 같은 정보를 검색엔진과 AI가 그대로 읽는 구조로 정리했습니다.",
        features: [
          "증상으로 찾아보는 진료 안내",
          "진료시간·야간진료·주차 정보를 구조화 데이터로",
          "예약과 전화 연결을 첫 화면에",
        ],
        screenshots: [
          "/projects/dental-circle/1.png",
          "/projects/dental-circle/2.png",
          "/projects/dental-circle/3.png",
        ],
      },
      {
        id: "dental-sun",
        name: "치과 홈페이지 ② · AEO·GEO·SEO",
        status: "운영 중",
        shortDesc: "임플란트가 강점인 치과. 진료시간, 오시는 길, 네이버 예약을 한 화면에.",
        longDesc:
          "광화문의 임플란트 중심 치과 홈페이지입니다.\n3D 디지털 진단 과정을 세 단계로 보여 주고,\n진료시간과 오시는 길, 네이버 예약을 첫 화면에서 바로 찾게 만들었습니다.\n모든 정보는 검색엔진과 AI가 읽기 쉬운 구조로 정리했습니다.",
        features: [
          "가이드 임플란트·3D 진단·턱관절 치료를 단계 탭으로",
          "진료시간·오시는 길을 첫 화면에",
          "네이버 예약 연결",
        ],
        screenshots: [
          "/projects/dental-sun/1.png",
          "/projects/dental-sun/2.png",
          "/projects/dental-sun/3.png",
          "/projects/dental-sun/4.png",
        ],
      },
    ],
  },
];

const statusStyle: Record<Status, string> = {
  "운영 중": "bg-emerald-50 text-emerald-700",
  "현장 운영": "bg-amber-50 text-amber-700",
  "개발 완료": "bg-blue-50 text-blue-700",
  "완료": "bg-gray-100 text-gray-500",
};

const EASE = [0.22, 1, 0.36, 1] as const;

/** 카드 머리 화면 — 여러 장이면 화면에 보일 때만 천천히 넘어간다 */
function Cover({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const shots = project.screenshots ?? [];
  const ref = useRef<HTMLButtonElement>(null);
  const inView = useInView(ref, { margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!inView || reduce || shots.length < 2) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % shots.length), 3200);
    return () => clearInterval(t);
  }, [inView, reduce, shots.length]);

  if (shots.length === 0) {
    // 화면이 없는 프로젝트(보고서 PDF) — 차트 모양 표지
    return (
      <button
        ref={ref}
        type="button"
        onClick={onOpen}
        className="group relative block aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-500 text-left"
        aria-label={`${project.name} 보고서 열기`}
      >
        <svg aria-hidden viewBox="0 0 320 200" className="absolute inset-0 h-full w-full opacity-40 transition-transform duration-700 group-hover:scale-105">
          <polyline points="0,160 40,150 80,128 120,136 160,98 200,106 240,70 280,78 320,40" fill="none" stroke="white" strokeWidth="3" />
          <polyline points="0,180 40,172 80,166 120,150 160,154 200,130 240,122 280,110 320,96" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="4 6" />
        </svg>
        <span className="absolute bottom-4 left-5 text-sm font-bold text-white">보고서 PDF 보기 →</span>
      </button>
    );
  }

  return (
    <button
      ref={ref}
      type="button"
      onClick={onOpen}
      className="group relative block aspect-[16/10] w-full overflow-hidden bg-gray-100"
      aria-label={`${project.name} 화면 크게 보기`}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={shots[idx]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0"
        >
          <Image
            src={shots[idx]}
            alt={`${project.name} 화면 ${idx + 1}`}
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 768px) 45vw, 92vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </motion.div>
      </AnimatePresence>
      {shots.length > 1 && (
        <span className="absolute bottom-3 left-3 flex gap-1" aria-hidden>
          {shots.map((s, i) => (
            <span key={s} className={`h-1 rounded-full transition-all duration-500 ${i === idx ? "w-5 bg-white" : "w-1.5 bg-white/60"}`} />
          ))}
        </span>
      )}
      <span className="absolute right-3 top-3 rounded-full bg-gray-900/70 px-2.5 py-1 text-[11px] font-semibold text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
        크게 보기
      </span>
    </button>
  );
}

function ProjectCard({
  project,
  expanded,
  onToggle,
  onOpen,
  wide = false,
}: {
  project: Project;
  expanded: boolean;
  onToggle: () => void;
  onOpen: () => void;
  /** 그 시기에 카드가 한 장뿐이면 가로로 길게 — 격자에 빈 칸이 남지 않게 */
  wide?: boolean;
}) {
  return (
    <div
      className={`flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg ${
        wide ? "md:flex-row" : ""
      }`}
    >
      <div className={wide ? "md:w-[55%] md:flex-shrink-0" : ""}>
        <Cover project={project} onOpen={onOpen} />
      </div>
      <div className={`flex flex-1 flex-col p-5 sm:p-6 ${wide ? "md:p-8" : ""}`}>
        <div className="flex items-start justify-between gap-3">
          <h4 className="text-lg font-bold text-gray-900 leading-snug tracking-[-0.01em]">{project.name}</h4>
          {project.status && (
            <span className={`flex-shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyle[project.status]}`}>
              {project.status}
            </span>
          )}
        </div>
        {project.badge && (
          <span className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-indigo-100 bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            {project.badge}
          </span>
        )}
        <p className={`mt-3 text-sm leading-relaxed text-gray-600 ${wide ? "" : "flex-1"}`}>{project.shortDesc}</p>
        {wide && project.longDesc && (
          <p className="mt-4 hidden flex-1 text-sm leading-[1.85] text-gray-500 md:block">
            <Lines text={project.longDesc} />
          </p>
        )}

        {project.stack && project.stack.length > 0 && (
          <div className="mt-4 hidden flex-wrap gap-1.5 sm:flex">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
          {(project.longDesc || project.features) && (
            <button
              type="button"
              onClick={onToggle}
              aria-expanded={expanded}
              className="inline-flex h-9 items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              자세히 보기
              <motion.svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>
          )}
          {project.siteUrl && (
            <a
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              사이트 방문
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="detail"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-4 border-t border-gray-100 pt-5">
                {project.longDesc && (
                  <p className="mb-4 text-sm leading-[1.8] text-gray-600">
                    <Lines text={project.longDesc} />
                  </p>
                )}
                {project.features && (
                  <>
                    <h5 className="mb-3 text-xs font-bold text-gray-400">주요 기능</h5>
                    <ul className="space-y-2">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
      </div>
    </div>
  );
}

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const reduce = useReducedMotion();
  const COMPANY_PHASES = ["phase-4-aidon", "phase-5-winaid"];
  const atWork = phases.filter((p) => COMPANY_PHASES.includes(p.id)).reduce((n, p) => n + p.projects.length, 0);
  const onMyOwn = phases.filter((p) => !COMPANY_PHASES.includes(p.id)).reduce((n, p) => n + p.projects.length, 0);

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-sm font-bold text-indigo-600 mb-3">프로젝트</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-[-0.03em] leading-tight">
            <Lines text={"시기별로 만든 것들"} />
          </h2>
          <p className="mt-5 text-gray-500 leading-relaxed">
            <Lines text={`회사에서 ${atWork}개, 혼자서 ${onMyOwn}개를 만들었습니다.\n데이터 분석에서 시작해 직접 운영하는 서비스까지입니다.`} />
          </p>
        </div>

        {/* 시기 바로가기 */}
        <nav aria-label="시기 바로가기" className="mt-10 mb-20 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {phases.map((p, idx) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-all hover:border-indigo-300 hover:bg-indigo-50/40 hover:text-indigo-600 active:scale-95 sm:px-5 sm:py-2.5"
            >
              <span className="text-xs font-bold tabular-nums text-indigo-400">{String(idx + 1).padStart(2, "0")}</span>
              <span>{p.shortName}</span>
            </a>
          ))}
        </nav>

        <div className="space-y-28 sm:space-y-36">
          {phases.map((phase, phaseIdx) => (
            <div key={phase.id} id={phase.id} className="relative scroll-mt-24">
              {/* 시기 머리 — 연도가 크게 떠오른다 */}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: EASE }}
                className="mb-12 text-center"
              >
                <div className="mb-4 inline-flex items-baseline gap-2.5">
                  <span className="text-xs font-bold tracking-[0.25em] text-indigo-500 uppercase">Phase</span>
                  <span className="text-2xl font-black leading-none text-indigo-600 tabular-nums">
                    {String(phaseIdx + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="text-4xl sm:text-6xl font-black leading-none tracking-[-0.05em] text-gray-900 tabular-nums">
                  {phase.period.split(" — ").map((part, k) => (
                    <span key={part}>
                      {k > 0 && <span className="mx-2 font-light text-gray-300 sm:mx-3">–</span>}
                      {part}
                    </span>
                  ))}
                </div>
              </motion.div>

              <div className={phase.highlights ? "grid gap-10 lg:grid-cols-2 lg:gap-14" : ""}>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-[-0.03em] text-gray-900">{phase.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-indigo-600">{phase.subtitle}</p>
                  <p className="mt-4 leading-[1.85] text-gray-600">
                    <Lines text={phase.description} />
                  </p>
                </div>
                {phase.highlights && (
                  <ol className="space-y-5 lg:border-l lg:border-gray-200 lg:pl-8">
                    {phase.highlights.map((h, i) => (
                      <motion.li
                        key={h.title}
                        initial={reduce ? false : { opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.5, ease: EASE }}
                        className="flex gap-3"
                      >
                        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50 text-xs font-bold text-indigo-600">
                          {i + 1}
                        </span>
                        <div className="min-w-0">
                          <h5 className="mb-1 font-bold leading-snug text-gray-900">{h.title}</h5>
                          <p className="text-sm leading-relaxed text-gray-600">{h.description}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ol>
                )}
              </div>

              {phase.projects.length > 0 && (
                <>
                  <div
                    className={`-mx-4 mt-10 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:gap-6 md:overflow-visible md:px-0 md:pb-0 ${
                      phase.projects.length === 1 ? "md:grid-cols-1" : phase.projects.length === 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"
                    }`}
                  >
                    {phase.projects.map((project, i) => (
                      <motion.div
                        key={project.id}
                        initial={reduce ? false : { opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ delay: (i % 3) * 0.08, duration: 0.6, ease: EASE }}
                        className={`w-[85vw] max-w-[400px] flex-shrink-0 snap-start md:w-auto md:max-w-none ${phase.projects.length === 1 ? "" : "md:h-full"}`}
                      >
                        <ProjectCard
                          project={project}
                          wide={phase.projects.length === 1}
                          expanded={expanded === project.id}
                          onToggle={() => setExpanded(expanded === project.id ? null : project.id)}
                          onOpen={() => setModalProject(project)}
                        />
                      </motion.div>
                    ))}
                  </div>
                  {phase.projects.length > 1 && (
                    <p className="mt-1 text-center text-xs text-gray-400 md:hidden" aria-hidden>
                      옆으로 넘겨 보세요 · {phase.projects.length}개
                    </p>
                  )}
                </>
              )}
            </div>
          ))}
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
    </section>
  );
}
