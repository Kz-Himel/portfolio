"use client";

import Image from "next/image";
import { FiAward, FiMaximize2 } from "react-icons/fi";
import { motion } from "framer-motion";

export default function AchievementCard({ achievement, index, onClick }) {
  const { label, issuer, detail, image } = achievement;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="h-full"
    >
      <button
        type="button"
        onClick={onClick}
        className="card-surface p-0 h-full w-full text-left overflow-hidden group cursor-pointer rounded-2xl hover:border-slate-300 dark:hover:border-white/[0.18] transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
      >
        <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-slate-200 dark:border-white/[0.06] bg-slate-100 dark:bg-[#070A12]">
          <Image
            src={image}
            alt={label}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white text-xs font-medium">
            <FiMaximize2 size={16} />
            <span>Click to expand</span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <FiAward size={16} />
            </span>
            <span className="font-mono text-[11px] font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
              Credential 0{index + 1}
            </span>
          </div>

          <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors line-clamp-1 mb-1">
            {label}
          </h3>
          <div className="text-sm font-medium text-slate-700 dark:text-slate-300">{issuer}</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{detail}</div>
        </div>
      </button>
    </motion.div>
  );
}