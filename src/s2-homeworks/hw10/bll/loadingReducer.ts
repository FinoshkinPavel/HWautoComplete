const initState: initStateType = {
	isLoading: false,
};

export const loadingReducer = (
	state: initStateType = initState,
	action: LoadingActionType
): initStateType => {
	switch (action.type) {
		case "CHANGE_LOADING": {
			return { ...state, isLoading: action.isLoading };
		}

		default:
			return state;
	}
};

type initStateType = {
	isLoading: boolean;
};

type LoadingActionType = {
	type: "CHANGE_LOADING";
	isLoading: boolean;
};

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
	type: "CHANGE_LOADING",
	isLoading,
});
