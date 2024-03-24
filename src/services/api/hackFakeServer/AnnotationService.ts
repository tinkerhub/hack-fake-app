import {AxiosInstance} from "axios";

import {
	buildResultOnFullFilled,
	buildResultOnRejected,
} from "@/utils/NetworkUtil";
import {NullableGenericServiceResult} from "@/customTypes/ApiServiceTypes";
import {MultiAnnotation} from "@/customTypes/appDataTypes/annotationTypes";

import {apiEndpoints} from "./axiosConfig/AxiosServiceConstants";

function AnnotationService(apiServer: AxiosInstance) {
	const fetchAllAnnotationOptions = async (): Promise<
		NullableGenericServiceResult<MultiAnnotation>
	> => {
		let result: NullableGenericServiceResult<MultiAnnotation> = null;

		await apiServer
			.get(apiEndpoints.annotation.fetchAllAnnotationOptions)
			.then(
				// onFullFilled
				(value) => {
					result = buildResultOnFullFilled<MultiAnnotation>(value);
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
		fetchAllAnnotationOptions,
	};
}

export default AnnotationService;
