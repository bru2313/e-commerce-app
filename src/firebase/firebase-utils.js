import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBkXpjxAdYxF_yUYDWXfbjUl6q0Q_be1Kg",
    authDomain: "ar-db-7cabf.firebaseapp.com",
    databaseURL: "https://ar-db-7cabf.firebaseio.com",
    projectId: "ar-db-7cabf",
    storageBucket: "ar-db-7cabf.appspot.com",
    messagingSenderId: "483234161917",
    appId: "1:483234161917:web:0a687b5a2f173338b44a94"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;