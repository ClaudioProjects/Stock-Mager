module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}', './public/index.html'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {},
      boxShadow: {
        custom: '0px  0px 10px rgb(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
