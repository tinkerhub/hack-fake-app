import { AxiosInstance } from "axios";
import { NullableGenericServiceResult } from "@customTypes/ApiServiceTypes";
import { buildResultOnRejected} from "../../../utils/NetworkUtil";
import { buildResultOnFullFilled} from "../../../utils/LoginUtil";
import { apiEndpoints } from "./axiosConfig/AxiosServiceConstants";
// import { apiServer } from '@services/api/hfAppServer/axiosConfig';

export function LoginService(apiServer: AxiosInstance) {
  /**
   * API Service method for user login.
   *
   * @param email - The email for login.
   * @param password - The password for login.
   * @returns Promise<APIResponse | null>
   */
  const userLogin = async (
    email: string,
    password: string
  ): Promise<NullableGenericServiceResult<null>> => {
    let result: NullableGenericServiceResult<null> = null;

    await apiServer
      .post(apiEndpoints.login.userLogin, {
        email,
        password,
      })
      .then(
        // onFullFilled
        (data) => {
          result = buildResultOnFullFilled(data);
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
    userLogin,
  };
}
// export default LoginService;
