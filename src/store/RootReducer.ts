import {combineReducers} from "@reduxjs/toolkit";

import exampleReducer from "@/store/example/ExampleSlice";

// Combine all reducers here
const rootReducer = combineReducers({
	exampleReducer,
});

export default rootReducer;
