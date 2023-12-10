type GenericNullable<T> = T | null;

type NullableNumber = number | null;
type NullableString = string | null;
type NullableBoolean = string | null;

type NumericArray = Array<number>;
type StringArray = Array<string>;
type NullableNumericArray = NumericArray | null;
type NullableStringArray = StringArray | null;

type ComponentIdType = string | number | undefined | null;

type BasicCallbackType = () => void;

interface iGeoCoordinates {
	latitude: number;
	longitude: number;
}

type NullableGeoCoordinates = GenericNullable<iGeoCoordinates>;
interface iNormalizedObjectValueBase {
	id: string;
}
interface iNormalizedObjectDetails<T extends iNormalizedObjectValueBase> {
	[key: string]: T;
}

interface iNormalizedObject<T extends iNormalizedObjectValueBase> {
	ids: Array<string>;
	details: iNormalizedObjectDetails<T>;
}

// We will define custom type for color later
type ColorValue = string;

export type {
	NullableNumber,
	NullableString,
	NullableBoolean,
	NumericArray,
	StringArray,
	NullableNumericArray,
	NullableStringArray,
	ComponentIdType,
	BasicCallbackType,
	ColorValue,
	iGeoCoordinates,
	NullableGeoCoordinates,
	iNormalizedObject,
};
