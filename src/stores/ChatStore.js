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
		this.state= {user: null, message: null};
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
			messages
		});
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