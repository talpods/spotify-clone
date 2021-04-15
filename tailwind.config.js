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
      },
      gridTemplateColumns: {
        'cards-2': 'repeat(2, 220px)',
        'cards-3': 'repeat(3, 220px)',
        'cards-4': 'repeat(4, 220px)',
        'cards-6': 'repeat(6, 220px)',
        'cards-7': 'repeat(7, 220px)',
      },
    },
  },
  variants: {
    extend: {
      display: ['responsive','hover', 'focus'],
    },
  },
  plugins: [],
}
