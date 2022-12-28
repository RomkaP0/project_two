// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, enableIndexedDbPersistence } from 'firebase/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAF9RuDARoOvLVaLdgTBrjf6ZtAAB-okCQ",
    authDomain: "carlocation-8179d.firebaseapp.com",
    projectId: "carlocation-8179d",
    storageBucket: "carlocation-8179d.appspot.com",
    messagingSenderId: "644912716980",
    appId: "1:644912716980:web:a82a593cac8bde0ef8cbe1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize FireStore
export const db =getFirestore(app)

enableIndexedDbPersistence(db)
    .catch((err) => {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled
            // in one tab at a a time.
            // ...
        } else if (err.code == 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
        }
    });