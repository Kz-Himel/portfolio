"use client";

import { motion } from "framer-motion";

export function SectionHeader({ eyebrow, title, subtitle, align = "left" }) {
  const alignClass =
    align === "center"
      ? "text-center items-center mx-auto"
      : align === "right"
        ? "text-right items-end ml-auto"
        : "text-left items-start";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-10 md:mb-14 max-w-3xl flex flex-col ${alignClass}`}
    >
      {eyebrow && (
        <div className="section-label mb-3">{eyebrow}</div>
      )}
      {title && (
        <h2 className="text-3xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.05] tracking-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-text-soft mt-4 max-w-2xl text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeader;
