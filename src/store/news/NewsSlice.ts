import {createSlice} from "@reduxjs/toolkit";

import {apiResponseStatuses} from "@/customTypes/NetworkTypes";
import {iStateMessage} from "@/customTypes/GenericReduxTypes";

import {iNewsState, REDUCER_NAME} from "./Types";
import {submitNews} from "./ThunkActions";

const initialState: iNewsState = {
	isLoading: false,

	responseStatus: apiResponseStatuses.IDLE,

	message: null,

	newsId: "bcb9e1f4-17b0-48f8-babf-e22fd2657a41",
};

export const newsSlice = createSlice({
	name: REDUCER_NAME,

	initialState,

	reducers: {
		resetAnnotationState: () => {
			return initialState;
		},
	},

	extraReducers: (builder) => {
		builder.addCase(submitNews.pending, (state) => {
			state.isLoading = true;
			state.responseStatus = apiResponseStatuses.IDLE;
		});

		builder.addCase(submitNews.fulfilled, (state, action) => {
			state.responseStatus = apiResponseStatuses.SUCCESS;
			state.message = null;

			state.newsId = action.payload.id;

			state.isLoading = false;
		});

		builder.addCase(submitNews.rejected, (state, action) => {
			const {message} = action.payload as iStateMessage;

			state.responseStatus = apiResponseStatuses.ERROR;
			state.message = message;

			state.newsId = null;

			state.isLoading = false;
		});
	},
});

export const {resetAnnotationState} = newsSlice.actions;

export default newsSlice.reducer;
