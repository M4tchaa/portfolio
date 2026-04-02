import "./globals.css";
import NavLinks from "@/components/NavLinks";
import MobileNav from "@/components/MobileNav";
import PageTransition from "@/components/PageTransition";

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
        <div className="flex min-h-screen flex-col md:flex-row">

          {/* Mobile top bar */}
          <header className="md:hidden flex items-center justify-between border-b border-[var(--border-subtle)] px-6 py-4">
            <div>
              <h1 className="text-base font-semibold tracking-tight">Arliyandi</h1>
              <p className="text-xs text-[var(--text-muted)]">Fullstack Web Developer</p>
            </div>
            <MobileNav />
          </header>

          {/* Desktop sidebar */}
          <aside className="hidden md:flex w-64 flex-col justify-between border-r border-[var(--border-subtle)] p-8">
            <div>
              <h1 className="text-xl font-semibold tracking-tight">Arliyandi</h1>
              <p className="mt-2 text-sm text-[var(--text-muted)]">Fullstack Web Developer</p>
              <NavLinks />
            </div>
            <div className="text-xs text-[var(--text-muted)]">
              © {new Date().getFullYear()}
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 p-6 md:p-16">
            <PageTransition>
              {children}
            </PageTransition>
          </main>

        </div>
      </body>
    </html>
  );
}