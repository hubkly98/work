// Import the functions you need from the SDKs you need
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmILioMqFdR5-tm5yTmGAKG1p9KPAn6bw",
  authDomain: "praca-licenc.firebaseapp.com",
  projectId: "praca-licenc",
  storageBucket: "praca-licenc.appspot.com",
  messagingSenderId: "21105163547",
  appId: "1:21105163547:web:9400b584bbc118edc767be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}


export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}



export function logout() {
  return signOut(auth);
}


//Custom Hook

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  

  return currentUser;
}
