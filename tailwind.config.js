/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        fedgreen: '#106c5c',
        fedpink: '#e44177',
      },
    },
  },
  plugins: [],
}

  