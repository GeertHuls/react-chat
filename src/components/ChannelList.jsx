import React from 'react';
import Channel from './Channel.jsx';
import mui from 'material-ui';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';

var {Card, List, CircularProgress} = mui;

//connectToStores attribute will use the static function:
//getStores and getPropsFromStores
@connectToStores
class ChannelList extends React.Component {
	constructor(props) {
		super(props);
		//getChannels method actually belongs to the ChannelSource class
		//but using the datasource attribute, it gets attached to the ChatStore
		//store as well.
		ChatStore.getChannels();
	}

	//Implement getStores function so that alt can wire up 
	//data change events on the stores and sync the component properties
	//with the state of the store when the store state changes.
	static getStores() {
		return [ChatStore];
	}

	static getPropsFromStores() {
		//Gets all props from store:
		return ChatStore.getState();
	}

	render() {

		if(!this.props.channels) {
			return(
				<Card style= {{
					flexGrow: 1
				}}>
					<CircularProgress
						mode="indeterminate"
						style={{
							paddingTop: '20px',
							paddingBottom: '20px',
							margin: '0 auto',
							display: 'block',
							width: '60px'
						}}/>
				</Card>
			);
		}

		var channelNodes = _(this.props.channels)
			.keys()
			.map((k) => {
				let channel = this.props.channels[k];
				return (
					<Channel channel={channel} />
				);
			})
			.value();

		return (
			<Card style={{
				flexGrow: 1
			}}>
				<List>
					{channelNodes}
				</List>
			</Card>
		);
	}
}

export default ChannelList;
