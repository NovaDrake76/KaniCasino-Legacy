/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /border-.*-500/,
    },
  ],
  theme: {
    extend: {},
    screens: {
      sm: "590px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1650px",

      "3xl": "2000px",
    },
  },
  plugins: [],
}
