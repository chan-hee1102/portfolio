import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

const info = [
  { label: "이름", value: "임찬희" },
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

          {/* 자기소개 */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-gray-700 leading-relaxed text-lg">
              고려대학교{" "}
              <strong className="text-gray-900">빅데이터 전공</strong>으로
              데이터베이스와 데이터 분석의 기본기를 다졌고, 분석 결과를
              실생활에 직접 쓰고 싶어 주식 데이터 자동화 웹을 독학으로
              만들며 개발에 입문했습니다.
            </p>
            <p className="text-gray-600 leading-relaxed">
              이후{" "}
              <strong className="text-gray-900">KOSTOCK</strong>을 솔로로
              개발·운영하며 코스콤과 정식 계약을 진행했고, 사용자 입장에서
              모바일·웹 모두 잘 동작하도록 끝까지 책임지는 경험을
              쌓았습니다.
            </p>
            <p className="text-gray-600 leading-relaxed">
              현재는{" "}
              <strong className="text-gray-900">에이드온 주식회사</strong>에서
              AI Agent 기반 서비스를 풀스택으로 개발하며, DB·백엔드부터
              프론트·배포까지 한 사람이 책임지는 방식으로 일하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
