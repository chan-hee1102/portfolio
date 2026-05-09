import SectionWrapper from "@/components/ui/SectionWrapper";

const categories = [
  {
    title: "Frontend",
    accent: "text-dark-violet bg-whisper-cloud border-active-lavender",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    accent: "text-electric-blue bg-whisper-cloud border-active-lavender",
    skills: ["FastAPI", "Python", "PostgreSQL", "REST API", "SQLAlchemy"],
  },
  {
    title: "AI & Data",
    accent: "text-purple-heart bg-whisper-cloud border-active-lavender",
    skills: ["Claude API", "Claude Code", "Pandas", "Supabase", "SSE"],
  },
  {
    title: "Infra",
    accent: "text-carbon-gray bg-whisper-cloud border-active-lavender",
    skills: ["Docker", "Railway", "Cloudflare Tunnel", "Git", "Linux"],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="py-24 px-4 bg-canvas-ice">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-purple-heart uppercase mb-3">
            Tech Stack
          </p>
          <h2
            className="font-display font-bold text-charcoal-black"
            style={{ fontSize: "32px", letterSpacing: "-0.004em", lineHeight: 1.12 }}
          >
            기술 스택
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-surface-frost border border-slate-border p-4 transition-all hover:border-active-lavender"
              style={{
                borderRadius: "16px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 20px 0px",
              }}
            >
              <span
                className={`inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 mb-5 border ${cat.accent}`}
                style={{ borderRadius: "90px" }}
              >
                {cat.title}
              </span>
              <div className="flex flex-col gap-2.5">
                {cat.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2.5 text-sm text-carbon-gray">
                    <span className="h-1 w-1 rounded-full bg-orchid-glow flex-shrink-0" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
