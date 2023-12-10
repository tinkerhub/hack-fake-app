import {apiServer, injectStore} from "./axiosConfig";
import AuthService from "./AuthService";
import AnnotationService from "./AnnotationService";
import NewsService from "./NewsService";

const authService = AuthService(apiServer);
const annotationService = AnnotationService(apiServer);
const newsService = NewsService(apiServer);

export {injectStore, authService, annotationService, newsService};
