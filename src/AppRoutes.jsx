import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './components/home/Home';
import About from './components/about/About';
import registerServiceWorker from "./registerServiceWorker";

const AppRoutes = () => (
	<Switch>
		<Route exact path="/" component={Home}/>
		<Route path="/home" component={Home}/>
		<Route path="/about" component={About}/>
	</Switch>
);
registerServiceWorker();

export default AppRoutes;