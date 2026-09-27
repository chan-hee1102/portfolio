"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Lines from "@/components/ui/Lines";

const EMAIL = "mukkeby02@naver.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 클립보드 권한 거부 / 미지원 환경은 조용히 무시
    }
  };

  return (
    <SectionWrapper id="contact" className="py-24 sm:py-32 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm font-bold text-indigo-600 mb-3">연락</p>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-[-0.03em] mb-5">
          읽어 주셔서 감사합니다
        </h2>
        <p className="text-gray-500 mb-12 max-w-md mx-auto text-base leading-relaxed">
          <Lines text={"궁금하신 점이나 더 보고 싶은 자료가 있으시면\n메일로 연락 주세요. 빠르게 답장드리겠습니다."} />
        </p>

        <div className="mx-auto flex w-full max-w-[420px] items-stretch justify-center gap-2">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-4 font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 active:scale-95"
          >
            메일 보내기
          </a>
          <button
            type="button"
            onClick={handleCopy}
            aria-label="이메일 주소 복사"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-gray-200 px-5 py-4 text-sm font-semibold text-gray-700 transition-all hover:border-indigo-300 hover:text-indigo-600 active:scale-95"
          >
            {copied ? (
              <>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                복사됨
              </>
            ) : (
              <>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                주소 복사
              </>
            )}
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-500">{EMAIL}</p>
      </div>
    </SectionWrapper>
  );
}
