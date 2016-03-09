import React from 'react';
import { render } from 'react-dom'
import { Router, Route, useRouterHistory, IndexRoute } from 'react-router'
import { createHashHistory } from 'history';

import App from '../components/App.jsx';
import Chat from '../components/Chat.jsx';
import Login from '../components/Login.jsx';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

let routes = (
 	<Router history={appHistory}>
 		<Route path="/" component={App}>
 			<IndexRoute component={Chat}/>
			<Route path="/chat" component={Chat} />
			<Route path="/login" component={Login} />
		</Route>
	</Router>
);

render(routes, document.getElementById('container'));