import { UserType } from "../HW8";

type ActionType =
	| { type: "sort"; payload: "up" | "down" }
	| { type: "check"; payload: number };

export const homeWorkReducer = (
	state: UserType[],
	action: ActionType
): UserType[] => {
	switch (action.type) {
		case "sort": {
			const copy = [...state];
			if (action.payload === "up")
				copy.sort((a, b) => a.name.localeCompare(b.name));
			if (action.payload === "down")
				copy.sort((a, b) => -1 * a.name.localeCompare(b.name));
			return copy;
		}
		case "check": {
			return state.filter((el) => el.age > action.payload);
		}
		default:
			return state;
	}
};
