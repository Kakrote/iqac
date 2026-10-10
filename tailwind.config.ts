import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        university: "#16437D",
        amber: "#FCA700",
        sky: "#A2DAF7",
        page: "#F5F5F5",
        ink: "#10233D",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
        display: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        soft: "0 18px 55px rgba(22, 67, 125, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
