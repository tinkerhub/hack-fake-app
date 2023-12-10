import { AxiosInstance } from "axios";
import { NullableGenericServiceResult } from "@customTypes/ApiServiceTypes";
import { buildResultOnFullFilled, buildResultOnRejected } from "../../../utils/NetworkUtil";
import { apiEndpoints } from "./axiosConfig/AxiosServiceConstants";

function NewsService(apiServer: AxiosInstance) {
  /**
   * API Service method for predicting news.
   *
   * @param newsId - The ID of the news to predict.
   * @returns Promise<NullableGenericServiceResult<{ annotationIds: string[] }>>
   */
  const predictNews = async (newsId: string): Promise<NullableGenericServiceResult<{ annotationIds: string[] }>> => {
    let result: NullableGenericServiceResult<{ annotationIds: string[] }> = null;

    await apiServer
      .get(apiEndpoints.news.predict.replace(":news_id", newsId))
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
    predictNews,
  };
}

export default NewsService;
