"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiArrowRight, FiChevronUp } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

const filterCategories = [
  "All",
  "React",
  "Next.js",
  "TypeScript",
  "Express.js",
  "MongoDB",
  "Fullstack",
];

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
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

  const displayedProjects =
    activeCategory !== "All"
      ? filteredProjects
      : showAll
        ? projects
        : projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="projects" className="py-16 md:py-20 relative overflow-hidden">
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
          className="flex flex-wrap items-end justify-between gap-4 mb-6 md:mb-8"
        >
          <div>
            <span className="text-accent text-xs font-semibold uppercase tracking-widest">
              Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mt-1 tracking-tight">
              Things I&apos;ve Built
            </h2>
          </div>

          {/* Toggle View All / Show Less Button (শুধুমাত্র "All" ক্যাটাগরিতে দেখাবে) */}
          {activeCategory === "All" && projects.length > 3 && (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowAll((prev) => !prev)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl glass border border-white/10 text-text-main text-xs font-medium hover:border-accent/30 hover:text-accent transition-all duration-300 cursor-pointer"
            >
              <span>{showAll ? "Show Less" : "View All Projects"}</span>
              {showAll ? <FiChevronUp size={13} /> : <FiArrowRight size={13} />}
            </motion.button>
          )}
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
                className={`relative px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 cursor-pointer ${isActive
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
            {displayedProjects.map((project, i) => {
              const isFirst = i === 0;

              return (
                <motion.div
                  key={project.id || project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  whileHover={{ y: -5 }}
                  className={`group glass border border-white/8 rounded-xl overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-black/40 flex flex-col justify-between ${isFirst ? "md:col-span-2 lg:col-span-1" : "md:col-span-1"
                    }`}
                >
                  <div>
                    {/* Thumbnail Image Container */}
                    <div
                      className={`relative w-full bg-secondary/50 overflow-hidden ${isFirst ? "h-44 sm:h-48 md:h-64 lg:h-48" : "h-44 sm:h-48"
                        }`}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent opacity-80" />

                      {/* Hover Quick Link Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center gap-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-bg/40 backdrop-blur-xs">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg bg-accent text-bg hover:scale-110 transition-all duration-200 shadow-md"
                            title="Live Demo"
                          >
                            <FiExternalLink size={16} />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg glass border border-white/20 text-text-main hover:text-accent hover:border-accent/40 hover:scale-110 transition-all duration-200 shadow-md"
                            title="Source Code"
                          >
                            <FaGithub size={16} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 space-y-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-text-main font-semibold text-base group-hover:text-accent transition-colors truncate">
                          {project.title}
                        </h3>
                        {project.year && (
                          <span className="text-[11px] text-muted font-mono shrink-0">
                            {project.year}
                          </span>
                        )}
                      </div>

                      <p className="text-muted text-xs leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags?.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md text-[10px] font-medium text-accent bg-accent/10 border border-accent/15"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Live Link Direct Action */}
                  <div className="px-4 pb-4 pt-1 flex items-center justify-between">
                    {/* 1. Details Page Link */}
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors group/link font-medium"
                    >
                      <span>View Details</span>
                      <FiArrowRight
                        size={12}
                        className="group-hover/link:translate-x-1 transition-transform duration-200"
                      />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty state if category has no projects */}
        {displayedProjects.length === 0 && (
          <div className="text-center py-12 text-muted text-sm glass rounded-xl border border-white/5">
            No projects found for <span className="text-accent">{activeCategory}</span> category.
          </div>
        )}
      </div>
    </section>
  );
}