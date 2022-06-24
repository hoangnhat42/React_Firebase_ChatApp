import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAIRoy3N1R0-zR27g9GUXdJPpQzo5OYolQ",
    authDomain: "chat-app-d992f.firebaseapp.com",
    projectId: "chat-app-d992f",
    storageBucket: "chat-app-d992f.appspot.com",
    messagingSenderId: "1022432497054",
    appId: "1:1022432497054:web:92d3b80253531be4a61a8f",
    measurementId: "G-N6ZP0KWGX8"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

//cau hinh cho local chay voi firebase emulators      
if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
