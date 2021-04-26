import firebase from 'firebase/app';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADUulC56V8u0JR3kT-3SMQHfIEy3lr-Kw",
    authDomain: "reactfirebasechukwudi.firebaseapp.com",
    projectId: "reactfirebasechukwudi",
    storageBucket: "reactfirebasechukwudi.appspot.com",
    messagingSenderId: "1010532646087",
    appId: "1:1010532646087:web:1ee9414152ee1f9b6a52e2",
    measurementId: "G-HNFNPRT273"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);
  const auth = fire.auth()

  export {auth}