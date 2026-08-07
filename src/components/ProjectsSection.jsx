"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiArrowLeft, FiGrid } from "react-icons/fi";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import ProjectCard from "./ProjectCard";
import MagneticButton from "./ui/MagneticButton";
import projects from "../data/projects";

const PAGE_SIZE = 3;

export default function ProjectsSection({ showHeading = true }) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(projects.length / PAGE_SIZE);

  const list = projects.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const handlePrev = () => {
    setPage((p) => (p - 1 + totalPages) % totalPages);
  };
  const handleNext = () => {
    setPage((p) => (p + 1) % totalPages);
  };

  return (
    <section id="projects" className="section-wrap relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
            <SectionHeader
              eyebrow="// Portfolio"
              title={
                <>
                  Featured <span className="gradient-text">Projects</span>
                </>
              }
              subtitle="A selection of premium client work and case studies — from fullstack SaaS and AI copilots to polished brand experiences. Hover, tilt, and explore."
            />
            <Reveal delay={0.1}>
              <div className="hud-panel rounded-2xl border border-violet/15 px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-violet/10 text-violet-neon border border-violet/30">
                  <FiGrid size={15} />
                </div>
                <div className="leading-tight">
                  <div className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-text-muted">
                    Total ships
                  </div>
                  <div className="font-display text-lg gradient-text leading-none font-bold">
                    {projects.length}+
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        )}

        {/* Grid — 3 per page, animated on change */}
        <div className="relative min-h-[420px] md:min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial="hidden"
              animate="show"
              exit="exit"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
                exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {list.map((project) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.94, filter: "blur(10px)" },
                    show: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                    },
                    exit: {
                      opacity: 0,
                      y: -24,
                      scale: 0.96,
                      filter: "blur(6px)",
                      transition: { duration: 0.35, ease: [0.4, 0, 1, 1] },
                    },
                  }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Prev / Next controls — right under the grid, no big gap */}
        <div className="mt-4 md:mt-5 flex items-center justify-center gap-4">
          <MagneticButton
            onClick={handlePrev}
            strength={16}
            aria-label="Previous projects"
            className="btn-ghost inline-flex items-center justify-center w-10 h-10 rounded-full border"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
          >
            <FiArrowLeft size={15} />
          </MagneticButton>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to project set ${i + 1}`}
                className="relative h-1.5 rounded-full transition-all duration-400"
                style={{
                  width: i === page ? "24px" : "8px",
                  background:
                    i === page
                      ? "linear-gradient(90deg, #22D3EE, #8B5CF6)"
                      : "rgba(148,163,184,0.25)",
                  boxShadow: i === page ? "0 0 10px rgba(34,211,238,0.5)" : "none",
                }}
              />
            ))}
          </div>

          <MagneticButton
            onClick={handleNext}
            strength={16}
            aria-label="Next projects"
            className="btn-ghost inline-flex items-center justify-center w-10 h-10 rounded-full border"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
          >
            <FiArrowRight size={15} />
          </MagneticButton>
        </div>

        {/* CTA strip */}
        {showHeading && (
          <Reveal delay={0.1}>
            <div className="mt-12 md:mt-16">
              <div className="hud-panel rounded-[1.6rem] border border-cyan/20 p-6 md:p-10 overflow-hidden relative">
                <div
                  aria-hidden
                  className="absolute -right-16 -top-16 w-[280px] h-[280px] rounded-full opacity-50 blur-[80px]"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(34,211,238,0.3), transparent 70%)",
                  }}
                />
                <div
                  aria-hidden
                  className="absolute -left-10 -bottom-10 w-[240px] h-[240px] rounded-full opacity-60 blur-[80px]"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(139,92,246,0.3), transparent 70%)",
                  }}
                />
                <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="max-w-2xl">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-neon mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-neon animate-pulse shadow-[0_0_6px_var(--cyan-glow)]" />
                      Curated library
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-2">
                      Want to explore <span className="gradient-text">all {projects.length} projects</span>?
                    </h3>
                    <p className="text-text-soft text-[13px] md:text-sm leading-relaxed">
                      Full case studies, tech deep dives, challenges solved, and feature walkthroughs — complete with filters by stack.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <MagneticButton
                      as={Link}
                      href="/projects"
                      strength={22}
                      className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[13px] md:text-sm shadow-glow-violet"
                      whileHover={{ scale: 1.04 }}
                    >
                      <FiGrid size={15} />
                      <span className="font-semibold">Open All Projects</span>
                      <FiArrowRight size={15} />
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}