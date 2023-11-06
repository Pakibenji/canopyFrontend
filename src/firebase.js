// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5XeLvcagd8ppXklAKos8WG4G-F-UNwrA",
  authDomain: "canopy-bd20c.firebaseapp.com",
  projectId: "canopy-bd20c",
  storageBucket: "canopy-bd20c.appspot.com",
  messagingSenderId: "173352817438",
  appId: "1:173352817438:web:6fc96c5d3b8d26547bef0f",
  measurementId: "G-5FGGZVRZPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
export const auth = getAuth(app);