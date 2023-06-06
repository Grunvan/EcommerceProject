/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#65809C', // #C8BFBB, 4A4C4E, 35362E, 333436, 6664B5, 65809C
        highlight: '#3D4E5E', //#636363 для кнопок
        lightBlue: '#65809C',
      },
    },
  },
  plugins: [],
}
