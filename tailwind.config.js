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
        'white2': '#FAF9F7',
        'black': '#4A4947',
        'gray': '#D8D2C2',
        'brown': '#B17457',
        'orange': '#E78557',
        'danger': '#F00E0E',
        'success': '#0DA924',
        'netral': '#9C9992',
      }
    },
    fontFamily: {
    },
  },
  plugins: [],
}