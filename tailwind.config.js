/** @type {import('tailwindcss').Config} */

export default {
  content: ["./application/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#977669",
          800: "#846358",
          900: "#43302b",
        },
        customPrimary: "#00ADB5",
        customSecondary: "#393E46",
        customLight: "#EEEEEE",
        customDark: "#222831",
      },
    },
  },
  variants: {},
  plugins: [],
};
