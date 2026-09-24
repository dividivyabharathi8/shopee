/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chilli: {
          50: '#fff5f5',
          100: '#ffe5e5',
          200: '#ffcccc',
          300: '#ff9999',
          400: '#ff6666',
          500: '#ff3333',
          600: '#e60000',
          700: '#cc0000',
          800: '#990000',
          900: '#660000',
        },
      },
    },
  },
  plugins: [],
}
