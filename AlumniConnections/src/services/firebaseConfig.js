// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0r1bWdZBI1QqSTJMbaN3hoaLkTj4dEKk",
  authDomain: "alumniconnections-4e784.firebaseapp.com",
  projectId: "alumniconnections-4e784",
  storageBucket: "alumniconnections-4e784.firebasestorage.app",
  messagingSenderId: "88788831287",
  appId: "1:88788831287:web:eb6473c1ecf65e4f7e83b2",
  measurementId: "G-XXBNZ8YLPK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);