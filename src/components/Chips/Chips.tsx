import React from "react";

import {ComponentIdType} from "@/customTypes/CommonTypes";

interface iProps {
	id?: ComponentIdType;
	text: string;
	selected?: boolean;
	onClick?: (
		id: ComponentIdType,
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => void;
}

function Chips({id, text, selected, onClick}: iProps) {
	const onClickHandler = async (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		event.preventDefault();

		if (onClick) {
			await onClick(id, event);
		}
	};

	return (
		<button
			onClick={onClickHandler}
			className={`border-2 border-primary text-sm px-3 py-3 rounded-full ${
				selected ? "bg-primary text-white" : ""
			}`}
		>
			{text}
		</button>
	);
}

export default Chips;
