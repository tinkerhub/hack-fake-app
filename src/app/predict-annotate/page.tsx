"use client";

import React, {useState, useEffect} from "react";

import {useRouter} from "next/navigation";

import {useAppDispatch, useAppSelector} from "@/store/Hooks";
import {annotateNews} from "@/store/news/ThunkActions";
import Navbar from "@/components/Navbar";
import ScrollButtons from "@/components/ScrollButtons";
import PredictAnnotationPicker from "@/components/PredictAnnotationPicker";
import {ComponentIdType, StringArray} from "@/customTypes/CommonTypes";
import Loader from "@/components/Loader";
import {fetchAllAnnotationOptions} from "@/store/annotation/ThunkActions";
import {apiResponseStatuses} from "@/customTypes/NetworkTypes";
import Annotate from "@/components/Annotate";
import WithAuth from "@/components/WithAuth";

enum inputForms {
	PREDICT_ANNOTATE = "PREDICT_ANNOTATE",
	ANNOTATE = "ANNOTATE",
	PREDICT = "PREDICT",
}

function PredictAnnotatePage() {
	const [currentInputForm, setInputForm] = useState<inputForms>(
		inputForms.PREDICT_ANNOTATE,
	);
	const [hasAnnotationStarted, setHasAnnotationStarted] =
		useState<boolean>(false);

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const router = useRouter();

	const dispatch = useAppDispatch();

	const annotationState = useAppSelector((state) => {
		return state.annotationReducer;
	});

	const newsState = useAppSelector((state) => {
		return state.newsReducer;
	});

	useEffect(() => {
		const {isLoading: isAnnotationStateLoading} = annotationState;
		const {isLoading: isNewsStateLoading} = newsState;

		const isLoading = isAnnotationStateLoading || isNewsStateLoading;

		setIsLoading((prvState) => {
			if (prvState !== isLoading) {
				return isLoading;
			} else {
				return prvState;
			}
		});
	}, [annotationState, newsState]);

	useEffect(() => {
		dispatch(fetchAllAnnotationOptions());
	}, []);

	useEffect(() => {
		const {isLoading, responseStatus} = newsState;

		if (hasAnnotationStarted) {
			if (!isLoading && responseStatus === apiResponseStatuses.SUCCESS) {
				router.push("annotation-success");
			}
		}
	}, [hasAnnotationStarted, newsState, router]);

	useEffect(() => {
		const {isLoading, responseStatus, newsId} = newsState;

		if (isLoading === false && responseStatus === apiResponseStatuses.SUCCESS) {
			if (newsId) {
				setInputForm(inputForms.PREDICT_ANNOTATE);
			}
		}
	}, [newsState, router]);

	const onClickPredict = () => {
		// setInputForm(inputForms.PREDICT);
		alert("Sorry, not available now");
	};

	const onClickAnnotate = () => {
		setInputForm(inputForms.ANNOTATE);
	};

	const onSubmitAnnotation = (
		id: ComponentIdType,
		selectedAnnotationOptionIds: StringArray,
	) => {
		if (selectedAnnotationOptionIds.length > 0) {
			const {newsId} = newsState;

			if (newsId) {
				setHasAnnotationStarted(true);

				dispatch(
					annotateNews({
						newsId,
						annotations: selectedAnnotationOptionIds,
					}),
				);
			}
		}
	};

	const renderInputForm = () => {
		switch (currentInputForm) {
			case inputForms.PREDICT_ANNOTATE:
				return (
					<PredictAnnotationPicker
						titleValue={"What would you like to do?"}
						onClickPredict={onClickPredict}
						onClickAnnotate={onClickAnnotate}
					/>
				);

			case inputForms.ANNOTATE:
				return (
					<Annotate
						annotationOptions={annotationState.annotationOptions}
						onSubmit={onSubmitAnnotation}
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

export default WithAuth(PredictAnnotatePage);
