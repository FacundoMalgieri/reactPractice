import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Component} from 'react/cjs/react.production.min';
import * as userActions from '../../actions/UserActions';


class ManageUsers extends Component {

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

export default connect(mapStateToProps, mapDispatchToProps)(ManageUsers);