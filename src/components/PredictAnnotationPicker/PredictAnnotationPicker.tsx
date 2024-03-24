import React from "react";

import FeedTitle from "@/components/FeedTitle";
import ActionButton from "@/components/ActionButton";
import {ComponentIdType} from "@/customTypes/CommonTypes";

interface iProps {
	id?: ComponentIdType;
	titleValue: string;
	onClickPredict: (
		id: ComponentIdType,
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => void;
	onClickAnnotate: (
		id: ComponentIdType,
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => void;
}

function PredictAnnotationPicker({
	id,
	titleValue,
	onClickPredict,
	onClickAnnotate,
}: iProps) {
	return (
		<div className="flex-1 justify-center items-center w-11/12 md:w-3/5 lg:w-1/3 mx-auto gap-8 flex flex-col">
			<FeedTitle title={titleValue} />

			<form className="w-full flex flex-col gap-4">
				<div className="flex  w-1/2 gap-2">
					<ActionButton id={id} text="Predict" onClick={onClickPredict} />

					<ActionButton id={id} text="Annotate" onClick={onClickAnnotate} />
				</div>
			</form>
		</div>
	);
}

export default PredictAnnotationPicker;
