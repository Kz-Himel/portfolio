/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#050816",
          900: "#050816",
          800: "#07111F",
          700: "#0A1328",
          600: "#0F1A33",
        },
        panel: "#0B1022",
        border: {
          DEFAULT: "rgba(6,182,212,0.15)",
          soft: "rgba(148,163,184,0.08)",
        },
        cyan: {
          DEFAULT: "#06B6D4",
          neon: "#22D3EE",
          glow: "#0891B2",
        },
        blue: {
          neon: "#3B82F6",
          electric: "#2563EB",
          glow: "#1D4ED8",
        },
        violet: {
          DEFAULT: "#8B5CF6",
          neon: "#A78BFA",
          glow: "#7C3AED",
        },
        purple: {
          neon: "#C084FC",
          glow: "#9333EA",
        },
        magenta: {
          glow: "#EC4899",
          soft: "#F472B6",
        },
        text: {
          main: "#E2E8F0",
          soft: "#94A3B8",
          muted: "#64748B",
        },
      },
      fontFamily: {
        heading: ["'Clash Display'", "'Inter'", "sans-serif"],
        display: ["'Clash Display'", "'Inter'", "sans-serif"],
        body: ["'Satoshi'", "'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "'SFMono-Regular'", "monospace"],
      },
      backgroundImage: {
        "grid-futuristic":
          "linear-gradient(rgba(6,182,212,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.05) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(ellipse at center, rgba(139,92,246,0.15), transparent 60%)",
        "conic-holo":
          "conic-gradient(from 0deg, #06B6D4, #8B5CF6, #EC4899, #06B6D4)",
      },
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(6,182,212,0.35), 0 0 40px rgba(6,182,212,0.15)",
        "glow-violet":
          "0 0 20px rgba(139,92,246,0.4), 0 0 60px rgba(139,92,246,0.2)",
        "glow-magenta":
          "0 0 20px rgba(236,72,153,0.3), 0 0 40px rgba(236,72,153,0.12)",
        "inner-hud":
          "inset 0 0 20px rgba(6,182,212,0.08), inset 0 0 40px rgba(139,92,246,0.04)",
      },
      animation: {
        "spin-slow": "spin 18s linear infinite",
        "spin-reverse": "spin 26s linear infinite reverse",
        "float-gentle": "floatGentle 7s ease-in-out infinite",
        "pulse-ring": "pulseRing 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.4s linear infinite",
        "scan": "scan 6s linear infinite",
        "flicker": "flicker 3s linear infinite",
        "rise": "rise 8s linear infinite",
        "grid-move": "gridMove 20s linear infinite",
        "breath": "breath 4s ease-in-out infinite",
      },
      keyframes: {
        floatGentle: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(0.6deg)" },
        },
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(6,182,212,0.45)" },
          "70%": { boxShadow: "0 0 0 18px rgba(6,182,212,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(6,182,212,0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
            opacity: 1,
          },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
            opacity: 0.55,
          },
        },
        rise: {
          "0%": { transform: "translateY(0) scale(0.8)", opacity: 0 },
          "10%": { opacity: 0.7 },
          "100%": { transform: "translateY(-120vh) scale(1.1)", opacity: 0 },
        },
        gridMove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "80px 80px" },
        },
        breath: {
          "0%, 100%": { opacity: 0.55, transform: "scale(1)" },
          "50%": { opacity: 0.9, transform: "scale(1.05)" },
        },
      },
      screens: {
        'xs': '360px',
      },
    },
  },
  darkMode: "class",
};
