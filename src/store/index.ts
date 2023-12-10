import {configureStore} from "@reduxjs/toolkit";

import rootReducer from "@store/RootReducer";

// Create the store with the root reducer and middleware injected
const store = configureStore({
	reducer: rootReducer,
	// Note: It's often useful to enable Redux DevTools for development.
	// You can conditionally enable it based on the environment if needed.
	devTools: false,
});

// Types related to the store
type StoreType = typeof store;
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export default store;

export type {StoreType, RootState, AppDispatch};
