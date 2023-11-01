/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                info: "#fdf8f6",
                danger: "#f2e8e5",
                warning: "#eaddd7",
                primary: "#e0cec7",
                secondary: "#d2bab0",
                success: "#bfa094",
            },
            fontFamily: {
                Poppins: "Poppins, sans-serif",
                Exo2: "Exo 2, sans-serif",
                Ubuntu: "Ubuntu, sans-serif",
            },
        },
    },
    plugins: [],
};