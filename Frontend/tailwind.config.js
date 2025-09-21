/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}" // Scan all relevant frontend files
  ],
  theme: {
    extend: {
      animation: {
        glow: 'glow 1.5s infinite alternate',
        fadeIn: 'fadeIn 0.8s ease-in forwards',
        glossyGlow: 'glossyGlow 3s linear infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px 5px #4ade80' },
          '50%': { boxShadow: '0 0 40px 10px #22c55e' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        glossyGlow: {
          '0%, 100%': { opacity: 0.1 },
          '50%': { opacity: 0.3 },
        },
      },
    },
  },
  plugins: [],
};
