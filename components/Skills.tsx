import SectionWrapper from "@/components/ui/SectionWrapper";

const categories = [
  {
    title: "Frontend",
    color: "text-violet-600 bg-violet-50",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    color: "text-blue-600 bg-blue-50",
    skills: ["FastAPI", "Python", "PostgreSQL", "REST API", "SQLAlchemy"],
  },
  {
    title: "AI & Data",
    color: "text-emerald-600 bg-emerald-50",
    skills: ["Claude API", "Anthropic SDK", "Pandas", "Supabase", "SSE"],
  },
  {
    title: "Infra",
    color: "text-orange-600 bg-orange-50",
    skills: ["Docker", "Railway", "Cloudflare Tunnel", "Git", "Linux"],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            기술 스택
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-indigo-200 hover:shadow-md transition-all group"
            >
              <h3
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-5 ${cat.color}`}
              >
                {cat.title}
              </h3>
              <div className="flex flex-col gap-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2.5 text-sm text-gray-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
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
