/** @type {import('tailwindcss').Config} */

export default {
  content: ["./application/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#fbd87f",
          200: "#fcdc8d",
          300: "#fee09c",
          400: "#ffe5aa",
          500: "#ffe9b8",
          600: "#ffedc6",
        },
        customDark: {
          100: "#26231c",
          200: "#3a3831",
          300: "#504d47",
          400: "#67645f",
          500: "#7e7c77",
          600: "#979591",
        },
      },
    },
  },
  variants: {},
  plugins: [require("daisyui")],
};
