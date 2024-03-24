import React, {useState} from "react";

import FeedTitle from "@/components/FeedTitle";
import ActionButton from "@/components/ActionButton";
import Chips from "@/components/Chips";
import {ComponentIdType, StringArray} from "@/customTypes/CommonTypes";
import {MultiAnnotation} from "@/customTypes/appDataTypes/annotationTypes";

interface iProps {
	id?: ComponentIdType;
	annotationOptions: MultiAnnotation;
	onSubmit: (
		id: ComponentIdType,
		selectedAnnotationOptions: StringArray,
	) => void;
}

function Annotate({id, annotationOptions, onSubmit}: iProps) {
	const [selectedAnnotationOptions, setSelectedAnnotationOptions] = useState<{
		[key in string]: boolean;
	}>({});

	const onLocalSubmit = async (id: ComponentIdType) => {
		const selectedAnnotationOptionIds: StringArray = [];

		Object.keys(selectedAnnotationOptions).forEach(
			(selectedAnnotationOptionId) => {
				if (selectedAnnotationOptions[selectedAnnotationOptionId]) {
					selectedAnnotationOptionIds.push(selectedAnnotationOptionId);
				}
			},
		);

		await onSubmit(id, selectedAnnotationOptionIds);
	};

	const onSelectAnnotationOption = (id: ComponentIdType) => {
		if (id) {
			setSelectedAnnotationOptions((prvState) => {
				const hasAnnotationPreviouslySelected = prvState[id];

				if (hasAnnotationPreviouslySelected) {
					return {
						...prvState,
						[id]: false,
					};
				} else {
					return {
						...prvState,
						[id]: true,
					};
				}
			});
		}
	};

	const renderAnnotationOptions = (): React.ReactNode => {
		const annotationChips: Array<React.ReactNode> = [];

		annotationOptions.ids.forEach((annotationId) => {
			const {name} = annotationOptions.items[annotationId];

			annotationChips.push(
				<Chips
					id={annotationId}
					text={name}
					selected={selectedAnnotationOptions[annotationId] || false}
					onClick={onSelectAnnotationOption}
				/>,
			);
		});

		return annotationChips;
	};

	return (
		<div className="flex-1 justify-center items-center w-11/12 md:w-3/5 lg:w-2/3 mx-auto gap-8 flex flex-col">
			<FeedTitle title="Annotate Your Opinion About the News Given" />
			<div className="text-sm -mt-5">
				Select all the boxes you feel appropriate to the news
			</div>
			<div className="flex flex-col items-center">
				<div className=" flex flex-wrap justify-center  gap-2">
					{renderAnnotationOptions()}
				</div>
			</div>
			<div className="w-full flex flex-col gap-4">
				<div className="flex justify-center items-center gap-4">
					State your opinion
					<div className="flex w-1/2  ">
						<ActionButton id={id} text="Annotate" onClick={onLocalSubmit} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Annotate;
