import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: process.env.REACT_FIREBASE_API_KEY,
  authDomain: process.env.REACT_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_FIREBASE_DB_URL,
  projectId: process.env.REACT_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_FIREBASE_BUCKET,
  messagingSenderId: process.env.REACT_FIREBASE_SENDER_ID,
  appId: process.env.REACT_FIREBASE_APP_ID,
  measurementId: process.env.REACT_FIREBASE_MESUREMENT_ID,
});

export { firebaseConfig as firebase };
