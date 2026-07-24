"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const filterCategories = [
  "All",
  "React",
  "Next.js",
  "TypeScript",
  "Express.js",
  "MongoDB",
  "Fullstack",
];

export default function AllProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;

    const matchesCategory =
      project.category?.toLowerCase() === activeCategory.toLowerCase();
    const matchesTags = project.tags?.some((tag) =>
      tag.toLowerCase().includes(activeCategory.toLowerCase())
    );

    return matchesCategory || matchesTags;
  });

  return (
    <section className="py-24 md:py-28 relative overflow-hidden min-h-screen">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-8"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">
            Projects
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-text-main mt-1 tracking-tight">
            All Projects
          </h1>
        </motion.div>

        {/* Category Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center gap-2 mb-8 md:mb-10"
        >
          {filterCategories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-accent border border-accent/30 bg-accent/10 shadow-sm"
                    : "text-muted glass border border-white/5 hover:text-text-main hover:border-white/20"
                }`}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid: 1 col on mobile, 2 col on md (first item full-width on md), 3 col on lg */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.id || project.title}
                project={project}
                isFirst={i === 0}
                index={i}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state if category has no projects */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-muted text-sm glass rounded-xl border border-white/5">
            No projects found for <span className="text-accent">{activeCategory}</span> category.
          </div>
        )}
      </div>
    </section>
  );
}