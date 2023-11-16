

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";

import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtVl3YiyX04vweif7ZpIn7mTkke6wbBQU",
  authDomain: "applicant-tracking-system-01.firebaseapp.com",
  projectId: "applicant-tracking-system-01",
  storageBucket: "applicant-tracking-system-01.appspot.com",
  messagingSenderId: "338802670994",
  appId: "1:338802670994:web:8a349d40967103f8c4d54b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);


export const auth = getAuth(app)
export default app








// if (typeof window !== 'undefined') {
//   import('firebase/analytics').then((firebase) => {
//     if (firebase.isSupported()) {
//       const analytics = firebase.getAnalytics();
//       // Initialize Firebase Analytics
//       firebase.analytics();
//     }
//   });
// }