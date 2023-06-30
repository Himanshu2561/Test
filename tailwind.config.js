/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "btn-l": "#4776E6",
        "btn-r": "#8E54E9",
        "tcolor": "#7A3199",
      },
      backgroundImage: {
        polygon: "url('/img/Polygon 2.png')",
        corner: "url('/img/Group 1.png')",
        podcast: "url('/img/Group 79.png')",
      },
    },
  },
  plugins: [],
};
