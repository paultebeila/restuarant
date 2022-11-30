import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAIyuyVXZ0ROPS5B2e4Rb_dhuiVwizJ8dY",
  authDomain: "paulrestuarant.firebaseapp.com",
  projectId: "paulrestuarant",
  storageBucket: "paulrestuarant.appspot.com",
  messagingSenderId: "189856007739",
  appId: "1:189856007739:web:2cd5b6e9d1f31c5c40be1e",
  measurementId: "G-1ML8RDLPBL"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);