import React from 'react';
import { render } from 'react-dom'
import { Router, Route, useRouterHistory, IndexRoute } from 'react-router'
import { createHashHistory } from 'history';

import App from '../components/App.jsx';
import Chat from '../components/Chat.jsx';
import Login from '../components/Login.jsx';
import ChatStore from '../stores/ChatStore';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

function requireAuth(nextState, replace) {
	var state = ChatStore.getState();
	if (!state.user) {
		replace({
	      pathname: '/login',
	      state: { nextPathname: nextState.location.pathname }
	    });
	}
}

let routes = (
 	<Router history={appHistory}>
 		<Route path="/" component={App}>
 			<IndexRoute component={Chat} onEnter={requireAuth}/>
			<Route path="/chat" component={Chat} onEnter={requireAuth} />
			<Route path="/chat/:channel" component={Chat} onEnter={requireAuth} />
			<Route path="/login" component={Login} />
		</Route>
	</Router>
);

render(routes, document.getElementById('container'));