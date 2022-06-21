// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcB8ZFZL-9nXhcb1joJ2zVd8kyYYyrj3k",
  authDomain: "lucas-reactjs-9a5db.firebaseapp.com",
  projectId: "lucas-reactjs-9a5db",
  storageBucket: "lucas-reactjs-9a5db.appspot.com",
  messagingSenderId: "290502702513",
  appId: "1:290502702513:web:e84b14a1d687bb63673990"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);