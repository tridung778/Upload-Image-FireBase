import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwiB67U5iWDo0E2eJfLjeE2QwCgFD4Zy4",
  authDomain: "upload-image-4bc93.firebaseapp.com",
  projectId: "upload-image-4bc93",
  storageBucket: "upload-image-4bc93.appspot.com",
  messagingSenderId: "820169135595",
  appId: "1:820169135595:web:70da069fab263f1b2b35ae",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();

export { storage, firestore };
