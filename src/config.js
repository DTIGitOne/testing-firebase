// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
  
const firebaseConfig = {
  apiKey: "AIzaSyD6fRCR5VNUQgEJCn7jeHz0kAw4XyahykQ",
  authDomain: "testing1-1df7b.firebaseapp.com",
  projectId: "testing1-1df7b",
  storageBucket: "testing1-1df7b.appspot.com",
  messagingSenderId: "567986715393",
  appId: "1:567986715393:web:b5a7fcc4c4e84a2830f900",
  measurementId: "G-2R2BKH70PQ"
};
 
const app = initializeApp(firebaseConfig);
export const fdb = getFirestore(app);