// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5px5SFagEFYdCqrQpMEroNfVc1a_yOzw",
  authDomain: "limly-draw.firebaseapp.com",
  projectId: "limly-draw",
  storageBucket: "limly-draw.firebasestorage.app",
  messagingSenderId: "699991441244",
  appId: "1:699991441244:web:30d901bd406f6dbb0b8b99",
  measurementId: "G-PHCXKKFN32"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
