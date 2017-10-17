import {CREATE_USER, LOAD_USERS_SUCCESS} from './actionTypes';
import userMockApi from '../api/userMockApi';

export function createUser(user) {
	return {type: CREATE_USER, user};
}

export function loadUsersSuccess(users) {
	return {type: LOAD_USERS_SUCCESS, users};
}

export function loadUsers() {
	return function (dispatch) {
		return userMockApi.getAllUsers().then(users => {
			dispatch(loadUsersSuccess(users));
		}).catch(error => {
			throw(error);
		});
	}
}