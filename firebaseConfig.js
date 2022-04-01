// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATSYl_9WnloMa9mTDYkRp1YQL0Glfxdr8",
  authDomain: "note-app-0101.firebaseapp.com",
  projectId: "note-app-0101",
  storageBucket: "note-app-0101.appspot.com",
  messagingSenderId: "936990599824",
  appId: "1:936990599824:web:89f0211688f427d0af0615",
  measurementId: "G-P9FHCN7EFZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const database = getFirestore(app)