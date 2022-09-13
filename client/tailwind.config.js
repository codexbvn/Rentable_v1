/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    colors: {
      "white": "#ffffff",
      "purple": {
        "main": '#2A0C4E',
      },
      "blue": {
        "main": "#306BAC",
        "light-400": "#0052aa"
      }
    },
    fontFamily: {
      "sans": ["Inter", "ui-sans-serif", "system-ui"]
    },
    extend: {},
  },
  plugins: [],
};
