// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrez43MiQhXwKu8mOb2rOOei-pd5SIzUE",
  authDomain: "netflix-gpt-fa8ee.firebaseapp.com",
  projectId: "netflix-gpt-fa8ee",
  storageBucket: "netflix-gpt-fa8ee.appspot.com",
  messagingSenderId: "510482808705",
  appId: "1:510482808705:web:60066bc88bf2bef820f280",
  measurementId: "G-P737QXNX7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export { auth }