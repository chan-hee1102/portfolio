import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-chanhee.vercel.app"),
  title: "임찬희 | 풀스택 개발자 · AEO·GEO·SEO",
  description:
    "서비스를 만들고, 네이버·구글·ChatGPT가 그 서비스를 찾아오게 만드는 풀스택 개발자 임찬희의 포트폴리오입니다.",
  openGraph: {
    title: "임찬희 | 풀스택 개발자 · AEO·GEO·SEO",
    description:
      "직접 만든 KOSTOCK으로 네이버 웹문서 1위, Perplexity 첫 번째 출처. 지금은 윈에이드에서 병원 AEO·GEO·SEO를 맡고 있습니다.",
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
