/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
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
      redPink: '#f8b4b4',
      yellowFade: '#fce96a'
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      borderColor: (theme) => ({
        'gradientBorder': `linear-gradient(to right, ${theme('colors.redPink')}, ${theme('colors.yellowFade')})`,
      }),
      backgroundImage: (theme) => ({
        'gradient-card': `linear-gradient(to right, ${theme('colors.redPink')}, ${theme('colors.yellowFade')})`,
      }),
      animation: {
        blink: 'blink 1s ease-in-out infinite',
        easeInAndScale: 'transition ease-in-out duration-100 hover:scale-110'
      },
      display: ["group-hover"],
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

