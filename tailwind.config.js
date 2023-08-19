module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        short: { raw: '(max-height: 650px)' },
        xshort: { raw: '(max-height: 560px)' },
        xxshort: { raw: '(max-height: 490px)' },
      },
    },
    fontFamily: {
      'nunito': ['"Nunito"', 'sans-serif'],
      'opensans': ['"Open Sans"', 'sans-serif']
    }
  },
  plugins: [require('@tailwindcss/forms')],
}
