import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // These map to CSS variables (see globals.css) so the light/dark
        // toggle can flip values at runtime without recompiling classes.
        bg: {
          DEFAULT: "var(--color-bg)",
          surface: "var(--color-bg-surface)",
          elevated: "var(--color-bg-elevated)",
        },
        primary: {
          DEFAULT: "#00D9FF", // electric cyan — fixed brand color, brief-specified
          dim: "#0EA5C4",
          soft: "rgba(0, 217, 255, 0.12)",
        },
        accent: {
          green: "#34D399", // terminal / online status
          amber: "#FBBF24", // achievement highlight
        },
        ink: {
          DEFAULT: "var(--color-ink)",
          muted: "var(--color-ink-muted)",
          faint: "var(--color-ink-faint)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          strong: "var(--color-border-strong)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(0, 217, 255, 0.35)",
        "glow-sm": "0 0 16px -4px rgba(0, 217, 255, 0.45)",
        card: "0 8px 30px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,217,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "50.01%, 100%": { opacity: "0" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "packet-move": {
          "0%": { offsetDistance: "0%", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { offsetDistance: "100%", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        blink: "blink 1s step-end infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
