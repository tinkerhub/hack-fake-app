import {iColorTheme, iTheme} from "@/customTypes/ThemeTypes";

import Colors from "../Colors";

const colors: iColorTheme = {
	primary: Colors.INFRA_RED,

	secondary: Colors.INFRA_RED,

	accents: {
		border: "#D9D9D9",
	},

	neutrals: {
		background: {
			screen: Colors.LAVENDER,
			statusBar: Colors.WHITE,
			banner: Colors.WHITE,
			accordionBody: Colors.WHITE,
			accordionHeader: Colors.WHITE,
			tile: Colors.WHITE,
		},

		font: {
			h1: Colors.DARK_GUNMETAL,

			h2: Colors.DARK_GUNMETAL,

			subtitle: Colors.DARK_GUNMETAL,

			body: Colors.DARK_GUNMETAL,

			label: Colors.WHITE,
		},
	},

	semantic: {
		error: {
			bg: Colors.INFRA_RED,
			color: Colors.INFRA_RED,
		},

		warning: {
			bg: "#F2C94C",
			color: "#F2C94C",
		},

		success: {
			bg: "#00CC99",
			color: "#00CC99 ",
		},

		info: {
			bg: Colors.MAJORELLE_BLUE,
			color: Colors.MAJORELLE_BLUE,
		},
	},
};

const ModernTheme: iTheme = {
	id: "modern-theme",

	isDark: false,

	colors,
};

export default ModernTheme;
