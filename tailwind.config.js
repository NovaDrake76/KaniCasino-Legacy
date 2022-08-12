/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "bg-roulette",
    "bg-crash",
    "bg-coinFlip",
    "bg-green-600",
    "bg-red-500",

    {
      pattern: /border-.*-500/,
    },
  ],
  theme: {
    extend: {
      backgroundImage: {
        roulette: "url('https://i.imgur.com/tbxjBTj.png')",
        crash: "url('https://i.imgur.com/3ozEyQR.png')",
        coinFlip: "url('https://i.imgur.com/OanlCtl.png')",
      },
    },
    screens: {
      sm: "590px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1650px",

      "3xl": "2000px",

      "4xl": "2400px",
    },
  },
  plugins: [],
}
