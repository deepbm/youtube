/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#fa0000',
        banner: '#1a1a1a',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
