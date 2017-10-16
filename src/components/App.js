import React, {Component} from 'react';
import '../App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import AppRoutes from "../AppRoutes";

class App extends Component {
	render() {
		return (

			<section>
				<Header/>
				<AppRoutes/>
				<Footer something=""/>
			</section>

		);
	}
}

export default App;
