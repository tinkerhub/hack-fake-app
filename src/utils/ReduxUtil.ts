/**
 * Returns thunkName by combining the reducerName and actionType with
 * the "/" as separator.
 *
 * For eg:
 * if the reducerName is "authState" and actionType is "authenticate"
 * then the returning thunkName would be "authState/authenticate".
 *
 * @param reducerName
 * @param actionType
 * @returns thunkName
 */
export function getThunkName(reducerName: string, actionType: string): string {
	return `${reducerName}/${actionType}`;
}

/**
 * Currying getThunName
 *
 * @param reducerName
 * @returns (actionType: string) => string
 */
export function curryGetThunkName(reducerName: string) {
	return (actionType: string): string => {
		return getThunkName(reducerName, actionType);
	};
}
