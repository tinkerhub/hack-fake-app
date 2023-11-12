import {AxiosInstance} from "axios";

import {NullableGenericServiceResult} from "@customTypes/ApiServiceTypes";
import {
	buildResultOnFullFilled,
	buildResultOnRejected,
} from "@/utils/NetworkUtil";

import {apiEndpoints} from "./axiosConfig/AxiosServiceConstants";

function VerificationService(apiServer: AxiosInstance) {
	/**
	 * API Service method for requesting email verification.
	 *
	 * @param email - The email to be verified.
	 * @returns Promise<APIResponse | null>
	 */
	const requestEmailVerification = async (
		email: string,
	): Promise<NullableGenericServiceResult<null>> => {
		let result: NullableGenericServiceResult<null> = null;

		await apiServer
			.post(apiEndpoints.verification.requestEmailVerification, {
				email,
			})
			.then(
				// onFullFilled
				(value) => {
					result = buildResultOnFullFilled(value);
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
		requestEmailVerification,
	};
}

export default VerificationService;
