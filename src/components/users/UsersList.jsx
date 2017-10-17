import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import UserListRow from './UserListRow';

const UsersList = ({users}) => {
	return (
		<section className="container mar-t">
			<div className="bg-lightb jumbotron">
				<h1>Users</h1>
				<Table striped bordered condensed hover>
					<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
					</tr>
					</thead>
					<tbody>
					{users.map(user =>
						<UserListRow key={user.id} user={user}/>
					)}
					</tbody>
				</Table>
			</div>
		</section>
	);
};
export default UsersList;