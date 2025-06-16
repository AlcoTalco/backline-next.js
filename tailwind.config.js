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
        'black': '#040404',
        'gold': '#cda951',
        'light-gold': '#faeabf',
        'white': '#f1f1f1',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        headline: ['var(--font-playfair-display)'],
      },
      animation: {
        'shine-idle': 'shine-idle 5s linear infinite',
      },
      keyframes: {
        'shine-idle': {
          'to': { backgroundPosition: '-200% center' },
        }
      }
    },
  },
  plugins: [],
};
export default config;