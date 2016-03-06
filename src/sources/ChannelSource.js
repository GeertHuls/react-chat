import Actions from '../actions';
import Firebase from 'firebase';
import firebaseRefFactory from '../firebaseRefFactory';

let firebaseRef = firebaseRefFactory('channels');

let channelSource = {
	getChannels: {
		remote(state) {
			return new Promise((resolve, reject) => {
				firebaseRef.once("value", (dataSnapshot) => {
					var channels = dataSnapshot.val();
					resolve(channels);
				});
			});
		},
		success: Actions.channelsReceived,
		error: Actions.channelsFailed
	}
}

export default channelSource;