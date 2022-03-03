const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["inter", "Noto Sans Bengali", "sans-serif"],
      },
      animation: {
        zooming: "zooming 50s ease 0s infinite normal none running",
      },
      keyframes: {
        zooming: {
          "0%, 100%": {
            transform:
              "scale3d(1.1, 1.1, 1.1) translate3d(-20px, -10px, 0px) rotate(0.1deg)",
          },
          "25%, 75%": {
            transform:
              "scale3d(1.2, 1.2, 1.2) translate3d(-20px, -10px, 0px) rotate(0.1deg)",
          },
          "50%": {
            transform:
              "scale3d(1.3, 1.3, 1.3) translate3d(-20px, -10px, 0px) rotate(0.1deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
