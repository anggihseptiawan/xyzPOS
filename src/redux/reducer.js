const intialState = {
	currentUser: null,
};

const reducer = (state = intialState, action) => {
	switch (action.type) {
		case "SIGN_IN":
			return {
				...state,
				currentUser: action.value,
			};

		case "SIGN_OUT":
			return {
				...state,
				currentUser: action.value,
			};

		default:
			return state;
	}
};

export default reducer;
