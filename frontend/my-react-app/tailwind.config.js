/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        customPurple: {
          light: '#A68AFF',
          DEFAULT: '#7C3AED',
          dark: '#5B21B6',
        },
        customGreen: {
          light: '#9AE6B4',
          DEFAULT: '#48BB78',
          dark: '#2F855A',
        },
        customYellow: {
          light: '#FFED4A',
          DEFAULT: '#F6E05E',
          dark: '#B7791F',
        },
      },
    },
  },
  plugins: [],
}
