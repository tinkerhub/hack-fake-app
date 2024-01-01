"use client";

import React, {useState, useEffect} from "react";

import {useRouter} from "next/navigation";

import {useAppDispatch, useAppSelector} from "@/store/Hooks";
import {submitNews} from "@/store/news/ThunkActions";
import Navbar from "@/components/Navbar";
import TitleForm from "@/components/TitleForm";
import ScrollButtons from "@/components/ScrollButtons";
import ContentForm from "@/components/ContentForm";
import URLForm from "@/components/URLForm";
import {ComponentIdType} from "@/customTypes/CommonTypes";
import Loader from "@/components/Loader";
import {apiResponseStatuses} from "@/customTypes/NetworkTypes";
import WithAuth from "@/components/WithAuth";

enum inputForms {
	TITLE = "TITLE",
	CONTENT = "CONTENT",
	URL = "URL",
}

function SubmitNewsPage() {
	const [currentInputForm, setInputForm] = useState<inputForms>(
		inputForms.TITLE,
	);

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [newsTitle, setNewsTitle] = useState<string>("");
	const [newsContent, setNewsContent] = useState<string>("");
	const [newsDate, setNewsDate] = useState<string>("");
	const [newsUrl, setNewsUrl] = useState<string>("");

	const router = useRouter();

	const dispatch = useAppDispatch();

	const newsState = useAppSelector((state) => {
		return state.newsReducer;
	});

	useEffect(() => {
		const {isLoading: isNewsStateLoading} = newsState;

		const isLoading = isNewsStateLoading;

		setIsLoading((prvState) => {
			if (prvState !== isLoading) {
				return isLoading;
			} else {
				return prvState;
			}
		});
	}, [newsState]);

	useEffect(() => {
		const {isLoading, responseStatus, newsId} = newsState;

		if (isLoading === false && responseStatus === apiResponseStatuses.SUCCESS) {
			if (newsId) {
				router.push("/predict-annotate");
			}
		}
	}, [newsState, router]);

	const onPressNext = () => {
		setInputForm((prvState) => {
			if (prvState === inputForms.TITLE) {
				return inputForms.CONTENT;
			} else if (prvState === inputForms.CONTENT) {
				return inputForms.URL;
			} else if (prvState === inputForms.URL) {
				onPressLastNext();
				return prvState;
			} else {
				return inputForms.TITLE;
			}
		});
	};

	const onChangeTitle = (
		id: ComponentIdType,
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const value = event.target.value;

		setNewsTitle(value);
	};

	const onChangeContent = (
		id: ComponentIdType,
		event: React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		const value = event.target.value;

		setNewsContent(value);
	};

	const onChangeDate = (
		id: ComponentIdType,
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const value = event.target.value;

		setNewsDate(value);
	};

	const onChangeURL = (
		id: ComponentIdType,
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const value = event.target.value;

		setNewsUrl(value);
	};

	const onPressLastNext = () => {
		dispatch(
			submitNews({
				title: newsTitle,
				date: newsDate,
				url: newsUrl,
				content: newsContent,
			}),
		);
	};

	const renderInputForm = () => {
		switch (currentInputForm) {
			case inputForms.TITLE:
				return (
					<TitleForm
						titleValue={newsTitle}
						onNext={onPressNext}
						onChangeText={onChangeTitle}
					/>
				);

			case inputForms.CONTENT:
				return (
					<ContentForm
						newsContentValue={newsContent}
						onNext={onPressNext}
						onChangeText={onChangeContent}
					/>
				);

			case inputForms.URL:
				return (
					<URLForm
						newsDateValue={newsDate}
						newsUrlValue={newsUrl}
						onNext={onPressNext}
						onChangeURL={onChangeURL}
						onChangeDate={onChangeDate}
					/>
				);

			default:
				return null;
		}
	};

	const renderLoader = () => {
		if (isLoading) {
			return <Loader />;
		} else {
			return null;
		}
	};

	return (
		<div className="bg-background text-text min-h-screen">
			<div className="flex flex-col h-screen">
				<Navbar />
				{!isLoading && renderInputForm()}
				{renderLoader()}
				<ScrollButtons />
			</div>
		</div>
	);
}

export default WithAuth(SubmitNewsPage);
