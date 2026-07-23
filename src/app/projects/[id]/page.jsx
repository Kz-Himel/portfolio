"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";
import Link from "next/link"; // Next.js-এর Link ইম্পোর্ট নিশ্চিত করুন
import { notFound } from "next/navigation";
import { FiExternalLink, FiArrowLeft, FiCheckCircle, FiCalendar, FiLayers } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

export default function ProjectDetailPage({ params }) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  return (
    <div className="pt-28 pb-20 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Back Link - Next.js Link ব্যবহার করা হয়েছে */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors text-sm mb-6 group cursor-pointer"
          >
            <FiArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            Back to All Projects
          </Link>
        </motion.div>

        {/* Title + Actions Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-6"
        >
          <div>
            {project.featured && (
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/20 mb-3 inline-block">
                Featured Project
              </span>
            )}
            <h1 className="text-text-main text-3xl md:text-5xl font-bold tracking-tight">
              {project.title}
            </h1>
          </div>

          <div className="flex gap-3 shrink-0">
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-bg text-sm font-semibold shadow-lg shadow-accent/25"
            >
              <FiExternalLink size={16} />
              Live Demo
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-3 rounded-xl glass border border-white/10 text-text-main text-sm font-semibold hover:border-accent/30 transition-colors"
            >
              <FaGithub size={16} />
              GitHub
            </motion.a>
          </div>
        </motion.div>

        {/* Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-10 bg-gradient-to-br from-accent/15 via-secondary to-purple-500/15 border border-white/8"
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-[10rem] font-bold text-white/5"
                style={{ fontFamily: "'Clash Display', sans-serif" }}
              >
                {project.title.charAt(0)}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main content */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass border border-white/8 rounded-2xl p-6 md:p-8 space-y-4"
            >
              <h2 className="text-text-main font-bold text-xl flex items-center gap-2">
                <span className="w-1 h-5 bg-accent rounded-full" />
                Overview
              </h2>
              <p className="text-muted leading-relaxed">{project.longDescription}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass border border-white/8 rounded-2xl p-6 md:p-8 space-y-4"
            >
              <h2 className="text-text-main font-bold text-xl flex items-center gap-2">
                <span className="w-1 h-5 bg-accent rounded-full" />
                Key Features
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 bg-white/[0.02] border border-white/5 rounded-xl p-3"
                  >
                    <FiCheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-muted text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass border border-white/8 rounded-2xl p-6 md:p-8 space-y-4"
            >
              <h2 className="text-text-main font-bold text-xl flex items-center gap-2">
                <span className="w-1 h-5 bg-accent rounded-full" />
                Challenges & Solutions
              </h2>
              <p className="text-muted leading-relaxed text-sm">{project.challenges}</p>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass border border-white/8 rounded-2xl p-6 space-y-4 lg:sticky lg:top-28"
            >
              <div>
                <h3 className="text-text-main font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wide text-muted">
                  <FiLayers size={14} />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium text-accent bg-accent/10 border border-accent/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px bg-white/8" />

              <div>
                <h3 className="text-text-main font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wide text-muted">
                  <FiCalendar size={14} />
                  Details
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted">Year</span>
                    <span className="text-text-main font-medium">{project.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Type</span>
                    <span className="text-text-main font-medium">Personal Project</span>
                  </div>
                </div>
              </div>

              <div className="h-px bg-white/8" />

              <div className="space-y-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-accent text-bg text-sm font-semibold hover:bg-soft-accent transition-all"
                >
                  <FiExternalLink size={15} /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-white/10 text-text-main text-sm font-semibold hover:border-accent/30 transition-all"
                >
                  <FaGithub size={15} /> View Source
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}