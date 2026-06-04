"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[140px] -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-text-main mt-2">
              Things I&apos;ve Built
            </h2>
          </div>
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/10 text-text-main text-sm font-medium hover:border-accent/30 transition-all"
            >
              View All <FiArrowRight size={15} />
            </motion.button>
          </Link>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group glass border border-white/8 rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 ${
                i === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Thumbnail */}
              <div className="relative h-48 bg-gradient-to-br from-accent/10 via-secondary to-purple-500/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent" />

                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-accent text-bg hover:bg-soft-accent transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg glass border border-white/20 text-text-main hover:border-accent/40 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub size={16} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-text-main font-bold text-lg leading-tight">
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted shrink-0 mt-0.5">{project.year}</span>
                </div>

                <p className="text-muted text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium text-accent bg-accent/10 border border-accent/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link to detail */}
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors pt-1 group/link"
                >
                  View Details
                  <FiArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}