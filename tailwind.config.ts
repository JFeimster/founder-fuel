import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0B",
        paper: "#F7F3EA",
        acid: "#F4E409",
        blush: "#FF6B6B",
        cyan: "#5EE6FF",
        mint: "#9CFF8F",
        lilac: "#C7B8FF"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica Neue", "Helvetica", "sans-serif"],
        display: ["Arial Black", "Arial", "Helvetica Neue", "sans-serif"]
      },
      boxShadow: {
        brutal: "8px 8px 0 0 #0B0B0B",
        brutalSm: "4px 4px 0 0 #0B0B0B"
      },
      borderRadius: {
        brutal: "1.1rem"
      },
      maxWidth: {
        content: "74rem"
      }
    }
  },
  plugins: []
};

export default config;