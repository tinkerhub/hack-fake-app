"use client";

import React, {useState} from "react";

import {useRouter} from "next/navigation";

import {useAppSelector} from "@/store/Hooks";
import Navbar from "@/components/Navbar";
import TitleForm from "@/components/TitleForm";
import ScrollButtons from "@/components/ScrollButtons";
import ContentForm from "@/components/ContentForm";
import URLForm from "@/components/URLForm";
import PredictAnnotationPicker from "@/components/PredictAnnotationPicker";
import {ComponentIdType} from "@/customTypes/CommonTypes";

enum inputForms {
	TITLE = "TITLE",
	CONTENT = "CONTENT",
	URL = "URL",
	PREDICT_ANNOTATE = "PREDICT_ANNOTATE",
}

export default function SubmitNewsPage() {
	const [currentInputForm, setInputForm] = useState<inputForms>(
		inputForms.TITLE,
	);

	const [newsTitle, setNewsTitle] = useState<string>("");
	const [newsContent, setNewsContent] = useState<string>("");
	const [newsDate, setNewsDate] = useState<string>("");
	const [newsUrl, setNewsUrl] = useState<string>("");

	const router = useRouter();

	const authState = useAppSelector((state) => {
		return state.authReducer;
	});

	React.useEffect(() => {
		console.log(
			"🚀 ~ file: home-page.tsx:30 ~ React.useEffect ~ authState:",
			authState,
		);
	}, [authState, router]);

	const onPressNext = () => {
		setInputForm((prvState) => {
			if (prvState === inputForms.TITLE) {
				return inputForms.CONTENT;
			} else if (prvState === inputForms.CONTENT) {
				return inputForms.URL;
			} else if (prvState === inputForms.URL) {
				return inputForms.PREDICT_ANNOTATE;
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

	const onClickPredict = () => {
		console.log("🚀 ~ file: page.tsx:99 ~ onClickPredict ~ id:", {
			newsTitle,
			newsUrl,
			newsDate,
			newsContent,
		});
	};

	const onClickAnnotate = () => {
		console.log("🚀 ~ file: page.tsx:99 ~ onClickAnnotate ~ id:", {
			newsTitle,
			newsUrl,
			newsDate,
			newsContent,
		});
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

			case inputForms.PREDICT_ANNOTATE:
				return (
					<PredictAnnotationPicker
						titleValue={"What would you like to do?"}
						onClickPredict={onClickPredict}
						onClickAnnotate={onClickAnnotate}
					/>
				);

			default:
				return null;
		}
	};

	return (
		<div className="bg-background text-text min-h-screen">
			<div className="flex flex-col h-screen">
				<Navbar />
				{renderInputForm()}
				<ScrollButtons />
			</div>
		</div>
	);
}
