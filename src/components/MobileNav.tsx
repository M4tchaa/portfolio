"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div ref={ref} className="relative z-50">
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col gap-1.5 p-1"
        aria-label="Toggle menu"
      >
        <span className={`block h-px w-5 bg-white transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block h-px w-5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`block h-px w-5 bg-white transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
      </button>

      {/* Dropdown — rendered outside button, no overflow-hidden */}
      {open && (
        <div className="absolute right-0 top-10 w-48 border border-[var(--border-subtle)] bg-[var(--bg-primary)] rounded-xl z-50 animate-fadeUp">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-5 py-3.5 text-sm border-b border-[var(--border-subtle)] last:border-none transition-colors ${
                  isActive
                    ? "text-white bg-[var(--bg-surface)]"
                    : "text-[var(--text-muted)] hover:text-white hover:bg-[var(--bg-surface)]"
                }`}
              >
                {isActive && <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />}
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}