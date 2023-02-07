/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      desktop: "768px",
    },
    fontFamily: {
      roboto: "Roboto, sans-serif",
      baloo: "'Baloo 2', cursive",
    },
  },
  plugins: [],
};
