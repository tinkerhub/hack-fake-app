import React from "react";

import {ComponentIdType} from "@/customTypes/CommonTypes";

interface iProps {
	id?: ComponentIdType;
	label?: string;
	placeholder?: string;
}

function Input({label, placeholder}: iProps) {
	const renderLabel = () => {
		if (label) {
			return (
				<label className="label">
					<span className="label-text">{label}</span>
				</label>
			);
		}
	};

	return (
		<div className="form-control w-full">
			{renderLabel()}

			<input
				type="text"
				placeholder={placeholder || ""}
				className="input placeholder:text-sm placeholder:text-offtext input-bordered focus:outline-none w-full bg-transparent border-dark"
			/>
		</div>
	);
}

export default Input;
