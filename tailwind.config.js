/** @type {import('tailwindcss').Config} */

module.exports = {
  content: {
    files: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
};
