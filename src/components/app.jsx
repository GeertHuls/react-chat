import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import mui from 'material-ui';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import CustomTheme from '../customTheme';

var AppBar = mui.AppBar;

class App extends React.Component {
	constructor() {
		super();
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
		return (
			<div>
				<AppBar title="React chat app" />
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
}

export default App;