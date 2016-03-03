import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import firebaseRef from '../firebaseRef';
import _ from 'lodash';

var {Card, List} = mui;

class MessageList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: {}
		};

		this.firebaseRef = firebaseRef;
		this.firebaseRef.on("child_added", (msg) => {
			if(this.state.messages[msg.key()]) {
				return;
			}

			let msgVal = msg.val();
			msgVal.key = msg.key();
			this.state.messages[msgVal.key] = msgVal;
			this.setState({messages: this.state.messages});
		});
	}

	render() {
		var messageNodes = _.values(this.state.messages).map((message) => {
			return (
				<Message message={message.message} />
			);
		});

		return (
			<Card style={{
				flexGrow: 2,
				marginLeft: 30
			}}>
				<List>
					{messageNodes}
				</List>
			</Card>
		);
	}
}

export default MessageList;