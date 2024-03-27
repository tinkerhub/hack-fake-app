import {createAsyncThunk} from "@reduxjs/toolkit";

import {curryGetThunkName} from "@/utils/ReduxUtil";
import {iStateMessage} from "@/customTypes/GenericReduxTypes";
import {annotationService} from "@/services/api/hackFakeServer";
import {MultiAnnotation} from "@/customTypes/appDataTypes/annotationTypes";

import {REDUCER_NAME} from "./Types";

const curriedThunkName = curryGetThunkName(REDUCER_NAME);

export const fetchAllAnnotationOptions = createAsyncThunk<
	MultiAnnotation,
	undefined,
	{
		rejectValue: iStateMessage;
	}
>(
	curriedThunkName("fetchAllAnnotationOptions"),
	async (payload, {rejectWithValue}) => {
		try {
			const response = await annotationService.fetchAllAnnotationOptions();

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
	},
);
