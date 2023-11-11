/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#D36C31",
                secondary: "#F1B898",
                background: "#FEFEFE",
                text: "#000000",
                offtext: "#6E6E6E",
            },
        },
    },
    plugins: [require("daisyui")],
};
