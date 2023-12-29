"use client";

import React from "react";

import Image from "next/image";
import {useRouter} from "next/navigation";

import Images from "@/constants/Images";
import ActionButton from "@/components/ActionButton";
import {ComponentIdType} from "@/customTypes/CommonTypes";
import {useAppSelector} from "@/store/Hooks";

export default function HomePage() {
	const router = useRouter();

	const onPressStart = async (
		id: ComponentIdType,
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		event.preventDefault();
		router.push("/submit-news");
	};

	const authState = useAppSelector((state) => {
		return state.authReducer;
	});

	React.useEffect(() => {
		console.log(
			"🚀 ~ file: home-page.tsx:30 ~ React.useEffect ~ authState:",
			authState,
		);
	}, [authState, router]);

	return (
		<div className="h-screen flex flex-col">
			<div className="w-11/12 mx-auto py-8  md:pt-16 md:pb-0 md:flex md:justify-center">
				<h1 className="text-5xl font-semibold text-primary">
					hack <br /> fake
				</h1>
			</div>
			<div className="flex flex-1 flex-col justify-between py-8 md:flex-row md:gap-10 md:w-1/2 md:mx-auto md:items-center md:py-0">
				<Image
					className="h-96 w-96 rounded-full mx-auto"
					src={Images.circleSVG}
					alt="Circles"
				/>
				<div className=" w-11/12 mx-auto flex flex-col gap-8">
					<div className="flex flex-col gap-6">
						<h1 className="text-2xl font-bold">Hey There!</h1>
						<p className=" ">
							Lets get started on the innovative tech solution to detect and
							prevent the spread of digital falsehoods.
						</p>
					</div>

					<ActionButton text={"start"} onClick={onPressStart} />
				</div>
			</div>
		</div>
	);
}
