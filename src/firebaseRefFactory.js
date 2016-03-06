import Firebase from 'firebase';

let firebaseRefFactory = (resource) =>{
	return new Firebase('xxx' + resource);
};

export default firebaseRefFactory;