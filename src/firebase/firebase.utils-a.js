import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyAw-y64rZvLBqqviQyk3G6xU_BmdJbtwW4",
  authDomain: "ar-db-322e0.firebaseapp.com",
  databaseURL: "https://ar-db-322e0.firebaseio.com",
  projectId: "ar-db-322e0",
  storageBucket: "ar-db-322e0.appspot.com",
  messagingSenderId: "625897807967",
  appId: "1:625897807967:web:e2ad4e5e9fa08738a43bea"
};

export const createUserProfileDocument = async (userAuth, additionalData ) => {
  if (!userAuth) return;

  //console.log('testing');
 // console.log(firestore.doc('users/128yutyghg'));
  //console.log("testing2");
  
}

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;