// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp_XaXOYioZTHqC6B2csK3tLylbOtZyek",
  authDomain: "vite-contact-9dc69.firebaseapp.com",
  projectId: "vite-contact-9dc69",
  storageBucket: "vite-contact-9dc69.firebasestorage.app",
  messagingSenderId: "676132866974",
  appId: "1:676132866974:web:b9084e3f27fa3dab8ce48f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
