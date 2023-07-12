/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#fa0000',
        light: '#ff0000',
        dark: '#18181b',
        banner: '#1a1a1a',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
