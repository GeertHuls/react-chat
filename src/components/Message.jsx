import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

class Message extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ListItem leftAvatar={<Avatar src="https://avatars2.githubusercontent.com/u/995987?v=3&s=72"/>}>
			{this.props.message}</ListItem>
		);
	}
}
export default Message;