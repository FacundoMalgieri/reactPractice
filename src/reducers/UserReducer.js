import {CREATE_USER_SUCCESS, LOAD_USERS_SUCCESS} from '../actions/actionTypes';

export default function users(state = [], action) {
	switch (action.type) {
		case CREATE_USER_SUCCESS:
			return [...state, Object.assign({}, action.user)];
		case LOAD_USERS_SUCCESS:
			return action.users;
		default:
			return state;
	}
}