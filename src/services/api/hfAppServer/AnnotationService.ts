import { AxiosInstance } from "axios";
import { NullableGenericServiceResult } from "@customTypes/ApiServiceTypes";
import { buildResultOnFullFilled, buildResultOnRejected } from "../../../utils/NetworkUtil";
import { apiEndpoints } from "./axiosConfig/AxiosServiceConstants";

function AnnotationService(apiServer: AxiosInstance) {
  /**
   * API Service method for fetching annotations.
   *
   * @returns Promise<NullableGenericServiceResult<{ ids: string[]; items: Record<string, { id: string; name: string }> }>>
   */
  const getAnnotations = async (): Promise<NullableGenericServiceResult<{
    ids: string[];
    items: Record<string, { id: string; name: string }>;
  }>> => {
    let result: NullableGenericServiceResult<{
      ids: string[];
      items: Record<string, { id: string; name: string }>;
    }> = null;

    await apiServer
      .get(apiEndpoints.annotations.getAnnotations)
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
    getAnnotations,
  };
}

export default AnnotationService;
