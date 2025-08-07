import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{ts,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'General Sans'", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: "#0f172a",
        accent: "#2563eb",
        arsen: {
          bg: '#f9f9f9',
          text: '#111111',
          gray: '#666666',
          accent: '#22c55e',
      }
      },
    },
  },
  plugins: [],
};
export default config;