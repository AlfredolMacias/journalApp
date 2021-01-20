import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBea5xGLs5Zz2HwyvKZblaQF1drM-wmLy4",
    authDomain: "react-cursos-85802.firebaseapp.com",
    projectId: "react-cursos-85802",
    storageBucket: "react-cursos-85802.appspot.com",
    messagingSenderId: "266607863435",
    appId: "1:266607863435:web:1518b64d8c5f0cb18b168e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}

