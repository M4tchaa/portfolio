import { getProfile } from "@/lib/profile";
import CopyEmail from "@/components/CopyEmail";

const availabilityStyles: Record<string, { dot: string; text: string; label: string; sub: string }> = {
  open: { dot: "bg-[var(--accent)] shadow-[0_0_6px_var(--accent)]", text: "text-[var(--accent-soft)]", label: "Open to work", sub: "Available for freelance & remote roles" },
  openFreelance: { dot: "bg-green-500 shadow-[0_0_6px_green-500]", text: "text-green-500", label: "Open to freelance Project", sub: "Available for freelance projects" },
  busy: { dot: "bg-yellow-500", text: "text-yellow-500", label: "Limited availability", sub: "Taking select projects only" },
  closed: { dot: "bg-[var(--text-muted)]", text: "text-[var(--text-muted)]", label: "Not available", sub: "Not taking new projects right now" },
};

export default function ContactPage() {
  const profile = getProfile();
  const availability = availabilityStyles[profile.availability] ?? availabilityStyles.closed;

  return (
    <div className="max-w-2xl">

      {/* Header */}
      <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--accent)] mb-4">
        Contact
      </p>
      <h2 className="text-4xl font-semibold tracking-tight leading-none mb-3">
        Let's work<br />
        <span className="text-[var(--text-muted)] font-light">together.</span>
      </h2>
      <p className="text-sm text-[var(--text-muted)] mt-4 mb-12 leading-relaxed">
        Have a project in mind or want to collaborate? I'd love to hear from you.
      </p>

      {/* Availability */}
      <div className="border border-[var(--border-subtle)] rounded-xl p-5 mb-10 flex items-center gap-4">
        <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${availability.dot}`} />
        <div>
          <p className={`text-sm font-medium ${availability.text}`}>{availability.label}</p>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">{availability.sub}</p>
        </div>
      </div>

      {/* Contact rows */}
      <div className="border-t border-[var(--border-subtle)] divide-y divide-[var(--border-subtle)] mb-10">

        {/* Email */}
        {profile.email && (
          <div className="flex items-center justify-between py-4">
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-[var(--text-muted)] mb-1">Email</p>
              <p className="text-sm text-white">{profile.email}</p>
            </div>
            <CopyEmail email={profile.email} />
          </div>
        )}

        {/* GitHub */}
        {profile.github && (
          <div className="flex items-center justify-between py-4">
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-[var(--text-muted)] mb-1">GitHub</p>
              <p className="text-sm text-white">{profile.github.replace("https://", "")}</p>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--accent-soft)] transition-colors"
            >
              Visit ↗
            </a>
          </div>
        )}

        {/* LinkedIn */}
        {profile.linkedin && (
          <div className="flex items-center justify-between py-4">
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-[var(--text-muted)] mb-1">LinkedIn</p>
              <p className="text-sm text-white">{profile.linkedin.replace("https://", "")}</p>
            </div>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--accent-soft)] transition-colors"
            >
              Visit ↗
            </a>
          </div>
        )}
        {profile.instagram && (
          <div className="flex items-center justify-between py-4 hidden">
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-[var(--text-muted)] mb-1">Instagram</p>
              <p className="text-sm text-white">{profile.instagram.replace("https://", "")}</p>
            </div>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--accent-soft)] transition-colors"
            >
              Visit ↗
            </a>
          </div>
        )}
        {/* CV */}
        {profile.cv && (
          <div className="flex items-center justify-between py-4">
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-[var(--text-muted)] mb-1">CV / Resume</p>
              <p className="text-sm text-white">arliyandi_cv.pdf</p>
            </div>
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--accent-soft)] transition-colors"
            >
              Download ↗
            </a>
          </div>
        )}

      </div>

      {/* Location */}
      <p className="font-mono text-[10px] tracking-widest uppercase text-[var(--text-muted)]">
        Based in {profile.location} · Available for remote work
      </p>

    </div>
  );
}