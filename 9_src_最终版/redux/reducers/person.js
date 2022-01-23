import { ADD_PERSON } from "../constant";
const initState = [{ id: 1, name: "tom", age: 18 }];

export default function addPersonReducer(preState = initState, action) {
	const { type, data } = action;
	switch (type) {
		case ADD_PERSON:
			return [data, ...preState];

		default:
			return preState;
	}
}
