/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,css}",
    "*.{html,js,ts,vue}",
  ],
  theme: {
    extend: {},
  },
  darkMode : 'class',
  daisyui: {
    themes: ['light', 'dark'],
  }
}