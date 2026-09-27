import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-chanhee.vercel.app"),
  title: "임찬희 | 1인 풀스택 개발자",
  description:
    "기획부터 디자인, 개발, 배포, 운영까지 혼자 하는 풀스택 개발자 임찬희의 포트폴리오입니다. 직접 만든 KOSTOCK은 AEO·GEO·SEO만으로 최근 한 달 동안 100명 넘게 가입했습니다.",
  openGraph: {
    title: "임찬희 | 1인 풀스택 개발자",
    description:
      "혼자 만들어 운영하는 KOSTOCK, 광고 없이 한 달 가입 100명 넘음. 지금은 윈에이드에서 병원 마케팅 SaaS를 운영합니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        {/* 한글 본문 글꼴 — 시스템 기본 글꼴(맑은 고딕)보다 자간·굵기 단계가 고르다 */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
