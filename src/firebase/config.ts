import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your Firebase configuration
// Replace these with your actual Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyDK9vRoR9rRgud09djCTFU_3fwKGTBsFps",
  authDomain: "merasaarthi-5df96.firebaseapp.com",
  projectId: "merasaarthi-5df96",
  storageBucket: "merasaarthi-5df96.appspot.com",
  messagingSenderId: "1064862842928",
  appId: "1:1064862842928:web:0cceac5dbd1625d2d72df5",
  measurementId: "G-B3F5XHCVVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app; 