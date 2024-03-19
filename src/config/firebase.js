// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFireStore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrRidkrUuSjamZ23WCQlFAN7xE83pVxKg",
  authDomain: "fir-app-8191b.firebaseapp.com",
  projectId: "fir-app-8191b",
  storageBucket: "fir-app-8191b.appspot.com",
  messagingSenderId: "368326975704",
  appId: "1:368326975704:web:d2a5e98f7ab451bba637ad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFireStore(app)