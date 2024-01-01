import {createAsyncThunk} from "@reduxjs/toolkit";

import {curryGetThunkName} from "@/utils/ReduxUtil";
import {iStateMessage} from "@/customTypes/GenericReduxTypes";
import {newsService} from "@/services/api/hackFakeServer";
import {
	iNewsAnnotationsInputDTO,
	iNewsId,
	iNewsSubmissionDTO,
} from "@/customTypes/appDataTypes/newsTypes";
import {iPredictedAnnotations} from "@/customTypes/appDataTypes/annotationTypes";

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
		console.log("🚀 ~ file: ThunkActions.ts:26 ~ > ~ response:", response);

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
		return rejectWithValue({
			message: "Something went wrong",
		});
	}
});

export const annotateNews = createAsyncThunk<
	null,
	iNewsAnnotationsInputDTO,
	{
		rejectValue: iStateMessage;
	}
>(curriedThunkName("annotateNews"), async (payload, {rejectWithValue}) => {
	try {
		const response = await newsService.annotateNews(
			payload.newsId,
			payload.annotations,
		);

		if (response) {
			const {httpStatusCode, data, error} = response;

			switch (httpStatusCode) {
				case 201:
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
		return rejectWithValue({
			message: "Something went wrong",
		});
	}
});

export const predictNews = createAsyncThunk<
	iPredictedAnnotations,
	string,
	{
		rejectValue: iStateMessage;
	}
>(curriedThunkName("predictNews"), async (payload, {rejectWithValue}) => {
	try {
		const response = await newsService.predictNews(payload);

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
		return rejectWithValue({
			message: "Something went wrong",
		});
	}
});
