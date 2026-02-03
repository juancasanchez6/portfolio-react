/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a', // slate-900
          card: '#1e293b', // slate-800
          accent: '#2dd4bf', // teal-400
          text: '#e2e8f0', // slate-200
          muted: '#94a3b8', // slate-400
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
