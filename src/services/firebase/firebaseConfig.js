
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1aoFIVMUlJJUQcvTUzdNpbVWZ6UCtdS0",
  authDomain: "react-e-commerce-c3c90.firebaseapp.com",
  projectId: "react-e-commerce-c3c90",
  storageBucket: "react-e-commerce-c3c90.appspot.com",
  messagingSenderId: "366711850732",
  appId: "1:366711850732:web:f26281a3b4d5031f6a47c9",
  measurementId: "G-M8NZ7YKW37"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)