import firebase from 'firebase'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDPQu0XgugGYU3TRrNfaBol33jQpyvIAOw",
    authDomain: "e-museum-378ca.firebaseapp.com",
    projectId: "e-museum-378ca",
    storageBucket: "e-museum-378ca.appspot.com",
    messagingSenderId: "966638961965",
    appId: "1:966638961965:web:284a2c57dbf587e0d43fa4"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref()

export const imagesRef = storageRef.child('images/')
export const categoryRef = db.collection('Category')
export const contentRef = db.collection('Content') 