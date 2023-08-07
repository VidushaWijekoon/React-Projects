/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "page-background-color": "#031b34",
        "page-text-color": "#81afdd",
        "page-sub-text-color": "#ff8a71",
      },
    },
  },
  plugins: [],
};
