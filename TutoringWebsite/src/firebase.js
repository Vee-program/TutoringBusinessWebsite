// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzQ3B6S5ZFBYnMUTgfHFlzOGJKacn1_AI",
  authDomain: "tutoring-buiness.firebaseapp.com",
  projectId: "tutoring-buiness",
  storageBucket: "tutoring-buiness.firebasestorage.app",
  messagingSenderId: "621533336458",
  appId: "1:621533336458:web:5291602196609cc35e6e73",
  measurementId: "G-4WYW1Z5EQ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export { app };
