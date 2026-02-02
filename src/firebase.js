// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuJpZlchwblBa8_MIT3Z7XgwqiUKRBid4",
  authDomain: "sk-portfolio-dev.firebaseapp.com",
  projectId: "sk-portfolio-dev",
  storageBucket: "sk-portfolio-dev.firebasestorage.app",
  messagingSenderId: "1052524998137",
  appId: "1:1052524998137:web:b62d0822b654e9b995e128",
  measurementId: "G-Y3V1N3Z2FX"
};

// Initialize Firebasnpm 
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);