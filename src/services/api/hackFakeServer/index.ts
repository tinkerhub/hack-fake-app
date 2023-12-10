import {apiServer} from "./axiosConfig";
import AuthService from "./AuthService";
import AnnotationService from "./AnnotationService";
import NewsService from "./NewsService";

const authService = AuthService(apiServer);
const annotationService = AnnotationService(apiServer);
const newsService = NewsService(apiServer);

export {authService, annotationService, newsService};
