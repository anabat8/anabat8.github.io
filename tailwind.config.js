/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./components/**/*.{html,js}"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      pink: '#fca286',
      pinkLight: '#fcbba7',
      pinkLigher: 'fbccbe',
      white: '#ffffff',
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

