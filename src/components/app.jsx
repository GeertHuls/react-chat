import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import Login from './Login.jsx';
import mui from 'material-ui';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import CustomTheme from '../customTheme';

var AppBar = mui.AppBar;

@connectToStores
class App extends React.Component {
	constructor() {
		super();
	}

	static getStores() {
		return [ChatStore];
	}

	static getPropsFromStores() {
		//this statement will initiliaze the this.props.user object
		//for usage later on.
		return ChatStore.getState();
	}

	static childContextTypes = {
		muiTheme: React.PropTypes.object
	}

	getChildContext() {
		return {
			muiTheme: ThemeManager.getMuiTheme(CustomTheme)
		}
	}

	render() {
		var view = <Login />;

		if (this.props.user) {
			view = (
					<div>
						<div style={{
							display: 'flex',
							flexFlow : 'row wrap',
							maxWidth: 1200,
							width: '100%',
							margin: '30px auto 30px'
						}}>
							<ChannelList />
							<MessageList />
						</div>
						<MessageBox />
					</div>
			);
		}

		return (
			<div>
				<AppBar title="React chat app" />
				{view}
			</div>
		);
	}
}

export default App;