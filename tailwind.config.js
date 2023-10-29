import { theme } from "./theme"

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    colors: {
      background: "#363062",
      tertiary: "#4D4C7D",
      secondary: "#F5F5F5",
      primary: "#F99417",
      black: "#1B1B1B",
    },
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
}
