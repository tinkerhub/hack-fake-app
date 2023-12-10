function firstTwoCharacters(inputString: string): string {
	if (inputString.length < 2) {
		return inputString.toUpperCase();
	}

	const firstTwoCharacters = inputString.substring(0, 2).toUpperCase();
	return firstTwoCharacters;
}

const fullName = (firstName: string, lastName: string) => {
	return firstName + " " + lastName;
};
export default fullName;

export {firstTwoCharacters, fullName};
