module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0060af',
        secondary: '#00bcd4',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      margin: ['group-hover'],
      visibility: ['group-hover'],
    },
  },
  plugins: [],
};
