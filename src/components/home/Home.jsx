import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Home.css'

class Home extends Component {
	render() {
		return (
			<section className="container mar-t">
				<div className="jumbotron bg-lightb">
					<h1>Practice React App</h1>
					<p>In this App I will set the basic structure of a React website using Redux and React Routing.</p>
					<Link className="btn btn-lg btn-default" to="about"><b>About</b></Link>
				</div>
			</section>
		);
	}
}

export default Home;
