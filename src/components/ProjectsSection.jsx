"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { projects } from "@/data/projects";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

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
          className="flex flex-wrap items-end justify-between gap-4 mb-8 md:mb-10"
        >
          <div>
            <span className="text-accent text-xs font-semibold uppercase tracking-widest">
              Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mt-1 tracking-tight">
              Things I&apos;ve Built
            </h2>
          </div>

          {/* View All Projects Button -> navigates to /projects page */}
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl glass border border-white/10 text-text-main text-xs font-medium hover:border-accent/30 hover:text-accent transition-all duration-300 cursor-pointer"
            >
              <span>View All Projects</span>
              <FiArrowRight size={13} />
            </motion.button>
          </Link>
        </motion.div>

        {/* Featured Projects Grid: 1 col on mobile, 2 col on md (first item full-width on md), 3 col on lg */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {featuredProjects.map((project, i) => (
            <ProjectCard
              key={project.id || project.title}
              project={project}
              isFirst={i === 0}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}