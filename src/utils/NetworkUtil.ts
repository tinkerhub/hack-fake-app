import {AxiosResponse} from "axios";

import {iGenericServiceResult} from "@/customTypes/ApiServiceTypes";

export function buildResultOnFullFilled<SuccessDataType>(
	value: AxiosResponse,
): iGenericServiceResult<SuccessDataType> {
	const {data} = value;

	const responseBody = data as iGenericServiceResult<SuccessDataType>;

	return responseBody;
}

export function buildResultOnRejected<SuccessDataType = null>(
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	reason: any,
): iGenericServiceResult<SuccessDataType> {
	const {response} = reason;
	const {data} = response;

	const responseBody = data as iGenericServiceResult<SuccessDataType>;

	return responseBody;
}
// export {buildResultOnFullFilled, buildResultOnRejected};
