import React from 'react';
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
				{this.props.children}
			</div>
		);
	}
}

export default App;