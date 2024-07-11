/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'transparent': 'transparent',
        'current': 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'neone': '#39ff14',
        'p1': '#F4F1DE',
        'p2': '#E07A5F',
        'p3': '#3D405B',
        'p4': '#81B29A',
        'p5': '#F2CC8F',

      },
    },
  },
  plugins: [],
}
