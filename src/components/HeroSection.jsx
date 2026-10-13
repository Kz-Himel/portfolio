"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiMail, FiCheck, FiCopy } from "react-icons/fi";
import { personalInfo } from "@/data/portfolioData";

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

          {/* Right Visual Column (Animated Profile Image) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="card-surface p-5 sm:p-7 w-full max-w-md bg-white dark:bg-[#0F172A]/70 backdrop-blur-sm border-slate-200 dark:border-white/[0.08]">
              
              {/* Animated Profile Image Centerpiece */}
              <div className="relative w-full max-w-[340px] sm:max-w-[360px] mx-auto py-3">
                {/* Ambient glowing backdrop aura */}
                <div
                  className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/25 via-purple-500/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-75 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Floating motion container */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative group"
                >
                  {/* Subtle animated border glow on hover */}
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500/40 via-purple-500/30 to-emerald-500/40 opacity-40 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

                  {/* Main Image Frame */}
                  <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#090D16] border border-slate-200 dark:border-white/[0.1] shadow-xl">
                    <Image
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      fill
                      priority
                      sizes="(max-width: 1024px) 340px, 360px"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gentle gradient overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>

                  {/* Floating Micro Badge - Status */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-3 -right-2 sm:-right-3 z-10 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-md border border-emerald-500/30 dark:border-emerald-400/30 shadow-lg flex items-center gap-2"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[11px] font-mono font-medium text-slate-800 dark:text-slate-200">
                      Available for hire
                    </span>
                  </motion.div>

                  {/* Floating Micro Badge - Role / Tech */}
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -bottom-3 -left-2 sm:-left-3 z-10 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-md border border-indigo-500/30 dark:border-indigo-400/30 shadow-lg flex items-center gap-2"
                  >
                    <span className="text-xs text-indigo-500 dark:text-indigo-400">⚡</span>
                    <span className="text-[11px] font-mono font-medium text-slate-800 dark:text-slate-200">
                      MERN &amp; Next.js
                    </span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Core stack tags under visual */}
              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/[0.06] text-center space-y-2">
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