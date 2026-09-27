"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Lines from "@/components/ui/Lines";

/**
 * 검색과 AI에 실제로 잡힌 기록 — 전부 KOSTOCK(kostock.taif.kr).
 * 캡처는 2026-09-23 직접 검색해 찍은 것(taif.kr 근거 섹션과 같은 파일). 관리자 캡처는 이메일·이름을 가렸다.
 * 페이지에서 유일하게 어두운 띠 — 여기가 이 포트폴리오의 한 방이다.
 */
const CAPTURED = "2026년 9월 23일";

const NAVER = [
  { query: "실시간 테마 섹터 분류", rank: 1, src: "/projects/proof/naver-1.png", focus: "top" },
  { query: "국내주식 실시간 테마", rank: 1, src: "/projects/proof/naver-2.png", focus: "top" },
  { query: "코스콤 시세 테마", rank: 1, src: "/projects/proof/naver-4.png", focus: "top" },
  { query: "주식 테마 분석 사이트", rank: 2, src: "/projects/proof/naver-3.png", focus: "bottom" },
] as const;

const CHATGPT_ROWS = [45, 251, 319, 388].map((cy) => ({ top: ((cy - 32) / 813) * 100, height: (64 / 813) * 100 }));

const HOW = [
  { t: "검색엔진 등록", d: "네이버 서치어드바이저, 구글 서치콘솔, 빙" },
  { t: "사이트맵과 IndexNow", d: "구역별 사이트맵, 바뀐 페이지는 그날 바로 알림" },
  { t: "구조화 데이터", d: "JSON-LD로 서비스·조직·질문과 답을 기계가 읽게" },
  { t: "llms.txt", d: "AI가 사이트를 요약할 때 읽는 안내문" },
  { t: "질문과 답 구조", d: "사람이 실제로 묻는 말을 제목으로 쓴 가이드 페이지" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

/** 브라우저 창 모양 액자 */
function Frame({
  src,
  alt,
  label,
  ratio,
  focus = "top",
  priority = false,
  overlay,
}: {
  src: string;
  alt: string;
  label: string;
  ratio: string;
  focus?: "top" | "bottom";
  priority?: boolean;
  /** 캡처 위에 얹는 표시(비율 좌표) */
  overlay?: React.ReactNode;
}) {
  return (
    <figure className="overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
      <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-3.5 py-2">
        <span className="h-2 w-2 rounded-full bg-gray-300" />
        <span className="h-2 w-2 rounded-full bg-gray-300" />
        <span className="h-2 w-2 rounded-full bg-gray-300" />
        <span className="ml-2 truncate text-[11px] text-gray-500">{label}</span>
      </div>
      <div className={`relative w-full ${ratio}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 480px, 90vw"
          className={`object-cover ${focus === "bottom" ? "object-bottom" : "object-top"}`}
          priority={priority}
        />
        {overlay}
      </div>
    </figure>
  );
}

/** 부채꼴로 겹쳐 있다가 스크롤하면 펼쳐지는 캡처 한 장 */
function FanCard({
  i,
  total,
  progress,
  children,
}: {
  i: number;
  total: number;
  progress: MotionValue<number>;
  children: React.ReactNode;
}) {
  const mid = (total - 1) / 2;
  const off = i - mid;
  const rotate = useTransform(progress, [0, 1], [off * 7, off * 2.5]);
  const x = useTransform(progress, [0, 1], [off * 14, off * 46]);
  const y = useTransform(progress, [0, 1], [Math.abs(off) * 10, Math.abs(off) * 22]);
  return (
    <motion.div
      style={{ rotate, x, y, zIndex: total - Math.abs(Math.round(off)) }}
      className="absolute inset-x-0 top-0 mx-auto w-[78%] sm:w-[70%]"
    >
      {children}
    </motion.div>
  );
}

function Rank({ rank }: { rank: number }) {
  return (
    <span
      className={`inline-flex h-7 min-w-[46px] items-center justify-center rounded-full px-2.5 text-xs font-extrabold ${
        rank === 1 ? "bg-emerald-400 text-emerald-950" : "bg-white/15 text-white"
      }`}
    >
      {rank}위
    </span>
  );
}

export default function Proof() {
  const fanRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: fanRef, offset: ["start 85%", "center 45%"] });
  const spread = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 0, 1]);

  return (
    <section id="proof" className="relative overflow-hidden bg-[#0d1024] py-24 sm:py-32 px-4 text-white">
      {/* 은은한 빛 두 개 — 캡처가 바탕에서 떠 보이게 */}
      <div aria-hidden className="pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-indigo-600/25 blur-[140px]" />
      <div aria-hidden className="pointer-events-none absolute -right-40 bottom-10 h-[460px] w-[460px] rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center"
        >
          <p className="text-sm font-bold text-indigo-300 mb-3">KOSTOCK 성과</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] leading-tight">
            <Lines text={"광고 없이, 검색과 AI로\n한 달에 100명을 모았습니다"} />
          </h2>
          <p className="mt-5 text-[15px] sm:text-base text-white/65 leading-relaxed">
            <Lines text={`KOSTOCK은 혼자 만들어 운영하는 국내주식 SaaS입니다.\nAEO·GEO·SEO만으로 최근 한 달 동안 100명 넘게 가입했습니다(2026년 9월 기준).\n아래는 ${CAPTURED}에 직접 검색해서 찍은 화면 그대로입니다.`} />
          </p>
        </motion.div>

        {/* 숫자 세 개 — 가입이 먼저, 그 가입을 만든 검색·AI 노출이 뒤 */}
        <dl className="mx-auto mt-14 grid max-w-4xl grid-cols-1 divide-y divide-white/10 border-y border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            { v: "100명+", k: "최근 한 달 가입" },
            { v: "1위", k: "네이버 웹문서, 검색어 3개" },
            { v: "첫 번째", k: "Perplexity 답변 출처" },
          ].map((m, i) => (
            <motion.div
              key={m.k}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.55, ease: EASE }}
              className="px-6 py-6 text-center sm:py-8"
            >
              <dd className="text-4xl sm:text-5xl font-extrabold tracking-[-0.04em] text-white">{m.v}</dd>
              <dt className="mt-2 text-sm text-white/60">{m.k}</dt>
            </motion.div>
          ))}
        </dl>

        {/* 1. 네이버 웹문서 */}
        <div className="mt-20 sm:mt-28 grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <p className="text-sm font-semibold text-emerald-300">네이버 웹문서</p>
            <h3 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-[-0.03em] leading-tight">
              <Lines text={"검색어 세 개에서 1위,\n하나에서 2위"} />
            </h3>
            <p className="mt-4 text-[15px] text-white/65 leading-relaxed">
              <Lines text={"광고 영역을 뺀 웹문서 탭 순위입니다.\n증권사·포털 콘텐츠 사이에서 개인이 만든 사이트가 먼저 나옵니다."} />
            </p>
            <ul className="mt-7 space-y-2.5">
              {NAVER.map((n, i) => (
                <motion.li
                  key={n.query}
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: EASE }}
                  className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
                >
                  <span className="min-w-0 text-[15px] font-semibold">「{n.query}」</span>
                  <Rank rank={n.rank} />
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="sm:hidden">
            <Frame
              src={NAVER[0].src}
              alt={`네이버 「${NAVER[0].query}」 검색 결과 1위 KOSTOCK`}
              label={`search.naver.com · ${NAVER[0].query}`}
              ratio="aspect-[690/560]"
            />
          </div>
          <div ref={fanRef} className="relative hidden sm:block sm:h-[460px] lg:h-[500px]">
            {NAVER.map((n, i) => (
              <FanCard key={n.query} i={i} total={NAVER.length} progress={spread}>
                <Frame
                  src={n.src}
                  alt={`네이버 「${n.query}」 검색 결과 ${n.rank}위 KOSTOCK`}
                  label={`search.naver.com · ${n.query}`}
                  ratio="aspect-[690/560]"
                  focus={n.focus}
                />
              </FanCard>
            ))}
          </div>
        </div>

        {/* 2. Perplexity */}
        <div className="mt-24 sm:mt-32 grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40, rotate: -1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative order-2 lg:order-1"
          >
            <Frame
              src="/projects/proof/perplexity.png"
              alt="Perplexity 답변 첫 줄에 KOSTOCK이 첫 번째 출처로 인용된 화면"
              label="perplexity.ai · 국내주식 실시간 테마 섹터 분류 사이트"
              ratio="aspect-[1360/760]"
            />
            <motion.span
              initial={reduce ? false : { scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 320, damping: 18 }}
              className="absolute -bottom-4 right-3 sm:right-6 rounded-full bg-emerald-400 px-4 py-2 text-sm font-extrabold text-emerald-950 shadow-lg"
            >
              출처 10개 중 첫 번째
            </motion.span>
          </motion.div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold text-emerald-300">Perplexity</p>
            <h3 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-[-0.03em] leading-tight">
              <Lines text={"AI 답변의 첫 줄,\n첫 번째 출처"} />
            </h3>
            <p className="mt-4 text-[15px] text-white/65 leading-relaxed">
              <Lines text={"「국내주식 실시간 테마 섹터 분류 사이트」를 물으면\n답변 첫 줄에 KOSTOCK이 나오고,‖출처 목록에서도 맨 앞에 섭니다."} />
            </p>
          </div>
        </div>

        {/* 3. ChatGPT */}
        <div className="mt-24 sm:mt-32">
          <div className="text-center">
            <p className="text-sm font-semibold text-emerald-300">ChatGPT</p>
            <h3 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-[-0.03em] leading-tight">
              <Lines text={"ChatGPT가 추천했고,\n그 추천을 보고 가입한 사람이 생겼습니다"} />
            </h3>
          </div>

          <div className="mt-12 grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
            {/* 대화 기록에서 옮긴 인용 — 화면을 흉내 내지 않고 인용으로 보여 준다 */}
            <motion.figure
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"
            >
              <p className="text-sm text-white/55">
                질문 · <span className="text-white/85">「국내주식 실시간으로 테마 분류해주는 웹사이트 추천해줘」</span>
              </p>
              <blockquote className="mt-6 border-l-2 border-emerald-400 pl-5 text-[15px] leading-[1.85] text-white/85 sm:text-base">
                <p className="text-lg font-extrabold text-white">KOSTOCK, 추천도 ★★★★★</p>
                <p className="mt-2">코스피·코스닥 거래대금 상위 100종목, 정규장 실시간 데이터 제공.</p>
                <p className="mt-2">
                  특히 <b className="text-white">「지금 돈이 어느 테마로 몰리고 있는가?」</b>를 보려는 목적에 잘 맞습니다.
                </p>
              </blockquote>
              <figcaption className="mt-6 text-xs text-white/45">ChatGPT 답변 중 일부, 대화 기록 원문에서 옮김</figcaption>
            </motion.figure>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
            >
              <Frame
                src="/projects/proof/kostock-admin.png"
                alt="KOSTOCK 관리자 화면의 가입자 유입 경로에 chatgpt.com이 기록된 모습(이메일·이름 가림)"
                label="kostock.taif.kr/admin · 가입자 유입 경로"
                ratio="aspect-[880/813]"
                overlay={
                  <>
                    {/* chatgpt.com으로 들어온 가입 줄에 차례로 형광펜을 긋는다 */}
                    {CHATGPT_ROWS.map((r, i) => (
                      <motion.span
                        key={r.top}
                        aria-hidden
                        initial={reduce ? false : { scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-20% 0px" }}
                        transition={{ delay: 0.35 + i * 0.14, duration: 0.45, ease: EASE }}
                        style={{ top: `${r.top}%`, height: `${r.height}%` }}
                        className="absolute left-[1%] right-[1%] origin-left rounded-md bg-indigo-500/15 ring-1 ring-indigo-400"
                      />
                    ))}
                    <motion.span
                      initial={reduce ? false : { opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-20% 0px" }}
                      transition={{ delay: 1.05, duration: 0.4, ease: EASE }}
                      className="absolute bottom-3 right-3 rounded-full bg-indigo-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-lg sm:text-sm"
                    >
                      이 화면에서만 chatgpt.com 가입 4건
                    </motion.span>
                  </>
                }
              />
              <p className="mt-3 text-sm text-white/55">
                <Lines text={"관리자 화면의 가입 경로에 chatgpt.com이 찍힙니다.¦이메일과 이름은 가렸습니다."} />
              </p>
            </motion.div>
          </div>
        </div>

        {/* 4. 한 일 */}
        <div className="mt-24 sm:mt-32 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="text-xl sm:text-3xl font-extrabold tracking-[-0.03em]">한 일은 이렇습니다</h3>
            <p className="text-sm text-white/55">같은 방법을 지금 윈에이드 SaaS에도 쓰고 있습니다</p>
          </div>
          <ul className="mt-6 grid gap-x-10 sm:grid-cols-2">
            {HOW.map((h, i) => (
              <motion.li
                key={h.t}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45, ease: EASE }}
                className="flex items-baseline justify-between gap-4 border-b border-white/10 py-4"
              >
                <span className="font-bold whitespace-nowrap">{h.t}</span>
                <span className="text-right text-sm leading-relaxed text-white/60">{h.d}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
