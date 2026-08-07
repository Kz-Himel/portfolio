"use client";

import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, y = 28, blur = true, className = "", as = "div" }) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      initial={{ opacity: 0, y, filter: blur ? "blur(10px)" : undefined }}
      whileInView={{ opacity: 1, y: 0, filter: blur ? "blur(0px)" : undefined }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;
