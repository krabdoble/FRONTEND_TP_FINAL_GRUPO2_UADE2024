// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD_ZBmodIRs2amO-LfkFv7_VRldFbAgR70",
  authDomain: "myfirstproject-ed53a.firebaseapp.com",
  projectId: "myfirstproject-ed53a",
  storageBucket: "myfirstproject-ed53a.appspot.com",
  messagingSenderId: "178990611594",
  appId: "1:178990611594:web:ef1bb6113a60b63a9d0173"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider= new GoogleAuthProvider();