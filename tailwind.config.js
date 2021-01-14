const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
      gridTemplateColumns: {
        content: '2fr 3fr',
        card: 'max-content 1fr',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Lora', 'serif'],
        logo: ['"Crimson Pro"', 'serif'],
      },
      colors: {
        gray: {
          ...colors.gray,
          900: '#181719',
        },
      },
      boxShadow: {
        card: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
