import firebase from 'firebase';
require('@firebase/firestore')



var firebaseConfig = {
    apiKey: "AIzaSyAVnyS_R4LPj0Z52G6-RRI4RRcXJNLBYJM",
    authDomain: "barter-system-ce816.firebaseapp.com",
    projectId: "barter-system-ce816",
    storageBucket: "barter-system-ce816.appspot.com",
    messagingSenderId: "53370187423",
    appId: "1:53370187423:web:e06e1867f69d24f3f0bcaa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();