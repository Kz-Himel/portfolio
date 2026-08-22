"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <div className="box flex flex-col h-full overflow-hidden">
        <div className="relative aspect-[16/10] border-b border-border overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {project.featured && (
            <span className="box absolute top-3 left-3 bg-bg px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent">
              Featured
            </span>
          )}
          <span className="box absolute top-3 right-3 bg-bg px-2 py-0.5 font-mono text-[9px] text-text-soft">
            {project.year || "2026"}
          </span>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <p className="tech-tag mb-3 leading-relaxed">{project.tags.join(" ")}</p>

          <Link href={`/projects/${project.id}`}>
            <h3 className="font-mono font-bold text-text-main mb-1.5 text-[17px] leading-snug hover:text-accent transition-colors">
              {project.title}
            </h3>
          </Link>

          <p className="text-text-soft leading-relaxed mb-4 text-[13px] line-clamp-2 flex-1">
            {project.description}
          </p>

          <div className="flex items-center gap-2">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex-1 justify-center text-[12.5px] px-3 py-2"
            >
              Live <FiExternalLink size={12} />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-muted flex-1 justify-center text-[12.5px] px-3 py-2"
            >
              <FiGithub size={12} /> Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}