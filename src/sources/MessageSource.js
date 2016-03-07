import Actions from '../actions';
import Firebase from 'firebase';
import firebaseRefFactory from '../firebaseRefFactory';

let firebaseRef = null;

let MessageSource = {
	getMessages: {
		remote(state) {
			if (firebaseRef) {
				firebaseRef.off();
			}

			firebaseRef = firebaseRefFactory('messages/' + state.selectedChannel.key);
			return new Promise((resolve, reject) => {
				firebaseRef.once("value", (dataSnapshot) => {
					var messages = dataSnapshot.val();
					resolve(messages);
				});
			});
		},
		success: Actions.messagesReceived,
		error: Actions.messagesFailed,
		loading: Actions.messagesLoading
	}
}

export default MessageSource;