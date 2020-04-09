import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCUC7RDpvo6ppRqPmZcsH0ZMvEccxzl_ok",
    authDomain: "prototype-1-3c0eb.firebaseapp.com",
    databaseURL: "https://prototype-1-3c0eb.firebaseio.com",
    projectId: "prototype-1-3c0eb",
    storageBucket: "prototype-1-3c0eb.appspot.com",
    messagingSenderId: "534883423693",
    appId: "1:534883423693:web:d449c5aabdf4f275442084",
    measurementId: "G-EJ6G2ZKBEX"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
