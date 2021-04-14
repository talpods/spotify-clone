const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    // enabled: true,
    content: ["./public/*.html"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        topbeat : {
          page: '#161616',
          player: '#181818',
          button: '#121212',
          toolbar: '#202020'
        },
        emerald: colors.emerald
      }
    },
  },
  variants: {
    extend: {
      display: ['responsive','hover', 'focus'],
    },
  },
  plugins: [],
}
