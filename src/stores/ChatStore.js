import alt from '../alt';
import Actions from '../actions';
import {decorate, bind, datasource} from 'alt-utils/lib/decorators';
import ChannelSource from '../sources/ChannelSource';
import MessageSource from '../sources/MessageSource';
import _ from 'lodash';

@datasource(ChannelSource, MessageSource)
@decorate(alt)
class ChatStore {
	constructor(){
		this.state= {
			user: null,
			message: null,
			messagesLoading: true
		};
	}

	@bind(Actions.messagesLoading)
	messagesLoading() {
		this.setState({
			messagesLoading: true
		});
	}

	@bind(Actions.messagesReceived)
	receivedMessages(messages) {
		_(messages)
			.keys()
			.forEach((k) => {
				messages[k].key = k;
			});

		//Notify all components that are subscribed to this store
		//and allow them to rerender
		this.setState({
			messages,
			messagesLoading: false
		});
	}

	@bind(Actions.sendMessage)
	sendMessage(message) {
		this.state.message = message;
		setTimeout(this.getInstance().sendMessage, 10);
	}

	@bind(Actions.messageReceived)
	messageReceived(msg) {
		if(this.state.messages[msg.key]) {
			return;
		}

		this.state.messages[msg.key] = msg;

		this.setState({
			messages: this.state.messages
		});
	}

	@bind(Actions.channelOpened)
	channelOpened(selectedChannel) {
		_(this.state.channels)
			.values()
			.forEach((channel) => {
				channel.selected = false;
			});

		selectedChannel.selected = true;

		this.setState({
			selectedChannel,
			channels: this.state.channels
		});

		setTimeout(this.getInstance().getMessages, 100);
	}

	@bind(Actions.channelsReceived)
	receivedChannels(channels) {
		let selectedChannel;
		_(channels)
			.keys()
			.forEach((key, index) => {
				channels[key].key = key;
				if(index == 0) {
					channels[key].selected = true;
					selectedChannel = channels[key];
				}
			});

		this.setState({
			channels,
			selectedChannel
		});

		setTimeout(this.getInstance().getMessages, 100);
	}

	@bind(Actions.login)
	login(user) {
		this.setState({user: user});
	}
}

export default alt.createStore(ChatStore);