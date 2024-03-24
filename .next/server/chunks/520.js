exports.id = 520;
exports.ids = [520];
exports.modules = {

/***/ 1707:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 5911:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9637))

/***/ }),

/***/ 2420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_ActionButton)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/components/ActionButton/ActionButton.tsx


function ActionButton({ id, text, onClick }) {
    const onClickHandler = async (event)=>{
        event.preventDefault();
        if (onClick) {
            await onClick(id, event);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        onClick: onClickHandler,
        className: "btn btn-primary action-button rounded-full bg-primary border-none hover:bg-accent w-full",
        children: text
    });
}
/* harmony default export */ const ActionButton_ActionButton = (ActionButton);

;// CONCATENATED MODULE: ./src/components/ActionButton/index.ts

/* harmony default export */ const components_ActionButton = (ActionButton_ActionButton);


/***/ }),

/***/ 2212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ constants_Images)
});

;// CONCATENATED MODULE: ./src/assets/images/circle.svg
/* harmony default export */ const circle = ({"src":"/_next/static/media/circle.f753c4f1.svg","height":1207,"width":1207,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/constants/Images.ts

/**
 * All the images used in this project should be defined here and should
 * only consumed from here.
 */ const Images = {
    circleSVG: circle
};
/* harmony default export */ const constants_Images = (Images);


/***/ }),

/***/ 881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ apiResponseStatuses),
/* harmony export */   y: () => (/* binding */ httpStatusCodes)
/* harmony export */ });
var /**
 * The standard api response which will be used throughout the application
 * depending upon the response of api service call (via axios).
 */ apiResponseStatuses;
(function(apiResponseStatuses) {
    apiResponseStatuses[/**
	 * this will be the initial status of any apiResponseStatuses type
	 * variable or property.
	 */ "IDLE"] = "IDLE";
    apiResponseStatuses[/**
	 * this will be the value of any apiResponseStatuses type variable
	 * or property when an API request gets succeed.
	 */ "SUCCESS"] = "SUCCESS";
    apiResponseStatuses[/**
	 * this will be the value of any apiResponseStatuses type variable
	 * or property when an API request gets failed.
	 */ "ERROR"] = "ERROR";
})(apiResponseStatuses || (apiResponseStatuses = {}));
var /**
 * All the http status codes returned by the api server(s) needs to be defined here.
 * This is used for determining the type/status of the api response after the call.
 *
 * Refer: https://www.restapitutorial.com/httpstatuscodes.html
 */ httpStatusCodes;
(function(httpStatusCodes) {
    httpStatusCodes[httpStatusCodes[// 2xx SUCCESS
    "SUCCESS_OK"] = 200] = "SUCCESS_OK";
    httpStatusCodes[httpStatusCodes["SUCCESS_CREATED"] = 201] = "SUCCESS_CREATED";
    httpStatusCodes[httpStatusCodes["SUCCESS_NO_CONTENT"] = 204] = "SUCCESS_NO_CONTENT";
    httpStatusCodes[httpStatusCodes[// 4xx CLIENT_ERROR
    "CLIENT_ERROR_BAD_REQUEST"] = 400] = "CLIENT_ERROR_BAD_REQUEST";
    httpStatusCodes[httpStatusCodes["CLIENT_ERROR_UNAUTHORIZED"] = 401] = "CLIENT_ERROR_UNAUTHORIZED";
    httpStatusCodes[httpStatusCodes["CLIENT_ERROR_FORBIDDEN"] = 403] = "CLIENT_ERROR_FORBIDDEN";
    httpStatusCodes[httpStatusCodes["CLIENT_ERROR_NOT_FOUND"] = 404] = "CLIENT_ERROR_NOT_FOUND";
    httpStatusCodes[httpStatusCodes[// 5xx SERVER_ERROR
    "SERVER_ERROR_INTERNAL_SERVER_ERROR"] = 500] = "SERVER_ERROR_INTERNAL_SERVER_ERROR";
    httpStatusCodes[httpStatusCodes["SERVER_ERROR_SERVICE_UNAVAILABLE"] = 503] = "SERVER_ERROR_SERVICE_UNAVAILABLE";
})(httpStatusCodes || (httpStatusCodes = {}));



/***/ }),

/***/ 2305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  xq: () => (/* binding */ annotationService),
  ON: () => (/* binding */ authService),
  ni: () => (/* reexport */ injectStore),
  Qw: () => (/* binding */ newsService)
});

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(4997);
;// CONCATENATED MODULE: ./src/services/api/commonInterceptors/AxiosResponseInterceptors.ts
/**
 * Mapping all the responseInterceptors defined as closures inside this function
 * to the axios-instance apiServer.
 *
 * Defined responseInterceptor closures needs to be registered to the constant object
 * axiosResponseInterceptors in order to get mapped.
 *
 * @param store
 * @param apiServer
 */ function AxiosResponseInterceptors(store, apiServer) {
    // TODO: add responseNetworkFailureInterceptor
    /**
	 * All response-interceptors should be registered here.
	 *
	 * eg: {
	 *     responseAuthorizationTokenExpireInterceptor: responseAuthorizationTokenExpireInterceptor
	 * }
	 */ const axiosResponseInterceptors = {};
    /**
	 * Extracting and mapping each responseInterceptor defined inside
	 * AxiosInterceptors.responseInterceptors with the axios-instance
	 * apiServer.
	 */ Object.values(axiosResponseInterceptors).forEach(// eslint-disable-next-line @typescript-eslint/no-explicit-any
    (responseInterceptor)=>{
        apiServer.interceptors.response.use(responseInterceptor.onFulfilled, responseInterceptor.onRejected);
    });
}
/* harmony default export */ const commonInterceptors_AxiosResponseInterceptors = (AxiosResponseInterceptors);

