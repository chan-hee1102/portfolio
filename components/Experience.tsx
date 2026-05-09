import SectionWrapper from "@/components/ui/SectionWrapper";

const experiences = [
  {
    type: "work" as const,
    period: "2026.04 — 현재",
    role: "풀스택 개발자",
    org: "에이드온 (Aidon)",
    orgDesc: "AI 스타트업",
    description: [
      "KB국민은행 IT 자산관리 포털 개발 (Next.js + FastAPI + PostgreSQL)",
      "에이드온 회사 홈페이지 직접 기획 및 제작",
      "건설 AI 웹 서비스 개발 중 (현재 진행)",
      "Claude API 연동 기능 설계 및 구현",
      "Docker 기반 컨테이너 배포 환경 구성",
    ],
  },
  {
    type: "work" as const,
    period: "2024 — 2026",
    role: "개인 개발 (사이드 프로젝트)",
    org: "KOSTOCK Pro",
    orgDesc: "솔로 창업",
    description: [
      "Claude Code 도입 후 풀스택 SaaS 서비스 독자 개발",
      "코스콤 정식 계약 진행 중, 2026년 6월 출시 예정",
      "Supabase DB 설계, Railway 24시간 배포 운영",
      "KIS API·Claude API 연동, 구독제 결제 시스템 구축",
    ],
  },
  {
    type: "education" as const,
    period: "2020 — 2024",
    role: "통계학·빅데이터과학과 학사 졸업",
    org: "고려대학교 세종캠퍼스",
    orgDesc: "학사",
    description: [
      "통계이론·데이터 분석 전공, 빅데이터과학 복수전공",
      "주식 데이터 분석 개인 프로젝트로 개발 독학 시작",
      "GPT API 연동 Streamlit 자동화 웹 제작 (첫 번째 배포 경험)",
      "Python, SQL, 머신러닝 심화 학습",
    ],
  },
];

function WorkIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  );
}

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="py-24 px-4 bg-surface-frost">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-purple-heart uppercase mb-3">
            Experience
          </p>
          <h2
            className="font-display font-bold text-charcoal-black"
            style={{ fontSize: "32px", letterSpacing: "-0.004em", lineHeight: 1.12 }}
          >
            경력 & 교육
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-border hidden sm:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className="flex gap-6">
                <div className="relative hidden sm:flex items-start justify-center flex-shrink-0 w-12 pt-1">
                  <div
                    className={`w-12 h-12 flex items-center justify-center z-10 ${
                      exp.type === "work"
                        ? "bg-purple-heart text-white"
                        : "bg-surface-frost border-2 border-purple-heart text-purple-heart"
                    }`}
                    style={{ borderRadius: "90px" }}
                  >
                    {exp.type === "work" ? <WorkIcon /> : <EducationIcon />}
                  </div>
                </div>

                <div
                  className="flex-1 bg-canvas-ice border border-slate-border p-6 transition-all hover:border-active-lavender"
                  style={{ borderRadius: "16px" }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3
                        className="font-display font-semibold text-charcoal-black"
                        style={{ fontSize: "18px" }}
                      >
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-purple-heart mt-0.5">
                        {exp.org}
                        <span className="text-pewter font-normal ml-2">{exp.orgDesc}</span>
                      </p>
                    </div>
                    <span
                      className="text-xs font-semibold text-pewter bg-whisper-cloud border border-slate-border px-3 py-1.5 whitespace-nowrap"
                      style={{ borderRadius: "90px" }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((d, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-pewter">
                        <span className="text-orchid-glow font-bold mt-0.5 flex-shrink-0">·</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
