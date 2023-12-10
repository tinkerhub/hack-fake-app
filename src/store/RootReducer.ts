import {combineReducers} from "@reduxjs/toolkit";

import exampleReducer from "@/store/example/ExampleSlice";
import authReducer from "@/store/auth/AuthSlice";
import annotationReducer from "@/store/annotation/AnnotationSlice";

// Combine all reducers here
const rootReducer = combineReducers({
	exampleReducer,
	authReducer,
	annotationReducer,
});

export default rootReducer;
