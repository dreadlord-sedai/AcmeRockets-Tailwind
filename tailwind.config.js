/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./build/**/*.html"],
  theme: {
    extend: {
      screens: {
        'widescreen' : {'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen' : {'raw': '(min-aspect-ratio: 13/20)'}
      }
    },
  },
  plugins: [],
}


