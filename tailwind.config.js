/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Saira"', "serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
        saira: ["Saira Condensed", "san-serif"],
      },
      colors: {
        background: "#1E1E20",
        charcoalBlue: "#131211",
        golden: "#dca955",
        secondary: "#ABABAB",
        ash: "#2d2d2d",
        silver: "#bfbfbf",
        emeraldGreen: "#007f56",
        smoke: "#ecf0f1",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin')
]
};
