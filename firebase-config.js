import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


export const firebaseConfig = {
  apiKey: "AIzaSyBjYy_daEEiM5mFoVKggoxJg4XXvPCIQcI",
  authDomain: "proyectoapplinkedin.firebaseapp.com",
  projectId: "proyectoapplinkedin",
  storageBucket: "proyectoapplinkedin.appspot.com",
  messagingSenderId: "230665758467",
  appId: "1:230665758467:web:b465dce80f788edfee6b36",
  measurementId: "G-D6LT9EVCMJ"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);