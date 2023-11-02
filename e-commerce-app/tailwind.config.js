/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "my-background": "#ffd9d9",
        info: "#fdf8f6",
        danger: "#f2e8e5",
        warning: "#eaddd7",
        primary: "#e0cec7",
        secondary: "#d2bab0",
        success: "#bfa094",
      },
      dropShadow: {
        "header-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px ",
        "product-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px ",
      },
    },
  },
  plugins: [],
};
