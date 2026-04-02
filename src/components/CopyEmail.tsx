"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="font-mono text-[11px] tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--accent-soft)] transition-colors"
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}