// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  process.env.REACT_APP_API_KEY ,
  authDomain: "demoapp-b64b4.firebaseapp.com",
  databaseURL: "https://demoapp-b64b4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "demoapp-b64b4",
  storageBucket: "demoapp-b64b4.firebasestorage.app",
  messagingSenderId: "401374031945",
  appId: "1:401374031945:web:845022cef0bcab11cc8f98",
  measurementId: "G-5S4CRPE8TD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

