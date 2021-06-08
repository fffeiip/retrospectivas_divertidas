module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  future: {
    removeDeprecatedGapUtilities: true
  },
  theme: {
    extend: {
      fontFamily: {
        menu: ['Virgil']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
