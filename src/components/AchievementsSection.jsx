"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink } from "react-icons/fi";
import SectionHeader from "./ui/SectionHeader";
import AchievementCard from "./AchievementCard";
import { achievementsData } from "@/data/portfolioData";

export default function AchievementsSection() {
  const [active, setActive] = useState(null);

  return (
    <section id="achievements" className="py-20 md:py-28 border-t border-slate-200 dark:border-white/[0.06] scroll-mt-20">
      <div className="container-custom">
        <SectionHeader
          stationNumber="Verified Credentials"
          title="Certifications & Honors"
          subtitle="Accredited certificates of completion and software engineering honors earned through rigorous coursework."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((a, i) => (
            <AchievementCard
              key={a.label}
              achievement={a}
              index={i}
              onClick={() => setActive(a)}
            />
          ))}
        </div>
      </div>

      {/* Modal Dialog for Certificate Preview */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/70 dark:bg-black/85 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="card-surface p-0 max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl bg-white dark:bg-[#0F172A] border-slate-200 dark:border-white/[0.15]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-white/[0.08]">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {active.label}
                  </h3>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{active.issuer} · {active.detail}</div>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="Close certificate preview"
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                >
                  <FiX size={18} />
                </button>
              </div>

              <div className="relative w-full aspect-[16/10] bg-slate-100 dark:bg-[#070A12] p-4 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={active.image}
                    alt={active.label}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 800px"
                  />
                </div>
              </div>

              <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between gap-4 bg-slate-50 dark:bg-[#0A0F1D]">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Issued by {active.issuer}
                </span>
                <a
                  href={active.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs !py-2 !px-4"
                >
                  <span>Verify Credential</span>
                  <FiExternalLink size={13} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}