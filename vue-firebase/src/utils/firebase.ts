// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCEhZr28f4xwFGK7WkQUes87a7hQqZw1UI",
    authDomain: "vue-firebase-9e39c.firebaseapp.com",
    projectId: "vue-firebase-9e39c",
    storageBucket: "vue-firebase-9e39c.firebasestorage.app",
    messagingSenderId: "263661721413",
    appId: "1:263661721413:web:5b7ec5e2706b6c699f502c",
    measurementId: "G-RL8HZX5CL1"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };