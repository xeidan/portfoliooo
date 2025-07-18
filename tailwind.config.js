/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',
      './*.html',
      './**/*.js'
    ],
    theme: {
      extend: {
        colors: {
          primary: '#6d28d9',       // Deep Purple
          'primary-dark': '#5b21b6', // Darker Hover Purple
          'primary-light': '#f3e8ff' // Light Hover Background
        }
      },
    },
    plugins: [require("@tailwindcss/forms")],
  }
  