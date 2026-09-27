import SectionWrapper from "@/components/ui/SectionWrapper";
import Lines from "@/components/ui/Lines";

/** 일하는 방식 — 겪은 일에서 나온 것만. 다짐이나 형용사는 쓰지 않는다. */
const ways = [
  {
    title: "데이터 흐름부터 그립니다",
    desc: "빅데이터를 전공해서인지‖테이블과 데이터가 어떻게 흐르는지부터 봅니다.\n화면은 그 위에 얹습니다.",
  },
  {
    title: "만든 뒤에는 찾아오게 합니다",
    desc: "페이지를 만들 때‖제목, 구조화 데이터, 사이트맵을 같이 만듭니다.\n나중에 붙이면 구조를 다시 뜯어야 해서입니다.",
  },
  {
    title: "운영하면서 고칩니다",
    desc: "KOSTOCK을 매일 운영하며‖배포 직후 장애, 봇 트래픽, 비용 폭주를 겪었습니다.\n문제는 쓰는 사람 화면에서 먼저 보여서,‖검수도 화면을 직접 찍어서 합니다.",
  },
];

export default function Philosophy() {
  return (
    <SectionWrapper id="philosophy" className="py-24 sm:py-32 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-bold text-indigo-600 mb-3">일하는 방식</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-[-0.03em]">
            KOSTOCK을 운영하며 굳은 습관 세 가지
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {ways.map((item) => (
            <div key={item.title} className="border-t-2 border-gray-900 pt-5">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.8] text-gray-600">
                <Lines text={item.desc} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
