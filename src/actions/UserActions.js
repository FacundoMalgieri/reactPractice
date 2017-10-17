import {CREATE_USER_SUCCESS, LOAD_USERS_SUCCESS} from './actionTypes';
import userMockApi from '../api/userMockApi';

export function createUser(user) {
	return {type: CREATE_USER_SUCCESS, user};
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

export function saveUser(user) {
	return function (dispatch) {
		return userMockApi.saveUser(user).then(savedUser => {
			dispatch(createUser(savedUser));
		}).catch(error => {
			throw(error);
		});
	}
}