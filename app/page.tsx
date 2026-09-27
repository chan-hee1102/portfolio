import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Proof from "@/components/Proof";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";

/**
 * 순서 — 누구인지 → 어디서 일했나 → 무엇을 증명했나(검색·AI) → 무엇을 만들었나 → 도구 → 일하는 방식 → 연락.
 * 2026-09-27 개편: 경력을 프로젝트 앞으로, 검색·AI 결과 섹션 추가.
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Proof />
      <Projects />
      <Skills />
      <Philosophy />
      <Contact />
    </main>
  );
}
