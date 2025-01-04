/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "dancing": ["Dancing Script", "serif"],
        "raleway":["Raleway","serif"],
      }
    },
  },
  plugins: [],
}

