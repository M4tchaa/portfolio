"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="mt-12 space-y-1 text-sm">
      {links.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 py-1.5 transition-all duration-200 group ${
              isActive
                ? "text-white"
                : "text-[var(--text-muted)] hover:text-white"
            }`}
          >
            {/* Animated accent line */}
            <span
              className={`h-px transition-all duration-300 ease-out bg-[var(--accent)] ${
                isActive ? "w-6" : "w-0 group-hover:w-3"
              }`}
            />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}