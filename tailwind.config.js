/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#D36C31",
                secondary: "#F1B898",
                accent: "#D97B45",
                background: "#FEFEFE",
                text: "#000000",
                dark: "#A74006",
            },
        },
    },
    plugins: [require("daisyui")],
};
