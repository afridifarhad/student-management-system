// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getfile } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-a0wGLrmOiV-1-pi7dCVCyx53XITA2qA",
  authDomain: "student-management-syste-782ff.firebaseapp.com",
  projectId: "student-management-syste-782ff",
  storageBucket: "student-management-syste-782ff.appspot.com",
  messagingSenderId: "121712036523",
  appId: "1:121712036523:web:4e8fc4a740b3906292c5ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize firestore
 const db = getFirestore(app)

export { db }