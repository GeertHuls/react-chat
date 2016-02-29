import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';

var {Card, List} = mui;

class MessageList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [
				'Test message.',
				'Test reply.'
			]
		};
	}

	render() {
		var messageNodes = this.state.messages.map((message) => {
			return (
				<Message message={message} />
			);
		});

		return (
			<Card>
				<List>
					{messageNodes}
				</List>
			</Card>
		);
	}
}

export default MessageList;