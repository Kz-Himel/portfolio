"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project, isFirst = false, index = 0 }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      whileHover={{ y: -5 }}
      className={`group glass border border-white/8 rounded-xl overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-black/40 flex flex-col justify-between ${
        isFirst ? "md:col-span-2 lg:col-span-1" : "md:col-span-1"
      }`}
    >
      <div>
        {/* Thumbnail Image Container */}
        <div
          className={`relative w-full bg-secondary/50 overflow-hidden ${
            isFirst ? "h-44 sm:h-48 md:h-64 lg:h-48" : "h-44 sm:h-48"
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
        {/* Details Page Link */}
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
}