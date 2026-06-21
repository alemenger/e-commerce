import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlbqSWAE-Dhc1a--3FXnBorpDhcj8BMto",
  authDomain: "pacelab-react.firebaseapp.com",
  projectId: "pacelab-react",
  storageBucket: "pacelab-react.firebasestorage.app",
  messagingSenderId: "11108808830",
  appId: "1:11108808830:web:ef282d30e2c976c5b5c02f",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);