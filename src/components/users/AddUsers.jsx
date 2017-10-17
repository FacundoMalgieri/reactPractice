import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as userActions from '../../actions/UserActions';
import {Table} from 'react-bootstrap';
import {bindActionCreators} from 'redux';

class Users extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			user: {name: ""}
		};
		this.onNameChange = this.onNameChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
	}

	onNameChange(event) {
		const user = this.state.user;
		user.name = event.target.value;
		this.setState({user});
	}

	onClickSave() {
		this.props.actions.createUser(this.state.user);
	}

	userRow(user, index) {
		return <tr key={index}>
			<td>
				{index}
			</td>
			<td>
				{user.name}
			</td>
		</tr>;
	}

	render() {
		return (
			<section className="container mar-t">
				<div className="bg-lightb jumbotron">
					<h1>Add a User</h1>
					<input
						type="text"
						onChange={this.onNameChange}
						value={this.state.user.name}/>
					<input
						type="submit"
						value="Save"
						className="btn btn-default mar-l"
						onClick={this.onClickSave}/>
					<h3>Users</h3>
					<Table striped bordered condensed hover>
						<thead>
						<tr>
							<th>#</th>
							<th>First Name</th>
						</tr>
						</thead>
						<tbody>
						{this.props.users.map(this.userRow)}
						</tbody>
					</Table>
				</div>
			</section>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		users: state.users
	};
}
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(userActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);


