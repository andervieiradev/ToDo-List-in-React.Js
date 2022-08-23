/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
      colors: {
        white: '#ffffff',
        danger: '#e25858',
        gray: {
          100: '#f2f2f2',
          200: '#d9d9d9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1a1a1a',
          700: '#0d0d0d'
        },
        blueDark: '#1e6f9f',
        blue: '#4ea8de',
        purpleDark: '#5e60ce',
        purple: '#8284fa'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
