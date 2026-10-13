"use client";

import Link from "next/link";

export default function Logo({ onClick }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex items-center gap-2.5 select-none group"
      aria-label="Khayruzzaman Himel — Home"
    >
      <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:border-indigo-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20 transition-all shadow-2xs">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6L12 2L20 6V18L12 22L4 18V6Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11V22M12 11L20 6M12 11L4 6"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className="font-sans font-bold text-sm tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors">
          Khayruzzaman Himel
        </span>
        <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 tracking-wider uppercase -mt-0.5">
          Fullstack Developer
        </span>
      </div>
    </Link>
  );
}