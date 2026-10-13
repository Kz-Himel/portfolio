"use client";

import Link from "next/link";
import Image from "next/image";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";

export default function ProjectCard({ project, isBig = false }) {
  const liveUrl = project.live || project.liveUrl;
  const githubUrl = project.github || project.clientRepoUrl || project.githubUrl;

  if (isBig) {
    return (
      <article className="card-surface group overflow-hidden hover:shadow-card-hover transition-all duration-300 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left / Top: Large Showcase Image */}
          <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto min-h-[260px] sm:min-h-[320px] lg:min-h-[390px] w-full overflow-hidden bg-slate-100 dark:bg-[#090D16] border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/[0.06]">
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />

            {/* Badges on image */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-600 text-white shadow-md">
                Featured Spotlight
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/95 dark:bg-[#090D16]/90 border border-slate-200 dark:border-white/[0.1] text-slate-800 dark:text-slate-200 backdrop-blur-md shadow-xs">
                {project.year || "2026"}
              </span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-9 flex flex-col justify-between gap-5">
            <div className="space-y-4">
              {/* Tech tags preview */}
              <div className="flex flex-wrap gap-1.5">
                {(project.tags || []).slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-slate-300 font-medium"
                  >
                    {tag}
                  </span>
                ))}
                {(project.tags || []).length > 5 && (
                  <span className="px-2 py-0.5 text-xs font-mono text-slate-500 font-medium">
                    +{(project.tags || []).length - 5}
                  </span>
                )}
              </div>

              {/* Title */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-sans text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  <Link href={`/projects/${project.id}`}>
                    {project.title}
                  </Link>
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-4">
                {project.description}
              </p>

              {/* Key Features preview if present */}
              {project.features && project.features.length > 0 && (
                <div className="pt-1">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    Core Capabilities
                  </p>
                  <ul className="space-y-1.5">
                    {project.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Action Buttons Row */}
            <div className="pt-5 border-t border-slate-200 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs py-2 px-4 shadow-xs"
                    title={`Open live site for ${project.title}`}
                  >
                    <span>Live Demo</span>
                    <FiExternalLink size={13} />
                  </a>
                )}

                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs py-2 px-3.5"
                    title={`View source code for ${project.title}`}
                  >
                    <FiGithub size={14} />
                    <span>Code</span>
                  </a>
                )}
              </div>

              <Link
                href={`/projects/${project.id}`}
                className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 inline-flex items-center gap-1.5 group/link py-1"
              >
                <span>Explore Details</span>
                <FiArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="card-surface group flex flex-col h-full overflow-hidden hover:shadow-card-hover transition-all duration-200">
      {/* Project Thumbnail Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-[#090D16] border-b border-slate-200 dark:border-white/[0.06]">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
        />

        {/* Status badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {project.featured ? (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-white/95 dark:bg-[#090D16]/90 border border-indigo-500/30 text-indigo-600 dark:text-indigo-300 backdrop-blur-md shadow-xs">
              Featured
            </span>
          ) : <span />}
          <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-white/95 dark:bg-[#090D16]/90 border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-400 backdrop-blur-md shadow-xs">
            {project.year || "2026"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-5">
        <div className="space-y-3">
          {/* Tech tags preview */}
          <div className="flex flex-wrap gap-1.5">
            {(project.tags || []).slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
            {(project.tags || []).length > 4 && (
              <span className="px-1.5 py-0.5 text-xs font-mono text-slate-500">
                +{(project.tags || []).length - 4}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold font-sans text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            <Link href={`/projects/${project.id}`}>
              {project.title}
            </Link>
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Action Buttons Row */}
        <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-1.5 px-3"
                title={`Open live site for ${project.title}`}
              >
                <span>Live Demo</span>
                <FiExternalLink size={12} className="text-slate-500 dark:text-slate-400" />
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-xs py-1.5 px-2.5 text-slate-600 dark:text-slate-300"
                title={`View source code for ${project.title}`}
              >
                <FiGithub size={13} />
                <span className="hidden sm:inline">Code</span>
              </a>
            )}
          </div>

          <Link
            href={`/projects/${project.id}`}
            className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 inline-flex items-center gap-1 transition-colors"
          >
            <span>Details</span>
            <FiArrowRight size={13} />
          </Link>
        </div>
      </div>
    </article>
  );
}