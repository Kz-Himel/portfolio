"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";
import TiltCard from "./ui/TiltCard";

export default function ProjectCard({ project }) {
  const maxTags = 4;
  const visibleTags = project.tags.slice(0, maxTags);
  const extraTagCount = project.tags.length - visibleTags.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="aspect-[4/3]"
    >
      <TiltCard max={9} strength={8} glare className="h-full">
        <div className="group relative h-full rounded-[1.35rem] overflow-hidden hud-panel border border-cyan/15 shadow-[0_22px_70px_-22px_rgba(139,92,246,0.35)] transition-all duration-500 hover:border-cyan/35 hover:shadow-[0_30px_80px_-22px_rgba(6,182,212,0.45)] flex flex-col">
          {/* Thumb */}
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.06]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Stronger, more consistent scrim so text is ALWAYS readable, not just on hover */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(5,8,22,0.15) 0%, rgba(5,8,22,0.55) 45%, rgba(5,8,22,0.96) 100%)",
              }}
            />
            {/* Grid overlay - hover only decoration */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500 mix-blend-overlay"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <motion.div
              aria-hidden
              className="absolute left-0 right-0 h-20 pointer-events-none opacity-0 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(180deg, transparent, rgba(34,211,238,0.25), transparent)",
                filter: "blur(3px)",
              }}
              animate={{ top: ["-20%", "120%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* HUD corners */}
          <span className="absolute top-3 left-3 z-20 w-5 h-5 border-t-2 border-l-2 border-cyan-neon pointer-events-none" style={{ filter: "drop-shadow(0 0 4px rgba(34,211,238,0.8))" }} />
          <span className="absolute top-3 right-3 z-20 w-5 h-5 border-t-2 border-r-2 border-violet-neon pointer-events-none" style={{ filter: "drop-shadow(0 0 4px rgba(167,139,250,0.8))" }} />
          <span className="absolute bottom-3 left-3 z-20 w-5 h-5 border-b-2 border-l-2 border-magenta-glow pointer-events-none" style={{ filter: "drop-shadow(0 0 4px rgba(236,72,153,0.8))" }} />
          <span className="absolute bottom-3 right-3 z-20 w-5 h-5 border-b-2 border-r-2 border-cyan-neon pointer-events-none" style={{ filter: "drop-shadow(0 0 4px rgba(34,211,238,0.8))" }} />

          {/* Top bar meta */}
          <div className="absolute top-0 left-0 right-0 z-20 p-4 md:p-5 flex items-start justify-between">
            <div className="flex flex-wrap gap-1.5">
              {project.featured && (
                <div className="hud-panel rounded-full px-2.5 py-1 border border-cyan/35 text-[9px] font-mono uppercase tracking-[0.18em] text-cyan-neon flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-cyan-neon animate-pulse" />
                  Featured
                </div>
              )}
              <div className="hud-panel rounded-full px-2.5 py-1 border border-violet/25 text-[9px] font-mono uppercase tracking-[0.18em] text-violet-neon">
                {project.year || "2026"}
              </div>
            </div>

            {/* Live + GitHub — ALWAYS visible now, not hover-only. This is what users actually click. */}
            <div className="flex items-center gap-1.5">
              <arguments
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source on GitHub"
                title="View source on GitHub"
                className="w-8 h-8 md:w-9 md:h-9 rounded-xl hud-panel border border-white/15 flex items-center justify-center text-text-main hover:text-white hover:border-cyan/50 hover:bg-cyan/10 transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                <FiGithub size={14} />
              </arguments>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open live site"
                title="Open live site"
                className="w-8 h-8 md:w-9 md:h-9 rounded-xl hud-panel border border-white/15 flex items-center justify-center text-text-main hover:text-cyan-neon hover:border-cyan/50 hover:bg-cyan/10 transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                <FiExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="relative mt-auto z-20 p-4 md:p-6 flex flex-col justify-end">
            <h3 className="font-display font-bold tracking-tight text-white mb-1.5 text-[17px] md:text-[19px] leading-[1.2]">
              {project.title}
            </h3>

            <p
              className="text-text-soft leading-relaxed mb-2.5 text-[12.5px] md:text-[13px] line-clamp-2"
              style={{ maxWidth: "42ch" }}
            >
              {project.description}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {visibleTags.map((t) => (
                <span
                  key={t}
                  className="tag-neon"
                  style={{ fontSize: "10.5px", padding: "4px 9px" }}
                >
                  {t}
                </span>
              ))}
              {extraTagCount > 0 && (
                <span
                  className="tag-neon opacity-70"
                  style={{ fontSize: "10.5px", padding: "4px 9px" }}
                >
                  +{extraTagCount} more
                </span>
              )}
            </div>

            <Link
              href={`/projects/${project.id}`}
              className="shrink-0 inline-flex items-center gap-1.5 text-[12px] md:text-[13px] font-semibold tracking-wide group/link w-fit"
            >
              <span className="relative">
                <span className="gradient-text">View Case Study</span>
                <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-gradient-to-r from-cyan-neon to-violet-neon transition-all duration-500 group-hover/link:w-full" />
              </span>
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-cyan/10 border border-cyan/25 text-cyan-neon transition-all duration-300 translate-x-0 group-hover/link:translate-x-1">
                <FiArrowRight size={10} />
              </span>
            </Link>
          </div>

          {/* Animated border pulse on hover */}
          <motion.div
            aria-hidden
            className="absolute inset-0 pointer-events-none rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            animate={{
              boxShadow: [
                "0 0 0 1px rgba(34,211,238,0.15), 0 0 40px rgba(34,211,238,0.1)",
                "0 0 0 1px rgba(139,92,246,0.25), 0 0 60px rgba(139,92,246,0.15)",
                "0 0 0 1px rgba(34,211,238,0.15), 0 0 40px rgba(34,211,238,0.1)",
              ],
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </TiltCard>
    </motion.div>
  );
}