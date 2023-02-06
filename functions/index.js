// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxZPwAC7ncUpmIAd0hDHylk1yNMazMVPM",
  authDomain: "kapteingusse2.firebaseapp.com",
  databaseURL: "https://kapteingusse2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kapteingusse2",
  storageBucket: "kapteingusse2.appspot.com",
  messagingSenderId: "584076894956",
  appId: "1:584076894956:web:33bd0af10c2f7c5884fbc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const functions = require("firebase-functions")

exports.helloWorld = functions.https.onRequest((request, response) => {
console.log("Hello");
response.send("Hello world")
}
)