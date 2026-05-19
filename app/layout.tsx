import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-chanhee.vercel.app"),
  title: "임찬희 | 풀스택 개발자 포트폴리오",
  description:
    "Next.js, React, TypeScript, FastAPI 기반 풀스택 개발자 임찬희의 포트폴리오입니다.",
  openGraph: {
    title: "임찬희 | 풀스택 개발자 포트폴리오",
    description:
      "데이터 전공에서 풀스택 개발자로 — KOSTOCK Pro, 에이드온 AI Agent까지 솔로로 만들어온 프로젝트들.",
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
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
