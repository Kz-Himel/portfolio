"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Outer ring spring settings
  const ringX = useSpring(mouseX, { stiffness: 400, damping: 28, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 400, damping: 28, mass: 0.5 });

  // Center "</>" icon spring settings (more responsive)
  const codeX = useSpring(mouseX, { stiffness: 1000, damping: 35, mass: 0.2 });
  const codeY = useSpring(mouseY, { stiffness: 1000, damping: 35, mass: 0.2 });

  const [variant, setVariant] = useState("idle");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const t = e.target;
      const interactive = t.closest(
        "a, button, input, textarea, select, [role='button'], .hover-target, [data-cursor='hover']"
      );
      const clickable = t.closest("a, button");

      setVariant(interactive ? (clickable ? "click" : "hover") : "idle");
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  // Dynamic Ring Sizing & Colors
  const ringSize = variant === "click" ? 64 : variant === "hover" ? 52 : 40;
  const ringColor =
    variant === "click"
      ? "#EC4899"
      : variant === "hover"
      ? "#8B5CF6"
      : "#06B6D4";

  return (
    <>
      {/* Outer Glowing Ring */}
      <motion.div
        style={{
          translateX: ringX,
          translateY: ringY,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          borderColor: ringColor,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="pointer-events-none fixed top-0 left-0 z-[99999] rounded-full border border-opacity-80 hidden md:block"
      >
        <div
          className="absolute inset-0 rounded-full opacity-40 transition-colors duration-300"
          style={{
            boxShadow: `0 0 20px ${ringColor}, inset 0 0 10px ${ringColor}`,
          }}
        />
      </motion.div>

      {/* Main Cursor Icon: "</>" */}
      <motion.div
        style={{
          translateX: codeX,
          translateY: codeY,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: variant === "click" ? 1.3 : variant === "hover" ? 1.15 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="pointer-events-none fixed top-0 left-0 z-[99999] hidden md:flex items-center justify-center select-none"
      >
        <span
          className="font-mono font-bold text-xs tracking-tighter"
          style={{
            color: ringColor,
            textShadow: `0 0 8px ${ringColor}, 0 0 16px ${ringColor}88`,
          }}
        >
          &lt;/&gt;
        </span>
      </motion.div>
    </>
  );
}