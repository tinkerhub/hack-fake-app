import {combineReducers} from "@reduxjs/toolkit";

import exampleReducer from "@/store/example/ExampleSlice";
import authReducer from "@/store/auth/AuthSlice";

// Combine all reducers here
const rootReducer = combineReducers({
	exampleReducer,
	authReducer,
});

export default rootReducer;
