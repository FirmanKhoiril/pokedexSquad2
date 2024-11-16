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
        secondary: '#fccd03',
      },
      borderColor: {
        primary: '#3666d5',
        secondary: '#fccd03',
      }
    },
  },
  plugins: [],
}

