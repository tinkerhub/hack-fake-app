import {StringArray} from "@/customTypes/CommonTypes";

export interface iNewsAnnotationsInputDTO {
	newsId: string;
	annotations: Array<string>;
}

export interface iNewsSubmissionDTO {
	title: string;
	content: string;
	url: string;
	date: string;
}

export interface iNewsId {
	id: string;
}

interface iNews extends iNewsId {
	publishedDate: string;
	url: string;
	title: string;
	content: string;
	createdAt: string;
}

type MultiNews = {
	ids: StringArray;

	items: {
		[key in string]: iNews;
	};
};

export type {iNews, MultiNews};
