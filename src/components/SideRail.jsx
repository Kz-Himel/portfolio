"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiDownload, FiArrowUp } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { useState, useEffect } from "react";

const railLinks = [
  {
    icon: <FaGithub size={17} />,
    label: "GitHub",
    href: "https://github.com/Kz-Himel",
  },
  {
    icon: <FaLinkedin size={17} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/khayruzzaman-himel/",
  },
  {
    icon: <FaDiscord size={17} />,
    label: "Discord",
    href: "https://discord.com/channels/1495450778364678285/1495450779220312116",
  },
  {
    icon: <FiMail size={17} />,
    label: "Email",
    href: "mailto:kzhimel129@gmail.com",
  },
  {
    icon: <FiDownload size={17} />,
    label: "Resume",
    href: "/Khayruzzaman_Himel_CV.pdf",
    download: true,
  },
];

export default function SideRail() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="hidden xl:flex fixed left-8 top-28 z-40 flex-col items-center gap-6"
    >
      {/* decorative vertical hairline, same as the reference's rail marker */}
      <div className="w-px h-24 bg-border" aria-hidden />

      <div className="flex flex-col items-center gap-5">
        {railLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.download ? undefined : "_blank"}
            rel="noopener noreferrer"
            download={link.download ? true : undefined}
            aria-label={link.label}
            className="group relative flex items-center justify-center text-text-soft hover:text-accent transition-colors duration-200"
          >
            {link.icon}
            <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap box bg-bg px-2.5 py-1 text-[11px] font-mono text-text-main opacity-0 -translate-x-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0">
              {link.label}
            </span>
          </a>
        ))}
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex items-center justify-center text-text-soft hover:text-accent transition-colors"
          >
            <FiArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}