// EXTERNAL MODULE: ./src/customTypes/NetworkTypes.ts
var NetworkTypes = __webpack_require__(881);
;// CONCATENATED MODULE: ./src/services/api/hackFakeServer/axiosConfig/HackFakeServerAxiosResponseInterceptors.ts

/**
 * Mapping all the responseInterceptors defined as closures inside this function
 * to the axios-instance apiServer.
 *
 * Defined responseInterceptor closures needs to be registered to the constant object
 * axiosResponseInterceptors in order to get mapped.
 *
 * @param store
 * @param apiServer
 */ function HackFakeServerAxiosResponseInterceptors(store, apiServer) {
    /*
		Response Interceptor which determines whether the error caused by authorization
		token expiration or not in case of an error reason.

		If yes, it attempts to get a new authorization token issued by invoking the
		designated api. If the refresh attempt is successful, then it will retry the
		originally failed request with the newly issued authorization token.
	 */ const responseAuthTokenExpireInterceptor = {
        onFulfilled: async (response)=>{
            return response;
        },
        onRejected: async (reason)=>{
            if (store && reason && reason.response) {
                const { status: errorHttpStatus } = reason.response;
                /*
					Returns any error that is not a type of httpStatusCodes.CLIENT_ERROR_UNAUTHORIZED
				*/ if (errorHttpStatus !== NetworkTypes/* httpStatusCodes */.y.CLIENT_ERROR_UNAUTHORIZED) {
                    return new Promise((resolve, reject)=>{
                        reject(reason);
                    });
                }
            /*
					Renewing the expired authorization token with the refresh token
					and attempting to retry the originally failed request.
				*/ // TODO: add implementation for renewal
            // const originalRequestConfig = reason.config;
            // // retrying the originally failed request
            // return apiServer(originalRequestConfig);
            // }
            }
            return new Promise((resolve, reject)=>{
                reject(reason);
            });
        }
    };
    // TODO: add responseNetworkFailureInterceptor
    /**
	 * All response-interceptors should be registered here.
	 *
	 * eg: {
	 *     responseAuthorizationTokenExpireInterceptor: responseAuthorizationTokenExpireInterceptor
	 * }
	 */ const axiosResponseInterceptors = {
        responseAuthTokenExpireInterceptor
    };
    /**
	 * Extracting and mapping each responseInterceptor defined inside
	 * AxiosInterceptors.responseInterceptors with the axios-instance
	 * apiServer.
	 */ Object.values(axiosResponseInterceptors).forEach(// eslint-disable-next-line @typescript-eslint/no-explicit-any
    (responseInterceptor)=>{
        apiServer.interceptors.response.use(responseInterceptor.onFulfilled, responseInterceptor.onRejected);
    });
}
/* harmony default export */ const axiosConfig_HackFakeServerAxiosResponseInterceptors = (HackFakeServerAxiosResponseInterceptors);

;// CONCATENATED MODULE: ./src/services/api/hackFakeServer/axiosConfig/HackFaceServerAxiosRequestInterceptors.ts
/**
 * NOTE: Currently we're not using redux in this project.
 * The type of this will be changed to the proper
 * redux store type once we start using redux.
 */ /**
 * Mapping all the requestInterceptors defined as closures inside this function
 * to the axios-instance apiServer.
 *
 * Defined requestInterceptor closures needs to be registered to the constant object
 * axiosRequestInterceptors in order to get mapped.
 *
 * @param store
 * @param apiServer
 */ function HackFaceServerAxiosRequestInterceptors(store = null, apiServer) {
    /**
	 * Request Interceptor for adding Authorization: Bearer token by taking token from authSate in redux store.
	 * @param {AxiosRequestConfig} config
	 */ function requestAuthorizationInterceptor(config) {
        console.log("\uD83D\uDE80 ~ file: HackFaceServerAxiosRequestInterceptors.ts:34 ~ store:", store);
        if (store) {
            // setting authorization header
            console.log("\uD83D\uDE80 ~ file: HackFaceServerAxiosRequestInterceptors.ts:45 ~ store.getState().authReducer.tokens.accessToken:", store.getState().authReducer.tokens.accessToken);
            return {
                ...config,
                headers: {
                    ...config.headers,
                    Authorization: `Bearer ${store.getState().authReducer.tokens.accessToken}`
                }
            };
        }
        return config;
    }
    /**
	 * All request-interceptors should be registered here.
	 *
	 * eg: {
	 *     requestAuthorizationInterceptor: requestAuthorizationInterceptor
	 * }
	 */ const axiosRequestInterceptors = {
        requestAuthorizationInterceptor
    };
    /**
	 * Extracting and mapping each requestInterceptors with the axios-instance
	 * apiServer.
	 */ Object.values(axiosRequestInterceptors).forEach((requestInterceptor)=>{
        return apiServer.interceptors.request.use(requestInterceptor);
    });
}
/* harmony default export */ const axiosConfig_HackFaceServerAxiosRequestInterceptors = (HackFaceServerAxiosRequestInterceptors);

