"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiDownload, FiArrowUp, FiMoon, FiSun } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { useState, useEffect } from "react";

const railLinks = [
  {
    icon: <FaGithub size={17} />,
    label: "GitHub",
    href: "https://github.com/Kz-Himel",
    color: "#E2E8F0",
  },
  {
    icon: <FaLinkedin size={17} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/khayruzzaman-himel/",
    color: "#0A66C2",
  },
  {
    icon: <FaDiscord size={17} />,
    label: "Discord",
    href: "https://discord.com/channels/1495450778364678285/1495450779220312116",
    color: "#5865F2",
  },
  {
    icon: <FiMail size={17} />,
    label: "Email",
    href: "mailto:kzhimel129@gmail.com",
    color: "#22D3EE",
  },
  {
    icon: <FiDownload size={17} />,
    label: "Resume",
    href: "/Khayruzzaman_Himel_CV.pdf",
    color: "#8B5CF6",
    download: true,
  },
];

export default function SideRail() {
  const [showTop, setShowTop] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="hidden xl:flex fixed left-5 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-0.5"
    >
      <div className="hud-panel rounded-full border border-cyan/15 px-2 py-3 shadow-[0_12px_40px_-12px_rgba(6,182,212,0.2)]">
        {railLinks.map((link, i) => (
          <div key={link.label} className="relative flex flex-col items-center">
            <motion.a
  href={link.href}
  target={link.download ? undefined : "_blank"}
  rel="noopener noreferrer"
  download={link.download ? true : undefined}
  aria-label={link.label}
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.6 + i * 0.05 }}
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.9 }}
  className="group relative flex items-center justify-center w-10 h-10 rounded-full text-text-soft transition-all duration-300 hover:text-white"
  style={{
    color: "var(--text-soft)",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.color = link.color)}
  onMouseLeave={(e) =>
    (e.currentTarget.style.color = "var(--text-soft)")
  }
>
  <span
    aria-hidden
    className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"
    style={{
      background: `radial-gradient(circle, ${link.color}22, transparent 70%)`,
      boxShadow: `0 0 18px ${link.color}33`,
    }}
  />

  {/* base icon — always centered, no flow layout */}
  <span className="absolute inset-0 z-10 flex items-center justify-center opacity-70 group-hover:opacity-0 transition-opacity">
    {link.icon}
  </span>
  {/* glow icon on hover — exactly same position */}
  <span className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_4px_currentColor]">
    {link.icon}
  </span>

  <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-xl hud-panel px-2.5 py-1 text-[11px] font-medium text-text-main opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
    {link.label}
  </span>
</motion.a>
            {i !== railLinks.length - 1 && (
              <span className="w-4 h-px bg-gradient-to-r from-transparent via-cyan/25 to-transparent my-0.5" />
            )}
          </div>
        ))}

        <span className="w-4 h-px bg-gradient-to-r from-transparent via-violet/30 to-transparent my-1.5" />

        <motion.button
          aria-label="Toggle theme"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="group relative flex items-center justify-center w-10 h-10 rounded-full text-violet-neon/80 hover:text-violet-neon transition-colors"
        >
          <AnimatePresence mode="wait">
            {theme === "dark" ? (
              <motion.div
                key="moon"
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.25 }}
              >
                <FiMoon size={16} />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.25 }}
              >
                <FiSun size={16} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        <span className="w-4 h-px bg-gradient-to-r from-transparent via-magenta-glow/35 to-transparent my-1.5" />

        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.6, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, y: 6 }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="group relative flex items-center justify-center w-10 h-10 rounded-full text-cyan-neon"
            >
              <span className="absolute inset-0 rounded-full animate-pulse-ring" />
              <FiArrowUp size={16} />
            </motion.button>
          )}
        </AnimatePresence>

        <motion.span
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.6, repeat: Infinity }}
          className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-cyan-neon to-magenta-glow shadow-[0_0_8px_rgba(6,182,212,0.8)]"
        />
      </div>

      <div
        aria-hidden
        className="mt-3 w-px h-16 bg-gradient-to-b from-cyan/30 via-violet/20 to-transparent"
      />
    </motion.div>
  );
}
