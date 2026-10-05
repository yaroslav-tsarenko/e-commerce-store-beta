"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyValueProps {
  value: string;
  label?: string;
}

export function CopyValue({ value, label }: CopyValueProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={`Copy ${label ?? value}`}
      aria-label={`Copy ${label ?? value}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.375rem",
        padding: "0.125rem 0.375rem",
        margin: "0 -0.375rem",
        border: "1px solid transparent",
        borderRadius: 4,
        background: "transparent",
        color: "var(--admin-text)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.8125rem",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--admin-border-hover)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "transparent"; }}
    >
      {value}
      {copied
        ? <Check size={12} color="var(--admin-success)" />
        : <Copy size={12} color="var(--admin-text-muted)" />}
    </button>
  );
}
