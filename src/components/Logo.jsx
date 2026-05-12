"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Background */}
          <rect
            x="1"
            y="1"
            width="40"
            height="40"
            rx="10"
            fill="rgba(56,189,248,0.08)"
            stroke="url(#logoGrad)"
            strokeWidth="1.5"
          />
          {/* K letter */}
          <text
            x="6"
            y="28"
            fontSize="20"
            fontWeight="700"
            fontFamily="'Clash Display', sans-serif"
            fill="url(#logoGrad)"
            filter="url(#glow)"
          >
            Kz
          </text>
        </svg>
      </motion.div>
      <span
        className="font-heading font-semibold text-lg gradient-text hidden sm:block"
        style={{ fontFamily: "'Clash Display', sans-serif" }}
      >
        Himel
      </span>
    </Link>
  );
}