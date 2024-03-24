import {apiServer} from "./axiosConfig";
import VerificationService from "./VerificationService";

const verificationService = VerificationService(apiServer);

export {verificationService};
