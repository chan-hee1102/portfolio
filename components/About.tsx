import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "Claude API",
  "Python",
];

const info = [
  { label: "생년월일", value: "1999.11.02 (만 26세)" },
  { label: "Phone", value: "010-4946-1195" },
  { label: "Email", value: "mukkeby99@gmail.com" },
  { label: "Address", value: "경기도 남양주시 진접읍 해밀에당 1로 49" },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            소개
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* 사진 + 기본정보 */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="relative w-44 h-52 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/profile.jpg"
                alt="임찬희 프로필 사진"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="w-full space-y-2.5">
              {info.map(({ label, value }) => (
                <div key={label} className="flex gap-3 text-sm">
                  <span className="w-20 flex-shrink-0 font-semibold text-gray-400">
                    {label}
                  </span>
                  <span className="text-gray-700 break-all">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 자기소개 + 기술스택 */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-lg">
                통계학·빅데이터 전공으로 데이터 분석을 시작했고, 분석 결과를
                실생활에 직접 쓰고 싶어 주식 데이터 자동화 웹을{" "}
                <strong className="text-gray-900">독학으로 만들면서</strong>{" "}
                개발에 입문했습니다.
              </p>
              <p className="text-gray-600 leading-relaxed">
                GPT 등장 이후 LLM을 직접 붙여보고 프롬프트 엔지니어링을
                반복하며 AI 활용 개발에 깊이 빠졌고,{" "}
                <strong className="text-gray-900">Claude Code</strong>를
                도입하면서 완성도 높은 풀스택 서비스를 빠르게 만들 수 있게
                됐습니다.
              </p>
              <p className="text-gray-600 leading-relaxed">
                현재는 AI 스타트업{" "}
                <strong className="text-gray-900">에이드온</strong>에서 실무
                개발을 하며, 개인 SaaS 서비스{" "}
                <strong className="text-gray-900">KOSTOCK Pro</strong>를
                코스콤과 정식 계약 후 2026년 6월 출시를 준비 중입니다.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                주요 기술 스택
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 hover:bg-indigo-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
