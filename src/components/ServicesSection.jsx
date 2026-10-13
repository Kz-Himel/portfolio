"use client";

import {
  FiCode,
  FiServer,
  FiCpu,
  FiMonitor,
  FiLayers,
  FiZap,
  FiSearch,
  FiTerminal,
} from "react-icons/fi";
import { servicesData } from "@/data/portfolioData";

const icons = {
  mern: <FiCode className="text-indigo-600 dark:text-indigo-400" size={20} />,
  backend: <FiServer className="text-emerald-600 dark:text-emerald-400" size={20} />,
  ai: <FiCpu className="text-sky-600 dark:text-sky-400" size={20} />,
  responsive: <FiMonitor className="text-amber-600 dark:text-amber-400" size={20} />,
  uiux: <FiLayers className="text-purple-600 dark:text-purple-400" size={20} />,
  apis: <FiZap className="text-rose-600 dark:text-rose-400" size={20} />,
  seo: <FiSearch className="text-teal-600 dark:text-teal-400" size={20} />,
  devops: <FiTerminal className="text-cyan-600 dark:text-cyan-400" size={20} />,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 border-t border-slate-200 dark:border-white/[0.06] scroll-mt-20">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl space-y-3 mb-12">
          <span className="badge-subtle">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Services &amp; Capabilities
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            End-to-end engineering capabilities tailored for startups, founders, and modern product teams.
          </p>
        </div>

        {/* Services Grid: 4 cols on lg, 2 cols on sm/md, 1 on xs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className="card-surface p-6 flex flex-col justify-between hover:border-indigo-500/40 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06] group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 group-hover:border-indigo-300 dark:group-hover:border-indigo-500/20 transition-colors">
                    {icons[service.id] || <FiCode size={20} />}
                  </div>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 font-medium">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-base text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/80 dark:border-white/[0.04] flex items-center justify-between font-mono text-[11px] text-slate-500 dark:text-slate-400">
                <span>Production Standard</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">Available</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}