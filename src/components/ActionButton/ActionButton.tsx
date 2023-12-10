import React from "react";

import {ComponentIdType} from "@/customTypes/CommonTypes";

interface iProps {
	id?: ComponentIdType;
	text: string;
	onClick?: (
		id: ComponentIdType,
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => void;
}

function ActionButton({id, text, onClick}: iProps) {
	const onClickHandler = async (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		if (onClick) {
			await onClick(id, event);
		}
	};

	return (
		<button
			onClick={onClickHandler}
			className="btn btn-primary action-button rounded-full bg-primary border-none hover:bg-accent w-full"
		>
			{text}
		</button>
	);
}

export default ActionButton;
