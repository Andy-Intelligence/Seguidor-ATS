// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv30N71oXyP4Ie89fbS0g7HrLNYkAt6cA",
  authDomain: "application-tracking-auth.firebaseapp.com",
  projectId: "application-tracking-auth",
  storageBucket: "application-tracking-auth.appspot.com",
  messagingSenderId: "728025846698",
  appId: "1:728025846698:web:24e889c94aa57042cd91d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export {app}