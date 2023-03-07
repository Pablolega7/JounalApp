import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey            : "AIzaSyBMD4ocpO5Qibtm4w-QuvKGBFztv1xUBdU",
  authDomain        : "journal-app-de842.firebaseapp.com",
  projectId         : "journal-app-de842",
  storageBucket     : "journal-app-de842.appspot.com",
  messagingSenderId : "731494556531",
  appId             : "1:731494556531:web:44685c09786a076fde1b06"
};

// Initialize Firebase
 export const FirebaseApp  = initializeApp( firebaseConfig );
 export const FirebaseAuth = getAuth( FirebaseApp );
 export const FirebaseDB   = getFirestore( FirebaseApp );