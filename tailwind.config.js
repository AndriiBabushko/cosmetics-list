/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/pages/**/*.{js,ts,jsx,tsx}', './src/app/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
