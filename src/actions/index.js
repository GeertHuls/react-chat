import alt from '../alt';
import Firebase from 'firebase';
import firebaseRef from '../firebaseRef'

class Actions {
	login(args) {
		return (dispatch) => {
			var firebaseRef = firebaseRef;
			firebaseRef.authWithOAuthPopup("google", (error, user) => {
				if(error) {
					return;
				}

				dispatch(user);
			});
		};
	}
}

export default alt.createActions(Actions);