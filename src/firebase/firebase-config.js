import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey:  process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,                
    projectId:process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId:  process.env.REACT_APP_APPID,
  };

  // var firebaseConfigTesting = {
  //   apiKey: "AIzaSyBWiEcyLFdvkCNgmrxz-Jvu4HEJIRoYvfc",
  //   authDomain: "control-classroom-6989a.firebaseapp.com",
  //   databaseURL: "https://control-classroom-6989a.firebaseio.com",
  //   projectId: "control-classroom-6989a",
  //   storageBucket: "control-classroom-6989a.appspot.com",
  //   messagingSenderId: "211383023983",
  //   appId: "1:211383023983:web:0cf055f25e2bcd3251109a"
  // };

// if(process.env.NODE_ENV === 'test') {
//   //testing 
//   firebase.initializeApp(firebaseConfigTesting);

// }else{
//   //dev / prod
//   firebase.initializeApp(firebaseConfig);

// }
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}

