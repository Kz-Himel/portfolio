"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group select-none">
      <motion.div
        whileHover={{ scale: 1.05, rotate: -2 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_10px_rgba(6,182,212,0.45)"
        >
          <defs>
            <linearGradient id="lgLogo" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
            <linearGradient id="lgGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          <motion.rect
            style={{ transformOrigin: "20px 20px" }}
            animate={{ rotate: [0, 2, 0, -2, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            x="1.5"
            y="1.5"
            width="37"
            height="37"
            rx="10"
            fill="rgba(6, 182, 212, 0.06)"
            stroke="url(#lgLogo)"
            strokeWidth="1.5"
          />

          <rect
            x="1.5"
            y="1.5"
            width="37"
            height="37"
            rx="10"
            fill="none"
            stroke="url(#lgGlow)"
            strokeWidth="0.5"
            className="opacity-60"
          />

          <text
            x="6.2"
            y="27"
            fontSize="18"
            fontWeight="700"
            fontFamily="'Clash Display', 'Inter', sans-serif"
            fill="url(#lgLogo)"
            style={{ filter: "drop-shadow(0 0 6px rgba(6,182,212,0.5))" }}
          >
            Kz
          </text>
        </svg>
      </motion.div>
      <div className="flex flex-col leading-none">
        <span className="font-display font-semibold text-[1.05rem] gradient-text hidden sm:block">
          Himel
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-cyan-neon/70 hidden sm:block mt-0.5">
          // dev
        </span>
      </div>
    </Link>
  );
}
