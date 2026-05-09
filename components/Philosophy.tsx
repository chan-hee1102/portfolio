import SectionWrapper from "@/components/ui/SectionWrapper";

const philosophies = [
  {
    title: "데이터를 먼저 이해한다",
    desc: "통계학·빅데이터 전공으로 데이터 구조와 흐름을 먼저 이해하고 설계합니다. AI가 코드를 작성하더라도, 어떤 데이터를 어떻게 다뤄야 하는지는 사람이 알아야 한다고 생각합니다.",
  },
  {
    title: "프론트부터 배포까지 직접 완성한다",
    desc: "UI 설계, API 연동, DB 구조, 배포까지 모든 레이어를 한 번씩 직접 완성해봤습니다. 이 경험이 있어야 AI와 협업해도 실제로 동작하는 서비스를 빠르게 만들 수 있다고 믿습니다.",
  },
  {
    title: "AI는 도구가 아닌 협업 파트너다",
    desc: "Claude Code를 단순한 코드 생성기가 아니라 함께 설계하고 디버깅하는 파트너로 씁니다. 제가 방향과 맥락을 잡고, AI가 구현을 채우는 방식으로 빠르게 완성도 높은 서비스를 만듭니다.",
  },
];

export default function Philosophy() {
  return (
    <SectionWrapper id="philosophy" className="py-24 px-4 bg-canvas-ice">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-xs font-semibold tracking-widest text-purple-heart uppercase mb-3">
            Why I Vibe Code
          </p>
          <h2
            className="font-display font-bold text-charcoal-black"
            style={{ fontSize: "32px", letterSpacing: "-0.004em", lineHeight: 1.12 }}
          >
            개발 철학
          </h2>
        </div>

        {/* Key statement — Purple Aura gradient block */}
        <div
          className="mx-auto max-w-2xl text-center mb-14 px-8 py-6"
          style={{
            background: "linear-gradient(102deg, rgba(131, 56, 138, 0.08) 0%, rgba(211, 137, 231, 0.08) 100%)",
            borderRadius: "16px",
            border: "1px solid #f2defe",
          }}
        >
          <p className="text-carbon-gray leading-relaxed" style={{ fontSize: "16px" }}>
            AI로 누구나 웹을 만들 수 있는 시대지만, 데이터 구조·프론트/백엔드
            이해·배포 경험을 한 번이라도 완전히 완성해본 사람만이 제대로
            동작하는 서비스를 빠르게 만들 수 있다고 생각합니다.{" "}
            <strong className="text-purple-heart">저는 그 기반을 직접 쌓아왔습니다.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {philosophies.map((item, i) => (
            <div
              key={i}
              className="bg-surface-frost border border-slate-border p-6 transition-all hover:border-active-lavender"
              style={{
                borderRadius: "16px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 20px 0px",
              }}
            >
              <div
                className="w-8 h-8 text-white text-sm font-bold flex items-center justify-center mb-4 bg-purple-heart"
                style={{ borderRadius: "4px" }}
              >
                {i + 1}
              </div>
              <h3
                className="font-display font-semibold text-charcoal-black mb-3"
                style={{ fontSize: "16px" }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-pewter leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
