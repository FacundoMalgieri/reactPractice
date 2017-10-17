import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as userActions from '../../actions/UserActions';
import {bindActionCreators} from 'redux';
import UsersList from './UsersList';

class Users extends Component {
	render() {
		const {users} = this.props;
		return (<UsersList users={users}/>);
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