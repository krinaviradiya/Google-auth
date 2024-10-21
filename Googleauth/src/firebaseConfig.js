// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIEXDFusaofA2QxMIK_MPjZ54V2RG0cFU",
  authDomain: "auth-f5f77.firebaseapp.com",
  projectId: "auth-f5f77",
  storageBucket: "auth-f5f77.appspot.com",
  messagingSenderId: "565605743687",
  appId: "1:565605743687:web:80a9b558ac8c838c2b8562"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get Firebase Auth service
const db = getFirestore(app);
const provider = new GoogleAuthProvider;

export { auth,db,provider};