
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './styles/index.scss';
import store from './redux/store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'toastr/toastr.scss';
ReactDOM.render(
	<BrowserRouter>
		<Fragment>
			<Provider store={store}>
				<App />
			</Provider>
		</Fragment>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
