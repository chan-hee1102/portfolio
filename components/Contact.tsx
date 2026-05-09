import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-4 bg-magic-dust rainbow-washes overflow-hidden"
    >
      {/* Orchid glow orb */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] opacity-20"
        style={{
          background:
            "radial-gradient(ellipse, rgba(209,125,254,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-widest text-orchid-glow uppercase mb-4">
          Get In Touch
        </p>
        <h2
          className="font-display font-bold text-white mb-5"
          style={{ fontSize: "clamp(32px, 5vw, 58px)", letterSpacing: "-0.008em", lineHeight: 1 }}
        >
          연락하기
        </h2>
        <p className="text-white/60 mb-12 max-w-md mx-auto leading-relaxed" style={{ fontSize: "16px" }}>
          협업 제안, 프로젝트 문의, 커피챗 모두 환영합니다.
          <br />
          편하게 연락 주세요.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:mukkeby99@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-4 text-sm font-semibold text-white bg-purple-heart transition-all hover:opacity-90 active:scale-95"
            style={{ borderRadius: "4px" }}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            mukkeby99@gmail.com
          </a>

          <a
            href="https://github.com/chan-hee1102"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 text-sm font-semibold text-white/90 border border-white/30 transition-all hover:border-white/60 hover:text-white active:scale-95"
            style={{ borderRadius: "90px" }}
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd" />
            </svg>
            GitHub — chan-hee1102
          </a>
        </div>
      </div>
    </section>
  );
}
