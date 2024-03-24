"use client";

import React, {useEffect, useState} from "react";

import {useRouter} from "next/navigation";

import {useAppDispatch, useAppSelector} from "@/store/Hooks";
import Navbar from "@/components/Navbar";
import ScrollButtons from "@/components/ScrollButtons";
import FeedTitle from "@/components/FeedTitle";
import ActionButton from "@/components/ActionButton";
import {resetNewsState} from "@/store/news/NewsSlice";
import {resetAuthState} from "@/store/auth/AuthSlice";
import {resetAnnotationState} from "@/store/annotation/AnnotationSlice";
import {apiResponseStatuses} from "@/customTypes/NetworkTypes";
import WithAuth from "@/components/WithAuth";

function AnnotationSuccessPage() {
	const [hasLogoutStarted, setHasLogoutStarted] = useState<boolean>(false);
	const [hasSubmitNewStarted, setHasSubmitNewStarted] =
		useState<boolean>(false);

	const router = useRouter();

	const dispatch = useAppDispatch();

	const authState = useAppSelector((state) => {
		return state.authReducer;
	});

	const annotationState = useAppSelector((state) => {
		return state.annotationReducer;
	});

	const newsState = useAppSelector((state) => {
		return state.newsReducer;
	});

	useEffect(() => {
		if (
			hasLogoutStarted &&
			newsState.isLoading === false &&
			annotationState.isLoading === false &&
			authState.isLoading === false &&
			authState.isAuthenticated === false &&
			authState.responseStatus === apiResponseStatuses.IDLE &&
			newsState.responseStatus === apiResponseStatuses.IDLE &&
			annotationState.responseStatus === apiResponseStatuses.IDLE
		) {
			router.push("/");
		}
	}, [newsState, annotationState, authState, router, hasLogoutStarted]);

	useEffect(() => {
		if (
			hasSubmitNewStarted &&
			newsState.isLoading === false &&
			annotationState.isLoading === false &&
			authState.isLoading === false &&
			authState.isAuthenticated === true &&
			newsState.responseStatus === apiResponseStatuses.IDLE &&
			annotationState.responseStatus === apiResponseStatuses.IDLE
		) {
			router.push("/home");
		}
	}, [newsState, annotationState, authState, router, hasSubmitNewStarted]);

	const onClickSubmitNew = () => {
		setHasSubmitNewStarted(true);
		dispatch(resetNewsState());
		dispatch(resetAnnotationState());
	};

	const onClickLogout = () => {
		setHasLogoutStarted(true);
		dispatch(resetNewsState());
		dispatch(resetAnnotationState());
		dispatch(resetAuthState());
	};

	return (
		<div className="bg-background text-text min-h-screen">
			<div className="flex flex-col h-screen">
				<Navbar />
				<div className="flex-1 justify-center items-center w-11/12 md:w-3/5 lg:w-1/3 mx-auto gap-8 flex flex-col">
					<FeedTitle title="Your Response have been submitted. Would you like to submit another news or logout?" />

					<form className="w-full flex flex-col gap-4">
						<div className="flex flex-row w-1/2 gap-2">
							<ActionButton text="Submit New" onClick={onClickSubmitNew} />
							<ActionButton text="Logout" onClick={onClickLogout} />
						</div>
					</form>
				</div>
				<ScrollButtons />
			</div>
		</div>
	);
}

export default WithAuth(AnnotationSuccessPage);
