import {createAsyncThunk} from "@reduxjs/toolkit";

import {curryGetThunkName} from "@/utils/ReduxUtil";
import {iStateMessage} from "@/customTypes/GenericReduxTypes";
import {newsService} from "@/services/api/hackFakeServer";
import {
	iNewsId,
	iNewsSubmissionDTO,
} from "@/customTypes/appDataTypes/newsTypes";

import {REDUCER_NAME} from "./Types";

const curriedThunkName = curryGetThunkName(REDUCER_NAME);

export const submitNews = createAsyncThunk<
	iNewsId,
	iNewsSubmissionDTO,
	{
		rejectValue: iStateMessage;
	}
>(curriedThunkName("submitNews"), async (payload, {rejectWithValue}) => {
	try {
		const response = await newsService.submitNews(payload);

		if (response) {
			const {httpStatusCode, data, error} = response;

			switch (httpStatusCode) {
				case 200:
					return data;
				case 400: {
					const message = error?.message || "Something went wrong";

					return rejectWithValue({
						httpStatusCode,
						message,
					});
				}
				default:
					return rejectWithValue({
						message: "Something went wrong",
					});
			}
		} else {
			return rejectWithValue({
				message: "Something went wrong",
			});
		}
	} catch (error) {
		console.log("🚀 ~ file: ThunkActions.ts:33 ~ > ~ error:", error);

		return rejectWithValue({
			message: "Something went wrong",
		});
	}
});
