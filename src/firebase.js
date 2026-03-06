import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyBRpJjr8jvDuykPpD3BKqW8RZqVhn2mU7o",
  authDomain: "wedvista-1103d.firebaseapp.com",
  projectId: "wedvista-1103d",
  storageBucket: "wedvista-1103d.firebasestorage.app",
  messagingSenderId: "866077506085",
  appId: "1:866077506085:web:6bab9f55009df6a3a6ddcc",
  measurementId: "G-9X4LCRP1WC"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
