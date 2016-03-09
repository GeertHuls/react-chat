import React from 'react';
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from '../components/App.jsx';
import Chat from '../components/Chat.jsx';
import Login from '../components/Login.jsx';

let routes = (
 	<Router history={hashHistory}>
 		<Route path="/" component={App}>
 			<IndexRoute component={Chat}/>
			<Route path="/chat" component={Chat} />
			<Route path="/login" component={Login} />
		</Route>
	</Router>
);

render(routes, document.getElementById('container'));