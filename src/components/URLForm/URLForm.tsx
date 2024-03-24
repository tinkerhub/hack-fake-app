import React from "react";

import FeedTitle from "@/components/FeedTitle";
import ActionButton from "@/components/ActionButton";
import {ComponentIdType} from "@/customTypes/CommonTypes";

interface iProps {
	id?: ComponentIdType;
	newsDateValue: string;
	newsUrlValue: string;
	onNext: (
		id: ComponentIdType,
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => void;
	onChangeURL: (
		id: ComponentIdType,
		event: React.ChangeEvent<HTMLInputElement>,
	) => void;
	onChangeDate: (
		id: ComponentIdType,
		event: React.ChangeEvent<HTMLInputElement>,
	) => void;
}

function URLForm({
	id,
	newsDateValue,
	newsUrlValue,
	onNext,
	onChangeURL,
	onChangeDate,
}: iProps) {
	const localOnClickHandler = async (
		id: ComponentIdType,
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		await onNext(id, event);
	};

	const localOnChangeURL = async (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		await onChangeURL(id, event);
	};

	const localOnChangeDate = async (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		await onChangeDate(id, event);
	};

	return (
		<div className="flex-1 justify-center items-center w-11/12 md:w-3/5 lg:w-1/3 mx-auto gap-8 flex flex-col">
			<FeedTitle title="Finally, can I know the source URL and date" />

			<form className="w-full flex flex-col gap-4">
				<input
					className="textarea bg-transparent resize-none border border-primary focus:outline-none"
					placeholder="URL"
					onChange={localOnChangeURL}
					value={newsUrlValue}
				></input>

				<input
					className="textarea bg-transparent resize-none border border-primary focus:outline-none"
					type="date"
					placeholder="Date"
					onChange={localOnChangeDate}
					value={newsDateValue}
				></input>

				<ActionButton id={id} text="Next" onClick={localOnClickHandler} />
			</form>
		</div>
	);
}

export default URLForm;
