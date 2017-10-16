import React, {Component} from 'react';

class Users extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			user: {name: "Facu"}
		};
		this.onNameChange = this.onNameChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
	}

	onNameChange(event) {
		const user = this.state.user;
		user.name = event.target.value;
		this.setState({user: user});
	}

	onClickSave() {
		alert(`Saving ${this.state.user.name}`);
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
						onClick={this.onClickSave}/>
				</div>
			</section>
		);
	}
}

export default Users;
