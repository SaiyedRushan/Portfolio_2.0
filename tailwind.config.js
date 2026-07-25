const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // The single accent green the whole site is built on. Previously repeated as
        // a literal rgb(20,83,45) in every component.
        brand: {
          DEFAULT: 'rgb(20, 83, 45)',
          light: 'rgb(120, 180, 140)',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))

  addBase({
    ':root': newVars,
  })
}
