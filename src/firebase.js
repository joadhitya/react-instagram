import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDe7s0hjO80Aak4uXEVTdrirfsGVbnZst4",
  authDomain: "react-instagram-5f994.firebaseapp.com",
  databaseURL: "https://react-instagram-5f994.firebaseio.com",
  projectId: "react-instagram-5f994",
  storageBucket: "react-instagram-5f994.appspot.com",
  messagingSenderId: "583882545918",
  appId: "1:583882545918:web:e3b50a92f4dbdc300b63af",
  measurementId: "G-B2M763T9BS",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };
