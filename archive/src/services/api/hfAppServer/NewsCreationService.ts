import {AxiosInstance} from "axios";
import {NullableGenericServiceResult} from "@customTypes/ApiServiceTypes";
import {buildResultOnFullFilled, buildResultOnRejected} from "../../../utils/NetworkUtil";
import {apiEndpoints} from "./axiosConfig/AxiosServiceConstants";

function NewsCreationService(apiServer: AxiosInstance) {
	/**
	 * API Service method for creating a new post.
	 *
	 * @param postData - The data for the new post.
	 * @returns Promise<NullableGenericServiceResult<{ id: string }>>
	 */
	const create = async (
		postData: {
			title: string;
			content: string;
			url: string;
			date: string;
		}
	): Promise<NullableGenericServiceResult<{ id: string }>> => {
		let result: NullableGenericServiceResult<{ id: string }> = null;

		await apiServer
			.post(apiEndpoints.news.requestNewsCreation, postData)
			.then(
				// onFullFilled
				(value) => {
					result = buildResultOnFullFilled(value);
				},

				// onRejected
				(reason) => {
					result = buildResultOnRejected(reason);
				}
			)
			.catch((error) => {
				throw error;
			});

		return result;
	};

	return {
		create,
	};
}

export default NewsCreationService;
