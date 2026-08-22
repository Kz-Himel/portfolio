"use client";

import { motion } from "framer-motion";

export function SectionHeader({ tag, action, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10 md:mb-12"
    >
      <div className="flex items-center gap-4">
        <h2 className="font-mono font-bold text-2xl md:text-3xl text-text-main whitespace-nowrap">
          <span className="section-tag">#</span>
          {tag}
        </h2>
        <div className="divider-line" />
        {action}
      </div>
      {subtitle && (
        <p className="text-text-soft mt-4 max-w-2xl text-sm md:text-[15px] leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeader;