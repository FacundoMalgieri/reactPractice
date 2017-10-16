import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/ConfigureStore';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from "./components/App";

const store = configureStore();
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	, document.getElementById('app'));
