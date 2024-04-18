// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { get } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMOiRk32MR7DsPHKyGWw3fgMRBzhbSYCo",
  authDomain: "noor-properties-f6841.firebaseapp.com",
  projectId: "noor-properties-f6841",
  storageBucket: "noor-properties-f6841.appspot.com",
  messagingSenderId: "196963854700",
  appId: "1:196963854700:web:a2b1b3be776c0d5f286b49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;