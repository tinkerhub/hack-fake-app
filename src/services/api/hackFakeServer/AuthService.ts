import {AxiosInstance} from "axios";

import {
	buildResultOnFullFilled,
	buildResultOnRejected,
} from "@/utils/NetworkUtil";
import {NullableGenericServiceResult} from "@/customTypes/ApiServiceTypes";
import {iTokenPair} from "@/customTypes/appDataTypes/authTypes";

import {apiEndpoints} from "./axiosConfig/AxiosServiceConstants";

function AuthService(apiServer: AxiosInstance) {
	const authenticate = async (
		email: string,
		password: string,
	): Promise<NullableGenericServiceResult<iTokenPair>> => {
		let result: NullableGenericServiceResult<iTokenPair> = null;

		await apiServer
			.post(apiEndpoints.auth.signIn, {
				email,
				password,
			})
			.then(
				// onFullFilled
				(value) => {
					result = buildResultOnFullFilled<iTokenPair>(value);
				},

				// onRejected
				(reason) => {
					result = buildResultOnRejected(reason);
				},
			)
			.catch((error) => {
				throw error;
			});

		return result;
	};

	return {
		authenticate,
	};
}

export default AuthService;
