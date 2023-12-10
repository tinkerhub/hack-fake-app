import React from "react";

import {ComponentIdType} from "@/customTypes/CommonTypes";

interface iProps {
	id?: ComponentIdType;
	label?: string;
	placeholder?: string;
	inputType: React.HTMLInputTypeAttribute | undefined;
	value?: string;
	onChangeText?: (id: ComponentIdType, value: string) => void;
}

function Input({
	id,
	label,
	placeholder,
	inputType,
	value,
	onChangeText,
}: iProps) {
	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (onChangeText) {
			onChangeText(id, event.target.value);
		}
	};

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
				className="input placeholder:text-sm placeholder:text-offtext input-bordered focus:outline-none w-full bg-transparent border-dark"
				type={inputType || "text"}
				placeholder={placeholder || ""}
				value={value}
				onChange={onChangeHandler}
			/>
		</div>
	);
}

export default Input;
