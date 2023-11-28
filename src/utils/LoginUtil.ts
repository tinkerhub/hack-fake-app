import { AxiosResponse } from "axios";
import { iGenericServiceResult } from "@/customTypes/ApiServiceTypes";

export function buildResultOnFullFilled<SuccessDataType>(
  value: AxiosResponse
): iGenericServiceResult<SuccessDataType> {
  const { data } = value;
  // const accessToken = data?.accessToken;

  // Store accessToken in a global state
    console.log(data)


  return data as iGenericServiceResult<SuccessDataType>;
}



// export { buildResultOnFullFilled };
