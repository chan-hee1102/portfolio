"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";

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
    <SectionWrapper id="contact" className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
          연락하기
        </h2>
        <p className="text-gray-500 mb-12 max-w-md mx-auto text-base leading-relaxed">
          협업 제안, 프로젝트 문의, 커피챗 모두 환영합니다.
          <br />
          편하게 연락 주세요.
        </p>

        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={handleCopy}
            aria-label="이메일 주소 복사"
            className="inline-flex items-center justify-center gap-3 min-w-[300px] px-8 py-4 rounded-2xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 active:scale-95 transition-all shadow-lg shadow-indigo-200"
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
                복사됨!
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
                {EMAIL}
              </>
            )}
          </button>
        </div>

        <p className="mt-4 text-xs text-gray-400">
          클릭하면 이메일 주소가 복사됩니다
        </p>
      </div>
    </SectionWrapper>
  );
}
