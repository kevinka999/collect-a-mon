import { theme } from "./theme"

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        text: "#100f0e",
        background: "#fafafa",
        primary: "#f99315",
        secondary: "#c5d4e2",
        accent: "#3e38b2",
        textShade: "#7e7e7d",
        primaryShade: "#fbe5d2",
        secondaryShade: "#f0f2f5",
        accentShade: "#837fc9",
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
}
