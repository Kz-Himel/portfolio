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
        bg: "#0F172A",
        secondary: "#111827",
        accent: "#38BDF8",
        "soft-accent": "#7DD3FC",
        "text-main": "#E5E7EB",
        muted: "#94A3B8",
      },
      fontFamily: {
        heading: ["'Clash Display'", "sans-serif"],
        body: ["'Satoshi'", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
};