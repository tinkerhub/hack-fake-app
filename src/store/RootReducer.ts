import {combineReducers} from "@reduxjs/toolkit";

import exampleReducer from "@/store/example/ExampleSlice";
import authReducer from "@/store/auth/AuthSlice";
import annotationReducer from "@/store/annotation/AnnotationSlice";
import newsReducer from "@/store/news/NewsSlice";

// Combine all reducers here
const rootReducer = combineReducers({
	exampleReducer,
	authReducer,
	annotationReducer,
	newsReducer,
});

export default rootReducer;
