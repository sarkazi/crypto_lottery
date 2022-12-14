const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')
const { emerald, orange, gray, yellow, amber } = require('tailwindcss/colors')
const bgColor = '#091B18'
const bgColor2 = '#061512'
const borderStat = '#004337'

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      colors: {
         bgColor,
         bgColor2,
         borderStat,
         transparent: colors.transparent,
         green: {
            300: emerald[300],
            400: emerald[400],
            500: emerald[500],
            600: emerald[600],
            700: emerald[700],
            800: emerald[800]
         },
         orange: {
            500: orange[500],
            600: orange[500],
            700: orange[500],
         },
         yellow: {
            500: yellow[500]
         },
         amber: {
            500: amber[500],
            400: amber[400],
            300: amber[300],
            100: amber[100],
            200: amber[200],
         },
         gray: {
            100: gray[100],
            600: gray[600],
            400: gray[400],
         },
         white: colors.white,
         black: colors.black,
      },
      extend: {},
   },
   plugins: [
      plugin(function ({ addUtilities }) {
         addUtilities({
            '.flex-align-between': {
               'display': 'flex',
               'alignItems': 'center',
               'justifyContent': 'space-between',
            },
            '.flex-center-center': {
               'display': 'flex',
               'alignItems': 'center',
               'justifyContent': 'center',
            },
            '.flex-col-i-center': {
               'display': 'flex',
               'alignItems': 'center',
               'flexDirection': 'column',
            },
         })
      })
   ],
}
