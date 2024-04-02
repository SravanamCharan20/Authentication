// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authapp-4274b.firebaseapp.com",
  projectId: "authapp-4274b",
  storageBucket: "authapp-4274b.appspot.com",
  messagingSenderId: "233024358322",
  appId: "1:233024358322:web:877cb954cded8c0e25c6ab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);