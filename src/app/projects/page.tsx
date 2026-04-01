import Link from "next/link";
import { getProjects } from "@/lib/projects";

const statusStyles: Record<string, string> = {
  live: "bg-emerald-950 text-emerald-400 border border-emerald-800",
  private: "bg-zinc-900 text-zinc-400 border border-zinc-700",
  archived: "bg-yellow-950 text-yellow-500 border border-yellow-800",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight mb-2">Projects</h2>
      <p className="text-[var(--text-muted)] text-sm mb-12">
        Things I've built and shipped.
      </p>

      <div className="grid gap-4">
        {projects.map((project: any) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block border border-[var(--border-subtle)] rounded-xl p-6 hover:border-[var(--accent)] transition-colors duration-200"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-medium text-base">{project.title}</h3>
                  {project.status && (
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        statusStyles[project.status] ?? statusStyles.archived
                      }`}
                    >
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {project.description}
                </p>
                {project.stack?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.stack.map((tech: string) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-full border border-[var(--border-subtle)] text-[var(--text-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <span className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors text-lg mt-0.5">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}