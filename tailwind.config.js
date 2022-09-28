/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ["Noto Sans KR", "Montserrat"],
            serif: ["Lato"],
            mono: ["Corinthia", "Shadows Into Light", "Staatliches"],
            cursive: ["Architects Daughter"],
            jua: ["Jua"],
        },
    },
  },
  plugins: [],
}
