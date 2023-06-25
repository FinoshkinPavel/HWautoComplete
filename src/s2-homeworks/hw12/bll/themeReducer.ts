const initState: initStateType = {
	themeId: 1,
};

export const themeReducer = (
	state: initStateType = initState,
	action: ChangeThemeIdACType
): initStateType => {
	switch (action.type) {
		case "SET_THEME_ID": {
			return { ...state, themeId: action.id };
		}

		default:
			return state;
	}
};

type ChangeThemeIdACType = ReturnType<typeof changeThemeId>;
export const changeThemeId = (
	id: number
): { type: "SET_THEME_ID"; id: number } => ({ type: "SET_THEME_ID", id });

type initStateType = {
	themeId: number;
};
