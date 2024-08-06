/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{css,sass,scss}",
    "./src/utils/**/*.{js,ts,jsx,tsx}",
    "./src/services/*/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F45B69",
        secondary: "#6B6393",
        background: "#F9FAFC",
        text: "#212121",
      },
    },
  },
  plugins: [],
}