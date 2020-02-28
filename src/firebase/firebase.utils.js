import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCus9u8Paa6Pyb03l65_m5brvjiGX5bxN8',
  authDomain: 'monaio-db.firebaseapp.com',
  databaseURL: 'https://monaio-db.firebaseio.com',
  projectId: 'monaio-db',
  storageBucket: 'monaio-db.appspot.com',
  messagingSenderId: '494946501304',
  appId: '1:494946501304:web:67b5e5551d44bb28446a4d'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;