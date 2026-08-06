"use client";

import { motion } from "framer-motion";
import { FiMessageCircle, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
    icon: <FiMessageCircle size={17} />,
    label: "WhatsApp",
    href: "https://wa.me/8801307161360",
  },
  {
    icon: <FiMail size={17} />,
    label: "Email",
    href: "mailto:kzhimel129@gmail.com",
  },
];

export default function SideRail() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-1 glass rounded-full border border-white/10 px-2.5 py-4 shadow-lg shadow-black/20"
    >
      {railLinks.map((link, i) => (
        <div key={link.label} className="relative flex flex-col items-center">
          <motion.a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center justify-center w-9 h-9 rounded-full text-muted hover:text-accent transition-colors duration-300"
          >
            {link.icon}
            {/* Tooltip */}
            <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-md glass border border-white/10 px-2.5 py-1 text-[11px] font-medium text-text-main opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
              {link.label}
            </span>
          </motion.a>
          {i !== railLinks.length - 1 && (
            <span className="w-4 h-px bg-white/10 my-0.5" />
          )}
        </div>
      ))}

      {/* Bottom glowing dot accent — mirrors the LoL rail's icon stack terminus */}
      <motion.span
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="mt-1 w-1.5 h-1.5 rounded-full bg-magenta"
      />
    </motion.div>
  );
}