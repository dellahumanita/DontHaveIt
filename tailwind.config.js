module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'teal': '#9DD9D2',
      'yellow': '#F4D06F',
      'orange': '#FF8811',
      'offwhite': '#FFF8F0'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
