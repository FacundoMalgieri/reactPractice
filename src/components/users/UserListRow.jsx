import React from 'react';

const UserListRow = ({user}) => {
	return (
		<tr>
			<td>
				{user.id}
			</td>
			<td>
				{user.name}
			</td>
		</tr>
	);
};

export default UserListRow;