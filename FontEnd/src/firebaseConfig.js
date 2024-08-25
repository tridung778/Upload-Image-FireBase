import "firebase/storage";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwiB67U5iWDo0E2eJfLjeE2QwCgFD4Zy4",
  authDomain: "upload-image-4bc93.firebaseapp.com",
  projectId: "upload-image-4bc93",
  storageBucket: "upload-image-4bc93.appspot.com",
  messagingSenderId: "820169135595",
  appId: "1:820169135595:web:70da069fab263f1b2b35ae",
};

initializeApp(firebaseConfig);

const storage = getStorage();
const firestore = getFirestore();

export { storage, firestore };
