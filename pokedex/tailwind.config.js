/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3666d5',
        yellow: '#fccd03',
      },
      borderColor: {
        primary: '#3666d5',
        yellow: '#fccd03',
      }
    },
  },
  plugins: [],
}

