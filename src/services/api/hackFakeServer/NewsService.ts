import {AxiosInstance} from "axios";

import {
	buildResultOnFullFilled,
	buildResultOnRejected,
} from "@/utils/NetworkUtil";
import {NullableGenericServiceResult} from "@/customTypes/ApiServiceTypes";
import {
	iNewsId,
	iNewsSubmissionDTO,
} from "@/customTypes/appDataTypes/newsTypes";

import {apiEndpoints} from "./axiosConfig/AxiosServiceConstants";

function NewsService(apiServer: AxiosInstance) {
	const submitNews = async (
		news: iNewsSubmissionDTO,
	): Promise<NullableGenericServiceResult<iNewsId>> => {
		let result: NullableGenericServiceResult<iNewsId> = null;

		await apiServer
			.post(apiEndpoints.news.submitNews, news)
			.then(
				// onFullFilled
				(value) => {
					result = buildResultOnFullFilled<iNewsId>(value);
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
		submitNews,
	};
}

export default NewsService;
