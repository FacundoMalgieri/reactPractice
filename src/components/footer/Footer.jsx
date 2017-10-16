import React, {Component} from 'react';
import './Footer.css'

class Footer extends Component {
	something;
	render() {

		return (
			<footer>
				{this.props.something}
			</footer>
		);
	}
}

export default Footer;
