import React from "react";

import {ReduxProvider} from "@/store/Provider";

import "./globals.css";

import type {Metadata} from "next";

export const metadata: Metadata = {
	title: "HackFake",
	description: "HackFake",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body>
				<ReduxProvider>
					<div className="bg-background text-text min-h-screen">{children}</div>
				</ReduxProvider>
			</body>
		</html>
	);
}
