/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "380px",
			xs: "475px",
			...defaultTheme.screens,
    },
    linearBorderGradients: {
      colors: {
        "primary": ["#0298F9", "#086BEA"],
        "secondary": ["#086BEA", "#0298F9"],
      },
      directions: {
        "t": "to top",
        "tr": "to top right",
        "r": "to right",
        "br": "to bottom right",
        "b": "to bottom",
        "bl": "to bottom left",
        "l": "to left",
        "tl": "to top left",
      },
    }
  },
  variants: {
    linearBorderGradients: ["responsive", "hover", "focus"],
  },
  plugins: [
    require('tailwindcss-border-gradients')(),
  ],
}
