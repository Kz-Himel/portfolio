"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import SectionHeader from "./ui/SectionHeader";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const PAGE_SIZE = 3;

export default function ProjectsSection({ showHeading = true }) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(projects.length / PAGE_SIZE);

  const list = projects.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const handlePrev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const handleNext = () => setPage((p) => (p + 1) % totalPages);

  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {showHeading && (
          <SectionHeader
            tag="projects"
            action={
              <Link
                href="/projects"
                className="ml-auto flex items-center gap-1.5 font-mono text-[13px] text-text-soft hover:text-accent transition-colors whitespace-nowrap"
              >
                View all
                <FiArrowRight size={13} />
              </Link>
            }
          />
        )}

        <div className="relative min-h-[420px] md:min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial="hidden"
              animate="show"
              exit="exit"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
                exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {list.map((project) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                    exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
                  }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            aria-label="Previous projects"
            className="box w-9 h-9 flex items-center justify-center text-text-soft hover:text-accent hover:border-accent transition-colors"
          >
            <FiArrowLeft size={14} />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to project set ${i + 1}`}
                className="h-[3px] transition-all duration-300"
                style={{
                  width: i === page ? "20px" : "8px",
                  background: i === page ? "var(--accent)" : "var(--border)",
                }}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next projects"
            className="box w-9 h-9 flex items-center justify-center text-text-soft hover:text-accent hover:border-accent transition-colors"
          >
            <FiArrowRight size={14} />
          </button>
        </div>

        {showHeading && (
          <div className="mt-14">
            <div className="box flex flex-col md:flex-row items-start md:items-center justify-between gap-5 p-6 md:p-8">
              <div className="max-w-xl">
                <h3 className="font-mono font-bold text-xl text-text-main mb-1.5">
                  Want to explore all <span className="text-accent">{projects.length} projects</span>?
                </h3>
                <p className="text-text-soft text-[13px] leading-relaxed">
                  Full case studies, tech deep dives, and feature walkthroughs — with filters by stack.
                </p>
              </div>
              <Link href="/projects" className="btn-outline shrink-0">
                Open all projects
                <FiArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}