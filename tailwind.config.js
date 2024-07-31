/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        submain : "#FFCF3F",
        submainBlue : "#035FAE",
        backgroundGrey : "#F4F4F4",
        backgroundtext : '#6c717b',
        achivementBlue : '#3B78D9'
      }
    },
  },
  plugins: [],
}

