/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#A8715A",
      secondary: "#DD8560",
      offWhite: "#D9DBE9",
      background: "#F8F0E7",
      black: "#000",
      white: "#FFF",
      gray: "#888888",
      green: "#84CC16",
      red: "#DC2626",
    },
    extend: {
      fontFamily: {
        tenor: ["Tenor Sans", "sans-serif"],
        italiana: ["Italiana", "sans-serif"],
      },
    },
    backgroundImage: {
      "hero-img": "url('/src/assets/images/heroImage.jpg')",
      "mobile-hero-img": "url('/src/assets/images/noir_muse.jpg')",
    },
  },
  plugins: [],
};
