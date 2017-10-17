import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as userActions from '../../actions/UserActions';
import {bindActionCreators} from 'redux';
import * as BrowserRouter from 'react-router-redux';

class AddUser extends Component {
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
		this.props.actions.saveUser(this.state.user);
		alert('User Saved - Check it in Users Section (Redirect will be implemented)')
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
				</div>
			</section>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		user: state.user
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(userActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);


