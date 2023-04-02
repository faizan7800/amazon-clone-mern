import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrjuKXoBqHbmhnJIJP9jt5O-ty_XnbGAs",
  authDomain: "clone-b6b23.firebaseapp.com",
  projectId: "clone-b6b23",
  storageBucket: "clone-b6b23.appspot.com",
  messagingSenderId: "679213203599",
  appId: "1:679213203599:web:eb1631981420eda375b0fa",
  measurementId: "G-RV5LZQK9VL",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
