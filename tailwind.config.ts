import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF9F0D",
        // primary: "#39DB4A",
        secondary: "#FF6868",
      },
      fontFamily: {
        miniver: ["Miniver", "cursive"],
        greatvibes: ["Great Vibes", "cursive"],
        // greatvibes: ["var(--font-great-vibes)", "cursive"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/img/hero.jpg')",
        "home-client": "url('/img/home/bgclient.png')",
        "home-process": "url('/img/home/process.png')",
      },
    },
  },
  plugins: [],
};
export default config;
