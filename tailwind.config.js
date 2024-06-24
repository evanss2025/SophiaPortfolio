/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      blue: colors.blue,
      cyan: colors.cyan,
      stone: colors.stone,
    },
    extend: {
    
        
    },
  },
  plugins: [],
}

