/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        accent: "#EA4335",
        bkgBlue: "#081828",
        bkgWhite: "#F9F9F9",
        tranpBlue: "#3C4956",
      },
    },
  },
  plugins: [],
}
