"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 700, damping: 32, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 700, damping: 32, mass: 0.4 });

  const dotX = useSpring(mouseX, { stiffness: 1200, damping: 40, mass: 0.2 });
  const dotY = useSpring(mouseY, { stiffness: 1200, damping: 40, mass: 0.2 });

  const [variant, setVariant] = useState("idle");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      const t = e.target;
      const interactive =
        t.closest("a, button, input, textarea, select, [role='button'], .hover-target, [data-cursor='hover']");
      const clickable = t.closest("a, button");
      setVariant(interactive ? (clickable ? "click" : "hover") : "idle");
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  const ringSize =
    variant === "click" ? 56 : variant === "hover" ? 44 : 32;
  const ringColor =
    variant === "click"
      ? "rgba(236,72,153)"
      : variant === "hover"
        ? "rgba(139,92,246)"
        : "rgba(6,182,212)";

  return (
    <>
      <motion.div
        style={{
          translateX: springX,
          translateY: springY,
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          borderColor: ringColor,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="pointer-events-none fixed top-0 left-0 z-[99999] rounded-full border md:block hidden"
      >
        <div
          className="absolute inset-0 rounded-full opacity-60"
          style={{
            boxShadow: `0 0 20px ${ringColor}55, inset 0 0 10px ${ringColor}33`,
          }}
        />
      </motion.div>

      <motion.div
        style={{
          translateX: dotX,
          translateY: dotY,
        }}
        className="pointer-events-none fixed top-0 left-0 z-[99999] hidden md:block"
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{
            background:
            "linear-gradient(135deg, #22D3EE, #8B5CF6)",
            boxShadow:
              "0 0 10px rgba(34,211,238,0.9), 0 0 20px rgba(139,92,246,0.6)",
            transform: "translate(-50%, -50%)",
          }}
        />
      </motion.div>
    </>
  );
}
