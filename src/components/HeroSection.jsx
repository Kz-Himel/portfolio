"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FiArrowRight, FiDownload, FiMail, FiCheck, FiCopy } from "react-icons/fi";
import { personalInfo } from "@/data/portfolioData";

// Dynamic client import for subtle 3D interactive hero centerpiece
const Hero3DVisual = dynamic(() => import("./Hero3DVisual"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-square max-w-[380px] mx-auto flex items-center justify-center">
      <div className="w-32 h-32 rounded-full border border-indigo-500/20 animate-pulse" />
    </div>
  ),
});

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden scroll-mt-24">
      {/* Subtle background ambient radial gradient */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Introduction Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for new projects &amp; full-time roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
                Crafting modern, scalable web products.
              </h1>
              <p className="font-mono text-sm sm:text-base text-indigo-600 dark:text-indigo-400 font-medium">
                Khayruzzaman Himel — {personalInfo.role}
              </p>
            </div>

            {/* Concise Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/#projects" className="btn-primary text-sm">
                <span>View Projects</span>
                <FiArrowRight size={15} />
              </Link>

              <Link href="/#contact" className="btn-secondary text-sm">
                <FiMail size={15} />
                <span>Contact Me</span>
              </Link>

              <a
                href={personalInfo.resumeUrl}
                download
                className="btn-ghost text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              >
                <FiDownload size={15} />
                <span>Resume</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn-ghost text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <span className="inline-flex items-center gap-1.5 text-emerald-500 dark:text-emerald-400 font-medium">
                    <FiCheck size={14} /> Copied
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5">
                    <FiCopy size={13} /> Copy Email
                  </span>
                )}
              </button>
            </div>

            {/* Key Metrics Row */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-white/[0.08] max-w-lg">
              {personalInfo.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold font-sans text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Column (Interactive Subtle 3D Graphic) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="card-surface p-6 sm:p-8 w-full max-w-md bg-white dark:bg-[#0F172A]/70 backdrop-blur-sm border-slate-200 dark:border-white/[0.08]">
              {/* Subtle 3D interaction */}
              <Hero3DVisual />

              {/* Core stack tags under visual */}
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/[0.06] text-center space-y-2">
                <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Primary Technology Stack
                </p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {["Next.js", "React", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL", "Tailwind"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}