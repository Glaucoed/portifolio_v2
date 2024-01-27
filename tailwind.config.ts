import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "escuro": "#111617",
        "dourado": "#D6BE79",
        "dourado-100": "#decb93",
        "cinza": "#474F51",
        "salmao": "#FF8D7D",
        "verde": "#26898D",
      },
      fontSize: {
        "h1": "4rem",
        "h2": "40px",
        "h3": "32px",
        "h4": "24px",
        "h5": "17px",
      }
    },
  },
  plugins: [],
};
export default config;
