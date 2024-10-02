/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FAF7F0',
        'black': '#4A4947',
        'gray': '#D8D2C2',
        'brown': '#B17457'
      }
    },
    fontFamily: {
    },
  },
  plugins: [],
}