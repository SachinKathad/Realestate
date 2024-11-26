// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4c70e.firebaseapp.com",
  projectId: "mern-estate-4c70e",
  storageBucket: "mern-estate-4c70e.firebasestorage.app",
  messagingSenderId: "110668234465",
  appId: "1:110668234465:web:7f2ce9610007479bb7c1a0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);