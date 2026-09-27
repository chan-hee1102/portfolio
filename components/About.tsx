import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Lines from "@/components/ui/Lines";

const info = [
  { label: "이름", value: "임찬희" },
  { label: "생년월일", value: "1999.11.02 (만 26세)" },
  { label: "전화", value: "010-4946-1195" },
  { label: "이메일", value: "mukkeby02@naver.com" },
  { label: "주소", value: "경기도 남양주시 진접읍 해밀예당 1로 49" },
];

/** 소개 — 세 단락이 「왜 시작했나 → 무엇을 만들었나 → 지금 무엇을 하나」 순서 */
const PARAGRAPHS = [
  {
    lead: "데이터를 전공했고, 만드는 쪽으로 넘어왔습니다.",
    body: "고려대학교에서 빅데이터를 전공했습니다.‖분석은 익숙했지만 서비스를 만드는 건 개발자의 일이라고 생각했습니다.\nGPT가 나오고 생각이 바뀌었습니다.‖직접 만들어 보기로 했고, 그 뒤로 계속 만들고 있습니다.",
  },
  {
    lead: "혼자 만들고, 혼자 운영해 봤습니다.",
    body: "처음 만든 건 매일 밤 주식 종목을 골라 주는 자동화 도구였습니다.\n그다음 KOSTOCK을 혼자 만들어 운영하면서‖코스콤과 정식 시세 계약을 맺었습니다.\nDB, 서버, 화면, 배포를 한 사람이 다 해 보니‖어디서 막히는지가 보이기 시작했습니다.",
  },
  {
    lead: "지금은 병원이 검색과 AI에 나오게 합니다.",
    body: "2026년 3월부터 5월까지 에이드온에서‖AI CCTV와 금융권 업무 포털을 만들었습니다.\n6월부터는 병원 마케팅 대행사 윈에이드에서‖병원 AEO·GEO·SEO와 마케팅 SaaS를 맡고 있습니다.\nKOSTOCK에서 효과를 본 구조화 데이터, llms.txt, 사이트맵을‖병원 홈페이지에 그대로 씁니다.",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="py-24 sm:py-32 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 sm:mb-16">
          <p className="text-sm font-bold text-indigo-600 mb-3">소개</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-[-0.03em] leading-tight">
            <Lines text={"직접 만들고,\n검색에 올리는 일을 합니다"} />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-14 lg:items-start">
          {/* 사진 + 기본정보 */}
          <div className="flex flex-col items-center lg:items-start gap-6 lg:sticky lg:top-24">
            <div className="relative w-44 h-52 rounded-2xl overflow-hidden border-4 border-white shadow-xl ring-1 ring-gray-100">
              <Image
                src="/profile.jpg"
                alt="임찬희 프로필 사진"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="w-full max-w-sm space-y-2.5">
              {info.map(({ label, value }) => (
                <div key={label} className="flex gap-3 text-sm">
                  <span className="w-20 flex-shrink-0 font-semibold text-gray-400">
                    {label}
                  </span>
                  <span className="text-gray-700 min-w-0">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 자기소개 — 굵은 첫 줄이 단락의 요지 */}
          <div className="lg:col-span-2 space-y-10">
            {PARAGRAPHS.map((p) => (
              <div key={p.lead}>
                <p className="text-lg sm:text-xl font-bold text-gray-900 tracking-[-0.02em] mb-3">
                  {p.lead}
                </p>
                <p className="text-gray-600 leading-[1.85] text-[15.5px] sm:text-base">
                  <Lines text={p.body} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
