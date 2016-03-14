import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';

class Chat extends React.Component {

	render() {
		return (
			<div>
				<div style={{
					display: 'flex',
					flexFlow : 'row wrap',
					maxWidth: 1200,
					width: '100%',
					margin: '30px auto 30px'
				}}>
					<ChannelList {...this.props} />
					<MessageList />
				</div>
				<MessageBox />
			</div>
		);
	}
}

//{...this.props} = the ES7 spread operator
// it send its props down to the child component
// otherwise you'd had to write something like this: channel={this.props.params.channel}

export default Chat;