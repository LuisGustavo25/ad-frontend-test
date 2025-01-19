import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "gray-header": "#EEEEEE",
        "gray-medium": "#8F8F8F",
        "gray-dark": "#3B3B3B",
        "gray-light-darker": "#585660",
        "gray-footer": "#404040",
      },
      fontFamily: {
        area: ['Area', 'sans-serif'],
        archivo: ['Archivo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
