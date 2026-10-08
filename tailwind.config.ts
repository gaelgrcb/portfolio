import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        noir: {
          950: "#060709",
          900: "#0A0B10",
          850: "#0F1117",
          800: "#151822",
          700: "#1F2432",
          600: "#2E364A",
          500: "#4B5568",
          400: "#7A8499",
          300: "#A9B3C6",
          200: "#D3D9E4",
          100: "#F1F3F8",
        },
        terminal: {
          green: "#10B981",
          cyan: "#06B6D4",
          amber: "#F59E0B",
          rose: "#F43F5E",
          violet: "#8B5CF6",
        },
      },
      fontFamily: {
        mono: [
          "var(--font-jetbrains)",
          "JetBrains Mono",
          "Fira Code",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
        sans: [
          "var(--font-geist-sans)",
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      boxShadow: {
        "glow-green": "0 0 20px -5px rgba(16, 185, 129, 0.25)",
        "glow-cyan": "0 0 20px -5px rgba(6, 182, 212, 0.25)",
        "subtle-card": "0 1px 1px 0 rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "terminal-cursor": "cursorBlink 1.05s steps(2) infinite",
      },
      keyframes: {
        cursorBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
