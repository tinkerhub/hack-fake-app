import React from "react";

import FeedTitle from "@/components/FeedTitle";
import ActionButton from "@/components/ActionButton";
import {ComponentIdType} from "@/customTypes/CommonTypes";

interface iProps {
	id?: ComponentIdType;
	newsContentValue: string;
	onNext: (
		id: ComponentIdType,
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => void;
	onChangeText: (
		id: ComponentIdType,
		event: React.ChangeEvent<HTMLTextAreaElement>,
	) => void;
}

function ContentForm({id, newsContentValue, onNext, onChangeText}: iProps) {
	const localOnClickHandler = async (
		id: ComponentIdType,
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		await onNext(id, event);
	};

	const localOnChange = async (
		event: React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		await onChangeText(id, event);
	};

	return (
		<div className="flex-1 justify-center items-center w-11/12 md:w-3/5 lg:w-1/3 mx-auto gap-8 flex flex-col">
			<FeedTitle title="May I know your news content?" />

			<form className="w-full flex flex-col gap-4">
				<textarea
					rows={4}
					value={newsContentValue}
					className="textarea bg-transparent resize-none border border-primary focus:outline-none"
					onChange={localOnChange}
				></textarea>

				<ActionButton id={id} text="Next" onClick={localOnClickHandler} />
			</form>
		</div>
	);
}

export default ContentForm;
