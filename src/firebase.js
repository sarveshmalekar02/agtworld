import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDosPEOe3aLTdojVe8pgwlkWXMXEFGl8KI",
    authDomain: "atgworld-3a378.firebaseapp.com",
    projectId: "atgworld-3a378",
    storageBucket: "atgworld-3a378.appspot.com",
    messagingSenderId: "870492013366",
    appId: "1:870492013366:web:5ae77d2a7d95c7d90de997",
    measurementId: "G-RY4C7V9GP3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics,auth ,firebaseConfig}; 
