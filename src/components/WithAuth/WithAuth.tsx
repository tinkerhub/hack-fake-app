import React, {FunctionComponent, useEffect} from "react";

import {useRouter} from "next/navigation";

import {useAppSelector} from "@/store/Hooks";

// Define the types for the HOC
type WithAuthProps = {
	// Define any props that your HOC might need or pass to the wrapped component
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const WithAuth = <P extends object>(WrappedComponent: FunctionComponent<P>) => {
	const WithAuth: FunctionComponent<P & WithAuthProps> = (props) => {
		const isAuthenticated = useAppSelector((state) => {
			return state.authReducer.isAuthenticated;
		});

		const router = useRouter();

		useEffect(() => {
			if (!isAuthenticated) {
				// Redirect to login page
				router.push("/");
			}
		}, [isAuthenticated, router]);

		return isAuthenticated ? <WrappedComponent {...(props as P)} /> : null;
	};

	return WithAuth;
};

export default WithAuth;
