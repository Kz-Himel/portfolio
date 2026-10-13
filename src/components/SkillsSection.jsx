"use client";

import { useState } from "react";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiTerminal,
  FiTool,
} from "react-icons/fi";
import { skillsData } from "@/data/portfolioData";

const categoryIcons = {
  Language: <FiCode className="text-indigo-600 dark:text-indigo-400" size={18} />,
  Frontend: <FiTerminal className="text-sky-600 dark:text-sky-400" size={18} />,
  Backend: <FiServer className="text-emerald-600 dark:text-emerald-400" size={18} />,
  Database: <FiDatabase className="text-amber-600 dark:text-amber-400" size={18} />,
  Tools: <FiTool className="text-purple-600 dark:text-purple-400" size={18} />,
};

export default function SkillsSection() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const displayedSkills =
    selectedFilter === "all"
      ? skillsData.list
      : skillsData.list.filter((s) => s.cat === selectedFilter);

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-slate-200 dark:border-white/[0.06] scroll-mt-20">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl space-y-3 mb-12">
          <span className="badge-subtle">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Skills &amp; Technologies
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Technologies, libraries, and architectural frameworks I use daily to architect and
            ship scalable production web applications.
          </p>
        </div>

        {/* 1. Category Domain Cluster Cards (Grid of 5 domains) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {skillsData.categoryGroups.map((group) => (
            <div
              key={group.label}
              className="card-surface p-6 space-y-4 hover:border-indigo-500/40 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06]">
                  {categoryIcons[group.label] || <FiCode size={18} />}
                </div>
                <div>
                  <h3 className="font-sans font-bold text-base text-slate-900 dark:text-white">
                    {group.label}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    {group.items.length} Core Technologies
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 dark:bg-[#131C31] border border-slate-200 dark:border-white/[0.06] text-slate-800 dark:text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 2. Detailed Proficiency Matrix */}
        <div className="card-surface p-6 sm:p-8 bg-white dark:bg-[#0F172A]/70">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/[0.06] mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Proficiency Breakdown</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Experience depth and familiarity across key technologies
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {skillsData.categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedFilter(cat.id)}
                  className={`px-3 py-1 text-xs font-mono rounded-md transition-colors ${
                    selectedFilter === cat.id
                      ? "bg-indigo-600 text-white font-semibold"
                      : "bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {displayedSkills.map((skill) => (
              <div
                key={skill.name}
                className="p-3.5 rounded-lg bg-slate-50 dark:bg-[#090D16] border border-slate-200 dark:border-white/[0.06] space-y-2 hover:border-slate-300 dark:hover:border-white/[0.12] transition-colors"
              >
                <div className="flex justify-between items-center text-xs">
                  <span className="font-medium text-slate-800 dark:text-slate-200">{skill.name}</span>
                  <span className="font-mono text-slate-500 dark:text-slate-400">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-indigo-500 transition-all duration-300"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}