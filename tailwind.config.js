/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
          800: '#4DC247', //cor do instagram

        },
        blue: {
          500: '#81D8F7',
          900: '#0080FF', //azul claro
        },
        orange: {
          500: '#EAB308',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          50: '#FAFAFA',
          75: '#E9E9E9',
          100: '#E5E5E9',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700:'#18181B',
          800: '#121214',
          900: '#09090A',
        },
        brand: {
          100: '#8257E5',
          500: '#8257E5',
          900: '#6D4ABC',
        },
      },
    },
  },
  plugins: [],
});

