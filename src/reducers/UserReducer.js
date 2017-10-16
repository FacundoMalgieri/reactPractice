export default function userReducer(state = [], action) {
	switch (action.type) {
		case 'CREATE_COURSE':
			return [...state, Object.assign({}, action.user)];
		default:
			return state;
	}
}