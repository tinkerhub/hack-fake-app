import {apiServer} from "./axiosConfig";
import AuthService from "./AuthService";
import AnnotationService from "./AnnotationService";

const authService = AuthService(apiServer);
const annotationService = AnnotationService(apiServer);

export {authService, annotationService};
