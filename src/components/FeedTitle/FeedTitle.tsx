import React from "react";

import Image from "next/image";

import Images from "@/constants/Images";

interface iProps {
	title: string;
}

function FeedTitle({title}: iProps) {
	return (
		<div className=" flex flex-col items-center justify-center">
			<Image
				className="h-48 w-48 rounded-full mx-auto"
				src={Images.circleSVG}
				alt="Circles"
			/>
			<p className="text-xl lg:text-2xl text-center font-medium">{title}</p>
		</div>
	);
}

export default FeedTitle;
