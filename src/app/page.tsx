"use client";

import React from "react";

import Image from "next/image";
import {useRouter} from "next/navigation";

import Images from "@/constants/Images";
import Input from "@/components/Input";
import ActionButton from "@/components/ActionButton";
import {ComponentIdType} from "@/customTypes/CommonTypes";
import {useAppDispatch, useAppSelector} from "@/store/Hooks";
import {authenticate} from "@/store/auth/ThunkActions";
import {apiResponseStatuses} from "@/customTypes/NetworkTypes";

export default function LoginPage() {
	const router = useRouter();

	const [email, setEmail] = React.useState<string>("");
	const [password, setPassword] = React.useState<string>("");

	const dispatch = useAppDispatch();
	const authState = useAppSelector((state) => {
		return state.authReducer;
	});

	React.useEffect(() => {
		console.log("🚀 ~ file: page.tsx:23 ~ LoginPage ~ authState:", authState);
		if (
			!authState.isLoading &&
			authState.responseStatus === apiResponseStatuses.SUCCESS &&
			authState.isAuthenticated
		) {
			router.push("/home");
		}
	}, [authState, router]);

	const onChangeEmail = (id: ComponentIdType, value: string) => {
		setEmail(value);
	};

	const onChangePassword = (id: ComponentIdType, value: string) => {
		setPassword(value);
	};

	const onPressLogin = async () => {
		if (email && email.length > 4 && password && password.length > 2) {
			console.log("Clicked login :>> ", {email, password});
			await dispatch(authenticate({email, password}));
		}
	};

	return (
		<div className="flex flex-col h-screen md:flex-row">
			<div className="bg-primary flex-1 flex overflow-hidden">
				<h1 className="text-4xl font-bold text-background mt-auto ml-4 mb-4 lg:ml-12 lg:mb-12 lg:text-5xl">
					hack <br /> fake
				</h1>

				<Image
					src={Images.circleSVG}
					alt="Two tone circle"
					className="w-[320px] h-[320px] lg:w-[640px] lg:h-[640px] ml-auto -mr-32 mt-auto -mb-32 lg:-mr-64 lg:-mb-64"
				/>
			</div>

			<div className="w-11/12 mx-auto py-8 md:w-2/5 md:py-0 my-auto md:px-8 lg:px-16 md:flex md:flex-col md:gap-6">
				<h1 className="text-3xl font-bold hidden md:block">Welcome!</h1>

				<form className="flex flex-col gap-4">
					<Input
						placeholder="Email"
						inputType="email"
						value={email}
						onChangeText={onChangeEmail}
					/>

					<Input
						placeholder="Password"
						value={password}
						inputType={"password"}
						onChangeText={onChangePassword}
					/>

					<ActionButton text="Login" onClick={onPressLogin} />
				</form>
			</div>
		</div>
	);
}
