"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";
import PageHero from "./ui/PageHero";
import MagneticButton from "./ui/MagneticButton";

const categories = [
  "All",
  "Fullstack",
  "Frontend",
  "AI / LLM",
  "SaaS",
  "Dashboard",
  "Landing",
];

export default function AllProjectsPage() {
  const [cat, setCat] = useState("All");

  const filtered =
    cat === "All"
      ? projects
      : projects.filter((p) =>
          (p.category || p.type || "").toLowerCase().includes(cat.toLowerCase())
        );

  return (
    <main className="relative">
      <PageHero
        eyebrow="// Works · Case Studies"
        title="All of my"
        highlight="projects, together"
        subtitle="11+ production apps — from SaaS dashboards and landing pages to AI copilots and fullstack MERN products. Filter by category, explore freely."
        stats={[
          { value: "11", label: "Total projects", color: "#22D3EE" },
          { value: "6", label: "MERN / Fullstack", color: "#8B5CF6" },
          { value: "3", label: "AI + LLM products", color: "#EC4899" },
          { value: "12+", label: "Happy clients", color: "#4ADE80" },
        ]}
      />

      <section className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 md:mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const active = cat === c;
              return (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className="relative rounded-full px-3.5 md:px-4 py-2 font-mono text-[10.5px] md:text-[11px] uppercase tracking-[0.18em] transition-colors"
                  style={{
                    color: active ? "#020617" : "#94A3B8",
                  }}
                >
                  {active && (
                    <motion.span
                      layoutId="projectFilterPill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg, #22D3EE, #8B5CF6)",
                        boxShadow:
                          "0 0 22px rgba(34,211,238,0.45), inset 0 -2px 0 rgba(255,255,255,0.35)",
                      }}
                      transition={{ type: "spring", stiffness: 220, damping: 22 }}
                    />
                  )}
                  <span className="relative z-10">{c}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-neon shadow-[0_0_6px_var(--cyan-glow)] animate-pulse" />
            {filtered.length} case studies
          </div>
        </div>

        <AnimatePresence mode="wait">
  <motion.div
    key={cat}
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -14 }}
    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
  >
    {filtered.map((p) => (
      <ProjectCard key={p.id} project={p} />
    ))}

    {filtered.length === 0 && (
      <div className="sm:col-span-2 lg:col-span-3 text-center py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-muted mb-2">
          No projects in {cat} yet
        </p>
        <button
          onClick={() => setCat("All")}
          className="text-cyan-neon hover:underline text-sm"
        >
          View all projects →
        </button>
      </div>
    )}
  </motion.div>
</AnimatePresence>

        {/* Bottom CTA */}
        <div className="relative mt-16 md:mt-24 text-center">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, rgba(139,92,246,0.12), transparent 60%)",
              filter: "blur(20px)",
            }}
          />
          <div className="hud-panel rounded-3xl border border-white/8 p-8 md:p-12 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-[100px] opacity-50"
              style={{
                background:
                  "radial-gradient(circle, rgba(34,211,238,0.45), rgba(139,92,246,0.3) 50%, transparent 70%)",
              }}
            />
            <div className="relative">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.3em] text-cyan-neon mb-3 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-neon animate-pulse shadow-[0_0_6px_var(--cyan-glow)]" />
                Got an idea?
              </div>
              <h3 className="font-display font-bold text-text-main text-[26px] md:text-[36px] leading-tight max-w-2xl mx-auto mb-5">
                Let's make the <span className="gradient-text">next one</span> yours.
              </h3>
              <p className="text-text-soft text-[13.5px] md:text-[14.5px] max-w-xl mx-auto mb-7 leading-relaxed">
                From concept to production — I'll handle the frontend, fullstack,
                animations, and deploy. All you need to bring is the brief.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <MagneticButton
                  className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm"
                  href="/#contact"
                >
                  Start a project
                </MagneticButton>
                <MagneticButton
                  className="btn-ghost inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm"
                  href="/Khayruzzaman_Himel_CV.pdf"
                >
                  Download Resume
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}