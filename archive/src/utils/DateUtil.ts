import moment from "moment";

import {iConvertDateTimeResponse} from "@/customTypes/DateAndTimeTypes";

/**
 * Converts a date and time string to the day of the month and abbreviated day of the week.
 * @param {string} dateTimeString - The date and time string in the format 'MM/DD/YYYY HH:mmZ'.
 * @returns {object} An object containing the day of the month and abbreviated day of the week.
 */

function formatDateTime(
	dateTimeString: Date | string,
): iConvertDateTimeResponse {
	const formatDateTimeString = moment(
		new Date(dateTimeString),
		"MM/DD/YYYY HH:mmZ",
	);

	const dayOfTheMonth: string = formatDateTimeString.format("DD");

	const dayOfTheWeek: string = formatDateTimeString.format("ddd");

	const timeFromTheDate: string = moment(dateTimeString).format("hh:mm A");

	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	const longDateFormat = new Date(dateTimeString).toLocaleDateString(
		"en-US",
		options,
	);

	return {dayOfTheMonth, dayOfTheWeek, longDateFormat, timeFromTheDate};
}

function getTimeDifferenceInSeconds(targetDate: Date | string): number {
	const now = moment();
	const targetMoment = moment(targetDate);

	const differenceInSeconds = now.diff(targetMoment, "seconds");

	return differenceInSeconds;
}

export {formatDateTime, getTimeDifferenceInSeconds};
