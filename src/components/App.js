import React, {Component} from 'react';
import '../App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import AppRoutes from "../AppRoutes";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<section>
					<Header/>
					<AppRoutes/>
					<Footer something=""/>
				</section>
			</BrowserRouter>

		);
	}
}

export default App;
