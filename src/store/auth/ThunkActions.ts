import {createAsyncThunk} from "@reduxjs/toolkit";

import {curryGetThunkName} from "@/utils/ReduxUtil";
import {iStateMessage} from "@/customTypes/GenericReduxTypes";
import {authService} from "@/services/api/hackFakeServer";
import {iCredentials, iTokenPair} from "@/customTypes/appDataTypes/authTypes";

import {REDUCER_NAME} from "./Types";

const curriedThunkName = curryGetThunkName(REDUCER_NAME);

export const authenticate = createAsyncThunk<
	iTokenPair,
	iCredentials,
	{
		rejectValue: iStateMessage;
	}
>(curriedThunkName("authenticate"), async (payload, {rejectWithValue}) => {
	try {
		const {email, password} = payload;

		const response = await authService.authenticate(email, password);

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
