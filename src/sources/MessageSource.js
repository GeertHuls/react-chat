import Actions from '../actions';
import Firebase from 'firebase';
import firebaseRefFactory from '../firebaseRefFactory';

let firebaseRef = null;

let MessageSource = {

	sendMessage: {
		remote(state) {
			return new Promise((resolve, reject)=>{
				if (!firebaseRef) {
					return resolve();
				}

				firebaseRef.push({
					"message": state.message,
					"date": new Date().toUTCString(),
					"author": state.user.google.displayName,
					"userId": state.user.uid,
					"profilePic": state.user.google.profileImageURL
				});
				resolve();
			});
		},
		success: Actions.messageSendSuccess,
		error: Actions.messageSendError
	},

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

				setTimeout(() =>{
					firebaseRef.on("child_added", ((msg) => {
						let msgVal = msg.val();
						msgVal.key = msg.key();
						Actions.messageReceived(msgVal);
					}));
				}, 10);
			});
		},
		success: Actions.messagesReceived,
		error: Actions.messagesFailed,
		loading: Actions.messagesLoading
	}
}

export default MessageSource;