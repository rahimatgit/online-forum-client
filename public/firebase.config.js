// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxcu11-YyNTybCBkb1g3do6t8wPo8qYWo",
  authDomain: "assignment-12-online-forum.firebaseapp.com",
  projectId: "assignment-12-online-forum",
  storageBucket: "assignment-12-online-forum.appspot.com",
  messagingSenderId: "331528817302",
  appId: "1:331528817302:web:c03d7bb81e2331dc7310b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;