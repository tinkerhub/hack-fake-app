import {NullableString} from "@/customTypes/CommonTypes";
import {apiResponseStatuses} from "@/customTypes/NetworkTypes";
import {MultiAnnotation} from "@/customTypes/appDataTypes/annotationTypes";

export const REDUCER_NAME = "annotation";

export interface iAnnotationState {
	isLoading: boolean;

	responseStatus: apiResponseStatuses;

	message: NullableString;

	annotationOptions: MultiAnnotation;
}