;// CONCATENATED MODULE: ./src/config/index.ts
/**
 * @description
 * Environment variables used in the application
 */ const env = {
    // Port on which the react app will run
    PORT: process.env.PORT,
    // Base URL for the HackFake API SERVER config
    NEXT_PUBLIC_HACK_FAKE_SERVER_BASE_URL: process.env.NEXT_PUBLIC_HACK_FAKE_SERVER_BASE_URL,
    NEXT_PUBLIC_HACK_FAKE_SEVER_REQUEST_TIMEOUT: Number(process.env.NEXT_PUBLIC_HACK_FAKE_SEVER_REQUEST_TIMEOUT)
};
/* harmony default export */ const config = (env);

;// CONCATENATED MODULE: ./src/services/api/hackFakeServer/axiosConfig/AxiosServiceConstants.ts

const API_SERVER_BASE_URL_DEV = config.NEXT_PUBLIC_HACK_FAKE_SERVER_BASE_URL;
/**
 * The base url of the api server's endpoint needs to be configured here.
 *
 * NOTE: This has to be manged by a build flavour configuration files
 * such as environment fils via libraries like react-native-config or via
 * a remote configuration manger.
 */ const API_SERVER_BASE_URL = API_SERVER_BASE_URL_DEV;
/**
 * The request timeout of the api server needs to be configured here.
 *
 * NOTE: This has to be manged by a build flavour configuration files
 * such as environment fils via libraries like react-native-config or via
 * a remote configuration manger.
 */ const API_SERVER_REQUEST_TIMEOUT = config.NEXT_PUBLIC_HACK_FAKE_SEVER_REQUEST_TIMEOUT;
/**
 * All basic axios request-configurations needs to be set here.
 * This will used inside the services/api/index.ts file while
 * creating axios service instance to handle api calls.
 */ const axiosRequestConfig = Object.freeze({
    baseURL: API_SERVER_BASE_URL,
    timeout: API_SERVER_REQUEST_TIMEOUT
});
/**
 * All the application service api endpoints should be defined here and never
 * directly define and use apiEndpoints as the baseURL is configured based on
 * the build flavour or other remote configuration managers.
 *
 * While defining endpoints here, kindly note that the part after the base url
 * should be added here and shouldn't include the host/baseURL part.
 *
 * Kindly refer the below examples for more details:
 *
 * If the endpoint is "https://dev.exampleapiserver.tld/api/v1/login" , then it
 * should be split as below:
 * API_SERVER_BASE_URL =  "https://dev.exampleapiserver.tld/api/v1"
 * apiEndpoints = {
 *     authentication: {
 *         login: "/login"
 *     }
 * }
 *
 */ const apiEndpoints = Object.freeze({
    auth: {
        signIn: "/auth/signin"
    },
    annotation: {
        fetchAllAnnotationOptions: "/annotations"
    },
    news: {
        submitNews: "/news",
        annotateNews: "/news/annotate",
        predictNews: (newsId)=>{
            return `/news/${newsId}/predict`;
        }
    }
});

;// CONCATENATED MODULE: ./src/services/api/hackFakeServer/axiosConfig/index.ts





/**
 * Creating axios instance for handling api service requests with
 * apiServerConfig.
 *
 * For updating any of the request configuration or for reviewing
 * the current configuration, please refer AxiosServiceConstants.axiosRequestConfig.
 */ const apiServer = axios/* default */.Z.create(axiosRequestConfig);
/**
 * Injects the redux store to the local variable reduxStore which gets used
 * inside the axios interceptors.
 *
 * For more details, please refer:
 * https://redux.js.org/faq/code-structure#how-can-i-use-the-redux-store-in-non-component-files
 *
 * @param store
 */ const injectStore = (store)=>{
    // registering common axios response interceptors
    commonInterceptors_AxiosResponseInterceptors(store, apiServer);
    // registering axios request interceptors specific to HackFake Server
    axiosConfig_HackFaceServerAxiosRequestInterceptors(store, apiServer);
    // registering axios response interceptors specific to HackFake Server
    axiosConfig_HackFakeServerAxiosResponseInterceptors(store, apiServer);
};


;// CONCATENATED MODULE: ./src/utils/NetworkUtil.ts
function buildResultOnFullFilled(value) {
    const { data } = value;
    const responseBody = data;
    return responseBody;
}
function buildResultOnRejected(// eslint-disable-next-line @typescript-eslint/no-explicit-any
reason) {
    const { response } = reason;
    const { data } = response;
    const responseBody = data;
    return responseBody;
}


