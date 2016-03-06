import alt from '../alt';
import Firebase from 'firebase';
import firebaseRef from '../firebaseRef'

class Actions {
	login(args) {
		return (dispatch) => {
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