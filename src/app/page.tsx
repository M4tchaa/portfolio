import Link from "next/link";
import { getProfile } from "@/lib/profile";
import { getFeaturedProjects } from "@/lib/projects";

const availabilityStyles: Record<string, { dot: string; text: string; label: string }> = {
  open: { dot: "bg-[var(--accent)] shadow-[0_0_6px_var(--accent)]", text: "text-[var(--accent-soft)]", label: "Open to work" },
  openFreelance: { dot: "bg-green-500 shadow-[0_0_6px_green-500]", text: "text-green-500", label: "Open to freelance Project" },
  busy: { dot: "bg-yellow-500", text: "text-yellow-500", label: "Limited availability" },
  closed: { dot: "bg-[var(--text-muted)]", text: "text-[var(--text-muted)]", label: "Not available" },
};

export default function Home() {
  const profile = getProfile();
  const featured = getFeaturedProjects();
  const availability = availabilityStyles[profile.availability] ?? availabilityStyles.closed;

  return (
    <section className="max-w-2xl">

      {/* Availability badge */}
      <div className="flex items-center gap-2 mb-10">
        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${availability.dot}`} />
        <span className={`font-mono text-[11px] tracking-wide ${availability.text}`}>
          {availability.label}
        </span>
      </div>

      {/* Hero */}
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
        {profile.tagline}
      </h1>
      <p className="text-[var(--text-muted)] leading-relaxed text-sm mb-8">
        {profile.bio}
      </p>

      {/* Social links */}
      <div className="flex items-center gap-6 mb-16">
        {profile.github && (
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--accent-soft)] transition-colors"
          >
            GitHub ↗
          </a>
        )}
        {profile.linkedin && (
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--accent-soft)] transition-colors"
          >
            LinkedIn ↗
          </a>
        )}
        {profile.instagram && (
          <a
            href={profile.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--accent-soft)] transition-colors hidden"
          >
            Instagram ↗
          </a>
        )}
        {profile.cv && (
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--accent-soft)] transition-colors"
          >
            CV ↗
          </a>
        )}
      </div>

      {/* Featured projects */}
      {featured.length > 0 && (
        <div>
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--accent)] mb-6">
            Featured Projects
          </p>
          <div className="grid gap-3 mb-6">
            {featured.map((project: any) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex items-start justify-between border border-[var(--border-subtle)] rounded-xl p-5 hover:border-[var(--accent)] transition-colors duration-200"
              >
                <div className="flex-1 pr-4">
                  <h3 className="text-sm font-medium mb-1">{project.title}</h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {project.description}
                  </p>
                  {project.stack?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.stack.slice(0, 3).map((tech: string) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] px-2 py-0.5 rounded border border-[var(--border-subtle)] text-[var(--text-muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <span className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors mt-0.5">
                  →
                </span>
              </Link>
            ))}
          </div>

          <Link
            href="/projects"
            className="font-mono text-[11px] tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--accent-soft)] transition-colors"
          >
            View all projects →
          </Link>
        </div>
      )}

    </section>
  );
}