const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    enabled: true,
    content: ["./public/*.html"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        coolgray: colors.coolGray,
        orange: colors.orange
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
