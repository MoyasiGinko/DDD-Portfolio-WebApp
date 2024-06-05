import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "shadow-fade": {
          "0%": { "box-shadow": "none" }, // Start with no shadow
          "100%": { "box-shadow": "0 0 10px rgba(0, 0, 255, 0.2)" }, // Fade to blue shadow
        },
      },
      boxShadow: {
        "cyan-hover": "0 0 10px rgba(0, 228, 255, 0.2)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
