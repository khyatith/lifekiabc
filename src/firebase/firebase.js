import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC0_8DSzDvc3tIGHExCsPUkGbqVL_nY_Uo",
  authDomain: "life-ki-abc.firebaseapp.com",
  databaseURL: "https://life-ki-abc.firebaseio.com",
  projectId: "life-ki-abc",
  storageBucket: "life-ki-abc.appspot.com",
  messagingSenderId: "121729258593",
  appId: "1:121729258593:web:2cc3b0a4abba219947c620",
  measurementId: "G-CH863BYMSQ"
}

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;