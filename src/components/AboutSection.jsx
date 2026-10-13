"use client";

import Image from "next/image";
import Link from "next/link";
import { FiDownload, FiArrowRight, FiUser, FiMapPin, FiBriefcase, FiAward } from "react-icons/fi";
import { personalInfo } from "@/data/portfolioData";

const glanceIcons = {
  Role: <FiBriefcase className="text-indigo-600 dark:text-indigo-400" size={14} />,
  Location: <FiMapPin className="text-emerald-600 dark:text-emerald-400" size={14} />,
  Focus: <FiUser className="text-sky-600 dark:text-sky-400" size={14} />,
  Experience: <FiAward className="text-amber-600 dark:text-amber-400" size={14} />,
};

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-slate-200 dark:border-white/[0.06] scroll-mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Photo & Glance Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-surface p-4 bg-white dark:bg-[#0F172A] max-w-sm mx-auto lg:mx-0">
              <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden bg-slate-100 dark:bg-[#090D16] border border-slate-200 dark:border-white/[0.08]">
                <Image
                  src={personalInfo.aboutImage}
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 360px"
                  className="object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="p-4 space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-white/[0.06]">
                  <span className="text-slate-500 dark:text-slate-400">Developer</span>
                  <span className="text-slate-900 dark:text-white font-semibold">{personalInfo.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400">Location</span>
                  <span className="text-slate-700 dark:text-slate-200">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* At a Glance Box */}
            <div className="card-surface p-6 space-y-3 bg-white dark:bg-[#0F172A]/70 max-w-sm mx-auto lg:mx-0">
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 pb-2 border-b border-slate-200 dark:border-white/[0.06]">
                At a Glance
              </h3>
              <div className="space-y-2.5 font-sans text-xs">
                {personalInfo.glance.map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-white/[0.04]">
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      {glanceIcons[item.label] || <FiBriefcase size={14} />}
                      {item.label}
                    </span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="badge-subtle">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                {personalInfo.aboutHeadline}
              </h2>
            </div>

            <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {personalInfo.aboutParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
              <p>
                Whether building complex database schemas with PostgreSQL or crafting seamless, motion-rich
                frontend user flows, my goal is always to deliver software that is both technically resilient
                and intuitive to use.
              </p>
            </div>

            {/* Call to Action Row */}
            <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-slate-200 dark:border-white/[0.06]">
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn-primary text-sm font-medium"
              >
                <FiDownload size={15} />
                <span>Download Resume (PDF)</span>
              </a>

              <Link href="/#contact" className="btn-secondary text-sm font-medium">
                <span>Start a Conversation</span>
                <FiArrowRight size={15} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}