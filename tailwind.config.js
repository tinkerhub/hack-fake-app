/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: "#D36C31",
				secondary: "#F1B898",
				accent: "#D97B45",
				background: "#FEFEFE",
				text: "#000000",
				dark: "#A74006",
				offtext: "#6E6E6E",
			},
		},
	},
	plugins: [],
};
