/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFammily: {
        sans: ['Lexend', 'sans-serif']
      }
    },
  },
  plugins: [],
}
