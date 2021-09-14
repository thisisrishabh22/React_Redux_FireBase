// Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9pT2-Eu4QfPQezS6C7IFfVyS74kMTOu4",
  authDomain: "react-redux-firebase-dc70d.firebaseapp.com",
  projectId: "react-redux-firebase-dc70d",
  storageBucket: "react-redux-firebase-dc70d.appspot.com",
  messagingSenderId: "876442291210",
  appId: "1:876442291210:web:8da3289cb9aa302eef23f3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize FireStore
firebase.firestore().settings({ timestampsInSnapshots: true });
// firebase.firestore()

export default firebase;
