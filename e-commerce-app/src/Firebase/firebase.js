// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDJ5RXJtDAAyl8r8pbbFmtLGcxpYeMSjI",
  authDomain: "e-commerce-app-49a0f.firebaseapp.com",
  projectId: "e-commerce-app-49a0f",
  storageBucket: "e-commerce-app-49a0f.appspot.com",
  messagingSenderId: "1057945126185",
  appId: "1:1057945126185:web:9a9b257499cf7416362338",
};

// Initialize Firebase
const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
