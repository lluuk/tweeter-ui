module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: '#2F80ED',
      gray: 'F2F2F2',
      green: '27AE60',
      red: 'EB5757',
      'light-blue': '2D9CDB'
    },
    fontFamily: {
      noto: ['Noto Sans', 'sans-serif']
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
