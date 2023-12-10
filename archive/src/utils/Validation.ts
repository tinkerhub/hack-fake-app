import Joi from "joi";

import {schema} from "@/app/event/[slug]/Schema";
import {iFormData} from "@/app/event/[slug]/Type";

export type ValidationResultS = {
	isValid: boolean;
	errors: Record<string, string[]>; // Use a Record to store errors by field name
};

export const isValidate = (data: iFormData): ValidationResultS => {
	const result = schema.validate(data, {abortEarly: false}); // Disable abortEarly to collect all errors

	const errors: Record<string, string[]> = {};

	if (result.error) {
		if (result.error.details) {
			result.error.details.forEach((detail: Joi.ValidationErrorItem) => {
				if (detail.context) {
					const fieldName = detail.context.key;
					const errorMessage = detail.message;

					// Check if the field name is already in the errors object; if not, create an array
					if (fieldName) {
						if (!errors[fieldName]) {
							errors[fieldName] = [];
						}

						errors[fieldName].push(errorMessage);
					}
				}
			});
		}
	}

	return {
		isValid: Object.keys(errors).length === 0,
		errors,
	};
};
