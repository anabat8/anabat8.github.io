/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      pinkStandard: '#fca286',
      pinkLight: '#fcbba7',
      pinkLighter: 'fbccbe',
      white: '#ffffff',
      navy: '#0a192f',
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      animation: {
        blink: 'blink 1s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0,
          },
        },
      },
    }
  },
  plugins: [require('flowbite/plugin')],
}

