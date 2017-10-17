import delay from './delay';

const users = [
	{
		id: '0',
		firstName: 'Usuario',
		lastName: 'Apellido'
	},
	{
		id: '1',
		firstName: 'Usuario2',
		lastName: 'Apellido2'
	},
	{
		id: '2',
		firstName: 'Usuario3',
		lastName: 'Apellido3'
	}
];

const generateId = (user) => {
	return user.firstName.toLowerCase() + '-' + user.lastName.toLowerCase();
};

class UserApi {
	static getAllUsers() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(Object.assign([], users));
			}, delay);
		});
	}

	static saveUser(user) {
		user = Object.assign({}, user);
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const minUserNameLength = 3;
				if (user.firstName.length < minUserNameLength) {
					reject(`First Name must be at least ${minUserNameLength} characters.`);
				}

				if (user.lastName.length < minUserNameLength) {
					reject(`Last Name must be at least ${minUserNameLength} characters.`);
				}

				if (user.id) {
					const existingUserIndex = users.findIndex(a => a.id === user.id);
					users.splice(existingUserIndex, 1, user);
				} else {
					user.id = generateId(user);
					users.push(user);
				}
				resolve(user);
			}, delay);
		});
	}

	static deleteAuthor(userId) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const indexOfAuthorToDelete = users.findIndex(user => {
					user.id === userId;
				});
				users.splice(indexOfAuthorToDelete, 1);
				resolve();
			}, delay);
		});
	}
}

export default UserApi;