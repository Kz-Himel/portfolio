"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/portfolioData";

const categories = ["All", "Fullstack", "Frontend", "AI / LLM"];

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 35 : dir < 0 ? -35 : 0,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: (dir) => ({
    x: dir > 0 ? -35 : dir < 0 ? 35 : 0,
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => {
          const haystack = [
            p.category || "",
            p.type || "",
            ...(p.tags || []),
            p.description || "",
          ].join(" ").toLowerCase();

          if (activeCategory === "AI / LLM") {
            return (
              haystack.includes("ai") ||
              haystack.includes("generative") ||
              haystack.includes("llm")
            );
          }
          if (activeCategory === "Fullstack") {
            return (
              haystack.includes("mongodb") ||
              haystack.includes("postgresql") ||
              haystack.includes("express") ||
              haystack.includes("node")
            );
          }
          if (activeCategory === "Frontend") {
            return (
              haystack.includes("react") ||
              haystack.includes("next.js") ||
              haystack.includes("tailwind")
            );
          }
          return true;
        });

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / 3));

  // Current 3 visible cards
  const startIndex = page * 3;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + 3);
  const bigProject = currentProjects[0];
  const bottomProjects = currentProjects.slice(1);

  const handlePrev = () => {
    if (totalPages <= 1) return;
    setDirection(-1);
    setPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    if (totalPages <= 1) return;
    setDirection(1);
    setPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setPage(0);
    setDirection(0);
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-slate-200 dark:border-white/[0.06] scroll-mt-20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="badge-subtle">
              Selected Works
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Featured Projects &amp; Systems
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Production-ready web applications, SaaS tools, and AI prompt platforms built with
              modern fullstack architectures.
            </p>
          </div>

          <Link
            href="/projects"
            className="btn-secondary text-sm self-start md:self-auto shrink-0"
          >
            <span>View All ({projects.length})</span>
            <FiArrowRight size={14} />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200 dark:border-white/[0.06]">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? "bg-indigo-600 text-white font-semibold shadow-sm"
                    : "bg-slate-100 dark:bg-[#0F172A] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-white/[0.06] hover:border-slate-300 dark:hover:border-white/[0.12]"
                }`}
              >
                {cat}
              </button>
            );
          })}
          <span className="font-mono text-xs text-slate-500 ml-auto hidden sm:inline">
            Showing {filteredProjects.length} projects
          </span>
        </div>

        {/* 3 Active Projects Showcase with Smooth Slide Animation */}
        <div className="relative overflow-hidden min-h-[500px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`${activeCategory}-${page}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="space-y-6"
            >
              {/* 1. Big Card (takes full section width) */}
              {bigProject && (
                <ProjectCard project={bigProject} isBig={true} />
              )}

              {/* 2. Bottom 2 Cards */}
              {bottomProjects.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {bottomProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} isBig={false} />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Pagination & Arrow Navigation Buttons */}
        {totalPages > 1 && (
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200/80 dark:border-white/[0.06]">
            {/* Page Count Info */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                Page <span className="font-bold text-slate-900 dark:text-white">{String(page + 1).padStart(2, "0")}</span> of <span className="font-medium text-slate-700 dark:text-slate-300">{String(totalPages).padStart(2, "0")}</span>
              </span>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Showing {startIndex + 1}–{Math.min(startIndex + 3, filteredProjects.length)} of {filteredProjects.length}
              </span>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setDirection(idx > page ? 1 : -1);
                    setPage(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === page
                      ? "w-8 bg-indigo-600 dark:bg-indigo-500"
                      : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                  }`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-white/[0.1] text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-500/10 transition-all shadow-xs active:scale-95 cursor-pointer flex items-center justify-center"
                aria-label="Previous 3 projects"
                title="Previous projects"
              >
                <FiChevronLeft size={19} />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-white/[0.1] text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-500/10 transition-all shadow-xs active:scale-95 cursor-pointer flex items-center justify-center"
                aria-label="Next 3 projects"
                title="Next projects"
              >
                <FiChevronRight size={19} />
              </button>
            </div>
          </div>
        )}

        {/* Bottom Catalog Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-white dark:bg-[#0F172A]/80 border border-slate-200/90 dark:border-white/[0.08] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Want to see detailed case studies?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Browse the complete repository of {projects.length} projects with architectural highlights.
            </p>
          </div>
          <Link href="/projects" className="btn-primary shrink-0">
            <span>Browse Full Catalog</span>
            <FiArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}