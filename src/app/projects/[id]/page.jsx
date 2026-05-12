"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Github, ArrowLeft, CheckCircle } from "lucide-react";
import { use } from "react";

export default function ProjectDetailPage({ params }) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  return (
    <div className="pt-28 pb-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors text-sm mb-8 group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            All Projects
          </Link>
        </motion.div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-accent/15 via-secondary to-purple-500/15"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[10rem] font-bold text-white/5" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              {project.title.charAt(0)}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              {project.featured && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent text-bg mb-2 inline-block">
                  Featured Project
                </span>
              )}
              <h1 className="text-text-main text-3xl md:text-4xl font-bold">{project.title}</h1>
            </div>
            <div className="flex gap-3">
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-bg text-sm font-semibold"
              >
                <ExternalLink size={14} />
                Live Demo
              </motion.a>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/10 text-text-main text-sm font-semibold"
              >
                <Github size={14} />
                GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass border border-white/8 rounded-2xl p-6 space-y-4"
            >
              <h2 className="text-text-main font-bold text-xl">Overview</h2>
              <p className="text-muted leading-relaxed">{project.longDescription}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass border border-white/8 rounded-2xl p-6 space-y-4"
            >
              <h2 className="text-text-main font-bold text-xl">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-muted text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass border border-white/8 rounded-2xl p-6 space-y-4"
            >
              <h2 className="text-text-main font-bold text-xl">Challenges & Solutions</h2>
              <p className="text-muted leading-relaxed text-sm">{project.challenges}</p>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass border border-white/8 rounded-2xl p-5 space-y-4"
            >
              <h3 className="text-text-main font-bold">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium text-accent bg-accent/10 border border-accent/15">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass border border-white/8 rounded-2xl p-5 space-y-3"
            >
              <h3 className="text-text-main font-bold">Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">Year</span>
                  <span className="text-text-main">{project.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Type</span>
                  <span className="text-text-main">Personal Project</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-3"
            >
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-accent text-bg text-sm font-semibold hover:bg-soft-accent transition-all">
                <ExternalLink size={15} /> Live Demo
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl glass border border-white/10 text-text-main text-sm font-semibold hover:border-accent/30 transition-all">
                <Github size={15} /> View Source
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}