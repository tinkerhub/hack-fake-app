import {createSlice} from "@reduxjs/toolkit";

import {apiResponseStatuses} from "@/customTypes/NetworkTypes";
import {iStateMessage} from "@/customTypes/GenericReduxTypes";

import {iAuthState as iAuthState, REDUCER_NAME} from "./Types";
import {authenticate} from "./ThunkActions";

const initialState: iAuthState = {
	isLoading: false,

	responseStatus: apiResponseStatuses.IDLE,

	message: null,

	isAuthenticated: false,

	tokens: {
		accessToken: "",
		refreshToken: "",
	},
};

export const authSlice = createSlice({
	name: REDUCER_NAME,

	initialState,

	reducers: {
		resetAuthState: () => {
			return {
				isLoading: false,

				responseStatus: apiResponseStatuses.IDLE,

				message: null,

				isAuthenticated: false,

				tokens: {
					accessToken: "",
					refreshToken: "",
				},
			};
		},
	},

	extraReducers: (builder) => {
		builder.addCase(authenticate.pending, (state) => {
			state.isLoading = true;
			state.responseStatus = apiResponseStatuses.IDLE;
		});

		builder.addCase(authenticate.fulfilled, (state, action) => {
			state.responseStatus = apiResponseStatuses.SUCCESS;
			state.message = null;

			state.isAuthenticated = true;

			state.tokens = action.payload;

			state.isLoading = false;
		});

		builder.addCase(authenticate.rejected, (state, action) => {
			const {message} = action.payload as iStateMessage;

			state.responseStatus = apiResponseStatuses.ERROR;
			state.message = message;

			state.isAuthenticated = false;

			state.tokens = {
				accessToken: "",
				refreshToken: "",
			};

			state.isLoading = false;
		});
	},
});

export const {resetAuthState} = authSlice.actions;

export default authSlice.reducer;
