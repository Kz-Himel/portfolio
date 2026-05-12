"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { useState } from "react";

const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags))];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(filter));

  return (
    <div className="pt-28 pb-20 px-6 min-h-screen relative">
      <div className="absolute top-0 left-0 w-80 h-80 bg-accent/6 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Projects
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-text-main mt-2">
            All Projects
          </h1>
          <p className="text-muted mt-3 max-w-lg">
            A collection of things I&apos;ve designed, built, and shipped.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {["All", "Next.js", "React", "Firebase", "Tailwind CSS"].map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                filter === tag
                  ? "bg-accent text-bg"
                  : "glass border border-white/8 text-muted hover:text-text-main hover:border-accent/20"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="group glass border border-white/8 rounded-2xl overflow-hidden hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative h-44 bg-gradient-to-br from-accent/10 via-secondary to-purple-500/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white/8" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent" />

                {/* Action buttons */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-accent/90 text-bg hover:bg-accent"
                    onClick={(e) => e.stopPropagation()}>
                    <ExternalLink size={13} />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="p-2 rounded-lg glass border border-white/20 text-text-main"
                    onClick={(e) => e.stopPropagation()}>
                    <Github size={13} />
                  </a>
                </div>

                {project.featured && (
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-xs font-medium bg-accent text-bg">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-text-main font-bold text-base">{project.title}</h3>
                  <span className="text-xs text-muted">{project.year}</span>
                </div>
                <p className="text-muted text-sm leading-relaxed line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full text-xs text-accent bg-accent/10 border border-accent/15">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors group/link">
                  Case Study <ArrowRight size={11} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}