import React, {Component} from 'react';
import '../App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import AppRoutes from "../AppRoutes";

class App extends Component {
	render() {
		return (
			<section className="site">
				<div className="site-content">
					<Header/>
					<AppRoutes/>
				</div>
				<Footer something="Sticky Footer Using Flex"/>
			</section>
		);
	}
}

export default App;
