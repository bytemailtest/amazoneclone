import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD5RFtjJhVaeSlsJ4ZePy0LsVLW9epb_Ow",
    authDomain: "clone-7dcaf.firebaseapp.com",
    projectId: "clone-7dcaf",
    storageBucket: "clone-7dcaf.appspot.com",
    messagingSenderId: "66261487718",
    appId: "1:66261487718:web:aa99473578c3bf6d499da7",
    measurementId: "G-V12EGQNZDS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };