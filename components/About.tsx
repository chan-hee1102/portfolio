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
            <div>
              <p className="text-gray-700 leading-relaxed text-lg mb-5">
                안녕하세요, 저는 실제로 쓰이는 제품을 만드는 것을 좋아하는
                풀스택 개발자{" "}
                <strong className="text-gray-900 font-bold">임찬희</strong>
                입니다.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                AI 스타트업 에이드온에서 Next.js와 FastAPI를 기반으로 서비스를
                개발하고 있으며, 한국 주식 테마 분석 SaaS(KOSTOCK Pro)를 솔로
                개발한 경험이 있습니다. KB국민은행의 IT 자산관리 내부 포털도
                직접 기획 및 구축했습니다.
              </p>
              <p className="text-gray-600 leading-relaxed">
                복잡한 문제를 명료하게 해결하고, 사용자에게 실질적인 가치를
                전달하는 제품을 만드는 데 보람을 느낍니다.
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
