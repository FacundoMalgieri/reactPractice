import React from 'react';

const UserListRow = ({user}) => {
	return (
		<tr>
			<td>
				{user.id}
			</td>
			<td>
				{user.firstName}
			</td>
			<td>
				{user.lastName}
			</td>
		</tr>
	);
};

export default UserListRow;