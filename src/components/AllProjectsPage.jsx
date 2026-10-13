"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiFileText } from "react-icons/fi";
import { projects, personalInfo } from "@/data/portfolioData";
import ProjectCard from "./ProjectCard";

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
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => {
          const text = [
            p.category || "",
            p.type || "",
            ...(p.tags || []),
            p.description || "",
          ].join(" ").toLowerCase();
          return text.includes(activeCategory.toLowerCase());
        });

  return (
    <div className="relative pt-28 pb-24 min-h-screen">
      <div className="container-custom">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors py-1.5"
          >
            <FiArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <header className="mb-12 pb-8 border-b border-slate-200 dark:border-white/[0.08]">
          <span className="badge-subtle mb-3 inline-block">
            Project Archive · {projects.length} Works
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            All Projects &amp; Systems
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            A comprehensive catalog of production applications spanning fullstack platforms,
            SaaS tools, AI prompt engines, e-commerce marketplaces, and client products.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 mt-6 border-t border-slate-200 dark:border-white/[0.06] max-w-md">
            <div className="card-surface p-3.5 sm:p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{projects.length}</div>
              <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">Total Works</div>
            </div>
            <div className="card-surface p-3.5 sm:p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                {projects.filter((p) => (p.tags || []).includes("MongoDB") || (p.tags || []).includes("PostgreSQL")).length}
              </div>
              <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">Fullstack / DB</div>
            </div>
            <div className="card-surface p-3.5 sm:p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {projects.filter((p) => (p.tags || []).some((t) => t.toLowerCase().includes("ai"))).length}
              </div>
              <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">AI Integrated</div>
            </div>
          </div>
        </header>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-200 dark:border-white/[0.06]">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const active = activeCategory === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActiveCategory(c)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    active
                      ? "bg-indigo-600 text-white font-semibold shadow-sm"
                      : "bg-slate-100 dark:bg-[#0F172A] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-white/[0.06] hover:border-slate-300 dark:hover:border-white/[0.12]"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>

          <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Showing {filtered.length} of {projects.length} projects
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}

            {filtered.length === 0 && (
              <div className="col-span-full text-center py-24 card-surface rounded-2xl">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  No projects found in category &quot;{activeCategory}&quot;.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveCategory("All")}
                  className="btn-secondary text-xs"
                >
                  Show all projects
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Call to Action */}
        <div className="mt-20 card-surface p-8 sm:p-12 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="badge-subtle">
              Have a Project in Mind?
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Ready to construct your next digital platform?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Available for fullstack product development, design system implementation, and performance optimization.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/#contact" className="btn-primary">
              <span>Start Discussion</span>
              <FiArrowRight size={14} />
            </Link>
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn-secondary"
            >
              <FiFileText size={14} className="text-indigo-600 dark:text-indigo-400" />
              <span>Resume</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}