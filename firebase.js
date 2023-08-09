// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxuTR6Hp4UHQ_cC08neXQ8UjmDnBVfpB8",
  authDomain: "affordmed-3d2b5.firebaseapp.com",
  projectId: "affordmed-3d2b5",
  storageBucket: "affordmed-3d2b5.appspot.com",
  messagingSenderId: "653114574334",
  appId: "1:653114574334:web:d2ea01ccd25def79b52caf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
export default db;