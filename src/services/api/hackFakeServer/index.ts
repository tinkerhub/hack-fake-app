import {apiServer} from "./axiosConfig";
import AuthService from "./AuthService";

const authService = AuthService(apiServer);

export {authService};
