// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfgq2j4xZmph1ak5f5YP8BEc1tHufhFXA",
  authDomain: "appdesafio-403ed.firebaseapp.com",
  projectId: "appdesafio-403ed",
  storageBucket: "appdesafio-403ed.appspot.com",
  messagingSenderId: "465223850164",
  appId: "1:465223850164:web:1c7a489af2f87f7600dfe1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
