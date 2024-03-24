import {NullableString} from "@/customTypes/CommonTypes";
import {apiResponseStatuses} from "@/customTypes/NetworkTypes";
import {iTokenPair} from "@/customTypes/appDataTypes/authTypes";

export const REDUCER_NAME = "authState";

export interface iAuthState {
	isLoading: boolean;

	responseStatus: apiResponseStatuses;

	message: NullableString;

	isAuthenticated: boolean;

	tokens: iTokenPair;
}
