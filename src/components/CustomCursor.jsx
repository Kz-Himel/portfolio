"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

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

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 25);
      mouseY.set(e.clientY - 25);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        style={{
          translateX: springX,
          translateY: springY,
        }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:flex items-center justify-center"
      >
        {/* Glow */}
        <div className="absolute w-20 h-20 rounded-full bg-cyan-400/20 blur-2xl"></div>

        {/* Cursor */}
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            w-14
            h-14
            rounded-full
            border
            border-cyan-400/40
            bg-white/5
            backdrop-blur-md
            flex
            items-center
            justify-center
            text-white
            text-lg
            font-bold
            shadow-[0_0_30px_rgba(34,211,238,0.5)]
          "
        >
          {"< />"}
        </motion.div>
      </motion.div>
    </>
  );
}