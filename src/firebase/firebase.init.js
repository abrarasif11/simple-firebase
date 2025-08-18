// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_PWGu3LqrhAKjuENxUI1BxzGNjT63FQ4",
  authDomain: "simple-firebase-4205f.firebaseapp.com",
  projectId: "simple-firebase-4205f",
  storageBucket: "simple-firebase-4205f.firebasestorage.app",
  messagingSenderId: "383999038604",
  appId: "1:383999038604:web:e4d7522cbff5c5498397a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
