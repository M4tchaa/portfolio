import { getExperience } from "@/lib/experience";

const typeStyles: Record<string, string> = {
  remote: "bg-[#0B1414] text-[var(--accent-soft)] border border-[var(--border-subtle)]",
  onsite: "bg-[#0B1414] text-[var(--text-muted)] border border-[var(--border-subtle)]",
  hybrid: "bg-[#0B1414] text-yellow-500 border border-yellow-900",
};

export default function ExperiencePage() {
  const experienceData = getExperience();
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - experienceData.startYear;

  return (
    <div className="max-w-2xl">

      {/* Header */}
      <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--accent)] mb-4">
        Experience
      </p>
      <h2 className="text-4xl font-semibold tracking-tight leading-none mb-3">
        {yearsOfExperience}+ years<br />
        <span className="text-[var(--text-muted)] font-light">building things.</span>
      </h2>
      <p className="text-sm text-[var(--text-muted)] mt-4 mb-14 leading-relaxed">
        Fullstack developer with a growing focus on machine learning and NLP systems.
      </p>

      {/* Stack sections */}
      <div className="border-t border-[var(--border-subtle)] pt-10 mb-14 space-y-6">
        {Object.entries(experienceData.stacks).map(([category, items]) => (
          <div key={category} className="flex flex-col gap-3">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--text-muted)]">
              {category}
            </p>
            <div className="flex flex-wrap gap-2">
              {(items as string[]).map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] px-3 py-1.5 rounded-[4px] border border-[var(--border-subtle)] text-[var(--text-muted)] bg-[var(--bg-surface)] hover:border-[var(--accent)] hover:text-[var(--accent-soft)] transition-all tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Journey */}
      <div className="border-t border-[var(--border-subtle)] pt-10">
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--accent)] mb-8">
          Journey
        </p>

        <div className="space-y-0">
          {experienceData.journey.map((entry: any, i: number) => (
            <div key={i} className="flex flex-col md:grid md:grid-cols-[140px_1fr] gap-2 md:gap-6 group">

              {/* Year */}
              <div className="relative md:pt-1">
                <p className="font-mono text-[10px] text-[var(--accent)] tracking-wide">
                  {entry.year}
                </p>
                {/* Timeline line — desktop only */}
                {i < experienceData.journey.length - 1 && (
                  <div className="hidden md:block absolute left-0 top-6 bottom-0 w-px bg-[var(--border-subtle)]" />
                )}
              </div>

              {/* Content */}
              <div className="pb-10 border-l border-[var(--border-subtle)] pl-4 md:border-none md:pl-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-base font-medium text-white">{entry.role}</h3>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${typeStyles[entry.type] ?? typeStyles.onsite}`}>
                    {entry.type}
                  </span>
                </div>
                <p className="text-sm text-[var(--accent-soft)] mb-1">{entry.company}</p>
                <p className="font-mono text-[10px] text-[var(--text-muted)] mb-3 tracking-wide">
                  {entry.location}
                </p>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {entry.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}