import SectionWrapper from "@/components/ui/SectionWrapper";

const philosophies = [
  {
    title: "UI만 만드는 바이브 코더가 아닙니다",
    desc: "AI로 화면만 빠르게 찍어내는 사람은 많습니다. 저는 화면 뒤에서 데이터가 어떻게 흐르고 쌓이는지부터 설계하고, 실제로 동작하는 서비스를 끝까지 완성하는 데 집중합니다.",
  },
  {
    title: "데이터베이스부터 백엔드까지 직접 잡습니다",
    desc: "빅데이터 전공 경험으로 DB 스키마와 데이터 흐름을 먼저 단단하게 설계합니다. 실제 운영·배포 경험으로 백엔드까지 안정적으로 동작하도록 만든 뒤, 그 위에 프론트를 올립니다.",
  },
  {
    title: "사용자가 어디서 보든 잘 동작해야 합니다",
    desc: "KOSTOCK을 직접 운영하면서 배운 건, 결국 판단 기준은 사용자라는 점입니다. 모바일·웹 모두에서 자연스럽게 보이고, 손에 익도록 동작하는 서비스를 기본값으로 만듭니다.",
  },
];

export default function Philosophy() {
  return (
    <SectionWrapper id="philosophy" className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <span className="inline-block mb-3 px-3 py-1 text-xs font-bold tracking-widest text-indigo-600 bg-indigo-50 rounded-full uppercase">
            How I Build
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            개발 철학
          </h2>
        </div>

        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-14 leading-relaxed">
          AI로 누구나 화면을 만들 수 있는 시대지만, 데이터 구조를 이해하고
          백엔드를 끝까지 책임지며 사용자가 실제로 쓰는 환경까지 챙겨본
          사람만이 제대로 동작하는 서비스를 만들 수 있다고 생각합니다.
          <strong className="text-gray-900"> 저는 그 과정을 모두 직접 거쳐왔습니다.</strong>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {philosophies.map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-gray-200 bg-white p-6 hover:border-indigo-200 hover:shadow-md transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-extrabold flex items-center justify-center mb-4">
                {i + 1}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
