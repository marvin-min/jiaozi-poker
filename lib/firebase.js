// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3zAYx53K2KDpVx6o8jJ9CtRzt1TUTSBQ",
  authDomain: "jarorwar.firebaseapp.com",
  databaseURL: "https://jarorwar-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jarorwar",
  storageBucket: "jarorwar.appspot.com",
  messagingSenderId: "345068374498",
  appId: "1:345068374498:web:fbdcafc7f3f766c89b51bb",
  measurementId: "G-Q2VJYEH8HE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase(app);

const offline = () => database.goOffline();
export { database, offline }
