import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiyykF8ddk7Nj-9n7_vWOSTiwfPMfI8_8",
  authDomain: "dotorigram-49dcf.firebaseapp.com",
  projectId: "dotorigram-49dcf",
  storageBucket: "dotorigram-49dcf.appspot.com",
  messagingSenderId: "327763183414",
  appId: "1:327763183414:web:dbfe26da3fe266ea1e1597",
  measurementId: "G-CFXPGETBDB",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
