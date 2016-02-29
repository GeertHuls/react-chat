import React from 'react';

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
				<div>{message}</div>
			);
		});

		return (
			<div>{messageNodes}</div>
		);
	}
}

export default MessageList;