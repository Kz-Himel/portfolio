"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <div className="box group flex flex-col h-full overflow-hidden">
        
        {/* IMAGE CONTAINER */}
        <div className="relative aspect-[16/10] border-b border-border overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* BADGES */}
          {project.featured && (
            <span className="box absolute top-3 left-3 z-10 bg-bg/90 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent backdrop-blur-md">
              Featured
            </span>
          )}
          <span className="box absolute top-3 right-3 z-10 bg-bg/90 px-2 py-0.5 font-mono text-[9px] text-text-soft backdrop-blur-md">
            {project.year || "2026"}
          </span>
        </div>

        {/* CARD CONTENT */}
        <div className="p-5 flex flex-col flex-1">
          <p className="tech-tag mb-3 leading-relaxed">
            {Array.isArray(project.tags) ? project.tags.join(" ") : project.tags}
          </p>

          <Link href={`/projects/${project.id}`}>
            <h3 className="font-mono font-bold text-text-main mb-1.5 text-[17px] leading-snug hover:text-accent transition-colors">
              {project.title}
            </h3>
          </Link>

          <p className="text-text-soft leading-relaxed mb-4 text-[13px] line-clamp-2 flex-1">
            {project.description}
          </p>

          {/* 3 ACTION BUTTONS AT THE BOTTOM */}
          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border/50">
            {/* 1. Live Button */}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline justify-center text-[11.5px] px-2 py-2 text-center"
              title="Live Demo"
            >
              Live <FiExternalLink size={11} />
            </a>

            {/* 2. Repo Button */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-muted justify-center text-[11.5px] px-2 py-2 text-center"
              title="Source Code"
            >
              <FiGithub size={11} /> Repo
            </a>

            {/* 3. Details Button */}
            <Link
              href={`/projects/${project.id}`}
              className="btn-outline-muted justify-center text-[11.5px] px-2 py-2 text-center group/btn"
              title="Project Details"
            >
              Details{" "}
              <FiArrowRight
                size={11}
                className="group-hover/btn:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>
        </div>

      </div>
    </motion.div>
  );
}