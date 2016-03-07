import alt from '../alt';
import Firebase from 'firebase';
import firebaseRefFactory from '../firebaseRefFactory'

class Actions {
	constructor() {
		this.generateActions(
			'channelsReceived',
			'channelsFailed',
			'messagesReceived',
			'messagesFailed',
			'channelOpened',
			'messagesLoading'
		);
	}

	login(args) {
		return (dispatch) => {
			firebaseRefFactory().authWithOAuthPopup("google", (error, user) => {
				if(error) {
					return;
				}

				dispatch(user);
			});
		};
	}
}

export default alt.createActions(Actions);