;// CONCATENATED MODULE: ./src/services/api/hackFakeServer/AuthService.ts


function AuthService(apiServer) {
    const authenticate = async (email, password)=>{
        let result = null;
        await apiServer.post(apiEndpoints.auth.signIn, {
            email,
            password
        }).then(// onFullFilled
        (value)=>{
            result = buildResultOnFullFilled(value);
        }, // onRejected
        (reason)=>{
            result = buildResultOnRejected(reason);
        }).catch((error)=>{
            throw error;
        });
        return result;
    };
    return {
        authenticate
    };
}
/* harmony default export */ const hackFakeServer_AuthService = (AuthService);

;// CONCATENATED MODULE: ./src/services/api/hackFakeServer/AnnotationService.ts


function AnnotationService(apiServer) {
    const fetchAllAnnotationOptions = async ()=>{
        let result = null;
        await apiServer.get(apiEndpoints.annotation.fetchAllAnnotationOptions).then(// onFullFilled
        (value)=>{
            result = buildResultOnFullFilled(value);
        }, // onRejected
        (reason)=>{
            result = buildResultOnRejected(reason);
        }).catch((error)=>{
            throw error;
        });
        return result;
    };
    return {
        fetchAllAnnotationOptions
    };
}
/* harmony default export */ const hackFakeServer_AnnotationService = (AnnotationService);

;// CONCATENATED MODULE: ./src/services/api/hackFakeServer/NewsService.ts


function NewsService(apiServer) {
    const submitNews = async (news)=>{
        let result = null;
        await apiServer.post(apiEndpoints.news.submitNews, news).then(// onFullFilled
        (value)=>{
            result = buildResultOnFullFilled(value);
        }, // onRejected
        (reason)=>{
            result = buildResultOnRejected(reason);
        }).catch((error)=>{
            throw error;
        });
        return result;
    };
    const annotateNews = async (newsId, annotations)=>{
        let result = null;
        await apiServer.post(apiEndpoints.news.annotateNews, {
            newsId,
            annotations
        }).then(// onFullFilled
        (value)=>{
            result = buildResultOnFullFilled(value);
        }, // onRejected
        (reason)=>{
            console.log("\uD83D\uDE80 ~ file: NewsService.ts:64 ~ NewsService ~ reason:", reason);
            result = buildResultOnRejected(reason);
        }).catch((error)=>{
            throw error;
        });
        return result;
    };
    const predictNews = async (newsId)=>{
        let result = null;
        await apiServer.get(apiEndpoints.news.predictNews(newsId)).then(// onFullFilled
        (value)=>{
            result = buildResultOnFullFilled(value);
        }, // onRejected
        (reason)=>{
            result = buildResultOnRejected(reason);
        }).catch((error)=>{
            throw error;
        });
        return result;
    };
    return {
        submitNews,
        annotateNews,
        predictNews
    };
}
/* harmony default export */ const hackFakeServer_NewsService = (NewsService);

;// CONCATENATED MODULE: ./src/services/api/hackFakeServer/index.ts




const authService = hackFakeServer_AuthService(apiServer);
const annotationService = hackFakeServer_AnnotationService(apiServer);
const newsService = hackFakeServer_NewsService(apiServer);



/***/ }),

/***/ 7858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ useAppSelector),
/* harmony export */   T: () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5699);

/**
 * Use throughout your app instead of plain `useDispatch`
 * @returns
 */ const useAppDispatch = ()=>{
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_0__/* .useDispatch */ .I0)();
};
/**
 * Use throughout your app instead of plain `useSelector`
 */ const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__/* .useSelector */ .v9;



/***/ }),

