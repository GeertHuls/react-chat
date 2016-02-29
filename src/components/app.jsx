import React from 'react';
import MessageList from './MessageList.jsx';
import mui from 'material-ui';

var AppBar = mui.AppBar;

class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<AppBar title="React chat app" />
				<MessageList />
			</div>
		);
	}
}

export default App;