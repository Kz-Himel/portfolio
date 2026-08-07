"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiCheckCircle, FiCalendar, FiLayers, FiExternalLink, FiArrowUpRight, FiHash } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import MagneticButton from "./ui/MagneticButton";
import { ExperienceSection, AchievementsSection } from "./ExperienceSection";

export default function ProjectDetailPage({ params }) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  const idx = projects.findIndex((p) => p.id === id);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <main className="relative pt-28 md:pt-36 pb-20">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[680px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(139,92,246,0.22), rgba(34,211,238,0.12) 40%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 hud-panel rounded-full px-3.5 py-2 border border-white/8"
          >
            <FiArrowLeft size={14} className="text-cyan-neon group-hover:-translate-x-0.5 transition-transform" />
            <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-text-soft">
              Back to projects
            </span>
          </Link>
        </motion.div>

        {/* Header block */}
        <motion.div
          initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-14"
        >
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            {project.featured && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border border-magenta/40 text-magenta-glow bg-magenta/10">
                <span className="w-1.5 h-1.5 rounded-full bg-magenta-glow animate-pulse" />
                Featured · Case study
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider border border-cyan/25 text-cyan-neon bg-cyan/8">
              <FiCalendar size={11} />
              {project.year}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider border border-violet/25 text-violet-neon bg-violet/8">
              <FiLayers size={11} />
              {project.tags.length} technologies
            </span>
          </div>

          <h1 className="font-display font-bold tracking-tight leading-[1.02] text-text-main text-[34px] md:text-[58px] lg:text-[72px] max-w-5xl mb-5">
            {project.title}
            <span className="block w-fit mt-2 gradient-text text-[0.68em] font-semibold tracking-tighter">
              — {project.description}
            </span>
          </h1>

          <p className="text-text-soft text-[14px] md:text-[16px] leading-relaxed max-w-3xl mb-8">
            {project.longDescription}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <MagneticButton
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm"
            >
              <FiExternalLink size={14} />
              View Live
            </MagneticButton>
            <MagneticButton
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm border border-violet/30 text-violet-neon hover:bg-violet/10"
            >
              <FaGithub size={14} />
              See the Code
            </MagneticButton>
          </div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-24"
        >
          <div
            className="relative rounded-[1.6rem] overflow-hidden hud-corners border border-white/8"
            style={{
              boxShadow:
                "0 30px 80px -30px rgba(34,211,238,0.35), 0 0 0 1px rgba(255,255,255,0.04)",
            }}
          >
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(34,211,238,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.05) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                opacity: 0.5,
                mixBlendMode: "overlay",
              }}
            />
            <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#0A1328] to-[#050816]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top"
                priority
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, rgba(5,8,22,0.7) 90%, rgba(3,6,15,1) 100%)",
                }}
              />
            </div>

            {/* Scan line */}
            <motion.div
              aria-hidden
              className="absolute inset-x-0 h-[3px] pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(34,211,238,0.55), rgba(139,92,246,0.55), transparent)",
                boxShadow: "0 0 18px rgba(34,211,238,0.6)",
                top: 0,
              }}
              animate={{ top: ["0%", "100%"] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 1.2,
              }}
            />
          </div>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-16 md:mb-24">
          {/* Left: Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 space-y-6 md:space-y-8"
          >
            {/* Challenges */}
            <div className="hud-panel rounded-[1.5rem] border border-cyan/12 p-6 md:p-8 relative overflow-hidden">
              <div
                aria-hidden
                className="absolute -right-10 -top-10 w-48 h-48 rounded-full blur-3xl opacity-50 pointer-events-none"
                style={{ background: "rgba(34,211,238,0.25)" }}
              />
              <div className="relative">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-cyan-neon mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-neon shadow-[0_0_6px_var(--cyan-glow)]" />
                  // 01 · Problem
                </div>
                <h2 className="font-display font-bold text-[22px] md:text-3xl text-text-main mb-3 leading-tight">
                  The <span className="gradient-text">challenge</span>
                </h2>
                <p className="text-text-soft text-[13.5px] md:text-[15px] leading-relaxed max-w-3xl">
                  {project.challenges}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="hud-panel rounded-[1.5rem] border border-violet/14 p-6 md:p-8 relative overflow-hidden">
              <div
                aria-hidden
                className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full blur-3xl opacity-50 pointer-events-none"
                style={{ background: "rgba(139,92,246,0.25)" }}
              />
              <div className="relative">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-violet-neon mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-neon shadow-[0_0_6px_#8B5CF6]" />
                  // 02 · Solution
                </div>
                <h2 className="font-display font-bold text-[22px] md:text-3xl text-text-main mb-5 leading-tight">
                  Key <span className="gradient-text">features delivered</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {project.features.map((f, i) => (
                    <motion.div
                      key={f}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03 }}
                      className="group flex items-start gap-3 p-3.5 md:p-4 rounded-xl border border-white/6 bg-white/[0.015] hover:border-cyan/25 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <span
                        className="w-8 h-8 shrink-0 rounded-lg flex items-center justify-center mt-0.5"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(34,211,238,0.18), rgba(139,92,246,0.12))",
                          border: "1px solid rgba(34,211,238,0.3)",
                          color: "#22D3EE",
                          boxShadow: "inset 0 0 12px rgba(34,211,238,0.12)",
                        }}
                      >
                        <FiCheckCircle size={14} />
                      </span>
                      <div>
                        <div className="font-mono text-[9.5px] text-text-muted uppercase tracking-[0.18em] mb-0.5">
                          Feature · 0{i + 1}
                        </div>
                        <div className="text-[13px] md:text-[14px] text-text-main leading-snug">
                          {f}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Tech stack */}
            <div className="hud-panel rounded-[1.5rem] border border-white/8 p-5 md:p-6">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-cyan-neon mb-4 flex items-center gap-2">
                <FiHash size={11} />
                Tech stack
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="tag-neon"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Meta card */}
            <div className="hud-panel rounded-[1.5rem] border border-white/8 p-5 md:p-6 relative overflow-hidden">
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                  maskImage:
                    "radial-gradient(ellipse at top, black 30%, transparent 70%)",
                }}
              />
              <div className="relative space-y-4">
                {[
                  { l: "Year", v: project.year, c: "#22D3EE" },
                  { l: "Project ID", v: project.id, c: "#8B5CF6" },
                  { l: "Status", v: "Shipped · Live", c: "#4ADE80", dot: true },
                  {
                    l: "Type",
                    v: project.featured ? "Case Study · Featured" : "Portfolio",
                    c: "#EC4899",
                  },
                ].map((m) => (
                  <div
                    key={m.l}
                    className="flex items-start justify-between gap-3 pb-3 border-b border-white/5 last:border-b-0 last:pb-0"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-muted">
                      {m.l}
                    </span>
                    <span
                      className="text-[12px] md:text-[13px] font-medium text-right max-w-[55%] break-words"
                      style={{ color: m.c }}
                    >
                      {m.dot && (
                        <span className="relative inline-flex w-2 h-2 mr-1.5 -translate-y-0.5">
                          <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-70 animate-ping" />
                          <span className="relative inline-flex w-2 h-2 rounded-full bg-green-400" />
                        </span>
                      )}
                      {m.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action card */}
            <div className="hud-panel rounded-[1.5rem] border border-violet/20 p-5 md:p-6 relative overflow-hidden">
              <div
                aria-hidden
                className="absolute -right-12 -top-12 w-44 h-44 rounded-full blur-3xl opacity-60"
                style={{ background: "rgba(139,92,246,0.35)" }}
              />
              <div className="relative">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-violet-neon mb-2.5">
                  Liked this?
                </div>
                <h4 className="font-display font-bold text-[18px] text-text-main leading-tight mb-4">
                  Let's build your <span className="gradient-text">next project.</span>
                </h4>
                <div className="flex flex-col gap-2.5">
                  <MagneticButton
                    href="/#contact"
                    className="btn-primary inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[13px]"
                  >
                    <FiArrowUpRight size={14} />
                    Start a project
                  </MagneticButton>
                  <MagneticButton
                    href="/Khayruzzaman_Himel_CV.pdf"
                    className="btn-ghost inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[13px] border border-white/10"
                  >
                    Download Resume
                  </MagneticButton>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Prev / Next */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-20 md:mb-28">
          {[
            { proj: prev, label: "← Previous", align: "md:text-left" },
            { proj: next, label: "Next →", align: "md:text-right" },
          ].map(({ proj, label, align }) => (
            <Link
              key={proj.id}
              href={`/projects/${proj.id}`}
              className={`group relative hud-panel rounded-2xl p-5 md:p-7 border border-white/8 overflow-hidden transition-all duration-500 hover:border-cyan/25 ${align}`}
            >
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(34,211,238,0.08), transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="font-mono text-[10px] uppercase tracking-[0.26em] text-cyan-neon mb-3">
                  {label}
                </div>
                <h4 className="font-display font-bold text-[18px] md:text-[22px] text-text-main group-hover:text-white transition-colors mb-1.5 leading-tight">
                  {proj.title}
                </h4>
                <p className="text-[12.5px] text-text-muted truncate max-w-[46ch] mx-auto md:mx-0">
                  {proj.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Achievement strip */}
        <AchievementsSection />
      </div>
    </main>
  );
}
