"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink } from "react-icons/fi";
import SectionHeader from "./ui/SectionHeader";
import AchievementCard from "../components/AchievementCard";

const achievements = [
  {
    label: "Blackbelt Web Developer",
    issuer: "Programming Hero",
    detail: "Complete Web Development Course · Batch 13",
    image: "/achievements/certificate_blackbelt.jpeg",
    driveLink: "PASTE_DRIVE_LINK_HERE",
  },
  {
    label: "Certificate of Completion with Excellence",
    issuer: "Programming Hero",
    detail: "Complete Web Development Course · Batch 13",
    image: "/achievements/certificate_programming_hero.png",
    driveLink: "PASTE_DRIVE_LINK_HERE",
  },
  {
    label: "CV Writing & Interview",
    issuer: "10 Minute School",
    detail: "Online Course",
    image: "/achievements/certificate_tenminscl.png",
    driveLink: "PASTE_DRIVE_LINK_HERE",
  },
];

function AchievementsSection() {
  const [active, setActive] = useState(null);

  return (
    <section id="achievements" className="relative pb-20 md:pb-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="achievements"
          subtitle="Certifications earned from completed courses and programs."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((a, i) => (
            <AchievementCard
              key={a.label}
              achievement={a}
              index={i}
              onClick={() => setActive(a)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            style={{ background: "rgba(0,0,0,0.85)" }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="box relative max-w-3xl w-full max-h-[85vh] overflow-y-auto"
              style={{ background: "var(--bg)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div>
                  <h3 className="font-mono font-bold text-[14px] text-text-main">
                    {active.label}
                  </h3>
                  <div className="text-[11px] text-text-soft">{active.issuer}</div>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="text-text-soft hover:text-accent transition-colors shrink-0 ml-4"
                >
                  <FiX size={20} />
                </button>
              </div>

              <div
                className="w-full overflow-auto flex items-center justify-center"
                style={{ maxHeight: "65vh", background: "var(--bg-elevated)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={active.image}
                  alt={active.label}
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="p-4 border-t border-border flex justify-end">
                <a
                  href={active.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11.5px] uppercase tracking-wider text-accent flex items-center gap-1.5 hover:opacity-80 transition-opacity"
                >
                  View on Drive <FiExternalLink size={13} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default AchievementsSection;