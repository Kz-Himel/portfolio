"use client";

import Link from "next/link";
import { FiArrowRight, FiGrid } from "react-icons/fi";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import ProjectCard from "./ProjectCard";
import MagneticButton from "./ui/MagneticButton";
import projects from "../data/projects";

const bentoSizes = ["xl", "md", "sm", "lg", "md", "md"];

export default function ProjectsSection({ limit = 6, showHeading = true }) {
  const list = projects.slice(0, limit);

  return (
    <section id="projects" className="section-wrap relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
            <SectionHeader
              eyebrow="// Portfolio"
              title={
                <>
                  Featured <span className="gradient-text">Projects</span> · Bento
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

        {/* Bento grid */}
        <Reveal delay={0.05} y={30} blur>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 auto-rows-auto md:auto-rows-[220px]">
            {list.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                bento={bentoSizes[i % bentoSizes.length]}
              />
            ))}
          </div>
        </Reveal>

        {/* CTA strip */}
        {showHeading && (
          <Reveal delay={0.25}>
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