import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
      apiKey: "AIzaSyA3FfRMLiBVaJvBGPbuc5IBAyII7mhTtPc",
      authDomain: "medinc-40a16.firebaseapp.com",
      projectId: "medinc-40a16",
      storageBucket: "medinc-40a16.appspot.com",
      messagingSenderId: "411562301012",
      appId: "1:411562301012:web:295245b118cbd75acf3fc1"
      };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;