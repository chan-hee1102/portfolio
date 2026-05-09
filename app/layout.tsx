import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "임찬희 | 풀스택 개발자 포트폴리오",
  description:
    "Next.js, React, TypeScript, FastAPI 기반 풀스택 개발자 임찬희의 포트폴리오입니다.",
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
