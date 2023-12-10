import {StringArray} from "@/customTypes/CommonTypes";

interface iAnnotation {
	id: string;
	name: string;
}

type MultiAnnotation = {
	ids: StringArray;

	items: {
		[key in string]: iAnnotation;
	};
};

interface iPredictedAnnotations {
	annotationIds: StringArray;
}

export type {iAnnotation, MultiAnnotation, iPredictedAnnotations};
