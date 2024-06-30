/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#e3e4e8',
        'background': '#210653',
        'primary': '#a8adc6',
        'secondary': '#3d446b',
        'accent': '#1b3dfc',
      },

    },
  },
  plugins: [],
}