/***/ 9637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ReduxProvider: () => (/* binding */ ReduxProvider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/react-redux/dist/react-redux.mjs
var react_redux = __webpack_require__(5699);
// EXTERNAL MODULE: ./src/services/api/hackFakeServer/index.ts + 10 modules
var hackFakeServer = __webpack_require__(2305);
;// CONCATENATED MODULE: ./src/services/api/index.ts

/**
 * Injects redux-store to the local variable reduxStore which gets used
 * inside the axios interceptors.
 *
 * For more details, please refer:
 * https://redux.js.org/faq/code-structure#how-can-i-use-the-redux-store-in-non-component-files
 *
 * @param store
 */ const injectStore = (store)=>{
    console.log("\uD83D\uDE80 ~ file: index.ts:15 ~ injectStore ~ store:");
    (0,hackFakeServer/* injectStore */.ni)(store);
};

// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs + 3 modules
var redux_toolkit_modern = __webpack_require__(7314);
// EXTERNAL MODULE: ./node_modules/redux/dist/redux.mjs
var redux = __webpack_require__(7751);
;// CONCATENATED MODULE: ./src/store/example/Types.ts
const REDUCER_NAME = "exampleState";

;// CONCATENATED MODULE: ./src/store/example/ThunkActions.ts
const exampleThunkActions = {};
/* harmony default export */ const ThunkActions = ((/* unused pure expression or super */ null && (exampleThunkActions)));

;// CONCATENATED MODULE: ./src/store/example/ExampleSlice.ts



const initialState = {
    message: "Hello \uD83D\uDC4B"
};
const exampleSlice = (0,redux_toolkit_modern/* createSlice */.oM)({
    name: REDUCER_NAME,
    initialState,
    reducers: {
        resetExampleState: ()=>{
            return initialState;
        }
    }
});
const { resetExampleState } = exampleSlice.actions;
/* harmony default export */ const ExampleSlice = (exampleSlice.reducer);

// EXTERNAL MODULE: ./src/store/auth/AuthSlice.ts
var AuthSlice = __webpack_require__(5114);
// EXTERNAL MODULE: ./src/store/annotation/AnnotationSlice.ts
var AnnotationSlice = __webpack_require__(5787);
// EXTERNAL MODULE: ./src/store/news/NewsSlice.ts
var NewsSlice = __webpack_require__(3961);
;// CONCATENATED MODULE: ./src/store/RootReducer.ts





// Combine all reducers here
const rootReducer = (0,redux/* combineReducers */.UY)({
    exampleReducer: ExampleSlice,
    authReducer: AuthSlice/* default */.ZP,
    annotationReducer: AnnotationSlice/* default */.ZP,
    newsReducer: NewsSlice/* default */.ZP
});
/* harmony default export */ const RootReducer = (rootReducer);

;// CONCATENATED MODULE: ./src/store/index.ts


// Create the store with the root reducer and middleware injected
const store = (0,redux_toolkit_modern/* configureStore */.xC)({
    reducer: RootReducer,
    // Note: It's often useful to enable Redux DevTools for development.
    // You can conditionally enable it based on the environment if needed.
    devTools: false
});
/* harmony default export */ const src_store = (store);

;// CONCATENATED MODULE: ./src/store/Provider.tsx
/* __next_internal_client_entry_do_not_use__ ReduxProvider auto */ 




/*
		injecting redux store to axios service layer
		See the below link for more details:
		https://redux.js.org/faq/code-structure#how-can-i-use-the-redux-store-in-non-component-files
	*/ injectStore(src_store);
function ReduxProvider({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_redux/* Provider */.zt, {
        store: src_store,
        children: children
    });
}


/***/ }),

/***/ 5787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D7: () => (/* binding */ resetAnnotationState),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export authSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7314);
/* harmony import */ var _customTypes_NetworkTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(881);
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6511);
/* harmony import */ var _ThunkActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3255);




const initialState = {
    isLoading: false,
    responseStatus: _customTypes_NetworkTypes__WEBPACK_IMPORTED_MODULE_0__/* .apiResponseStatuses */ .m.IDLE,
    message: null,
    annotationOptions: {
        ids: [],
        items: {}
    }
};
const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__/* .createSlice */ .oM)({
    name: _Types__WEBPACK_IMPORTED_MODULE_3__/* .REDUCER_NAME */ .L,
    initialState,
    reducers: {
        resetAnnotationState: ()=>{
            return {
                isLoading: false,
                responseStatus: _customTypes_NetworkTypes__WEBPACK_IMPORTED_MODULE_0__/* .apiResponseStatuses */ .m.IDLE,
                message: null,
                annotationOptions: {
                    ids: [],
                    items: {}
                }
            };
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(_ThunkActions__WEBPACK_IMPORTED_MODULE_1__/* .fetchAllAnnotationOptions */ .k.pending, (state)=>{
            state.isLoading = true;
            state.responseStatus = _customTypes_NetworkTypes__WEBPACK_IMPORTED_MODULE_0__/* .apiResponseStatuses */ .m.IDLE;
        });
        builder.addCase(_ThunkActions__WEBPACK_IMPORTED_MODULE_1__/* .fetchAllAnnotationOptions */ .k.fulfilled, (state, action)=>{
            state.responseStatus = _customTypes_NetworkTypes__WEBPACK_IMPORTED_MODULE_0__/* .apiResponseStatuses */ .m.SUCCESS;
            state.message = null;
            state.annotationOptions = action.payload;
            state.isLoading = false;
        });
        builder.addCase(_ThunkActions__WEBPACK_IMPORTED_MODULE_1__/* .fetchAllAnnotationOptions */ .k.rejected, (state, action)=>{
            const { message } = action.payload;
            state.responseStatus = _customTypes_NetworkTypes__WEBPACK_IMPORTED_MODULE_0__/* .apiResponseStatuses */ .m.ERROR;
            state.message = message;
            state.annotationOptions = {
                ids: [],
                items: {}
            };
            state.isLoading = false;
        });
    }
});
const { resetAnnotationState } = authSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);


/***/ }),

/***/ 3255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ fetchAllAnnotationOptions)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7314);
/* harmony import */ var _utils_ReduxUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(420);
/* harmony import */ var _services_api_hackFakeServer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2305);
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6511);




