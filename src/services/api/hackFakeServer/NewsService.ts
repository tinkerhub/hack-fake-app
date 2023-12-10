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

	const annotateNews = async (
		newsId: string,
		annotations: Array<string>,
	): Promise<NullableGenericServiceResult<null>> => {
		let result: NullableGenericServiceResult<null> = null;

		await apiServer
			.post(apiEndpoints.news.annotateNews, {
				newsId,
				annotations,
			})
			.then(
				// onFullFilled
				(value) => {
					console.log(
						"🚀 ~ file: NewsService.ts:55 ~ NewsService ~ value:",
						value,
					);
					result = buildResultOnFullFilled<null>(value);
				},

				// onRejected
				(reason) => {
					console.log(
						"🚀 ~ file: NewsService.ts:64 ~ NewsService ~ reason:",
						reason,
					);
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
		annotateNews,
	};
}

export default NewsService;
