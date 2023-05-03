// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmKcz0y-fv3UYyzr12TVmDzL01DCLPp6o",
  authDomain: "the-news-dragon-de251.firebaseapp.com",
  projectId: "the-news-dragon-de251",
  storageBucket: "the-news-dragon-de251.appspot.com",
  messagingSenderId: "949495797790",
  appId: "1:949495797790:web:a40d85da4c4daeeadd760f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;