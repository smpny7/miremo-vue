module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#76A3D1',
        secondary: '#343A40',
        primaryContainer: '#505962',
        online: '#1CD645'
      },
      scale: {
        101: '1.01'
      },
      width: {
        105: '26.25rem'
      },
      fontFamily: {
        kavoon: ['"Kavoon"', 'sans-serif'],
        notosans: ['"Noto Sans JP"', 'sans-serif'],
        mplus: ['"M PLUS Rounded 1c"', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
