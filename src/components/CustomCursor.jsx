"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, {
    stiffness: 500,
    damping: 30,
  });

  const springY = useSpring(mouseY, {
    stiffness: 500,
    damping: 30,
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);

      const target = e.target;

      const isHovering =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest(".hover-target");

      setHovering(!!isHovering);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

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
        damping: 18,
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
        select-none
        drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]
      "
    >
      {"</>"}
    </motion.div>
  );
}