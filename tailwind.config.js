/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          'brown': '#6B4423',
          'light-brown': '#8B5A3C',
          'beige': '#D4B896',
          'cream': '#F5E6D3',
          'dark-brown': '#4A2C17',
          'warm-beige': '#E8D5B7',
        }
      }
    },
  },
  plugins: [],
};
