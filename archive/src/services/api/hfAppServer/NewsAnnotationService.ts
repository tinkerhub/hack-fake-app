import { AxiosInstance } from "axios";
import { NullableGenericServiceResult } from "@customTypes/ApiServiceTypes";
import { buildResultOnFullFilled, buildResultOnRejected } from "../../../utils/NetworkUtil";
import { apiEndpoints } from "./axiosConfig/AxiosServiceConstants";

function NewsAnnotateService(apiServer: AxiosInstance) {
  /**
   * API Service method for annotating news.
   *
   * @param annotationData - The data for annotating news.
   * @returns Promise<NullableGenericServiceResult<null>>
   */
  const annotateNews = async (
    annotationData: {
      newsId: string;
      annotations: string[];
    }
  ): Promise<NullableGenericServiceResult<null>> => {
    let result: NullableGenericServiceResult<null> = null;

    await apiServer
      .post(apiEndpoints.news.annotate, annotationData)
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
    annotateNews,
  };
}

export default NewsAnnotateService;
