// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getfirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdk7NPjBIQ-nlspNRP3bEC7T42uMXv89M",
  authDomain: "vite-contact-1b687.firebaseapp.com",
  projectId: "vite-contact-1b687",
  storageBucket: "vite-contact-1b687.firebasestorage.app",
  messagingSenderId: "345135252362",
  appId: "1:345135252362:web:1b5802bb16bbb66bf8be73",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getfirestore(app);
