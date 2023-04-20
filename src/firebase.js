// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuJqWQUSgGlVCvogWbBZG9HfbcWRXVx4A",
  authDomain: "diploma-38ac5.firebaseapp.com",
  projectId: "diploma-38ac5",
  storageBucket: "diploma-38ac5.appspot.com",
  messagingSenderId: "87978906890",
  appId: "1:87978906890:web:4f8c6660868ab6a3a596f3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// получить список категорий (коллекция документов).
export const categoryCollection = collection(db, "categories");
export const productCollection = collection(db, "products");
export const orderCollection = collection(db, "orders");

const provider = new GoogleAuthProvider();
export const logIn = () => signInWithPopup(auth, provider);
export const logOut = () => signInWithPopup(auth);
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);
