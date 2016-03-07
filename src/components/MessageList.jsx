import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import firebaseRefFactory from '../firebaseRefFactory';

import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';

import _ from 'lodash';

var {Card, List} = mui;

@connectToStores
class MessageList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: {}
		};
	}

	static getStores() {
		return [ChatStore];
	}

	static getPropsFromStores() {
		return ChatStore.getState();
	}

	render() {
		let messageNodes = null;

		if(this.props.messages) {
			messageNodes = _.values(this.props.messages).map((message) => {
				return (
					<Message message={message.message} />
				);
			});
		}

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