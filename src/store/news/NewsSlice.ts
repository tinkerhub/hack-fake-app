import {createSlice} from "@reduxjs/toolkit";

import {apiResponseStatuses} from "@/customTypes/NetworkTypes";
import {iStateMessage} from "@/customTypes/GenericReduxTypes";

import {iNewsState, REDUCER_NAME} from "./Types";
import {submitNews, annotateNews, predictNews} from "./ThunkActions";

const initialState: iNewsState = {
	isLoading: false,

	responseStatus: apiResponseStatuses.IDLE,

	message: null,

	newsId: null,

	predictedIds: [],
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
			state.predictedIds = [];

			state.isLoading = false;
		});

		builder.addCase(submitNews.rejected, (state, action) => {
			const {message} = action.payload as iStateMessage;

			state.responseStatus = apiResponseStatuses.ERROR;
			state.message = message;

			state.newsId = null;
			state.predictedIds = [];

			state.isLoading = false;
		});

		builder.addCase(annotateNews.pending, (state) => {
			state.isLoading = true;
			state.responseStatus = apiResponseStatuses.IDLE;
		});

		builder.addCase(annotateNews.fulfilled, (state) => {
			state.responseStatus = apiResponseStatuses.SUCCESS;
			state.message = null;

			state.isLoading = false;
		});

		builder.addCase(annotateNews.rejected, (state, action) => {
			const {message} = action.payload as iStateMessage;

			state.responseStatus = apiResponseStatuses.ERROR;
			state.message = message;

			state.isLoading = false;
		});

		builder.addCase(predictNews.pending, (state) => {
			state.isLoading = true;
			state.responseStatus = apiResponseStatuses.IDLE;
		});

		builder.addCase(predictNews.fulfilled, (state, action) => {
			state.responseStatus = apiResponseStatuses.SUCCESS;
			state.message = null;

			state.predictedIds = action.payload.annotationIds;

			state.isLoading = false;
		});

		builder.addCase(predictNews.rejected, (state, action) => {
			const {message} = action.payload as iStateMessage;

			state.responseStatus = apiResponseStatuses.ERROR;
			state.message = message;

			state.predictedIds = [];

			state.isLoading = false;
		});
	},
});

export const {resetAnnotationState} = newsSlice.actions;

export default newsSlice.reducer;