const curriedThunkName = (0,_utils_ReduxUtil__WEBPACK_IMPORTED_MODULE_1__/* .curryGetThunkName */ .V)(_Types__WEBPACK_IMPORTED_MODULE_2__/* .REDUCER_NAME */ .L);
const fetchAllAnnotationOptions = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__/* .createAsyncThunk */ .hg)(curriedThunkName("fetchAllAnnotationOptions"), async (payload, { rejectWithValue })=>{
    try {
        const response = await _services_api_hackFakeServer__WEBPACK_IMPORTED_MODULE_0__/* .annotationService */ .xq.fetchAllAnnotationOptions();
        if (response) {
            const { httpStatusCode, data, error } = response;
            switch(httpStatusCode){
                case 200:
                    return data;
                case 400:
                    {
                        const message = error?.message || "Something went wrong";
                        return rejectWithValue({
                            httpStatusCode,
                            message
                        });
                    }
                default:
                    return rejectWithValue({
                        message: "Something went wrong"
                    });
            }
        } else {
            return rejectWithValue({
                message: "Something went wrong"
            });
        }
    } catch (error) {
        console.log("\uD83D\uDE80 ~ file: ThunkActions.ts:33 ~ > ~ error:", error);
        return rejectWithValue({
            message: "Something went wrong"
        });
    }
});


/***/ }),

/***/ 6511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ REDUCER_NAME)
/* harmony export */ });
const REDUCER_NAME = "annotation";


/***/ }),

/***/ 5114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   y7: () => (/* binding */ resetAuthState)
/* harmony export */ });
/* unused harmony export authSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7314);
/* harmony import */ var _customTypes_NetworkTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(881);
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6394);
/* harmony import */ var _ThunkActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1752);




const initialState = {
    isLoading: false,
    responseStatus: _customTypes_NetworkTypes__WEBPACK_IMPORTED_MODULE_0__/* .apiResponseStatuses */ .m.IDLE,
    message: null,
    isAuthenticated: false,
    tokens: {
        accessToken: "",
        refreshToken: ""
    }
};
const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__/* .createSlice */ .oM)({
    name: _Types__WEBPACK_IMPORTED_MODULE_3__/* .REDUCER_NAME */ .L,
    initialState,
    reducers: {
        resetAuthState: ()=>{
            return {
                isLoading: false,
                responseStatus: _customTypes_NetworkTypes__WEBPACK_IMPORTED_MODULE_0__/* .apiResponseStatuses */ .m.IDLE,
                message: null,
                isAuthenticated: false,
                tokens: {
                    accessToken: "",
                    refreshToken: ""
                }
            };
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(_ThunkActions__WEBPACK_IMPORTED_MODULE_1__/* .authenticate */ .Y.pending, (state)=>{
            state.isLoading = true;
            state.responseStatus = _customTypes_NetworkTypes__WEBPACK_IMPORTED_MODULE_0__/* .apiResponseStatuses */ .m.IDLE;
        });
        builder.addCase(_ThunkActions__WEBPACK_IMPORTED_MODULE_1__/* .authenticate */ .Y.fulfilled, (state, action)=>{
            state.responseStatus = _customTypes_NetworkTypes__WEBPACK_IMPORTED_MODULE_0__/* .apiResponseStatuses */ .m.SUCCESS;
            state.message = null;
            state.isAuthenticated = true;
            state.tokens = action.payload;
            state.isLoading = false;
        });
        builder.addCase(_ThunkActions__WEBPACK_IMPORTED_MODULE_1__/* .authenticate */ .Y.rejected, (state, action)=>{
            const { message } = action.payload;
            state.responseStatus = _customTypes_NetworkTypes__WEBPACK_IMPORTED_MODULE_0__/* .apiResponseStatuses */ .m.ERROR;
            state.message = message;
            state.isAuthenticated = false;
            state.tokens = {
                accessToken: "",
                refreshToken: ""
            };
            state.isLoading = false;
        });
    }
});
const { resetAuthState } = authSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);


/***/ }),

/***/ 1752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ authenticate)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7314);
/* harmony import */ var _utils_ReduxUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(420);
/* harmony import */ var _services_api_hackFakeServer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2305);
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6394);




const curriedThunkName = (0,_utils_ReduxUtil__WEBPACK_IMPORTED_MODULE_1__/* .curryGetThunkName */ .V)(_Types__WEBPACK_IMPORTED_MODULE_2__/* .REDUCER_NAME */ .L);
const authenticate = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__/* .createAsyncThunk */ .hg)(curriedThunkName("authenticate"), async (payload, { rejectWithValue })=>{
    try {
        const { email, password } = payload;
        const response = await _services_api_hackFakeServer__WEBPACK_IMPORTED_MODULE_0__/* .authService */ .ON.authenticate(email, password);
        if (response) {
            const { httpStatusCode, data, error } = response;
            switch(httpStatusCode){
                case 200:
                    return data;
                case 400:
                    {
                        const message = error?.message || "Something went wrong";
                        return rejectWithValue({
                            httpStatusCode,
                            message
                        });
                    }
                default:
                    return rejectWithValue({
                        message: "Something went wrong"
                    });
            }
        } else {
            return rejectWithValue({
                message: "Something went wrong"
            });
        }
    } catch (error) {
        console.log("\uD83D\uDE80 ~ file: ThunkActions.ts:33 ~ > ~ error:", error);
        return rejectWithValue({
            message: "Something went wrong"
        });
    }
});


