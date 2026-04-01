import { getProjectBySlug, getProjects } from "@/lib/projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

const statusStyles: Record<string, { dot: string; text: string }> = {
  live: { dot: "bg-[var(--accent)] shadow-[0_0_6px_var(--accent)]", text: "text-[var(--accent-soft)]" },
  private: { dot: "bg-[var(--text-muted)]", text: "text-[var(--text-muted)]" },
  archived: { dot: "bg-yellow-500", text: "text-yellow-500" },
};

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((p: any) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let project: any;
  try {
    project = getProjectBySlug(slug);
  } catch {
    notFound();
  }

  const status = project.status ?? "archived";
  const style = statusStyles[status] ?? statusStyles.archived;

  return (
    <div className="max-w-2xl">

      {/* Back */}
      <Link
        href="/projects"
        className="font-mono text-[11px] tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--accent-soft)] transition-colors mb-12 inline-flex items-center gap-2 opacity-70 hover:opacity-100"
      >
        ← projects
      </Link>

      {/* Eyebrow */}
      <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--accent)] mb-4">
        Case Study
      </p>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-none mb-7">
        {project.title}
      </h1>

      {/* Meta strip */}
      <div className="flex flex-wrap items-center border-t border-b border-[var(--border-subtle)] py-3 mb-10">
        <div className="flex items-center gap-2 px-4 border-r border-[var(--border-subtle)] first:pl-0">
          <span className={`w-2 h-2 rounded-full flex-shrink-0 ${style.dot}`} />
          <span className={`text-xs ${style.text}`}>{status}</span>
        </div>
        {project.role && (
          <div className="flex items-center px-4 border-r border-[var(--border-subtle)]">
            <span className="text-xs text-[var(--text-muted)]">{project.role}</span>
          </div>
        )}
        {project.date && (
          <div className="flex items-center px-4">
            <span className="text-xs text-[var(--text-muted)]">
              {new Date(project.date).getFullYear()}
            </span>
          </div>
        )}
      </div>

      {/* MDX Content */}
      <div className="border-l-2 border-[var(--border-subtle)] pl-6 mb-10
        prose prose-invert prose-sm max-w-none
        prose-headings:font-mono prose-headings:text-[11px] prose-headings:tracking-[0.14em] prose-headings:uppercase prose-headings:text-[var(--text-muted)] prose-headings:mt-6 prose-headings:mb-2
        prose-p:text-[var(--text-muted)] prose-p:leading-relaxed prose-p:text-sm
        prose-li:text-[var(--text-muted)] prose-li:text-sm
        prose-strong:text-white">
        <MDXRemote source={project.content} />
      </div>

      {/* Tech Stack */}
      {project.stack?.length > 0 && (
        <div className="mb-10">
          <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--accent)] mb-4">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech: string) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-3 py-1.5 rounded-[4px] border border-[var(--border-subtle)] text-[var(--text-muted)] bg-[var(--bg-surface)] hover:border-[var(--accent)] hover:text-[var(--accent-soft)] transition-all tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Live Link */}
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-[6px] border border-[var(--accent)] text-[var(--accent-soft)] text-sm font-medium hover:text-white hover:border-[var(--accent-soft)] transition-all duration-200 group relative overflow-hidden"
        >
          <span className="relative z-10">View Live Site</span>
          <span className="relative z-10 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
        </a>
      )}
    </div>
  );
}