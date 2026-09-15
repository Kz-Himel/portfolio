"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation"; 
import projectsData from "../data/projects";
import Footer from "../components/Footer";

// Feather Icons
import { 
  FiArrowLeft, 
  FiCalendar, 
  FiClock, 
  FiUser, 
  FiExternalLink, 
  FiGithub, 
  FiCheckCircle, 
  FiStar,
  FiServer,
  FiCode,
  FiLayers,
  FiFolder
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params?.id;

  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      const found = projectsData.find((p) => String(p.id) === String(id));
      setProject(found || null);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-zinc-400 mb-6">The project you are looking for does not exist or has been removed.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen bg-transparent text-zinc-100 selection:bg-purple-500/30 selection:text-purple-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        
        {/* Back Navigation */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-800/80 transition-all text-sm font-medium mb-8 backdrop-blur-sm group"
        >
          <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Hero Header */}
        <div className="space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <HiSparkles className="w-3.5 h-3.5" />
            {project.category || "Case Study"}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl leading-relaxed font-light">
            {project.description}
          </p>

          {/* Quick Metadata */}
          <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-zinc-400 border-t border-zinc-900">
            {project.period && (
              <div className="flex items-center gap-2">
                <FiCalendar className="w-4 h-4 text-zinc-500" />
                <span>{project.period}</span>
              </div>
            )}
            {project.duration && (
              <div className="flex items-center gap-2">
                <FiClock className="w-4 h-4 text-zinc-500" />
                <span>{project.duration}</span>
              </div>
            )}
            {project.role && (
              <div className="flex items-center gap-2">
                <FiUser className="w-4 h-4 text-zinc-500" />
                <span>{project.role}</span>
              </div>
            )}
          </div>
        </div>

        {/* Featured Image */}
        {project.image && (
          <div className="relative border border-zinc-800/80 mb-16 shadow-2xl bg-zinc-900/50 group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[520px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        )}

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-start">
          
          {/* Left Column: Main Narrative Content */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Overview */}
            {project.fullDescription && (
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white tracking-tight">Project Overview</h2>
                <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed space-y-4 font-normal">
                  {project.fullDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>
            )}

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-white tracking-tight">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-zinc-900/50 border border-zinc-800/80 flex items-start gap-3 hover:border-zinc-700 transition-colors"
                    >
                      <FiCheckCircle className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                      <span className="text-zinc-300 text-sm leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Technical Challenges */}
            {project.challenges && (
              <section className="space-y-4 p-6 bg-zinc-900/40 border border-zinc-800">
                <h2 className="text-2xl font-bold text-white tracking-tight">Technical Challenges</h2>
                <p className="text-zinc-300 leading-relaxed">{project.challenges}</p>
              </section>
            )}

          </div>

          {/* Right Side: Bento Grid Box with Section Headline */}
          <div className="space-y-4 sticky top-24">
            
            {/* Section Headline */}
            <div className="flex items-center gap-2 pb-2 border-b border-zinc-800">
              <FiFolder className="w-5 h-5 text-purple-400" />
              <h3 className="text-xl font-bold text-white tracking-tight">
                Project Assets & Resources
              </h3>
            </div>

            {/* Bento Grid Item 1: Links */}
            <div className="p-6 bg-zinc-900/80 border border-zinc-800 backdrop-blur-md relative overflow-hidden group">
              <div className="space-y-3">
                {/* Live Link */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 bg-white text-black font-semibold hover:bg-zinc-200 transition-all text-sm group/btn"
                  >
                    <span className="flex items-center gap-2">
                      <FiExternalLink className="w-4 h-4" />
                      Live Website Demo
                    </span>
                    <FiExternalLink className="w-3.5 h-3.5 opacity-60 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                )}

                {/* Client Repository */}
                {(project.clientRepoUrl || project.githubUrl) && (
                  <a
                    href={project.clientRepoUrl || project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 bg-zinc-800/80 border border-zinc-700/80 text-white font-medium hover:bg-zinc-700 hover:border-zinc-600 transition-all text-sm group/btn"
                  >
                    <span className="flex items-center gap-2">
                      <FiCode className="w-4 h-4 text-purple-400" />
                      Client Repository
                    </span>
                    <FiGithub className="w-4 h-4 text-zinc-400 group-hover/btn:text-white transition-colors" />
                  </a>
                )}

                {/* Server Repository */}
                {project.serverRepoUrl && (
                  <a
                    href={project.serverRepoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 bg-zinc-800/80 border border-zinc-700/80 text-white font-medium hover:bg-zinc-700 hover:border-zinc-600 transition-all text-sm group/btn"
                  >
                    <span className="flex items-center gap-2">
                      <FiServer className="w-4 h-4 text-purple-400" />
                      Server Repository
                    </span>
                    <FiGithub className="w-4 h-4 text-zinc-400 group-hover/btn:text-white transition-colors" />
                  </a>
                )}
              </div>
            </div>

            {/* Bento Grid Item 2: Tech Stack */}
            {project.techStack && project.techStack.length > 0 && (
              <div className="p-6 bg-zinc-900/50 border border-zinc-800/80 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  <FiLayers className="w-4 h-4 text-purple-400" />
                  <span>Technologies Used</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-xs font-medium bg-zinc-800/80 border border-zinc-700/60 text-zinc-300 hover:border-purple-500/40 hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Bento Grid Item 3: Impact */}
            {project.impact && project.impact.length > 0 && (
              <div className="p-6 bg-purple-950/10 border border-purple-500/20 space-y-4 relative overflow-hidden">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
                  <FiStar className="w-4 h-4" />
                  <span>Impact & Outcomes</span>
                </div>
                <ul className="space-y-2.5">
                  {project.impact.map((item, idx) => (
                    <li key={idx} className="text-sm text-zinc-300 flex items-start gap-2.5">
                      <span className="text-purple-400 font-bold leading-tight">•</span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}