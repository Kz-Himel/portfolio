"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 select-none group"
      aria-label="Kz Himel — home"
    >
      {/* Simple geometric mark: two offset squares, accent-colored hairline stroke.
          No gradient, no glow, no animation — matches the flat reference logo. */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect
          x="1"
          y="1"
          width="16"
          height="16"
          rx="1"
          stroke="var(--accent)"
          strokeWidth="1.5"
        />
        <rect
          x="11"
          y="11"
          width="16"
          height="16"
          rx="1"
          fill="var(--bg)"
          stroke="var(--accent)"
          strokeWidth="1.5"
        />
      </svg>

      <span className="font-mono font-semibold text-[1rem] tracking-tight text-text-main">
        Kz Himel
      </span>
    </Link>
  );
}