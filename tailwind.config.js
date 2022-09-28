/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purpleDark:"#240D57",
        purpleLight:"#501FC1",
        envitedPurple:"#8456EC",
        envitedPink:"#E87BF8",
        text4f4f4f:"#4F4F4F",
        text828282:"#828282"
      }
    },
  },
  plugins: [],
}