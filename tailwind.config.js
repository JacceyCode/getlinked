/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#150E28",
      primary: "#903AFF",
      secondary: "#D434FE",
      white: "#FFF",
      black: "#000",
    },
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1440px",
    },
    fontFamily: {
      clash: ["Clash Display", "sans-serif"],
      mont: ["Montserrat", "sans-serif"],
      unica: ["Unica One", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
