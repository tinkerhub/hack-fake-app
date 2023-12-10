"use client";

import React from "react";

import {Provider} from "react-redux";

import {injectStore} from "@/services/api";

import store from ".";

/*
		injecting redux store to axios service layer
		See the below link for more details:
		https://redux.js.org/faq/code-structure#how-can-i-use-the-redux-store-in-non-component-files
	*/
injectStore(store);

export function ReduxProvider({children}: {children: React.ReactNode}) {
	return <Provider store={store}>{children}</Provider>;
}
