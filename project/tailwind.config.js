/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          500: '#FFD100', // FURIA Yellow
        },
        black: '#0A0A0A',
        gray: {
          900: '#121212',
          800: '#1A1A1A',
          700: '#2A2A2A',
          600: '#3F3F3F',
          500: '#666666',
          400: '#999999',
          300: '#B3B3B3',
          200: '#E0E0E0',
          100: '#F5F5F5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'inner-yellow': 'inset 0 0 0 2px #FFD100',
      },
    },
  },
  plugins: [],
};