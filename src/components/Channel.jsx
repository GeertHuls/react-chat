import React from 'react';
import mui from 'material-ui';

var {ListItem} = mui;

class Channel extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ListItem>{this.props.channel.name}</ListItem>
		);
	}
}
export default Channel;