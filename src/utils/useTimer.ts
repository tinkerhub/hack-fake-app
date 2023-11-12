import {useState, useEffect, useCallback} from "react";

interface iTimerResult {
	isTimerExpired: boolean;
	formattedTimeRemaining: string;
}

const formatTime = (timeInSeconds: number): string => {
	const hours = Math.floor(timeInSeconds / 3600);
	const minutes = Math.floor((timeInSeconds % 3600) / 60);
	const seconds = timeInSeconds % 60;

	const hoursStr = hours > 0 ? `${hours}h ` : "";
	const minutesStr = minutes > 0 ? `${minutes}m ` : "";
	const secondsStr = seconds > 0 ? `${seconds}sec` : "";

	return `${hoursStr}${minutesStr}${secondsStr}`.trim();
};

const useTimer = (initialCountDownValue: number): iTimerResult => {
	const [isTimerExpired, setIsTimerExpired] = useState(false);
	const [timeRemaining, setTimeRemaining] = useState(initialCountDownValue);

	const resetTimer = useCallback(() => {
		setIsTimerExpired(false);
		setTimeRemaining(initialCountDownValue);
	}, [initialCountDownValue]);

	useEffect(() => {
		resetTimer();
		if (initialCountDownValue > 0) {
			const timer = setInterval(() => {
				setTimeRemaining((prevTime) => {
					if (prevTime <= 1) {
						setIsTimerExpired(true);
						clearInterval(timer);
						return 0;
					}
					return prevTime - 1;
				});
			}, 1000);

			return () => {
				clearInterval(timer);
			};
		} else {
			setIsTimerExpired(true);
		}
	}, [initialCountDownValue, resetTimer]);

	const formattedTimeRemaining = formatTime(timeRemaining);

	return {
		isTimerExpired,
		formattedTimeRemaining,
	};
};

export default useTimer;
