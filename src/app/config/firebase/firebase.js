// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9pT2-Eu4QfPQezS6C7IFfVyS74kMTOu4",
  authDomain: "react-redux-firebase-dc70d.firebaseapp.com",
  projectId: "react-redux-firebase-dc70d",
  storageBucket: "react-redux-firebase-dc70d.appspot.com",
  messagingSenderId: "876442291210",
  appId: "1:876442291210:web:eabed75609e5434cef23f3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize FireStore
firebase.firestore();

export default firebase;