/***/ }),

/***/ 6394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ REDUCER_NAME)
/* harmony export */ });
const REDUCER_NAME = "authState";


/***/ }),

/***/ 3961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   ww: () => (/* binding */ resetNewsState)
/* harmony export */ });
/* unused harmony export newsSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7314);
/* harmony import */ var _customTypes_NetworkTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(881);
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2242);
/* harmony import */ var _ThunkActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8116);




const initialState = {
    isLoading: false,
    responseStatus: _customTypes_NetworkTypes__WEBPACK_IMPORTED_MODULE_0__/* .apiResponseStatuses */ .m.IDLE,
    message: null,
    newsId: null,
    predictedIds: []
};
const newsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__/* .createSlice */ .oM)({
    name: _Types__WEBPACK_IMPORTED_MODULE_3__/* .REDUCER_NAME */ .L,
    initialState,
    reducers: {
        resetNewsState: ()=>{
            return {
                isLoading: false,
                responseStatus: _customTypes_NetworkTypes__WEBPACK_IMPORTED_MODULE_0__/* .apiResponseStatuses */ .m.IDLE,
                message: null,
                newsId: null,
                predictedIds: []
            };
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(_ThunkActions__WEBPACK_IMPORTED_MODULE_1__/* .submitNews */ .fL.pending, (state)=>{
            state.isLoading = true;
            state.responseStatus = _customTypes_NetworkTypes__WEBPACK_IMPORTED_MODULE_0__/* .apiResponseStatuses */ .m.IDLE;
        });
        builder.addCase(_ThunkActions__WEBPACK_IMPORTED_MODULE_1__/* .submitNews */ .fL.fulfilled, (state, action)=>{
            state.responseStatus = _customTypes_NetworkTypes__WEBPACK_IMPORTED_MODULE_0__/* .apiResponseStatuses */ .m.SUCCESS;
            state.message = null;
            state.newsId = action.payload.id;
            state.predictedIds = [];
            state.isLoading = false;
        });
        builder.addCase(_ThunkActions__WEBPACK_IMPORTED_MODULE_1__/* .submitNews */ .fL.rejected, (state, action)=>{
            const { message } = action.payload;
            state.responseStatus = _customTypes_NetworkTypes__WEBPACK_IMPORTED_MODULE_0__/* .apiResponseStatuses */ .m.ERROR;
            state.message = message;
            state.newsId = null;
            state.predictedIds = [];
            state.isLoading = false;
        });
        builder.addCase(_ThunkActions__WEBPACK_IMPORTED_MODULE_1__/* .annotateNews */ .U_.pending, (state)=>{
            state.isLoading = true;
            state.responseStatus = _customTypes_NetworkTypes__WEBPACK_IMPORTED_MODULE_0__/* .apiResponseStatuses */ .m.IDLE;
        });
        builder.addCase(_ThunkActions__WEBPACK_IMPORTED_MODULE_1__/* .annotateNews */ .U_.fulfilled, (state)=>{
            state.responseStatus = _customTypes_NetworkTypes__WEBPACK_IMPORTED_MODULE_0__/* .apiResponseStatuses */ .m.SUCCESS;
            state.message = null;
            state.isLoading = false;
        });
        builder.addCase(_ThunkActions__WEBPACK_IMPORTED_MODULE_1__/* .annotateNews */ .U_.rejected, (state, action)=>{
            const { message } = action.payload;
            state.responseStatus = _customTypes_NetworkTypes__WEBPACK_IMPORTED_MODULE_0__/* .apiResponseStatuses */ .m.ERROR;
            state.message = message;
            state.isLoading = false;
        });
        builder.addCase(_ThunkActions__WEBPACK_IMPORTED_MODULE_1__/* .predictNews */ .zE.pending, (state)=>{
            state.isLoading = true;
            state.responseStatus = _customTypes_NetworkTypes__WEBPACK_IMPORTED_MODULE_0__/* .apiResponseStatuses */ .m.IDLE;
        });
        builder.addCase(_ThunkActions__WEBPACK_IMPORTED_MODULE_1__/* .predictNews */ .zE.fulfilled, (state, action)=>{
            state.responseStatus = _customTypes_NetworkTypes__WEBPACK_IMPORTED_MODULE_0__/* .apiResponseStatuses */ .m.SUCCESS;
            state.message = null;
            state.predictedIds = action.payload.annotationIds;
            state.isLoading = false;
        });
        builder.addCase(_ThunkActions__WEBPACK_IMPORTED_MODULE_1__/* .predictNews */ .zE.rejected, (state, action)=>{
            const { message } = action.payload;
            state.responseStatus = _customTypes_NetworkTypes__WEBPACK_IMPORTED_MODULE_0__/* .apiResponseStatuses */ .m.ERROR;
            state.message = message;
            state.predictedIds = [];
            state.isLoading = false;
        });
    }
});
const { resetNewsState } = newsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newsSlice.reducer);


