import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Arliyandi | Portfolio",
  description: "Fullstack Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="hidden md:flex w-64 flex-col justify-between border-r border-[var(--border-subtle)] p-8">
            <div>
              <h1 className="text-xl font-semibold tracking-tight">
                Arliyandi
              </h1>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Fullstack Web Developer
              </p>

              <nav className="mt-12 space-y-4 text-sm">
                <Link href="/" className="block hover:text-[var(--accent)]">
                  Home
                </Link>
                <Link href="/projects" className="block hover:text-[var(--accent)]">
                  Projects
                </Link>
                <Link href="/experience" className="block hover:text-[var(--accent)]">
                  Experience
                </Link>
                <Link href="/contact" className="block hover:text-[var(--accent)]">
                  Contact
                </Link>
              </nav>
            </div>

            <div className="text-xs text-[var(--text-muted)]">
              © {new Date().getFullYear()}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-8 md:p-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}