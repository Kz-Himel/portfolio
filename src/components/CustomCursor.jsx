"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, {
    stiffness: 500,
    damping: 28,
  });

  const springY = useSpring(mouseY, {
    stiffness: 500,
    damping: 28,
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    const hoverElements = document.querySelectorAll(
      "a, button, input, textarea, .hover-target"
    );

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        translateX: springX,
        translateY: springY,
      }}
      animate={{
        scale: hovering ? 1.8 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
        fixed
        top-0
        left-0
        z-[999999]
        pointer-events-none
        hidden
        md:flex
        items-center
        justify-center
        text-cyan-400
        font-bold
        text-lg
        mix-blend-screen
        drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]
      "
    >
      {"< />"}
    </motion.div>
  );
}