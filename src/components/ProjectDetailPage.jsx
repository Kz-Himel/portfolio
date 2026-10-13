"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { projects } from "@/data/portfolioData";

import {
  FiArrowLeft,
  FiCalendar,
  FiExternalLink,
  FiGithub,
  FiCheckCircle,
  FiCode,
  FiServer,
  FiLayers,
} from "react-icons/fi";

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params?.id;

  const project = projects.find((p) => String(p.id) === String(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-bg text-slate-900 dark:text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-md">
          The requested project record could not be located in the catalog.
        </p>
        <Link href="/projects" className="btn-primary text-sm">
          <FiArrowLeft className="w-4 h-4" />
          <span>Back to Projects Archive</span>
        </Link>
      </div>
    );
  }

  const liveUrl = project.live || project.liveUrl;
  const clientRepo = project.clientRepoUrl || project.github || project.githubUrl;
  const serverRepo = project.serverRepoUrl;
  const tags = project.tags || project.techStack || [];
  const descriptionText = project.longDescription || project.fullDescription || project.description;

  return (
    <div className="w-full min-h-screen bg-bg text-slate-900 dark:text-slate-100 pt-28 pb-20">
      <div className="container-custom">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors py-1.5"
          >
            <FiArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Hero Header */}
        <header className="space-y-4 mb-12 pb-8 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge-subtle">
              {project.category || "Case Study"}
            </span>
            {project.featured && (
              <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20">
                Featured Production Release
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            {project.description}
          </p>

          {project.year && (
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-2">
              <FiCalendar className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
              <span>Release Year: {project.year}</span>
            </div>
          )}
        </header>

        {/* Featured Image */}
        {project.image && (
          <div className="relative card-surface rounded-2xl mb-14 overflow-hidden aspect-[16/9] max-h-[520px] bg-slate-100 dark:bg-[#070A12]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-top"
            />
          </div>
        )}

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative */}
          <div className="lg:col-span-8 space-y-10">
            {/* Architectural Overview */}
            <section className="card-surface p-6 sm:p-8 rounded-2xl space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight border-b border-black/[0.08] dark:border-white/[0.08] pb-3">
                System Overview &amp; Architecture
              </h2>
              <div className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
                {descriptionText.split("\n\n").map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </section>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <section className="card-surface p-6 sm:p-8 rounded-2xl space-y-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight border-b border-black/[0.08] dark:border-white/[0.08] pb-3">
                  Key Capabilities &amp; Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50/80 dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                    >
                      <FiCheckCircle className="w-4 h-4 text-indigo-500 dark:text-indigo-400 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Technical Challenges */}
            {project.challenges && (
              <section className="card-surface p-6 sm:p-8 rounded-2xl space-y-3">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                  Technical Obstacles &amp; Solutions
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.challenges}
                </p>
              </section>
            )}
          </div>

          {/* Right Sidebar Assets & Links */}
          <div className="lg:col-span-4 space-y-6">
            {/* Deployments & Repositories */}
            <div className="card-surface p-6 sm:p-7 rounded-2xl space-y-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-black/[0.08] dark:border-white/[0.08] pb-3">
                Live Deployment &amp; Code
              </h3>

              <div className="space-y-3">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-between text-xs sm:text-sm !py-3"
                  >
                    <span>Launch Live Demo</span>
                    <FiExternalLink size={14} />
                  </a>
                )}

                {clientRepo && (
                  <a
                    href={clientRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full justify-between text-xs sm:text-sm !py-3"
                  >
                    <span className="flex items-center gap-2">
                      <FiCode size={14} className="text-indigo-500 dark:text-indigo-400" />
                      Client Repository
                    </span>
                    <FiGithub size={14} />
                  </a>
                )}

                {serverRepo && (
                  <a
                    href={serverRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full justify-between text-xs sm:text-sm !py-3"
                  >
                    <span className="flex items-center gap-2">
                      <FiServer size={14} className="text-indigo-500 dark:text-indigo-400" />
                      Server Repository
                    </span>
                    <FiGithub size={14} />
                  </a>
                )}
              </div>
            </div>

            {/* Technologies */}
            {tags.length > 0 && (
              <div className="card-surface p-6 sm:p-7 rounded-2xl space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-black/[0.08] dark:border-white/[0.08] pb-3">
                  <FiLayers className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                  <span>Stack Architecture</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 font-mono text-xs rounded-md bg-slate-100 dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}