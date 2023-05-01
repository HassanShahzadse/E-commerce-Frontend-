// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcFA2MvBY8_9OV3TFnLH8qwIq-4bzGtEg",
  authDomain: "estore-auth.firebaseapp.com",
  projectId: "estore-auth",
  storageBucket: "estore-auth.appspot.com",
  messagingSenderId: "12458678622",
  appId: "1:12458678622:web:0fd0127ef9ebe9504917cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