/***/ }),

/***/ 8116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U_: () => (/* binding */ annotateNews),
/* harmony export */   fL: () => (/* binding */ submitNews),
/* harmony export */   zE: () => (/* binding */ predictNews)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7314);
/* harmony import */ var _utils_ReduxUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(420);
/* harmony import */ var _services_api_hackFakeServer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2305);
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2242);




const curriedThunkName = (0,_utils_ReduxUtil__WEBPACK_IMPORTED_MODULE_1__/* .curryGetThunkName */ .V)(_Types__WEBPACK_IMPORTED_MODULE_2__/* .REDUCER_NAME */ .L);
const submitNews = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__/* .createAsyncThunk */ .hg)(curriedThunkName("submitNews"), async (payload, { rejectWithValue })=>{
    try {
        const response = await _services_api_hackFakeServer__WEBPACK_IMPORTED_MODULE_0__/* .newsService */ .Qw.submitNews(payload);
        console.log("\uD83D\uDE80 ~ file: ThunkActions.ts:26 ~ > ~ response:", response);
        if (response) {
            const { httpStatusCode, data, error } = response;
            switch(httpStatusCode){
                case 200:
                    return data;
                case 400:
                    {
                        const message = error?.message || "Something went wrong";
                        return rejectWithValue({
                            httpStatusCode,
                            message
                        });
                    }
                default:
                    return rejectWithValue({
                        message: "Something went wrong"
                    });
            }
        } else {
            return rejectWithValue({
                message: "Something went wrong"
            });
        }
    } catch (error) {
        return rejectWithValue({
            message: "Something went wrong"
        });
    }
});
const annotateNews = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__/* .createAsyncThunk */ .hg)(curriedThunkName("annotateNews"), async (payload, { rejectWithValue })=>{
    try {
        const response = await _services_api_hackFakeServer__WEBPACK_IMPORTED_MODULE_0__/* .newsService */ .Qw.annotateNews(payload.newsId, payload.annotations);
        console.log("\uD83D\uDE80 ~ file: ThunkActions.ts:71 ~ > ~ response:", response);
        if (response) {
            const { httpStatusCode, data, error } = response;
            switch(httpStatusCode){
                case 201:
                    return data;
                case 400:
                    {
                        const message = error?.message || "Something went wrong";
                        return rejectWithValue({
                            httpStatusCode,
                            message
                        });
                    }
                default:
                    return rejectWithValue({
                        message: "Something went wrong"
                    });
            }
        } else {
            return rejectWithValue({
                message: "Something went wrong"
            });
        }
    } catch (error) {
        return rejectWithValue({
            message: "Something went wrong"
        });
    }
});
const predictNews = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__/* .createAsyncThunk */ .hg)(curriedThunkName("predictNews"), async (payload, { rejectWithValue })=>{
    try {
        const response = await _services_api_hackFakeServer__WEBPACK_IMPORTED_MODULE_0__/* .newsService */ .Qw.predictNews(payload);
        if (response) {
            const { httpStatusCode, data, error } = response;
            switch(httpStatusCode){
                case 200:
                    return data;
                case 400:
                    {
                        const message = error?.message || "Something went wrong";
                        return rejectWithValue({
                            httpStatusCode,
                            message
                        });
                    }
                default:
                    return rejectWithValue({
                        message: "Something went wrong"
                    });
            }
        } else {
            return rejectWithValue({
                message: "Something went wrong"
            });
        }
    } catch (error) {
        return rejectWithValue({
            message: "Something went wrong"
        });
    }
});


/***/ }),

/***/ 2242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ REDUCER_NAME)
/* harmony export */ });
const REDUCER_NAME = "news";


/***/ }),

/***/ 420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ curryGetThunkName)
/* harmony export */ });
/* unused harmony export getThunkName */
/**
 * Returns thunkName by combining the reducerName and actionType with
 * the "/" as separator.
 *
 * For eg:
 * if the reducerName is "authState" and actionType is "authenticate"
 * then the returning thunkName would be "authState/authenticate".
 *
 * @param reducerName
 * @param actionType
 * @returns thunkName
 */ function getThunkName(reducerName, actionType) {
    return `${reducerName}/${actionType}`;
}
/**
 * Currying getThunName
 *
 * @param reducerName
 * @returns (actionType: string) => string
 */ function curryGetThunkName(reducerName) {
    return (actionType)=>{
        return getThunkName(reducerName, actionType);
    };
}


/***/ }),

/***/ 6557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/store/Provider.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/runner/work/hack-fake-app/hack-fake-app/src/store/Provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["ReduxProvider"];

;// CONCATENATED MODULE: ./src/app/layout.tsx




const metadata = {
    title: "HackFake",
    description: "HackFake"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bg-background text-text min-h-screen",
                    children: children
                })
            })
        })
    });
}


/***/ }),

/***/ 7026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/svg+xml","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "icon.svg")

    return [{
      ...imageData,
      url: imageUrl + "?95dcf93335f22cb7",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;