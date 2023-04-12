// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuJqWQUSgGlVCvogWbBZG9HfbcWRXVx4A",
  authDomain: "diploma-38ac5.firebaseapp.com",
  projectId: "diploma-38ac5",
  storageBucket: "diploma-38ac5.appspot.com",
  messagingSenderId: "87978906890",
  appId: "1:87978906890:web:4f8c6660868ab6a3a596f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default collection(db, 'categories');
