import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "임찬희 | 풀스택 바이브 코더 포트폴리오",
  description:
    "데이터를 이해하고, AI로 만들고, 직접 배포하는 풀스택 바이브 코더 임찬희의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} bg-canvas-ice text-charcoal-black antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
