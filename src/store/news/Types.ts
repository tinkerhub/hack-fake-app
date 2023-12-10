import {NullableString} from "@/customTypes/CommonTypes";
import {apiResponseStatuses} from "@/customTypes/NetworkTypes";

export const REDUCER_NAME = "news";

export interface iNewsState {
	isLoading: boolean;

	responseStatus: apiResponseStatuses;

	message: NullableString;

	newsId: NullableString;
}
