import {ColorValue} from "@/customTypes/CommonTypes";

export interface iNeutrals {
	background: {
		screen: ColorValue;
		statusBar: ColorValue;
		banner: ColorValue;
		accordionBody: ColorValue;
		accordionHeader: ColorValue;
		tile: ColorValue;
	};

	font: {
		h1: ColorValue;

		h2: ColorValue;

		subtitle: ColorValue;

		body: ColorValue;

		label: ColorValue;
	};
}

export interface iAccentColors {
	border: ColorValue;
}

export interface iSemanticColor {
	bg: ColorValue;

	color: ColorValue;
}

export interface iSemanticColors {
	error: iSemanticColor;

	warning: iSemanticColor;

	success: iSemanticColor;

	info: iSemanticColor;
}

export interface iColorTheme {
	primary: ColorValue;

	secondary: ColorValue;

	accents: iAccentColors;

	neutrals: iNeutrals;

	semantic: iSemanticColors;
}

export interface iTheme {
	id: string;

	isDark: boolean;

	colors: iColorTheme;
}

export interface iProvidedValue {
	theme: iTheme;

	changeTheme: (themeId?: string) => void;
}
