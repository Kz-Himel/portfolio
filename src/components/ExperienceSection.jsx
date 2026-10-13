"use client";

import { motion } from "framer-motion";
import { FiCalendar, FiMapPin, FiBriefcase } from "react-icons/fi";
import SectionHeader from "./ui/SectionHeader";
import { experienceData } from "@/data/portfolioData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-slate-200 dark:border-white/[0.06] scroll-mt-20 relative overflow-hidden">
      <div className="container-custom">
        <SectionHeader
          stationNumber="Career Trajectory"
          title="Experience & Journey"
          subtitle="Chronological track record of delivering web applications, leveling up engineering depth, and shipping code."
        />

        {/* Tree Structure Container */}
        <div className="relative max-w-5xl mx-auto pt-4 pb-2">
          {/* Central Vertical Trunk / Stem */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-indigo-500 via-indigo-500/40 to-slate-200 dark:to-white/[0.08]"
          />
          {/* Mobile Vertical Line */}
          <div
            aria-hidden="true"
            className="md:hidden absolute top-0 bottom-0 left-6 sm:left-8 -translate-x-1/2 w-0.5 bg-gradient-to-b from-indigo-500 via-indigo-500/40 to-slate-200 dark:to-white/[0.08]"
          />

          {/* Top Crown Node */}
          <div className="absolute -top-2 left-6 sm:left-8 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center pointer-events-none">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-600 dark:bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
            </span>
          </div>

          {/* Bottom Root Node */}
          <div
            aria-hidden="true"
            className="absolute -bottom-2 left-6 sm:left-8 md:left-1/2 -translate-x-1/2 z-10 w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 border-2 border-indigo-500/60 pointer-events-none"
          />

          <div className="space-y-12 sm:space-y-16">
            {experienceData.map((exp, i) => {
              const isEven = i % 2 === 0;

              return (
                <div key={exp.role} className="relative group">
                  {/* Center Tree Node (Desktop: Center, Mobile: Left) */}
                  <div
                    aria-hidden="true"
                    className="absolute left-6 sm:left-8 md:left-1/2 -translate-x-1/2 top-6 md:top-8 z-20"
                  >
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-10% 0px" }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="w-10 h-10 rounded-full bg-white dark:bg-[#090D16] border-2 border-indigo-500 dark:border-indigo-400 shadow-[0_0_16px_rgba(99,102,241,0.4)] flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:border-indigo-400 transition-all duration-300"
                    >
                      <FiBriefcase size={15} />
                    </motion.div>
                  </div>

                  {/* Horizontal Branch Connector - Desktop */}
                  {isEven ? (
                    <div
                      aria-hidden="true"
                      className="hidden md:block absolute right-1/2 top-11 lg:top-13 w-12 lg:w-16 h-0.5 bg-gradient-to-l from-indigo-500 to-indigo-500/20 z-10 pointer-events-none"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="hidden md:block absolute left-1/2 top-11 lg:top-13 w-12 lg:w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-indigo-500/20 z-10 pointer-events-none"
                    />
                  )}

                  {/* Horizontal Branch Connector - Mobile */}
                  <div
                    aria-hidden="true"
                    className="md:hidden absolute left-6 sm:left-8 top-11 w-6 sm:w-8 h-0.5 bg-indigo-500/40 z-10 pointer-events-none"
                  />

                  {/* Tree Row: Alternating Left and Right on Desktop */}
                  <div
                    className={`flex flex-col md:flex-row items-center w-full ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Card Half (Left when even, Right when odd) */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-10% 0px" }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className={`w-full md:w-1/2 pl-14 sm:pl-16 ${
                        isEven
                          ? "md:pl-0 md:pr-12 lg:md:pr-16"
                          : "md:pl-12 lg:md:pl-16 md:pr-0"
                      }`}
                    >
                      {/* Experience Card */}
                      <div className="card-surface p-6 sm:p-7 relative transition-all duration-300 hover:border-indigo-400/50 dark:hover:border-indigo-500/40 hover:shadow-xl dark:hover:shadow-indigo-500/10">
                        {/* Notch pointing toward central tree trunk on desktop */}
                        {isEven ? (
                          <div
                            aria-hidden="true"
                            className="hidden md:block absolute -right-2 top-8 w-4 h-4 bg-white dark:bg-[#0F172A] border-t border-r border-slate-200 dark:border-white/[0.08] rotate-45 transform"
                          />
                        ) : (
                          <div
                            aria-hidden="true"
                            className="hidden md:block absolute -left-2 top-8 w-4 h-4 bg-white dark:bg-[#0F172A] border-b border-l border-slate-200 dark:border-white/[0.08] rotate-45 transform"
                          />
                        )}

                        {/* Meta Header */}
                        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-slate-200 dark:border-white/[0.06]">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20">
                              {exp.tag}
                            </span>
                            <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                              <FiCalendar size={13} className="text-indigo-500 dark:text-indigo-400" />
                              {exp.period}
                            </span>
                          </div>

                          <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                            <FiMapPin size={13} className="text-slate-400 dark:text-slate-500" />
                            {exp.location}
                          </span>
                        </div>

                        {/* Role & Company */}
                        <div className="mt-4 mb-3">
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {exp.role}
                          </h3>
                          <div className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1.5 mt-1">
                            <FiBriefcase size={14} className="text-indigo-500" />
                            <span>{exp.company}</span>
                          </div>
                        </div>

                        {/* Bullet Points */}
                        <ul className="space-y-2 pt-2">
                          {exp.bullets.map((bullet, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex items-start gap-2.5"
                            >
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>

                    {/* Opposing Milestone Column (Desktop only: Right when even, Left when odd) */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 25 : -25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-10% 0px" }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className={`hidden md:flex flex-col md:w-1/2 ${
                        isEven
                          ? "md:pl-12 lg:md:pl-16 items-start text-left"
                          : "md:pr-12 lg:md:pr-16 items-end text-right"
                      } space-y-2.5`}
                    >
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 shadow-2xs">
                        <FiCalendar size={13} className="text-indigo-600 dark:text-indigo-400" />
                        <span className="font-mono text-xs font-bold tracking-tight">
                          {exp.period}
                        </span>
                      </div>
                      <div className="font-bold text-base text-slate-900 dark:text-white tracking-tight">
                        {exp.company}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1.5">
                        <FiMapPin size={12} className="text-slate-400" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="pt-1">
                        <span className="inline-block font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/[0.06]">
                          Milestone #{experienceData.length - i}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}