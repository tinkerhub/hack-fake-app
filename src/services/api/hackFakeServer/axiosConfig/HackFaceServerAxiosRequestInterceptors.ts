import {AxiosInstance} from "axios";

import type {StoreType} from "@store/index";

import type {AxiosRequestHeaders, InternalAxiosRequestConfig} from "axios";
/**
 * NOTE: Currently we're not using redux in this project.
 * The type of this will be changed to the proper
 * redux store type once we start using redux.
 */

/**
 * Mapping all the requestInterceptors defined as closures inside this function
 * to the axios-instance apiServer.
 *
 * Defined requestInterceptor closures needs to be registered to the constant object
 * axiosRequestInterceptors in order to get mapped.
 *
 * @param store
 * @param apiServer
 */
function HackFaceServerAxiosRequestInterceptors(
	store: StoreType | null = null,
	apiServer: AxiosInstance,
): void {
	/**
	 * Request Interceptor for adding Authorization: Bearer token by taking token from authSate in redux store.
	 * @param {AxiosRequestConfig} config
	 */
	function requestAuthorizationInterceptor(
		config: InternalAxiosRequestConfig,
	): InternalAxiosRequestConfig {
		if (store) {
			// setting authorization header
			return {
				...config,
				headers: {
					...config.headers,
					Authorization: `Bearer ${
						store.getState().authReducer.tokens.accessToken
					}`,
				} as AxiosRequestHeaders,
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
	 */
	const axiosRequestInterceptors = {
		requestAuthorizationInterceptor,
	};

	/**
	 * Extracting and mapping each requestInterceptors with the axios-instance
	 * apiServer.
	 */
	Object.values(axiosRequestInterceptors).forEach((requestInterceptor) => {
		return apiServer.interceptors.request.use(requestInterceptor);
	});
}

export default HackFaceServerAxiosRequestInterceptors;
