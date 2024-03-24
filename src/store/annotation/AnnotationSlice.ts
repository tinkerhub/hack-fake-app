import {createSlice} from "@reduxjs/toolkit";

import {apiResponseStatuses} from "@/customTypes/NetworkTypes";
import {iStateMessage} from "@/customTypes/GenericReduxTypes";

import {iAnnotationState, REDUCER_NAME} from "./Types";
import {fetchAllAnnotationOptions} from "./ThunkActions";

const initialState: iAnnotationState = {
	isLoading: false,

	responseStatus: apiResponseStatuses.IDLE,

	message: null,

	annotationOptions: {
		ids: [],

		items: {},
	},
};

export const authSlice = createSlice({
	name: REDUCER_NAME,

	initialState,

	reducers: {
		resetAnnotationState: () => {
			return {
				isLoading: false,

				responseStatus: apiResponseStatuses.IDLE,

				message: null,

				annotationOptions: {
					ids: [],

					items: {},
				},
			};
		},
	},

	extraReducers: (builder) => {
		builder.addCase(fetchAllAnnotationOptions.pending, (state) => {
			state.isLoading = true;
			state.responseStatus = apiResponseStatuses.IDLE;
		});

		builder.addCase(fetchAllAnnotationOptions.fulfilled, (state, action) => {
			state.responseStatus = apiResponseStatuses.SUCCESS;
			state.message = null;

			state.annotationOptions = action.payload;

			state.isLoading = false;
		});

		builder.addCase(fetchAllAnnotationOptions.rejected, (state, action) => {
			const {message} = action.payload as iStateMessage;

			state.responseStatus = apiResponseStatuses.ERROR;
			state.message = message;

			state.annotationOptions = {
				ids: [],
				items: {},
			};

			state.isLoading = false;
		});
	},
});

export const {resetAnnotationState} = authSlice.actions;

export default authSlice.reducer;
